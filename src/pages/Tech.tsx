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
  Cpu,
  Zap,
  Wifi,
} from 'lucide-react'
import Sticker from '../components/Sticker.tsx'
import Starburst from '../components/Starburst.tsx'
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
      <section className="tech-hero">
        <div className="tech-hero-pattern pattern-circuit" aria-hidden="true" />
        <div className="tech-hero-glow" aria-hidden="true" />
        <div className="tech-hero-nodes" aria-hidden="true">
          <div className="tech-node tech-node-1"><Cpu size={24} /></div>
          <div className="tech-node tech-node-2"><Zap size={24} /></div>
          <div className="tech-node tech-node-3"><Wifi size={24} /></div>
          <div className="tech-node tech-node-4"><QrCode size={24} /></div>
          <div className="tech-node tech-node-5"><Smartphone size={24} /></div>
          <div className="tech-node tech-node-6"><LayoutDashboard size={24} /></div>
        </div>
        <div className="container tech-hero-inner">
          <div className="tech-hero-content">
            <span className="badge badge-play">
              <Sparkles size={16} />
              {t('tech.hero.badge')}
            </span>
            <h1 className="tech-hero-title display-text">
              {t('tech.hero.title')}
              <br />
              <span className="tech-gradient-text">{t('tech.hero.titleHighlight')}</span>
            </h1>
            <p className="tech-hero-subtitle">{t('tech.hero.subtitle')}</p>
            <div className="tech-hero-actions">
              <Link to="/models" className="btn btn-primary">
                {t('tech.hero.ctaPrimary')} <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                {t('tech.hero.ctaSecondary')}
              </Link>
            </div>
            <div className="tech-hero-stickers">
              <Sticker variant="electric" rotate={-8}>{t('tech.hero.sticker1')}</Sticker>
              <Sticker variant="neon" rotate={6}>{t('tech.hero.sticker2')}</Sticker>
              <Sticker variant="fresh" rotate={-4}>{t('tech.hero.sticker3')}</Sticker>
            </div>
          </div>
          <Starburst color="var(--mm-electric-blue)" size={96} className="tech-starburst" />
        </div>

        <style>{`
          .tech-hero {
            position: relative;
            overflow: hidden;
            padding: 100px 0 60px;
            background: linear-gradient(135deg, #0d1a1a 0%, #0d0a0a 100%);
            color: white;
            border-bottom: 4px solid var(--mm-electric-blue);
            text-align: center;
          }
          .tech-hero-pattern {
            position: absolute;
            inset: 0;
            pointer-events: none;
            animation: circuit-pulse 4s ease-in-out infinite;
          }
          .tech-hero-glow {
            position: absolute;
            top: -100px;
            right: -100px;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, transparent 70%);
            pointer-events: none;
            animation: blob-morph 6s ease-in-out infinite;
          }
          .tech-hero-nodes {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .tech-node {
            position: absolute;
            width: 52px;
            height: 52px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(0, 229, 255, 0.35);
            color: var(--mm-electric-blue);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 20px rgba(0, 229, 255, 0.15);
            animation: float-wave 6s ease-in-out infinite;
          }
          .tech-node-1 { top: 15%; left: 8%; animation-delay: 0s; }
          .tech-node-2 { top: 25%; right: 10%; animation-delay: 0.8s; }
          .tech-node-3 { bottom: 25%; left: 12%; animation-delay: 1.6s; }
          .tech-node-4 { bottom: 18%; right: 15%; animation-delay: 2.4s; }
          .tech-node-5 { top: 50%; left: 3%; animation-delay: 3.2s; }
          .tech-node-6 { top: 45%; right: 5%; animation-delay: 4s; }
          .tech-hero-inner {
            position: relative;
            z-index: 1;
            max-width: 840px;
            margin: 0 auto;
          }
          .tech-hero-title {
            font-size: clamp(2.75rem, 7vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            margin: 24px 0 20px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
          }
          .tech-gradient-text {
            background: linear-gradient(135deg, var(--mm-electric-blue) 0%, var(--mm-teal) 40%, var(--mm-neon-lime) 100%);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient-shift 4s ease infinite;
            filter: drop-shadow(0 0 20px rgba(0, 229, 255, 0.4));
          }
          .tech-hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.82);
            max-width: 680px;
            margin: 0 auto 32px;
            line-height: 1.6;
          }
          .tech-hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 28px;
          }
          .tech-hero-stickers {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .tech-starburst {
            position: absolute;
            top: -24px;
            right: -24px;
            animation: spin-slow 18s linear infinite;
            z-index: 0;
          }
          @media (max-width: 900px) {
            .tech-hero {
              padding: 60px 0 40px;
            }
            .tech-node {
              width: 40px;
              height: 40px;
            }
            .tech-node svg {
              width: 20px;
              height: 20px;
            }
            .tech-starburst {
              display: none;
            }
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
