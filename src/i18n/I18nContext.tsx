import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import en from './en.json'
import nl from './nl.json'
import de from './de.json'
import fr from './fr.json'

export type Language = 'en' | 'nl' | 'de' | 'fr'

export const LANGUAGES: Language[] = ['en', 'nl', 'de', 'fr']

const STORAGE_KEY = 'metro-momo-lang'

const translations: Record<Language, Record<string, unknown>> = {
  en,
  nl,
  de,
  fr,
}

function getRawValue(obj: Record<string, unknown>, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc === null || acc === undefined) return undefined
    if (typeof acc !== 'object') return undefined
    return (acc as Record<string, unknown>)[part]
  }, obj)
}

export type I18nContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  getArray: (key: string) => unknown[]
  getObject: (key: string) => Record<string, unknown>
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem(STORAGE_KEY) as Language | null) : null
    return LANGUAGES.includes(stored as Language) ? (stored as Language) : 'en'
  })

  const setLanguage = (next: Language) => {
    setLanguageState(next)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null
      if (stored && LANGUAGES.includes(stored as Language) && stored !== language) {
        setLanguageState(stored as Language)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resolve = (key: string): unknown => {
    const value = getRawValue(translations[language], key)
    if (value !== undefined) return value
    return getRawValue(translations.en, key)
  }

  const t = (key: string): string => {
    const value = resolve(key)
    if (typeof value === 'string') return value
    return key
  }

  const getArray = (key: string): unknown[] => {
    const value = resolve(key)
    if (Array.isArray(value)) return value
    return []
  }

  const getObject = (key: string): Record<string, unknown> => {
    const value = resolve(key)
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) return value as Record<string, unknown>
    return {}
  }

  return <I18nContext.Provider value={{ language, setLanguage, t, getArray, getObject }}>{children}</I18nContext.Provider>
}

export function useTranslation(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
