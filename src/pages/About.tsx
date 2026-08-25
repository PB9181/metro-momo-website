import { Heart, Globe, ChefHat, Sparkles, Target, HandHeart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Sticker from '../components/Sticker.tsx'
import Starburst from '../components/Starburst.tsx'
import Squiggle from '../components/Squiggle.tsx'
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
      <section className="about-hero">
        <div className="blob blob-red" />
        <div className="blob blob-orange" />
        <div className="about-hero-pattern pattern-squiggle" aria-hidden="true" />
        <div className="container about-hero-inner">
          <div className="about-hero-content">
            <span className="badge badge-gold">
              <Heart size={16} />
              {t('about.hero.badge')}
            </span>
            <h1 className="about-hero-title display-text">
              {t('about.hero.title')}
              <br />
              <span className="gradient-text">{t('about.hero.titleHighlight')}</span>
            </h1>
            <p className="about-hero-subtitle">{t('about.hero.subtitle')}</p>
            <div className="about-hero-actions">
              <Link to="/menu" className="btn btn-primary">
                {t('about.hero.ctaSecondary')} <ArrowRight size={18} />
              </Link>
              <a href="#our-story" className="btn btn-secondary">
                {t('about.hero.ctaPrimary')}
              </a>
            </div>
            <Squiggle color="var(--mm-coral)" width={160} height={24} strokeWidth={5} className="about-hero-squiggle" />
          </div>

          <div className="about-hero-visual">
            <div className="about-collage">
              <div className="about-collage-main photo-frame">
                <img src="/New_Photos/Momo 2.jpeg" alt={t('about.hero.imageAlt1')} />
                <div className="about-collage-sticker about-sticker-1">
                  <Sticker variant="hot" icon="heart" rotate={-12}>{t('about.hero.sticker3')}</Sticker>
                </div>
              </div>
              <div className="about-collage-side about-collage-side-1 photo-frame">
                <img src="/New_Photos/momo5.jpg" alt={t('about.hero.imageAlt2')} />
              </div>
              <div className="about-collage-side about-collage-side-2 photo-frame">
                <img src="/about-community.png" alt={t('about.hero.imageAlt3')} />
              </div>
              <div className="about-collage-sticker about-sticker-2">
                <Sticker variant="gold" rotate={8}>{t('about.hero.sticker1')}</Sticker>
              </div>
              <Starburst color="var(--mm-coral)" size={72} className="about-starburst" />
            </div>
          </div>
        </div>

        <style>{`
          .about-hero {
            position: relative;
            overflow: hidden;
            padding: 100px 0 60px;
            background: linear-gradient(135deg, #2a1818 0%, #1f1a1a 100%);
            color: white;
            border-bottom: 4px dashed var(--mm-border);
          }
          .about-hero-pattern {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0.06;
          }
          .about-hero-inner {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 48px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .about-hero-content {
            max-width: 640px;
          }
          .about-hero-title {
            font-size: clamp(2.75rem, 7vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            margin: 24px 0 20px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
          }
          .about-hero-title .gradient-text {
            filter: drop-shadow(0 0 20px rgba(255, 42, 140, 0.6)) drop-shadow(0 4px 12px rgba(232, 23, 43, 0.4));
          }
          .about-hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.82);
            max-width: 540px;
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .about-hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 24px;
          }
          .about-hero-squiggle {
            margin-top: 8px;
          }
          .about-hero-visual {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .about-collage {
            position: relative;
            width: 100%;
            max-width: 520px;
            height: 520px;
          }
          .about-collage-main {
            position: absolute;
            top: 0;
            left: 0;
            width: 64%;
            height: 72%;
            transform: rotate(-2deg);
            z-index: 2;
          }
          .about-collage-side {
            position: absolute;
            width: 38%;
            z-index: 3;
          }
          .about-collage-side-1 {
            top: 8%;
            right: 0;
            transform: rotate(4deg);
          }
          .about-collage-side-2 {
            bottom: 6%;
            right: 4%;
            width: 42%;
            transform: rotate(-5deg);
          }
          .about-collage img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .about-collage-sticker {
            position: absolute;
            z-index: 4;
          }
          .about-sticker-1 {
            top: -16px;
            left: -16px;
          }
          .about-sticker-2 {
            bottom: 12%;
            left: -8px;
            transform: rotate(-6deg);
          }
          .about-starburst {
            position: absolute;
            top: -20px;
            right: 24px;
            animation: spin-slow 14s linear infinite;
            z-index: 0;
          }
          @media (max-width: 900px) {
            .about-hero {
              padding: 60px 0 40px;
            }
            .about-hero-inner {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 32px;
            }
            .about-hero-content {
              max-width: 100%;
            }
            .about-hero-actions {
              justify-content: center;
            }
            .about-hero-squiggle {
              margin: 0 auto;
            }
            .about-collage {
              max-width: 100%;
              height: 360px;
            }
            .about-starburst {
              display: none;
            }
          }
        `}</style>
      </section>

      <section id="our-story" className="section about-story">
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
