import { Heart, Globe, ChefHat, Sparkles, Target, HandHeart } from 'lucide-react'
import { useTranslation } from '../i18n/index.ts'

const valueIcons: Record<string, React.ComponentType<{ size?: number | string }>> = {
  ChefHat,
  Globe,
  Heart,
  Sparkles,
  Target,
  HandHeart,
}

type ValueItem = { iconKey: string; title: string; text: string }

export default function About() {
  const { t, getArray } = useTranslation()

  const storyParagraphs = getArray('about.story.paragraphs') as string[]
  const values = getArray('about.values.items') as ValueItem[]

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <span className="badge">{t('about.hero.badge')}</span>
          <h1 className="page-hero-title display-text">
            {t('about.hero.title')}
            <br />
            <span className="gradient-text">{t('about.hero.titleHighlight')}</span>
          </h1>
          <p className="page-hero-subtitle">{t('about.hero.subtitle')}</p>
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
            max-width: 640px;
            margin: 0 auto;
          }
        `}</style>
      </section>

      <section className="section about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-image">
              <div className="image-card">
                <img src="/about-community.png" alt="People enjoying MOMO together" />
              </div>
            </div>
            <div className="about-story-content">
              <span className="badge badge-gold">{t('about.story.badge')}</span>
              <h2 className="section-title">{t('about.story.title')}</h2>
              {storyParagraphs.map((paragraph, index) => (
                <p className="about-story-body" key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .about-story {
            background: var(--color-bg);
          }
          .about-story-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          .about-story-image .image-card {
            height: 480px;
            transform: rotate(2deg);
          }
          .about-story-image img {
            height: 100%;
          }
          .about-story-body {
            font-size: 1.05rem;
            color: var(--color-muted);
            line-height: 1.7;
            margin-bottom: 20px;
          }
          @media (max-width: 900px) {
            .about-story-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .about-story-image .image-card {
              height: 320px;
              transform: rotate(0deg);
            }
          }
        `}</style>
      </section>

      <section className="section values">
        <div className="container">
          <span className="badge">{t('about.values.badge')}</span>
          <h2 className="section-title">{t('about.values.title')}</h2>
          <p className="section-subtitle">{t('about.values.subtitle')}</p>

          <div className="grid-3">
            {values.map((value) => {
              const IconComponent = valueIcons[value.iconKey]
              return (
                <div className="card value-card" key={value.title}>
                  <div className="card-icon">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <h3 className="card-title">{value.title}</h3>
                  <p className="card-text">{value.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <style>{`
          .values {
            background: var(--color-surface);
          }
          .value-card {
            border-left: 4px solid var(--color-primary);
          }
        `}</style>
      </section>
    </>
  )
}
