import { MapPin, Clock, Phone, Mail, ArrowRight, Utensils, Calendar, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Sticker from '../components/Sticker.tsx'
import Starburst from '../components/Starburst.tsx'
import { useTranslation } from '../i18n/index.ts'

export default function Locations() {
  const { t } = useTranslation()

  return (
    <>
      <section className="locations-hero">
        <div className="blob blob-red" />
        <div className="blob blob-orange" />
        <div className="locations-hero-pattern pattern-map" aria-hidden="true" />
        <div className="locations-hero-map" aria-hidden="true">
          <div className="locations-map-pin locations-map-pin-main">
            <MapPin size={32} />
            <span>{t('locations.hero.mapPinLabel')}</span>
          </div>
          <div className="locations-map-pin locations-map-pin-future">
            <MapPin size={20} />
          </div>
          <div className="locations-map-pin locations-map-pin-future-2">
            <MapPin size={20} />
          </div>
          <svg className="locations-map-route" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path d="M60 160 Q 120 60, 200 100 T 340 40" fill="none" stroke="var(--mm-coral)" strokeWidth="3" strokeDasharray="8 8" />
          </svg>
        </div>
        <div className="container locations-hero-inner">
          <div className="locations-hero-content">
            <span className="badge badge-fresh">
              <MapPin size={16} />
              {t('locations.hero.badge')}
            </span>
            <h1 className="locations-hero-title display-text">
              {t('locations.hero.title')}
              <br />
              <span className="gradient-text">{t('locations.hero.titleHighlight')}</span>
            </h1>
            <p className="locations-hero-subtitle">{t('locations.hero.subtitle')}</p>
            <div className="locations-hero-actions">
              <Link to="/menu" className="btn btn-primary">
                {t('locations.hero.ctaPrimary')} <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {t('locations.hero.ctaSecondary')}
              </Link>
            </div>
          </div>
          <div className="locations-hero-stickers">
            <Sticker variant="red" icon="flame" rotate={-10}>{t('locations.hero.sticker1')}</Sticker>
            <Sticker variant="gold" rotate={6}>{t('locations.hero.sticker2')}</Sticker>
            <Sticker variant="fresh" rotate={-6}>{t('locations.hero.sticker3')}</Sticker>
            <Starburst color="var(--mm-fresh)" size={80} className="locations-starburst" />
          </div>
        </div>

        <style>{`
          .locations-hero {
            position: relative;
            overflow: hidden;
            padding: 100px 0 60px;
            background: var(--color-bg);
            border-bottom: 4px dashed var(--mm-border);
          }
          .locations-hero-pattern {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .locations-hero-map {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
          }
          .locations-map-pin {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--mm-coral);
            font-weight: 900;
            text-transform: uppercase;
            font-size: 0.75rem;
            animation: map-pulse 2.5s ease-in-out infinite;
          }
          .locations-map-pin-main {
            top: 25%;
            right: 18%;
          }
          .locations-map-pin-main span {
            background: white;
            padding: 4px 10px;
            border-radius: 999px;
            margin-top: 4px;
            box-shadow: var(--shadow-sm);
            white-space: nowrap;
          }
          .locations-map-pin-future {
            top: 45%;
            right: 35%;
            opacity: 0.5;
            animation-delay: 0.6s;
          }
          .locations-map-pin-future-2 {
            top: 60%;
            right: 12%;
            opacity: 0.4;
            animation-delay: 1.2s;
          }
          .locations-map-route {
            position: absolute;
            top: 20%;
            right: 5%;
            width: 360px;
            height: 180px;
            opacity: 0.25;
          }
          .locations-map-route path {
            animation: border-dance 2s linear infinite;
          }
          .locations-hero-inner {
            display: grid;
            grid-template-columns: 1.25fr 0.75fr;
            gap: 48px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .locations-hero-content {
            max-width: 720px;
          }
          .locations-hero-title {
            font-size: clamp(2.75rem, 7vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            margin: 24px 0 20px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
          }
          .locations-hero-subtitle {
            font-size: 1.25rem;
            color: var(--color-muted);
            max-width: 540px;
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .locations-hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
          }
          .locations-hero-stickers {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            position: relative;
          }
          .locations-hero-stickers .sticker:nth-child(2) {
            align-self: flex-end;
          }
          .locations-hero-stickers .sticker:nth-child(3) {
            align-self: center;
          }
          .locations-starburst {
            position: absolute;
            top: -28px;
            right: -28px;
            animation: spin-slow 14s linear infinite;
          }
          @media (max-width: 900px) {
            .locations-hero {
              padding: 60px 0 40px;
            }
            .locations-hero-map {
              display: none;
            }
            .locations-hero-inner {
              grid-template-columns: 1fr;
            }
            .locations-hero-stickers {
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: center;
            }
            .locations-hero-stickers .sticker:nth-child(2),
            .locations-hero-stickers .sticker:nth-child(3) {
              align-self: auto;
            }
            .locations-starburst {
              display: none;
            }
          }
        `}</style>
      </section>

      <section className="locations-list">
        <div className="container">
          <div className="location-feature">
            <div className="location-feature-image">
              <div className="image-card location-card-tilt">
                <img src="/model-restaurant.png" alt={t('locations.feature.imageAlt')} />
                <div className="location-image-sticker">
                  <Sticker variant="red" icon="flame">{t('locations.feature.imageSticker')}</Sticker>
                </div>
              </div>
            </div>
            <div className="location-feature-content">
              <span className="badge badge-gold">{t('locations.feature.badge')}</span>
              <h2 className="section-title">{t('locations.feature.name')}</h2>
              <p className="section-subtitle">{t('locations.feature.description')}</p>

              <div className="location-info-list">
                <div className="location-info-item">
                  <div className="location-info-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong>{t('locations.feature.addressLabel')}</strong>
                    <span>{t('locations.feature.address')}</span>
                  </div>
                </div>
                <div className="location-info-item">
                  <div className="location-info-icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong>{t('locations.feature.hoursLabel')}</strong>
                    <span>{t('locations.feature.hours')}</span>
                  </div>
                </div>
                <div className="location-info-item">
                  <div className="location-info-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <strong>{t('locations.feature.phoneLabel')}</strong>
                    <span>{t('locations.feature.phone')}</span>
                  </div>
                </div>
                <div className="location-info-item">
                  <div className="location-info-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <strong>{t('locations.feature.emailLabel')}</strong>
                    <span>{t('locations.feature.email')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="location-services">
            <div className="service-card">
              <div className="service-icon">
                <Utensils size={28} />
              </div>
              <h3>{t('locations.services.dineIn.title')}</h3>
              <p>{t('locations.services.dineIn.text')}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Truck size={28} />
              </div>
              <h3>{t('locations.services.delivery.title')}</h3>
              <p>{t('locations.services.delivery.text')}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Calendar size={28} />
              </div>
              <h3>{t('locations.services.events.title')}</h3>
              <p>{t('locations.services.events.text')}</p>
            </div>
          </div>
        </div>

        <style>{`
          .locations-list {
            background: var(--color-surface);
            padding: 80px 0;
          }
          .location-feature {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
            margin-bottom: 64px;
          }
          .location-feature-image {
            position: relative;
          }
          .location-card-tilt {
            transform: rotate(-2deg);
            transition: transform 0.3s ease;
          }
          .location-card-tilt:hover {
            transform: rotate(0deg) scale(1.02);
          }
          .location-card-tilt img {
            height: 480px;
          }
          .location-image-sticker {
            position: absolute;
            top: -16px;
            right: -16px;
            z-index: 2;
          }
          .location-feature-content .section-subtitle {
            margin-bottom: 32px;
          }
          .location-info-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .location-info-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 16px;
            background: white;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
            transition: transform 0.2s ease;
          }
          .location-info-item:hover {
            transform: translateX(8px);
          }
          .location-info-icon {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-fresh) 0%, var(--color-violet) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .location-info-item strong {
            display: block;
            font-weight: 900;
            margin-bottom: 4px;
            text-transform: uppercase;
            font-size: 0.85rem;
            color: var(--color-primary);
          }
          .location-info-item span {
            color: var(--color-muted);
            font-size: 0.95rem;
          }
          .location-services {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .service-card {
            background: white;
            border-radius: var(--radius-lg);
            padding: 32px;
            text-align: center;
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 2px solid transparent;
          }
          .service-card:hover {
            transform: translateY(-10px) rotate(1deg);
            box-shadow: var(--shadow-md);
            border-color: rgba(6, 203, 164, 0.3);
          }
          .service-icon {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-fresh) 0%, var(--color-violet) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            box-shadow: var(--shadow-fresh);
          }
          .service-card h3 {
            font-size: 1.25rem;
            font-weight: 900;
            margin-bottom: 8px;
            text-transform: uppercase;
          }
          .service-card p {
            color: var(--color-muted);
            font-size: 0.95rem;
            line-height: 1.6;
          }
          @media (max-width: 900px) {
            .location-feature {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .location-card-tilt img {
              height: 320px;
            }
            .location-services {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      <section className="locations-coming">
        <div className="container">
          <div className="coming-soon-card">
            <div className="coming-soon-stickers">
              <Sticker variant="play" rotate={-8}>{t('locations.coming.sticker1')}</Sticker>
              <Sticker variant="outline" rotate={6}>{t('locations.coming.sticker2')}</Sticker>
            </div>
            <h2 className="section-title">{t('locations.coming.title')}</h2>
            <p className="section-subtitle">{t('locations.coming.text')}</p>
            <Link to="/contact" className="btn btn-dark">
              {t('locations.coming.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .locations-coming {
            background: var(--color-bg);
            padding: 80px 0;
          }
          .coming-soon-card {
            background: var(--color-accent);
            border-radius: var(--radius-xl);
            padding: 64px;
            text-align: center;
            position: relative;
            overflow: hidden;
            border: 4px solid var(--color-text);
          }
          .coming-soon-card .section-title {
            color: var(--color-text);
          }
          .coming-soon-card .section-subtitle {
            color: rgba(31, 26, 26, 0.75);
            margin: 0 auto 32px;
          }
          .coming-soon-stickers {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-bottom: 24px;
          }
          @media (max-width: 768px) {
            .coming-soon-card {
              padding: 40px 24px;
            }
            .coming-soon-stickers {
              flex-wrap: wrap;
            }
          }
        `}</style>
      </section>
    </>
  )
}
