import { ArrowRight, MapPin, ChefHat, Sparkles, Flame, Star, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee.tsx'
import StatsCounter from '../components/StatsCounter.tsx'
import Sticker from '../components/Sticker.tsx'
import Squiggle from '../components/Squiggle.tsx'
import Starburst from '../components/Starburst.tsx'
import { menuCategories } from '../data/menuData.ts'
import { useTranslation } from '../i18n/index.ts'

type ImageItem = { src: string; alt: string }
type StatItem = { value: number; suffix: string; prefix: string; label: string }

export default function Home() {
  const { t, getArray } = useTranslation()

  const marqueeImages = getArray('home.marquee.images') as ImageItem[]
  const stats = getArray('home.stats.items') as StatItem[]

  const signatureCategory = menuCategories.find((c) => c.id === 'signatures')
  const bestSellers = signatureCategory?.items.slice(0, 4) ?? []

  return (
    <>
      <section className="hero">
        <div className="blob blob-red" />
        <div className="blob blob-orange" />
        <div className="blob blob-fresh" />
        <div className="hero-pattern pattern-dots" aria-hidden="true" />

        <div className="container hero-inner">
          <div className="hero-content">
            <span className="badge badge-gold">
              <Star size={16} />
              {t('home.hero.badge')}
            </span>
            <h1 className="hero-title display-text">
              {t('home.hero.title')}
              <br />
              <span className="gradient-text text-shadow-pop">{t('home.hero.titleHighlight')}</span>
            </h1>
            <p className="hero-subtitle">{t('home.hero.subtitle')}</p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                {t('home.hero.ctaPrimary')} <ArrowRight size={18} />
              </Link>
              <Link to="/locations" className="btn btn-secondary">
                {t('home.hero.ctaSecondary')}
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <ChefHat size={22} />
                </div>
                <div>
                  <strong>{t('home.hero.stat1Label')}</strong>
                  <span>{t('home.hero.stat1Sublabel')}</span>
                </div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <strong>{t('home.hero.stat2Label')}</strong>
                  <span>{t('home.hero.stat2Sublabel')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-collage">
              <div className="hero-image-main">
                <img src="/hero-momos.png" alt={t('home.hero.imageAlt')} />
                <div className="hero-sticker-top">
                  <Sticker variant="red" icon="flame" rotate={-12}>{t('home.hero.stickerHot')}</Sticker>
                </div>
              </div>
              <div className="hero-image-small hero-image-small-1">
                <img src="/jhol-momo.png" alt={t('home.hero.smallAlt1')} />
              </div>
              <div className="hero-image-small hero-image-small-2">
                <img src="/menu-fried-momo.png" alt={t('home.hero.smallAlt2')} />
              </div>
              <div className="hero-image-badge">
                <Utensils size={20} />
                <span>{t('home.hero.imageBadge')}</span>
              </div>
              <Starburst color="var(--mm-gold)" size={64} className="hero-starburst" />
            </div>
          </div>
        </div>

        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFF4E8"></path>
          </svg>
        </div>

        <style>{`
          .hero {
            position: relative;
            overflow: hidden;
            padding: 90px 0 60px;
            background: var(--color-bg);
          }
          .hero-pattern {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .hero-inner {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 48px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .hero-content {
            max-width: 600px;
          }
          .hero-title {
            font-size: clamp(2.75rem, 7vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            margin: 24px 0 20px;
            letter-spacing: -0.04em;
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
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-fresh) 0%, var(--color-violet) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: var(--shadow-fresh);
          }
          .hero-stat strong {
            display: block;
            font-weight: 900;
            color: var(--color-text);
            text-transform: uppercase;
            font-size: 0.9rem;
          }
          .hero-stat span {
            color: var(--color-muted);
            font-size: 0.85rem;
          }
          .hero-visual {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .hero-image-collage {
            position: relative;
            width: 100%;
            max-width: 540px;
            height: 460px;
          }
          .hero-image-main {
            position: absolute;
            top: 0;
            right: 0;
            width: 80%;
            border-radius: var(--radius-xl);
            overflow: hidden;
            box-shadow: var(--shadow-lg);
            transform: rotate(3deg);
            transition: transform 0.3s ease;
            background: white;
            border: 6px solid white;
          }
          .hero-image-collage:hover .hero-image-main {
            transform: rotate(1deg) scale(1.02);
          }
          .hero-image-main img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 4/3;
          }
          .hero-sticker-top {
            position: absolute;
            top: -20px;
            left: -20px;
            z-index: 2;
          }
          .hero-image-small {
            position: absolute;
            width: 42%;
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            border: 4px solid white;
            transition: transform 0.3s ease;
          }
          .hero-image-small:hover {
            transform: scale(1.08) rotate(-2deg);
            z-index: 10;
          }
          .hero-image-small-1 {
            bottom: 40px;
            left: 0;
            transform: rotate(-6deg);
          }
          .hero-image-small-2 {
            bottom: -20px;
            left: 28%;
            transform: rotate(5deg);
          }
          .hero-image-small img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 1/1;
          }
          .hero-image-badge {
            position: absolute;
            bottom: -16px;
            right: 16px;
            background: white;
            padding: 12px 20px;
            border-radius: 999px;
            box-shadow: var(--shadow-md);
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-primary);
            animation: pulse-soft 3s ease-in-out infinite;
            z-index: 2;
            text-transform: uppercase;
            font-size: 0.85rem;
          }
          .hero-starburst {
            position: absolute;
            top: -40px;
            right: 60px;
            animation: spin-slow 16s linear infinite;
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
            .hero-image-collage {
              max-width: 100%;
              height: 380px;
            }
            .hero-sticker-top {
              left: 0;
            }
            .hero-image-badge {
              right: 0;
            }
            .hero-starburst {
              display: none;
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
            .hero-image-collage {
              height: 320px;
            }
            .hero-image-small {
              width: 38%;
            }
            .hero-image-badge {
              bottom: -12px;
              padding: 10px 16px;
              font-size: 0.8rem;
            }
          }
        `}</style>
      </section>

      <section className="section marquee-section">
        <div className="container marquee-header">
          <span className="badge badge-fresh">{t('home.marquee.badge')}</span>
          <h2 className="section-title">{t('home.marquee.title')}</h2>
          <Squiggle color="var(--mm-fresh)" width={140} height={24} strokeWidth={5} />
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
            margin: 0 auto 12px;
          }
        `}</style>
      </section>

      <section className="section best-sellers">
        <div className="container">
          <div className="best-sellers-header">
            <span className="badge badge-red">
              <Flame size={16} />
              {t('home.bestSellers.badge')}
            </span>
            <h2 className="section-title">{t('home.bestSellers.title')}</h2>
            <p className="section-subtitle">{t('home.bestSellers.subtitle')}</p>
            <Squiggle color="var(--mm-red)" width={160} height={24} strokeWidth={5} />
          </div>

          <div className="best-sellers-grid">
            {bestSellers.map((item, index) => (
              <div className="best-seller-card" key={item.name} style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}>
                <div className="best-seller-price">{item.price}</div>
                <h3 className="best-seller-name">{item.name}</h3>
                <p className="best-seller-description">{item.description}</p>
                <div className="best-seller-tags">
                  {item.spicy && <span className="best-seller-tag spicy">Spicy</span>}
                  {item.veg && <span className="best-seller-tag veg">Veg</span>}
                  {item.tags?.slice(0, 2).map((tag) => <span className="best-seller-tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="best-sellers-cta">
            <Link to="/menu" className="btn btn-primary">
              {t('home.bestSellers.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .best-sellers {
            background: var(--color-bg);
          }
          .best-sellers-header {
            text-align: center;
            margin-bottom: 48px;
          }
          .best-sellers-header .badge {
            margin-bottom: 16px;
          }
          .best-sellers-header .section-title {
            margin-bottom: 12px;
          }
          .best-sellers-header .section-subtitle {
            margin: 0 auto 16px;
          }
          .best-sellers-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-bottom: 48px;
          }
          .best-seller-card {
            background: white;
            border-radius: var(--radius-lg);
            padding: 28px;
            box-shadow: var(--shadow-sm);
            border: 2px solid transparent;
            transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease;
            position: relative;
          }
          .best-seller-card:hover {
            transform: translateY(-12px) rotate(0deg) scale(1.03) !important;
            box-shadow: var(--shadow-md), 0 0 40px rgba(232, 23, 43, 0.15);
            border-color: rgba(232, 23, 43, 0.4);
          }
          .best-seller-price {
            position: absolute;
            top: -14px;
            right: 16px;
            background: var(--color-accent);
            color: var(--color-text);
            font-weight: 900;
            padding: 8px 14px;
            border-radius: 999px;
            font-size: 1rem;
            box-shadow: var(--shadow-sm);
            transform: rotate(4deg);
          }
          .best-seller-name {
            font-size: 1.2rem;
            font-weight: 900;
            margin-bottom: 10px;
            text-transform: uppercase;
            line-height: 1.1;
          }
          .best-seller-description {
            color: var(--color-muted);
            font-size: 0.95rem;
            line-height: 1.55;
            margin-bottom: 16px;
          }
          .best-seller-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          .best-seller-tag {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 999px;
            font-size: 0.7rem;
            font-weight: 900;
            text-transform: uppercase;
            background: var(--color-light);
            color: var(--color-text);
          }
          .best-seller-tag.spicy {
            background: rgba(232, 23, 43, 0.1);
            color: var(--color-primary);
          }
          .best-seller-tag.veg {
            background: rgba(6, 203, 164, 0.12);
            color: var(--color-fresh-dark);
          }
          .best-sellers-cta {
            text-align: center;
          }
          @media (max-width: 1024px) {
            .best-sellers-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 480px) {
            .best-sellers-grid {
              grid-template-columns: 1fr;
            }
            .best-seller-card {
              padding: 24px;
            }
          }
        `}</style>
      </section>

      <section className="section story">
        <div className="container">
          <div className="story-grid">
            <div className="story-images">
              <div className="story-image story-image-1">
                <img src="/about-community.png" alt={t('home.story.imageAlt')} />
              </div>
              <div className="story-image story-image-2">
                <img src="/13363.png" alt={t('home.story.imageAlt2')} />
              </div>
              <div className="story-sticker">
                <Sticker variant="play" icon="heart" rotate={-10}>{t('home.story.sticker')}</Sticker>
              </div>
              <Starburst color="var(--mm-fresh)" size={72} className="story-starburst" />
            </div>
            <div className="story-content">
              <span className="badge badge-fresh">{t('home.story.badge')}</span>
              <h2 className="section-title">
                {t('home.story.title')}
                <br />
                <span className="gradient-text">{t('home.story.titleHighlight')}</span>
              </h2>
              <p className="section-subtitle">{t('home.story.body1')}</p>
              <p className="story-body">{t('home.story.body2')}</p>
              <Link to="/about" className="btn btn-secondary">
                {t('home.story.cta')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .story {
            background: var(--color-surface);
            overflow: hidden;
          }
          .story-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          .story-images {
            position: relative;
            height: 480px;
          }
          .story-image {
            position: absolute;
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            border: 6px solid white;
            transition: transform 0.3s ease;
          }
          .story-image:hover {
            transform: scale(1.03) rotate(0deg) !important;
            z-index: 5;
          }
          .story-image-1 {
            top: 0;
            left: 0;
            width: 65%;
            transform: rotate(-3deg);
          }
          .story-image-2 {
            bottom: 0;
            right: 0;
            width: 55%;
            transform: rotate(4deg);
          }
          .story-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .story-sticker {
            position: absolute;
            top: 10%;
            right: 5%;
            z-index: 3;
          }
          .story-starburst {
            position: absolute;
            bottom: 10%;
            left: 5%;
            animation: spin-slow 18s linear infinite;
          }
          .story-body {
            font-size: 1.05rem;
            color: var(--color-muted);
            margin-bottom: 28px;
            line-height: 1.7;
          }
          @media (max-width: 900px) {
            .story-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .story-images {
              height: 360px;
              order: 2;
            }
            .story-image-1 {
              width: 60%;
            }
            .story-image-2 {
              width: 50%;
            }
            .story-sticker {
              top: 5%;
              right: 0;
            }
            .story-starburst {
              display: none;
            }
          }
        `}</style>
      </section>

      <section className="section visit">
        <div className="container">
          <div className="visit-card">
            <div className="visit-content">
              <span className="badge badge-play">
                <Sparkles size={16} />
                {t('home.visit.badge')}
              </span>
              <h2 className="section-title">
                {t('home.visit.title')}
                <br />
                <span className="gradient-text">{t('home.visit.titleHighlight')}</span>
              </h2>
              <p className="visit-text">{t('home.visit.text')}</p>
              <div className="visit-actions">
                <Link to="/locations" className="btn btn-primary">
                  {t('home.visit.ctaPrimary')} <ArrowRight size={18} />
                </Link>
                <Link to="/menu" className="btn btn-outline-light">
                  {t('home.visit.ctaSecondary')}
                </Link>
              </div>
            </div>
            <div className="visit-visual">
              <img src="/model-restaurant.png" alt={t('home.visit.imageAlt')} />
              <div className="visit-sticker">
                <Sticker variant="gold" rotate={8}>{t('home.visit.sticker')}</Sticker>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .visit {
            background: var(--color-bg);
          }
          .visit-card {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            border-radius: var(--radius-xl);
            padding: 64px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
            color: white;
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
          }
          .visit-card::before {
            content: '';
            position: absolute;
            top: -80px;
            right: -80px;
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background: var(--color-accent);
            opacity: 0.2;
          }
          .visit-card::after {
            content: '';
            position: absolute;
            bottom: -60px;
            left: -60px;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: var(--color-fresh);
            opacity: 0.15;
          }
          .visit-content {
            position: relative;
            z-index: 1;
          }
          .visit-content .section-title {
            color: white;
            margin-bottom: 16px;
          }
          .visit-content .gradient-text {
            filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
          }
          .visit-text {
            font-size: 1.15rem;
            color: rgba(255, 255, 255, 0.9);
            max-width: 480px;
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .visit-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
          }
          .visit-visual {
            position: relative;
            z-index: 1;
            border-radius: var(--radius-lg);
            overflow: hidden;
            transform: rotate(3deg);
            border: 8px solid white;
            box-shadow: var(--shadow-md);
          }
          .visit-visual img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 4/3;
          }
          .visit-sticker {
            position: absolute;
            bottom: -16px;
            left: -20px;
            z-index: 2;
          }
          @media (max-width: 900px) {
            .visit-card {
              grid-template-columns: 1fr;
              padding: 40px;
            }
            .visit-visual {
              order: -1;
            }
          }
          @media (max-width: 480px) {
            .visit-card {
              padding: 32px 24px;
            }
            .visit-actions {
              flex-direction: column;
            }
            .visit-actions .btn {
              width: 100%;
            }
          }
        `}</style>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-section-header">
            <span className="badge">{t('home.stats.badge')}</span>
            <h2 className="section-title">{t('home.stats.title')}</h2>
            <Squiggle color="var(--mm-coral)" width={140} height={24} strokeWidth={5} />
          </div>
          <StatsCounter stats={stats} />
        </div>

        <style>{`
          .stats-section {
            background: var(--color-surface);
          }
          .stats-section-header {
            text-align: center;
            margin-bottom: 48px;
          }
          .stats-section-header .badge {
            margin-bottom: 16px;
          }
          .stats-section-header .section-title {
            margin-bottom: 12px;
          }
        `}</style>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-stickers">
              <Sticker variant="red" icon="flame" rotate={-10}>{t('home.cta.sticker1')}</Sticker>
              <Sticker variant="gold" rotate={6}>{t('home.cta.sticker2')}</Sticker>
            </div>
            <h2 className="cta-title">{t('home.cta.title')}</h2>
            <p className="cta-text">{t('home.cta.text')}</p>
            <Link to="/menu" className="btn btn-gold">
              {t('home.cta.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .cta-section {
            background: var(--color-bg);
          }
          .cta-card {
            background: var(--color-text);
            color: white;
            border-radius: var(--radius-xl);
            padding: 72px;
            text-align: center;
            position: relative;
            overflow: hidden;
            border: 4px solid var(--color-text);
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
            background: var(--color-accent);
            opacity: 0.15;
          }
          .cta-stickers {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-bottom: 24px;
            position: relative;
            z-index: 1;
          }
          .cta-title {
            font-size: clamp(2.25rem, 6vw, 4rem);
            font-weight: 900;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
            text-transform: uppercase;
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
              padding: 48px 24px;
            }
            .cta-stickers {
              flex-wrap: wrap;
            }
          }
        `}</style>
      </section>
    </>
  )
}
