import { ArrowRight, MapPin, Utensils, Users, ChefHat, LayoutDashboard, PackageSearch, QrCode, Smartphone, ClipboardCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee.tsx'
import StatsCounter from '../components/StatsCounter.tsx'
import { useTranslation } from '../i18n/index.ts'

const techIcons: Record<string, React.ComponentType<{ size?: number | string }>> = {
  LayoutDashboard,
  PackageSearch,
  QrCode,
  Smartphone,
  Users,
  ClipboardCheck,
}

type ImageItem = { src: string; alt: string }
type ModelPreviewItem = { src: string; alt: string; name: string; description: string; price: string }
type TechPreviewItem = { iconKey: string; title: string; text: string }
type StatItem = { value: number; suffix: string; prefix: string; label: string }

export default function Home() {
  const { t, getArray } = useTranslation()

  const marqueeImages = getArray('home.marquee.images') as ImageItem[]
  const modelItems = getArray('home.modelsPreview.items') as ModelPreviewItem[]
  const techItems = getArray('home.techPreview.items') as TechPreviewItem[]
  const stats = getArray('home.stats.items') as StatItem[]

  return (
    <>
      <section className="hero">
        <div className="blob blob-red" />
        <div className="blob blob-orange" />
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="badge">
              <Utensils size={16} />
              {t('home.hero.badge')}
            </span>
            <h1 className="hero-title display-text">
              {t('home.hero.title')}
              <br />
              <span className="gradient-text text-shadow-pop">{t('home.hero.titleHighlight')}</span>
            </h1>
            <p className="hero-subtitle">{t('home.hero.subtitle')}</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {t('home.hero.ctaPrimary')} <ArrowRight size={18} />
              </Link>
              <Link to="/models" className="btn btn-secondary">
                {t('home.hero.ctaSecondary')}
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <Users className="hero-stat-icon" size={24} />
                <div>
                  <strong>{t('home.hero.stat1Label')}</strong>
                  <span>{t('home.hero.stat1Sublabel')}</span>
                </div>
              </div>
              <div className="hero-stat">
                <MapPin className="hero-stat-icon" size={24} />
                <div>
                  <strong>{t('home.hero.stat2Label')}</strong>
                  <span>{t('home.hero.stat2Sublabel')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src="/hero-momos.png" alt={t('home.hero.imageAlt')} />
              <div className="hero-image-badge">
                <ChefHat size={20} />
                <span>{t('home.hero.imageBadge')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFF3E6"></path>
          </svg>
        </div>

        <style>{`
          .hero {
            position: relative;
            overflow: hidden;
            padding: 80px 0 40px;
            background: var(--color-bg);
          }
          .hero-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .hero-content {
            max-width: 560px;
          }
          .hero-title {
            font-size: clamp(2.75rem, 6vw, 4.75rem);
            font-weight: 900;
            line-height: 1.05;
            margin: 24px 0 20px;
            letter-spacing: -0.03em;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            color: var(--color-muted);
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 40px;
          }
          .hero-stats {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
          }
          .hero-stat {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.95rem;
          }
          .hero-stat-icon {
            color: var(--color-secondary);
            flex-shrink: 0;
          }
          .hero-stat strong {
            display: block;
            font-weight: 900;
            color: var(--color-text);
          }
          .hero-stat span {
            color: var(--color-muted);
          }
          .hero-visual {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .hero-image-wrapper {
            position: relative;
            border-radius: var(--radius-xl);
            overflow: hidden;
            background: transparent;
            transition: transform 0.3s ease;
          }
          .hero-image-wrapper:hover {
            transform: scale(1.02);
          }
          .hero-image-wrapper img {
            border-radius: var(--radius-xl);
            width: 100%;
            max-width: 540px;
            aspect-ratio: 16/9;
            object-fit: cover;
            display: block;
          }
          .hero-image-badge {
            position: absolute;
            bottom: -16px;
            left: -16px;
            background: white;
            padding: 12px 20px;
            border-radius: 999px;
            box-shadow: var(--shadow-md);
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 800;
            color: var(--color-primary);
            animation: pulse-soft 3s ease-in-out infinite;
          }
          @media (max-width: 900px) {
            .hero {
              padding: 60px 0 40px;
            }
            .hero-inner {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 48px;
            }
            .hero-content {
              max-width: 100%;
            }
            .hero-actions {
              justify-content: center;
            }
            .hero-stats {
              justify-content: center;
            }
            .hero-image-wrapper {
              max-width: 100%;
            }
            .hero-image-badge {
              left: 50%;
              transform: translateX(-50%);
            }
          }
          @media (max-width: 480px) {
            .hero {
              padding: 40px 0 32px;
            }
            .hero-inner {
              gap: 36px;
            }
            .hero-title {
              font-size: clamp(2.25rem, 10vw, 3rem);
            }
            .hero-subtitle {
              font-size: 1.1rem;
            }
            .hero-actions {
              flex-direction: column;
              align-items: center;
            }
            .hero-actions .btn {
              width: 100%;
              max-width: 320px;
            }
            .hero-stats {
              flex-direction: column;
              gap: 20px;
              align-items: center;
            }
            .hero-stat {
              flex-direction: column;
              text-align: center;
              gap: 8px;
            }
            .hero-image-wrapper {
              padding: 6px;
            }
            .hero-image-badge {
              bottom: -12px;
              padding: 10px 16px;
              font-size: 0.85rem;
            }
          }
        `}</style>
      </section>

      <section className="section marquee-section">
        <div className="container marquee-header">
          <span className="badge">{t('home.marquee.badge')}</span>
          <h2 className="section-title">{t('home.marquee.title')}</h2>
        </div>
        <Marquee images={marqueeImages} speed={40} />

        <style>{`
          .marquee-section {
            background: var(--color-surface);
            padding-bottom: 80px;
          }
          .marquee-header {
            text-align: center;
            margin-bottom: 48px;
          }
          .marquee-section .badge {
            margin-bottom: 16px;
          }
          .marquee-section .section-title {
            margin: 0 auto;
          }
        `}</style>
      </section>

      <section className="section intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image">
              <div className="image-card">
                <img src="/about-community.png" alt={t('home.intro.imageAlt')} />
              </div>
            </div>
            <div className="intro-content">
              <span className="badge">{t('home.intro.badge')}</span>
              <h2 className="section-title">
                {t('home.intro.title')}
                <br />
                <span className="gradient-text">{t('home.intro.titleHighlight')}</span>
              </h2>
              <p className="section-subtitle">{t('home.intro.body1')}</p>
              <p className="intro-body">{t('home.intro.body2')}</p>
              <Link to="/about" className="btn btn-secondary">
                {t('home.intro.cta')}
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .intro {
            background: var(--color-surface);
          }
          .intro-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          .intro-image .image-card {
            height: 420px;
            transform: rotate(-2deg);
          }
          .intro-image .image-card:hover {
            transform: rotate(0deg) scale(1.02);
          }
          .intro-image img {
            height: 100%;
          }
          .intro-body {
            font-size: 1.05rem;
            color: var(--color-muted);
            margin-bottom: 28px;
            line-height: 1.7;
          }
          @media (max-width: 900px) {
            .intro-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .intro-image .image-card {
              height: 300px;
              transform: rotate(0deg);
            }
          }
        `}</style>
      </section>

      <section className="section models-preview">
        <div className="container">
          <span className="badge">{t('home.modelsPreview.badge')}</span>
          <h2 className="section-title">{t('home.modelsPreview.title')}</h2>
          <p className="section-subtitle">{t('home.modelsPreview.subtitle')}</p>

          <div className="grid-3">
            {modelItems.map((model) => (
              <div className="card model-preview-card" key={model.name}>
                <div className="model-preview-image">
                  <img src={model.src} alt={model.alt} />
                </div>
                <h3 className="card-title">{model.name}</h3>
                <p className="card-text">{model.description}</p>
                <span className="model-price">{model.price}</span>
              </div>
            ))}
          </div>

          <div className="models-preview-cta">
            <Link to="/models" className="btn btn-primary">
              {t('home.modelsPreview.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .models-preview {
            background: var(--color-bg);
          }
          .model-preview-card {
            padding: 0 0 32px;
            overflow: hidden;
          }
          .model-preview-card:hover {
            transform: translateY(-8px) rotate(0deg);
          }
          .model-preview-image {
            height: 200px;
            overflow: hidden;
            margin-bottom: 24px;
          }
          .model-preview-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .model-preview-card:hover .model-preview-image img {
            transform: scale(1.1);
          }
          .model-preview-card .card-title,
          .model-preview-card .card-text {
            padding: 0 24px;
          }
          .model-price {
            display: block;
            margin-top: 12px;
            padding: 0 24px;
            font-size: 1.25rem;
            font-weight: 900;
            color: var(--color-primary);
          }
          .models-preview-cta {
            text-align: center;
            margin-top: 48px;
          }
        `}</style>
      </section>

      <section className="section tech-preview">
        <div className="container">
          <span className="badge">{t('home.techPreview.badge')}</span>
          <h2 className="section-title">{t('home.techPreview.title')}</h2>
          <p className="section-subtitle">{t('home.techPreview.subtitle')}</p>

          <div className="grid-3">
            {techItems.map((item) => {
              const IconComponent = techIcons[item.iconKey]
              return (
                <div className="card tech-preview-card" key={item.title}>
                  <div className="tech-preview-icon">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
              )
            })}
          </div>

          <div className="tech-preview-cta">
            <Link to="/tech" className="btn btn-secondary">
              {t('home.techPreview.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .tech-preview {
            background: var(--color-surface);
          }
          .tech-preview-card {
            text-align: center;
            padding: 32px 24px;
          }
          .tech-preview-icon {
            width: 64px;
            height: 64px;
            border-radius: 18px;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
          }
          .tech-preview-cta {
            text-align: center;
            margin-top: 48px;
          }
          @media (max-width: 768px) {
            .tech-preview-card {
              padding: 24px 20px;
            }
            .tech-preview-icon {
              width: 52px;
              height: 52px;
            }
          }
          @media (max-width: 480px) {
            .tech-preview-card {
              padding: 20px 16px;
            }
            .tech-preview-icon {
              width: 48px;
              height: 48px;
            }
          }
        `}</style>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-section-header">
            <span className="badge">{t('home.stats.badge')}</span>
            <h2 className="section-title">{t('home.stats.title')}</h2>
          </div>
          <StatsCounter stats={stats} />
        </div>

        <style>{`
          .stats-section {
            background: var(--color-bg);
          }
          .stats-section-header {
            text-align: center;
            margin-bottom: 48px;
          }
          .stats-section-header .badge {
            margin-bottom: 16px;
          }
        `}</style>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">{t('home.cta.title')}</h2>
            <p className="cta-text">{t('home.cta.text')}</p>
            <Link to="/contact" className="btn btn-gold">
              {t('home.cta.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .cta-section {
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
          .cta-card::after {
            content: '';
            position: absolute;
            bottom: -80px;
            left: -80px;
            width: 250px;
            height: 250px;
            border-radius: 50%;
            background: var(--color-secondary);
            opacity: 0.15;
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
