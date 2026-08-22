import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  PackageSearch,
  TrendingUp,
  CalendarCheck,
  QrCode,
  Smartphone,
  ClipboardCheck,
  Truck,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { useTranslation } from '../i18n/index.ts'

const techIcons: Record<string, React.ComponentType<{ size?: number | string }>> = {
  LayoutDashboard,
  Users,
  PackageSearch,
  TrendingUp,
  CalendarCheck,
  QrCode,
  Smartphone,
  ClipboardCheck,
  Truck,
}

type TechCategory = { iconKey: string; title: string; features: string[] }

export default function Tech() {
  const { t, getArray } = useTranslation()

  const techCategories = getArray('tech.categories') as TechCategory[]

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <span className="badge">
            <Sparkles size={16} />
            {t('tech.hero.badge')}
          </span>
          <h1 className="page-hero-title display-text">
            {t('tech.hero.title')}
            <br />
            <span className="gradient-text">{t('tech.hero.titleHighlight')}</span>
          </h1>
          <p className="page-hero-subtitle">{t('tech.hero.subtitle')}</p>
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

      <section className="section tech-grid-section">
        <div className="container">
          <div className="grid-3">
            {techCategories.map((category) => {
              const IconComponent = techIcons[category.iconKey]
              return (
                <div className="card tech-card" key={category.title}>
                  <div className="tech-card-header">
                    <div className="tech-card-icon">
                      {IconComponent && <IconComponent size={28} />}
                    </div>
                    <h3 className="card-title">{category.title}</h3>
                  </div>
                  <ul className="tech-card-list">
                    {category.features.map((feature) => (
                      <li key={feature}>
                        <span className="tech-card-bullet" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <style>{`
          .tech-grid-section {
            background: var(--color-bg);
          }
          .tech-card {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .tech-card-header {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .tech-card-icon {
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
          .tech-card-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .tech-card-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.95rem;
            color: var(--color-muted);
            font-weight: 600;
          }
          .tech-card-bullet {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--color-accent);
            flex-shrink: 0;
          }
          @media (max-width: 768px) {
            .tech-card {
              padding: 24px;
            }
            .tech-card-icon {
              width: 44px;
              height: 44px;
            }
            .tech-card-header {
              gap: 12px;
            }
            .tech-card-list li {
              font-size: 0.9rem;
            }
          }
          @media (max-width: 480px) {
            .tech-card {
              padding: 20px;
            }
          }
        `}</style>
      </section>

      <section className="section tech-cta">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">{t('tech.cta.title')}</h2>
            <p className="cta-text">{t('tech.cta.text')}</p>
            <Link to="/models" className="btn btn-gold">
              {t('tech.cta.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .tech-cta {
            background: var(--color-surface);
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
            max-width: 680px;
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
