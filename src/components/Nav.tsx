import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.tsx'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Models', href: '/models' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Tech', href: '/tech' },
  { label: 'FAQ', href: '/faq' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" aria-label="METRO MOMO home">
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
          <Link to="/contact" className="btn btn-primary nav-cta" onClick={handleNavClick}>
            Apply Now
          </Link>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
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
