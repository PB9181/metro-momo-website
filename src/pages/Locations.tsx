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
          <svg className="locations-europe-map" viewBox="0 0 480 340" role="img" aria-label={t('locations.hero.mapPinLabel')}>
            <defs>
              <filter id="map-pin-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path className="europe-landmass" d="M165 150 L185 135 L210 125 L245 105 L285 110 L315 130 L325 160 L315 195 L290 225 L255 245 L225 235 L200 255 L170 245 L150 220 L155 185 L165 150 Z" />
            <path className="europe-island" d="M125 145 L150 135 L160 155 L145 170 L125 160 Z" />
            <path className="europe-island" d="M100 155 L120 150 L115 170 L95 165 Z" />
            <path className="europe-border" d="M245 105 L240 145 L260 175 M170 150 L215 145 L240 165 M240 210 L255 230" />
            <path className="europe-route" stroke="var(--mm-coral)" d="M265 115 C 240 130, 200 140, 170 150" />
            <path className="europe-route" stroke="var(--mm-gold)" d="M265 115 C 285 125, 295 135, 300 150" />
            <path className="europe-route" stroke="var(--mm-teal)" d="M265 115 C 230 130, 190 155, 155 180" />
            <path className="europe-route" stroke="var(--mm-electric-blue)" d="M265 115 C 220 120, 170 130, 130 150" />
            <path className="europe-route" stroke="var(--mm-purple)" d="M265 115 C 270 150, 265 190, 260 225" />
            <g className="europe-pin europe-pin-flagship">
              <circle cx="265" cy="115" r="10" fill="var(--mm-red)" filter="url(#map-pin-glow)" />
              <circle cx="265" cy="115" r="18" fill="none" stroke="var(--mm-red)" strokeWidth="2" className="pin-ring" />
              <text x="265" y="92" textAnchor="middle" className="pin-label pin-label-main">{t('locations.hero.map.cities.stockholm')}</text>
              <text x="265" y="80" textAnchor="middle" className="pin-label pin-label-badge">{t('locations.hero.map.flagshipLabel')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="170" cy="150" r="6" fill="var(--mm-gold)" filter="url(#map-pin-glow)" />
              <circle cx="170" cy="150" r="12" fill="none" stroke="var(--mm-gold)" strokeWidth="1.5" className="pin-ring" />
              <text x="170" y="176" textAnchor="middle" className="pin-label">{t('locations.hero.map.cities.amsterdam')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="300" cy="150" r="6" fill="var(--mm-gold)" filter="url(#map-pin-glow)" />
              <circle cx="300" cy="150" r="12" fill="none" stroke="var(--mm-gold)" strokeWidth="1.5" className="pin-ring" />
              <text x="300" y="176" textAnchor="middle" className="pin-label">{t('locations.hero.map.cities.berlin')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="155" cy="180" r="6" fill="var(--mm-teal)" filter="url(#map-pin-glow)" />
              <circle cx="155" cy="180" r="12" fill="none" stroke="var(--mm-teal)" strokeWidth="1.5" className="pin-ring" />
              <text x="155" y="206" textAnchor="middle" className="pin-label">{t('locations.hero.map.cities.paris')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="130" cy="150" r="6" fill="var(--mm-electric-blue)" filter="url(#map-pin-glow)" />
              <circle cx="130" cy="150" r="12" fill="none" stroke="var(--mm-electric-blue)" strokeWidth="1.5" className="pin-ring" />
              <text x="130" y="176" textAnchor="middle" className="pin-label">{t('locations.hero.map.cities.london')}</text>
            </g>
            <g className="europe-pin europe-pin-your-city">
              <circle cx="260" cy="225" r="6" fill="var(--mm-purple)" filter="url(#map-pin-glow)" />
              <circle cx="260" cy="225" r="12" fill="none" stroke="var(--mm-purple)" strokeWidth="1.5" className="pin-ring" />
              <text x="260" y="251" textAnchor="middle" className="pin-label">{t('locations.hero.map.yourCityLabel')}</text>
            </g>
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
          .locations-europe-map {
            position: absolute;
            top: 50%;
            right: -20px;
            transform: translateY(-50%);
            width: min(540px, 52vw);
            height: auto;
            opacity: 0.32;
            overflow: visible;
            font-family: var(--font-family);
          }
          .europe-landmass {
            fill: var(--mm-cream);
            stroke: var(--mm-coral);
            stroke-width: 2;
            stroke-dasharray: 6 4;
            opacity: 0.9;
            filter: drop-shadow(0 8px 24px rgba(255, 107, 53, 0.15));
          }
          .europe-island {
            fill: var(--mm-cream);
            stroke: var(--mm-coral);
            stroke-width: 1.5;
            stroke-dasharray: 4 3;
            opacity: 0.85;
          }
          .europe-border {
            fill: none;
            stroke: var(--mm-coral);
            stroke-width: 1;
            stroke-dasharray: 4 4;
            opacity: 0.45;
          }
          .europe-route {
            fill: none;
            stroke-width: 2;
            stroke-dasharray: 6 5;
            opacity: 0.55;
            animation: route-dash 2.5s linear infinite;
          }
          .europe-pin {
            animation: map-pulse 2.5s ease-in-out infinite;
            transform-origin: center;
            transform-box: fill-box;
          }
          .europe-pin-flagship {
            animation-duration: 2s;
          }
          .europe-pin-soon {
            animation-delay: 0.5s;
            opacity: 0.85;
          }
          .europe-pin-your-city {
            animation-delay: 1s;
          }
          .pin-ring {
            animation: map-pulse 2.5s ease-in-out infinite;
            transform-origin: center;
            transform-box: fill-box;
          }
          .pin-label {
            font-size: 11px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.02em;
            fill: var(--mm-dark);
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
          }
          .pin-label-main {
            font-size: 14px;
            fill: var(--mm-red);
          }
          .pin-label-badge {
            font-size: 9px;
            fill: var(--mm-coral);
          }
          @keyframes route-dash {
            to { stroke-dashoffset: -22; }
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
            .locations-europe-map {
              width: 280px;
              opacity: 0.12;
              right: -40px;
              top: 25%;
              transform: translateY(-25%);
            }
            .pin-label {
              font-size: 9px;
            }
            .pin-label-main {
              font-size: 11px;
            }
            .pin-label-badge {
              font-size: 8px;
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
          @media (max-width: 480px) {
            .locations-europe-map {
              width: 220px;
              right: -60px;
              top: 15%;
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
