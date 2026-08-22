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

function getNestedValue(obj: Record<string, unknown>, key: string): string | string[] | Record<string, unknown> | undefined {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc === null || acc === undefined) return undefined
    if (typeof acc !== 'object') return undefined
    return (acc as Record<string, unknown>)[part]
  }, obj) as string | string[] | Record<string, unknown> | undefined
}

export type I18nContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
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

  const t = (key: string): string => {
    const value = getNestedValue(translations[language], key)
    if (typeof value === 'string') return value
    if (typeof value === 'undefined') {
      const fallback = getNestedValue(translations.en, key)
      if (typeof fallback === 'string') return fallback
    }
    return key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useTranslation(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
