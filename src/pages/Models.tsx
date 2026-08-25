import { Check, ArrowRight, Store, Building2, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'
import Sticker from '../components/Sticker.tsx'
import Starburst from '../components/Starburst.tsx'
import { useTranslation } from '../i18n/index.ts'

const modelIcons: Record<string, React.ComponentType<{ size?: number | string }>> = {
  Store,
  Building2,
  Cloud,
}

type ModelItem = {
  iconKey: string
  name: string
  price: string
  src: string
  description: string
  features: string[]
  bestFor: string
}

type ComparisonRow = {
  name: string
  compact: string
  restaurant: string
  ghost: string
}

export default function Models() {
  const { t, getArray, getObject } = useTranslation()

  const models = getArray('models.items') as ModelItem[]
  const comparisonHeaders = getObject('models.comparison.headers') as { feature: string; compact: string; restaurant: string; ghost: string }
  const comparisonRows = getArray('models.comparison.rows') as ComparisonRow[]

  return (
    <>
      <section className="models-hero">
        <div className="models-hero-pattern pattern-city" aria-hidden="true" />
        <div className="models-hero-silhouette" aria-hidden="true">
          <svg viewBox="0 0 800 120" preserveAspectRatio="none">
            <path d="M0 120 L0 60 L40 60 L40 40 L80 40 L80 80 L120 80 L120 20 L170 20 L170 100 L220 100 L220 50 L260 50 L260 70 L320 70 L320 30 L360 30 L360 120 Z" fill="var(--mm-gold)" opacity="0.08" />
            <path d="M420 120 L420 70 L460 70 L460 50 L500 50 L500 90 L540 90 L540 35 L590 35 L590 110 L640 110 L640 55 L680 55 L680 75 L740 75 L740 25 L800 25 L800 120 Z" fill="var(--mm-coral)" opacity="0.08" />
          </svg>
        </div>
        <div className="container models-hero-inner">
          <div className="models-hero-content">
            <span className="badge badge-gold">
              <Store size={16} />
              {t('models.hero.badge')}
            </span>
            <h1 className="models-hero-title display-text">
              {t('models.hero.title')}
              <br />
              <span className="gradient-text">{t('models.hero.titleHighlight')}</span>
            </h1>
            <p className="models-hero-subtitle">{t('models.hero.subtitle')}</p>
            <div className="models-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {t('models.hero.ctaSecondary')} <ArrowRight size={18} />
              </Link>
              <a href="#model-comparison" className="btn btn-secondary">
                {t('models.hero.ctaPrimary')}
              </a>
            </div>
            <div className="models-hero-stickers">
              <Sticker variant="gold" rotate={-8}>{t('models.hero.sticker1')}</Sticker>
              <Sticker variant="hot" rotate={6}>{t('models.hero.sticker2')}</Sticker>
              <Sticker variant="fresh" rotate={-4}>{t('models.hero.sticker3')}</Sticker>
            </div>
          </div>

          <div className="models-hero-visual">
            <div className="models-float-card models-float-card-1">
              <img src="/model-kiosk.png" alt="Street Stall & Kiosk" />
              <span className="models-float-badge"><Store size={14} /> Kiosk</span>
            </div>
            <div className="models-float-card models-float-card-2">
              <img src="/model-restaurant.png" alt="Full Restaurant" />
              <span className="models-float-badge"><Building2 size={14} /> Restaurant</span>
            </div>
            <div className="models-float-card models-float-card-3">
              <img src="/model-stall.png" alt="Ghost Kitchen" />
              <span className="models-float-badge"><Cloud size={14} /> Ghost</span>
            </div>
            <Starburst color="var(--mm-gold)" size={80} className="models-starburst" />
          </div>
        </div>

        <style>{`
          .models-hero {
            position: relative;
            overflow: hidden;
            padding: 100px 0 60px;
            background: linear-gradient(135deg, #2a1a10 0%, #1f1a1a 100%);
            color: white;
            border-bottom: 4px dashed var(--mm-border);
          }
          .models-hero-pattern {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .models-hero-silhouette {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 120px;
            pointer-events: none;
            animation: city-scroll 40s linear infinite;
          }
          .models-hero-silhouette svg {
            width: 100%;
            height: 100%;
          }
          .models-hero-inner {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 48px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .models-hero-content {
            max-width: 640px;
          }
          .models-hero-title {
            font-size: clamp(2.75rem, 7vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            margin: 24px 0 20px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
          }
          .models-hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.82);
            max-width: 540px;
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .models-hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 28px;
          }
          .models-hero-stickers {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
          .models-hero-visual {
            position: relative;
            height: 440px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .models-float-card {
            position: absolute;
            width: 220px;
            border-radius: var(--radius-lg);
            overflow: hidden;
            background: white;
            padding: 8px;
            box-shadow: var(--shadow-md);
            transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
            animation: float-cards 5s ease-in-out infinite;
          }
          .models-float-card:hover {
            transform: scale(1.05) rotate(0deg) !important;
            z-index: 10;
          }
          .models-float-card img {
            width: 100%;
            height: 140px;
            object-fit: cover;
            border-radius: calc(var(--radius-lg) - 8px);
          }
          .models-float-card-1 {
            top: 0;
            left: 0;
            transform: rotate(-6deg);
            animation-delay: 0s;
            z-index: 3;
          }
          .models-float-card-2 {
            top: 25%;
            right: 0;
            transform: rotate(4deg);
            animation-delay: 0.8s;
            z-index: 2;
          }
          .models-float-card-3 {
            bottom: 5%;
            left: 15%;
            transform: rotate(-2deg);
            animation-delay: 1.6s;
            z-index: 1;
          }
          .models-float-badge {
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--color-primary);
            color: white;
            padding: 6px 12px;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 900;
            text-transform: uppercase;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
            box-shadow: var(--shadow-sm);
          }
          .models-starburst {
            position: absolute;
            top: -24px;
            right: 20px;
            animation: spin-slow 16s linear infinite;
            z-index: 0;
          }
          @media (max-width: 900px) {
            .models-hero {
              padding: 60px 0 40px;
            }
            .models-hero-inner {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 32px;
            }
            .models-hero-content {
              max-width: 100%;
            }
            .models-hero-actions {
              justify-content: center;
            }
            .models-hero-stickers {
              justify-content: center;
            }
            .models-hero-visual {
              height: 360px;
            }
            .models-float-card {
              width: 180px;
            }
            .models-float-card img {
              height: 110px;
            }
            .models-starburst {
              display: none;
            }
          }
        `}</style>
      </section>

      <section className="section models-list">
        <div className="container">
          <div className="grid-3">
            {models.map((model, index) => {
              const IconComponent = modelIcons[model.iconKey]
              const highlighted = index === models.length - 1
              return (
                <div className={`card model-card ${highlighted ? 'model-card-highlighted' : ''}`} key={model.name}>
                  <div className="model-card-image">
                    <img src={model.src} alt={model.name} />
                    <span className="model-card-price">{model.price}</span>
                  </div>
                  <div className="model-card-content">
                    <div className="model-card-header">
                      <div className="model-card-icon">
                        {IconComponent && <IconComponent size={28} />}
                      </div>
                      <div>
                        <h3 className="card-title">{model.name}</h3>
                        <span className="model-card-bestfor">{t('models.bestForPrefix')} {model.bestFor}</span>
                      </div>
                    </div>
                    <p className="card-text">{model.description}</p>
                    <ul className="model-card-features">
                      {model.features.map((feature) => (
                        <li key={feature}>
                          <Check size={18} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <style>{`
          .models-list {
            background: var(--color-bg);
            padding-top: 40px;
          }
          .model-card {
            padding: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          .model-card-highlighted {
            border-color: var(--color-accent);
            box-shadow: var(--shadow-orange);
            transform: rotate(-1deg);
          }
          .model-card-highlighted:hover {
            transform: rotate(0deg) translateY(-8px);
          }
          .model-card-image {
            position: relative;
            height: 240px;
            overflow: hidden;
          }
          .model-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .model-card:hover .model-card-image img {
            transform: scale(1.1);
          }
          .model-card-price {
            position: absolute;
            top: 16px;
            right: 16px;
            background: var(--color-primary);
            color: white;
            padding: 8px 16px;
            border-radius: 999px;
            font-weight: 900;
            font-size: 1.1rem;
            box-shadow: var(--shadow-md);
          }
          .model-card-content {
            padding: 28px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .model-card-header {
            display: flex;
            gap: 16px;
            align-items: flex-start;
            margin-bottom: 12px;
          }
          .model-card-icon {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .model-card-bestfor {
            font-size: 0.85rem;
            color: var(--color-muted);
            font-weight: 700;
          }
          .model-card-features {
            list-style: none;
            margin-top: auto;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .model-card-features li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.95rem;
            color: var(--color-text);
          }
          .model-card-features li svg {
            color: var(--color-primary);
            flex-shrink: 0;
          }
          @media (max-width: 768px) {
            .model-card-image {
              height: 200px;
            }
            .model-card-content {
              padding: 24px;
            }
            .model-card-header {
              gap: 12px;
            }
            .model-card-icon {
              width: 44px;
              height: 44px;
            }
            .model-card-price {
              top: 12px;
              right: 12px;
              padding: 6px 12px;
              font-size: 1rem;
            }
          }
          @media (max-width: 480px) {
            .model-card-image {
              height: 180px;
            }
            .model-card-content {
              padding: 20px;
            }
            .model-card-features {
              gap: 8px;
            }
            .model-card-features li {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </section>

      <section id="model-comparison" className="section comparison">
        <div className="container">
          <span className="badge">{t('models.comparison.badge')}</span>
          <h2 className="section-title">{t('models.comparison.title')}</h2>
          <p className="section-subtitle">{t('models.comparison.subtitle')}</p>

          <div className="tech-included-banner">
            <strong>{t('models.comparison.techBanner')}</strong> {t('models.comparison.techBannerText')}
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{comparisonHeaders.feature}</th>
                  <th>{comparisonHeaders.compact}</th>
                  <th>{comparisonHeaders.restaurant}</th>
                  <th>{comparisonHeaders.ghost}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.compact}</td>
                    <td>{row.restaurant}</td>
                    <td>{row.ghost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <style>{`
          .comparison {
            background: var(--color-surface);
          }
          .comparison-table-wrapper {
            overflow-x: auto;
            max-width: 100%;
            border-radius: var(--radius-lg);
            background: white;
            box-shadow: var(--shadow-sm);
            -webkit-overflow-scrolling: touch;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 700px;
          }
          .comparison-table th,
          .comparison-table td {
            padding: 18px 24px;
            text-align: left;
            border-bottom: 1px solid var(--mm-border);
          }
          .comparison-table th {
            background: var(--color-primary);
            color: white;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            font-size: 0.85rem;
          }
          .comparison-table td:first-child {
            font-weight: 800;
            color: var(--color-text);
          }
          .comparison-table td {
            color: var(--color-muted);
          }
          .comparison-table tr:last-child td {
            border-bottom: none;
          }
          .comparison-table tr:hover td {
            background: var(--mm-cream);
          }
          .tech-included-banner {
            background: white;
            border-left: 4px solid var(--color-primary);
            padding: 18px 24px;
            border-radius: var(--radius-md);
            margin-bottom: 28px;
            font-weight: 700;
            color: var(--color-text);
            box-shadow: var(--shadow-sm);
          }
          .tech-included-banner strong {
            color: var(--color-primary);
          }
          @media (max-width: 768px) {
            .comparison-table th,
            .comparison-table td {
              padding: 14px 16px;
              font-size: 0.85rem;
            }
            .comparison-table {
              min-width: 600px;
            }
            .tech-included-banner {
              padding: 14px 18px;
              font-size: 0.95rem;
            }
          }
          @media (max-width: 480px) {
            .comparison-table th,
            .comparison-table td {
              padding: 12px 14px;
              font-size: 0.8rem;
            }
            .comparison-table {
              min-width: 520px;
            }
          }
        `}</style>
      </section>

      <section className="section models-cta">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">{t('models.cta.title')}</h2>
            <p className="cta-text">{t('models.cta.text')}</p>
            <Link to="/contact" className="btn btn-gold">
              {t('models.cta.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .models-cta {
            background: var(--color-bg);
          }
          .cta-card {
            background: var(--color-text);
            color: white;
            border-radius: var(--radius-xl);
            padding: 64px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .cta-card::before {
            content: '';
            position: absolute;
            top: -100px;
            right: -100px;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: var(--color-primary);
            opacity: 0.2;
          }
          .cta-title {
            font-size: clamp(2rem, 5vw, 3rem);
            font-weight: 900;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
          }
          .cta-text {
            font-size: 1.15rem;
            color: rgba(255, 255, 255, 0.8);
            max-width: 600px;
            margin: 0 auto 32px;
            position: relative;
            z-index: 1;
          }
          .cta-card .btn {
            position: relative;
            z-index: 1;
          }
          @media (max-width: 768px) {
            .cta-card {
              padding: 40px 24px;
            }
          }
        `}</style>
      </section>
    </>
  )
}
