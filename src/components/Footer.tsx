import { Link } from 'react-router-dom'
import Logo from './Logo.tsx'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { useTranslation } from '../i18n/index.ts'

export default function Footer() {
  const { t } = useTranslation()

  const restaurantLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.menu'), href: '/menu' },
    { label: t('nav.locations'), href: '/locations' },
    { label: t('nav.about'), href: '/about' },
  ]

  const companyLinks = [
    { label: t('footer.companyLinks.howItWorks'), href: '/how-it-works' },
    { label: t('footer.companyLinks.tech'), href: '/tech' },
    { label: t('footer.companyLinks.models'), href: '/models' },
    { label: t('footer.companyLinks.faq'), href: '/faq' },
    { label: t('footer.companyLinks.franchise'), href: '/contact' },
    { label: t('footer.companyLinks.business'), href: '/models' },
    { label: t('footer.companyLinks.contact'), href: '/contact' },
  ]

  return (
    <footer className="footer">
      <div className="footer-squiggle" aria-hidden="true" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-bounce">
              <Logo width={160} variant="white" />
            </div>
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
            <h4>{t('footer.restaurant')}</h4>
            <ul>
              {restaurantLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav">
            <h4>{t('footer.company')}</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li className="footer-address">
                <MapPin size={16} />
                <span>{t('footer.address')}</span>
              </li>
              <li>
                <a href="mailto:hello@metro-momo.com">
                  <Mail size={16} />
                  hello@metro-momo.com
                </a>
              </li>
              <li>
                <a href="tel:Coming Soon">
                  <Phone size={16} />
                  Coming Soon
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
          padding: 88px 0 32px;
          position: relative;
          overflow: hidden;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: var(--color-primary);
          opacity: 0.12;
        }
        .footer::after {
          content: '';
          position: absolute;
          top: 40px;
          right: -40px;
          width: 120px;
          height: 120px;
          background: var(--color-accent);
          opacity: 0.08;
          border-radius: 50%;
          animation: pulse-soft 3s ease-in-out infinite;
        }
        .footer-squiggle {
          position: absolute;
          top: 24px;
          left: 0;
          right: 0;
          height: 20px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 20' fill='none'%3E%3Cpath d='M0 10 Q10 0 20 10 T40 10' stroke='%23FFD23F' stroke-width='2' stroke-linecap='round' opacity='0.4'/%3E%3C/svg%3E");
          background-size: 40px 20px;
          opacity: 0.6;
          pointer-events: none;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
          position: relative;
          z-index: 1;
        }
        .footer-logo-bounce {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .footer-logo-bounce:hover {
          transform: rotate(-3deg) scale(1.05);
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
          transform: translateY(-4px) rotate(-8deg);
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
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .footer-nav a:hover,
        .footer-contact a:hover {
          color: white;
          transform: translateX(4px);
        }
        .footer-address {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }
        .footer-address svg {
          flex-shrink: 0;
          margin-top: 2px;
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
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-contact {
            grid-column: 1 / -1;
          }
          .footer-nav h4,
          .footer-contact h4 {
            margin-bottom: 16px;
            font-size: 0.95rem;
          }
          .footer-nav a {
            font-size: 0.95rem;
            white-space: nowrap;
          }
          .footer-contact a,
          .footer-address {
            font-size: 0.95rem;
            white-space: normal;
            word-wrap: break-word;
          }
          .footer-tagline {
            max-width: 100%;
            margin-bottom: 16px;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
        }
      `}</style>
    </footer>
  )
}
