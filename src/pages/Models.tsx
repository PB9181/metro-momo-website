import { Check, ArrowRight, Store, Building2, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'
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
      <section className="section page-hero">
        <div className="container">
          <span className="badge">{t('models.hero.badge')}</span>
          <h1 className="page-hero-title display-text">
            {t('models.hero.title')}
            <br />
            <span className="gradient-text">{t('models.hero.titleHighlight')}</span>
          </h1>
          <p className="page-hero-subtitle">{t('models.hero.subtitle')}</p>
        </div>

        <style>{`
          .page-hero {
            background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface) 100%);
            padding: 80px 0 60px;
            text-align: center;
          }
          .page-hero-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 900;
            line-height: 1.05;
            margin: 20px 0 16px;
          }
          .page-hero-subtitle {
            font-size: 1.25rem;
            color: var(--color-muted);
            max-width: 720px;
            margin: 0 auto;
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

      <section className="section comparison">
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
