import { useEffect, useRef, useState } from 'react'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.tsx'
import { useTranslation, type Language } from '../i18n/index.ts'

const languageOptions: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
]

export default function Nav() {
  const { t, language, setLanguage } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.models'), href: '/models' },
    { label: t('nav.howItWorks'), href: '/how-it-works' },
    { label: t('nav.tech'), href: '/tech' },
    { label: t('nav.faq'), href: '/faq' },
  ]

  const handleNavClick = () => setMobileOpen(false)

  const activeLabel = languageOptions.find((option) => option.code === language)?.label ?? language.toUpperCase()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" aria-label={t('nav.logoAlt')}>
          <Logo width={120} variant="dark" />
        </Link>

        <nav className={`nav-links ${mobileOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="language-switcher" ref={dropdownRef} aria-label="Select language">
            <button
              className="language-dropdown-toggle"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
            >
              <Globe size={16} className="language-switcher-icon" aria-hidden="true" />
              <span>{activeLabel}</span>
              <ChevronDown size={16} className={`dropdown-chevron ${dropdownOpen ? 'open' : ''}`} aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <ul className="language-dropdown-menu" role="listbox">
                {languageOptions.map(({ code, label }) => (
                  <li key={code} role="option" aria-selected={language === code}>
                    <button
                      className={`language-dropdown-option ${language === code ? 'active' : ''}`}
                      onClick={() => {
                        setLanguage(code)
                        setDropdownOpen(false)
                        handleNavClick()
                      }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/contact" className="btn btn-primary nav-cta" onClick={handleNavClick}>
            {t('nav.cta')}
          </Link>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t('nav.menuClose') : t('nav.menuOpen')}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 250, 245, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--mm-border);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 96px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-text);
          transition: color 0.2s ease;
          position: relative;
          padding: 8px 0;
        }
        .nav-link:hover,
        .nav-link.active {
          color: var(--color-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          border-radius: 3px;
          transition: width 0.2s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .language-switcher {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .language-dropdown-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(217, 4, 41, 0.08);
          border: 1px solid rgba(217, 4, 41, 0.15);
          color: var(--color-text);
          font-weight: 700;
          font-size: 0.85rem;
          transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }
        .language-dropdown-toggle:hover {
          background: rgba(217, 4, 41, 0.14);
          border-color: rgba(217, 4, 41, 0.3);
          box-shadow: 0 2px 8px rgba(217, 4, 41, 0.12);
        }
        .language-switcher-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }
        .dropdown-chevron {
          color: var(--color-primary);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }
        .dropdown-chevron.open {
          transform: rotate(180deg);
        }
        .language-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 140px;
          background: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--mm-border);
          list-style: none;
          padding: 6px;
          margin: 0;
          z-index: 101;
          overflow: hidden;
          animation: pop-in 0.2s ease;
        }
        .language-dropdown-option {
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-text);
          background: transparent;
          transition: background-color 0.2s ease, color 0.2s ease;
          cursor: pointer;
        }
        .language-dropdown-option:hover,
        .language-dropdown-option.active {
          background: rgba(217, 4, 41, 0.08);
          color: var(--color-primary);
        }
        .language-dropdown-option.active {
          font-weight: 900;
        }
        .nav-cta {
          padding: 10px 22px;
          font-size: 0.85rem;
        }
        .nav-toggle {
          display: none;
          background: transparent;
          color: var(--color-text);
        }
        @media (max-width: 900px) {
          .nav-inner {
            height: 80px;
          }
          .nav-toggle {
            display: block;
          }
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            max-width: 100vw;
            height: calc(100vh - 80px);
            height: calc(100dvh - 80px);
            background: var(--color-bg);
            flex-direction: column;
            gap: 24px;
            padding: 32px 24px;
            transform: translateX(100%);
            transition: transform 0.3s ease, visibility 0.3s ease;
            align-items: flex-start;
            visibility: hidden;
            overflow-x: hidden;
            display: none;
          }
          .nav-links.open {
            display: flex;
            transform: translateX(0);
            visibility: visible;
          }
          .nav-link {
            font-size: 1.2rem;
            padding: 12px 0;
          }
          .language-switcher {
            width: 100%;
            margin-top: 8px;
          }
          .language-dropdown-toggle {
            width: 100%;
            justify-content: center;
            padding: 12px 16px;
            font-size: 1rem;
          }
          .language-dropdown-menu {
            position: static;
            width: 100%;
            margin-top: 8px;
            box-shadow: var(--shadow-md);
          }
          .language-dropdown-option {
            padding: 12px 16px;
            font-size: 1rem;
          }
          .nav-cta {
            margin-top: 16px;
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .nav-logo svg {
            width: 100px !important;
            height: auto !important;
          }
        }
      `}</style>
    </header>
  )
}
