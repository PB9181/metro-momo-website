import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.tsx'
import { useTranslation, type Language } from '../i18n/index.ts'

export default function Nav() {
  const { t, language, setLanguage } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.models'), href: '/models' },
    { label: t('nav.howItWorks'), href: '/how-it-works' },
    { label: t('nav.tech'), href: '/tech' },
    { label: t('nav.faq'), href: '/faq' },
  ]

  const handleNavClick = () => setMobileOpen(false)

  const languageButtons: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' },
  ]

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

          <div className="language-switcher" aria-label="Select language">
            <Globe size={16} className="language-switcher-icon" aria-hidden="true" />
            {languageButtons.map(({ code, label }) => (
              <button
                key={code}
                className={`lang-btn ${language === code ? 'active' : ''}`}
                onClick={() => {
                  setLanguage(code)
                  handleNavClick()
                }}
                aria-label={t(`language.${code}`)}
                aria-pressed={language === code}
              >
                {label}
              </button>
            ))}
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
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(217, 4, 41, 0.08);
          border-radius: 999px;
          padding: 4px;
          border: 1px solid rgba(217, 4, 41, 0.15);
        }
        .language-switcher-icon {
          color: var(--color-primary);
          margin: 0 4px 0 8px;
          flex-shrink: 0;
        }
        .lang-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 32px;
          height: 28px;
          padding: 0 8px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 0.75rem;
          color: var(--color-text);
          background: transparent;
          transition: color 0.2s ease, background-color 0.2s ease;
        }
        .lang-btn:hover {
          color: var(--color-primary);
          background: rgba(217, 4, 41, 0.08);
        }
        .lang-btn.active {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(217, 4, 41, 0.25);
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
            margin-top: 8px;
            padding: 6px;
          }
          .lang-btn {
            min-width: 40px;
            height: 34px;
            font-size: 0.85rem;
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
          .language-switcher {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  )
}
