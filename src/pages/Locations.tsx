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
          <svg className="locations-europe-map" viewBox="0 0 640 420" role="img" aria-label={t('locations.hero.mapPinLabel')}>
            <defs>
              <filter id="map-pin-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path className="europe-landmass" d="M90 290 L95 230 L150 205 L190 170 L260 160 L330 155 L360 115 L395 75 L475 65 L515 110 L500 170 L455 220 L410 270 L350 320 L260 335 L180 315 Z" />
            <path className="europe-island" d="M180 160 L185 135 L210 130 L230 145 L220 165 L195 170 Z" />
            <path className="europe-island" d="M165 150 L170 130 L185 132 L180 155 Z" />
            <path className="europe-route" stroke="var(--mm-coral)" d="M340 150 L400 175 L400 95 L490 90 L210 145 L155 290 L220 305 L275 225 L315 180 Z" />
            <g className="europe-pin europe-pin-soon">
              <circle cx="340" cy="150" r="7" fill="var(--mm-red)" filter="url(#map-pin-glow)" />
              <circle cx="340" cy="150" r="14" fill="none" stroke="var(--mm-red)" strokeWidth="1.5" className="pin-ring" />
              <text x="340" y="132" textAnchor="middle" className="pin-label">{t('locations.hero.map.countries.netherlands')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="315" cy="180" r="7" fill="var(--mm-neon-lime)" filter="url(#map-pin-glow)" />
              <circle cx="315" cy="180" r="14" fill="none" stroke="var(--mm-neon-lime)" strokeWidth="1.5" className="pin-ring" />
              <text x="325" y="184" textAnchor="start" className="pin-label">{t('locations.hero.map.countries.belgium')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="275" cy="225" r="7" fill="var(--mm-hot-pink)" filter="url(#map-pin-glow)" />
              <circle cx="275" cy="225" r="14" fill="none" stroke="var(--mm-hot-pink)" strokeWidth="1.5" className="pin-ring" />
              <text x="275" y="249" textAnchor="middle" className="pin-label">{t('locations.hero.map.countries.france')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="220" cy="305" r="7" fill="var(--mm-coral)" filter="url(#map-pin-glow)" />
              <circle cx="220" cy="305" r="14" fill="none" stroke="var(--mm-coral)" strokeWidth="1.5" className="pin-ring" />
              <text x="220" y="329" textAnchor="middle" className="pin-label">{t('locations.hero.map.countries.spain')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="155" cy="290" r="7" fill="var(--mm-gold)" filter="url(#map-pin-glow)" />
              <circle cx="155" cy="290" r="14" fill="none" stroke="var(--mm-gold)" strokeWidth="1.5" className="pin-ring" />
              <text x="155" y="314" textAnchor="middle" className="pin-label">{t('locations.hero.map.countries.portugal')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="210" cy="145" r="7" fill="var(--mm-teal)" filter="url(#map-pin-glow)" />
              <circle cx="210" cy="145" r="14" fill="none" stroke="var(--mm-teal)" strokeWidth="1.5" className="pin-ring" />
              <text x="210" y="127" textAnchor="middle" className="pin-label">{t('locations.hero.map.countries.uk')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="400" cy="175" r="7" fill="var(--mm-electric-blue)" filter="url(#map-pin-glow)" />
              <circle cx="400" cy="175" r="14" fill="none" stroke="var(--mm-electric-blue)" strokeWidth="1.5" className="pin-ring" />
              <text x="410" y="179" textAnchor="start" className="pin-label">{t('locations.hero.map.countries.germany')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="400" cy="95" r="7" fill="var(--mm-pink)" filter="url(#map-pin-glow)" />
              <circle cx="400" cy="95" r="14" fill="none" stroke="var(--mm-pink)" strokeWidth="1.5" className="pin-ring" />
              <text x="400" y="77" textAnchor="middle" className="pin-label">{t('locations.hero.map.countries.norway')}</text>
            </g>
            <g className="europe-pin europe-pin-soon">
              <circle cx="490" cy="90" r="7" fill="var(--mm-purple)" filter="url(#map-pin-glow)" />
              <circle cx="490" cy="90" r="14" fill="none" stroke="var(--mm-purple)" strokeWidth="1.5" className="pin-ring" />
              <text x="490" y="72" textAnchor="middle" className="pin-label">{t('locations.hero.map.countries.finland')}</text>
            </g>
            <g className="europe-pin europe-pin-your-country">
              <circle cx="450" cy="255" r="7" fill="var(--mm-purple)" filter="url(#map-pin-glow)" />
              <circle cx="450" cy="255" r="14" fill="none" stroke="var(--mm-purple)" strokeWidth="1.5" className="pin-ring" />
              <text x="450" y="279" textAnchor="middle" className="pin-label">{t('locations.hero.map.yourCountryLabel')}</text>
            </g>
            <g className="map-legend">
              <rect x="24" y="348" width="172" height="56" rx="12" />
              <circle cx="40" cy="370" r="4" fill="var(--mm-red)" />
              <circle cx="50" cy="370" r="4" fill="var(--mm-gold)" />
              <circle cx="60" cy="370" r="4" fill="var(--mm-teal)" />
              <circle cx="70" cy="370" r="4" fill="var(--mm-electric-blue)" />
              <text x="84" y="373" textAnchor="start" className="legend-label">{t('locations.hero.map.comingSoonLabel')}</text>
              <circle cx="40" cy="390" r="4" fill="var(--mm-purple)" />
              <text x="52" y="393" textAnchor="start" className="legend-label">{t('locations.hero.map.yourCountryLabel')}</text>
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
            right: -40px;
            transform: translateY(-50%);
            width: min(760px, 70vw);
            height: auto;
            opacity: 0.28;
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
            font-size: 12px;
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
          .map-legend rect {
            fill: rgba(255, 244, 232, 0.72);
            stroke: rgba(255, 107, 53, 0.18);
            stroke-width: 1;
          }
          .legend-label {
            font-size: 10px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.02em;
            fill: var(--mm-dark);
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
              width: 340px;
              opacity: 0.25;
              right: -32px;
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
            .legend-label {
              font-size: 8px;
            }
            .locations-hero-inner {
              grid-template-columns: 1fr;
            }
            .locations-hero-stickers {
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: center;
              gap: 10px;
            }
            .locations-hero-stickers .sticker:nth-child(2),
            .locations-hero-stickers .sticker:nth-child(3) {
              align-self: auto;
            }
            .locations-starburst {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .locations-hero {
              display: flex;
              flex-direction: column;
              padding: 60px 0 40px;
            }
            .locations-hero-map {
              position: relative;
              inset: auto;
              width: 100%;
              height: auto;
              padding: 0 24px;
              margin-top: 40px;
              z-index: 1;
              opacity: 1;
              pointer-events: auto;
            }
            .locations-europe-map {
              position: relative;
              top: auto;
              right: auto;
              transform: none;
              width: 100%;
              max-width: 520px;
              height: auto;
              margin: 0 auto;
              opacity: 1;
            }
            .locations-hero-inner {
              width: 100%;
            }
            .pin-label {
              font-size: 10px;
            }
            .legend-label {
              font-size: 9px;
            }
          }
          @media (max-width: 480px) {
            .locations-hero-map {
              padding: 0 20px;
              margin-top: 32px;
            }
            .locations-europe-map {
              max-width: 360px;
            }
            .pin-label {
              font-size: 9px;
            }
            .legend-label {
              font-size: 8px;
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
