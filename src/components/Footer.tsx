import { Link } from 'react-router-dom'
import Logo from './Logo.tsx'
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react'
import { useTranslation } from '../i18n/index.ts'

export default function Footer() {
  const { t } = useTranslation()

  const footerLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.models'), href: '/models' },
    { label: t('nav.howItWorks'), href: '/how-it-works' },
    { label: t('nav.tech'), href: '/tech' },
    { label: t('nav.faq'), href: '/faq' },
    { label: t('nav.apply'), href: '/contact' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo width={160} variant="white" />
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <div className="footer-socials">
              <a href="#" aria-label={t('footer.instagram')}>
                <Instagram size={20} />
              </a>
              <a href="#" aria-label={t('footer.facebook')}>
                <Facebook size={20} />
              </a>
              <a href="#" aria-label={t('footer.twitter')}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4>{t('footer.explore')}</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li>
                <a href="mailto:hello@metromomo.com">
                  <Mail size={16} />
                  hello@metromomo.com
                </a>
              </li>
              <li>
                <a href="tel:+46123456789">
                  <Phone size={16} />
                  +46 12 345 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} METRO MOMO. {t('footer.copyright')}.</p>
          <div className="footer-legal">
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--color-text);
          color: white;
          padding: 72px 0 32px;
          position: relative;
          overflow: hidden;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: var(--color-primary);
          opacity: 0.1;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
          position: relative;
          z-index: 1;
        }
        .footer-tagline {
          color: rgba(255, 255, 255, 0.7);
          max-width: 280px;
          margin: 20px 0 24px;
          line-height: 1.6;
        }
        .footer-socials {
          display: flex;
          gap: 14px;
        }
        .footer-socials a {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .footer-socials a:hover {
          background: var(--color-primary);
          transform: translateY(-3px);
        }
        .footer-nav h4,
        .footer-contact h4 {
          font-size: 1rem;
          font-weight: 900;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--color-accent);
        }
        .footer-nav ul,
        .footer-contact ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-nav a,
        .footer-contact a {
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .footer-nav a:hover,
        .footer-contact a:hover {
          color: white;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          position: relative;
          z-index: 1;
        }
        .footer-legal {
          display: flex;
          gap: 24px;
        }
        .footer-legal a:hover {
          color: white;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
