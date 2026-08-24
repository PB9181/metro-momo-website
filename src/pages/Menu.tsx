import { useState } from 'react'
import { Flame, Leaf, Sparkles, ArrowRight, ChefHat, WheatOff, MilkOff, NutOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import { menuCategories } from '../data/menuData.ts'
import Sticker from '../components/Sticker.tsx'
import Squiggle from '../components/Squiggle.tsx'
import Starburst from '../components/Starburst.tsx'
import { useTranslation } from '../i18n/index.ts'

export default function Menu() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id)

  return (
    <>
      <section className="menu-hero">
        <div className="blob blob-red" />
        <div className="blob blob-fresh" />
        <div className="menu-hero-pattern pattern-dots" aria-hidden="true" />
        <div className="container menu-hero-inner">
          <div className="menu-hero-content">
            <span className="badge badge-gold">
              <ChefHat size={16} />
              {t('menu.hero.badge')}
            </span>
            <h1 className="menu-hero-title display-text">
              {t('menu.hero.title')}
              <br />
              <span className="gradient-text">{t('menu.hero.titleHighlight')}</span>
            </h1>
            <p className="menu-hero-subtitle">{t('menu.hero.subtitle')}</p>
            <div className="menu-hero-actions">
              <Link to="/locations" className="btn btn-primary">
                {t('menu.hero.ctaPrimary')} <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {t('menu.hero.ctaSecondary')}
              </Link>
            </div>
          </div>
          <div className="menu-hero-stickers">
            <Sticker variant="red" icon="flame" rotate={-12}>{t('menu.hero.sticker1')}</Sticker>
            <Sticker variant="gold" icon="star" rotate={8}>{t('menu.hero.sticker2')}</Sticker>
            <Sticker variant="fresh" icon="sparkles" rotate={-6}>{t('menu.hero.sticker3')}</Sticker>
            <Starburst color="var(--mm-gold)" size={72} className="menu-starburst" />
          </div>
        </div>

        <style>{`
          .menu-hero {
            position: relative;
            overflow: hidden;
            padding: 100px 0 60px;
            background: var(--color-bg);
            border-bottom: 4px dashed var(--mm-border);
          }
          .menu-hero-pattern {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .menu-hero-inner {
            display: grid;
            grid-template-columns: 1.25fr 0.75fr;
            gap: 48px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .menu-hero-content {
            max-width: 720px;
          }
          .menu-hero-title {
            font-size: clamp(2.75rem, 7vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            margin: 24px 0 20px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
          }
          .menu-hero-subtitle {
            font-size: 1.25rem;
            color: var(--color-muted);
            max-width: 540px;
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .menu-hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
          }
          .menu-hero-stickers {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            position: relative;
          }
          .menu-hero-stickers .sticker:nth-child(2) {
            align-self: flex-end;
          }
          .menu-hero-stickers .sticker:nth-child(3) {
            align-self: center;
          }
          .menu-starburst {
            position: absolute;
            top: -24px;
            right: -24px;
            animation: spin-slow 12s linear infinite;
          }
          @media (max-width: 900px) {
            .menu-hero-inner {
              grid-template-columns: 1fr;
            }
            .menu-hero-stickers {
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: center;
            }
            .menu-hero-stickers .sticker:nth-child(2),
            .menu-hero-stickers .sticker:nth-child(3) {
              align-self: auto;
            }
            .menu-starburst {
              display: none;
            }
          }
        `}</style>
      </section>

      <section className="menu-categories">
        <div className="container">
          <div className="menu-category-tabs">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`menu-category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="menu-category-content">
            {menuCategories.map((category) => {
              if (category.id !== activeCategory) return null
              return (
                <div key={category.id} className="menu-category-panel">
                  <div className="menu-category-header">
                    <h2 className="section-title">{category.title}</h2>
                    <p className="section-subtitle">{category.subtitle}</p>
                    <Squiggle color="var(--mm-coral)" width={160} height={24} strokeWidth={5} />
                  </div>
                  <div className="menu-items-grid">
                    {category.items.map((item) => (
                      <div className="menu-item-card" key={item.name}>
                        <div className="menu-item-header">
                          <h3 className="menu-item-name">{item.name}</h3>
                          <span className="menu-item-price">{item.price}</span>
                        </div>
                        <p className="menu-item-description">{item.description}</p>
                        <div className="menu-item-tags">
                          {item.spicy && (
                            <span className="menu-tag menu-tag-spicy">
                              <Flame size={14} /> Spicy
                            </span>
                          )}
                          {item.veg && !item.vegan && (
                            <span className="menu-tag menu-tag-veg">
                              <Leaf size={14} /> Veg
                            </span>
                          )}
                          {item.vegan && (
                            <span className="dietary-badge dietary-badge-vegan">
                              <Leaf size={12} /> Vegan
                            </span>
                          )}
                          {item.glutenFree && (
                            <span className="dietary-badge dietary-badge-gluten-free">
                              <WheatOff size={12} /> GF
                            </span>
                          )}
                          {item.dairyFree && (
                            <span className="dietary-badge dietary-badge-dairy-free">
                              <MilkOff size={12} /> DF
                            </span>
                          )}
                          {item.nutFree && (
                            <span className="dietary-badge dietary-badge-nut-free">
                              <NutOff size={12} /> NF
                            </span>
                          )}
                          {item.new && (
                            <span className="menu-tag menu-tag-new">
                              <Sparkles size={14} /> New
                            </span>
                          )}
                          {item.tags?.map((tag) => (
                            <span className="menu-tag" key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <style>{`
          .menu-categories {
            background: var(--color-surface);
            padding: 64px 0 80px;
          }
          .menu-category-tabs {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 48px;
            position: sticky;
            top: 104px;
            z-index: 90;
            background: rgba(255, 244, 232, 0.92);
            backdrop-filter: blur(12px);
            padding: 16px;
            border-radius: var(--radius-round);
            border: 2px dashed var(--mm-border);
          }
          .menu-category-tab {
            padding: 14px 24px;
            border-radius: var(--radius-round);
            font-weight: 900;
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 0.02em;
            background: white;
            color: var(--color-text);
            border: 2px solid transparent;
            transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
            box-shadow: var(--shadow-sm);
          }
          .menu-category-tab:hover {
            transform: translateY(-3px) rotate(-1deg);
            border-color: var(--color-primary);
            color: var(--color-primary);
          }
          .menu-category-tab.active {
            background: var(--color-primary);
            color: white;
            border-color: var(--color-primary);
            transform: translateY(-3px) rotate(-1deg);
          }
          .menu-category-header {
            text-align: center;
            margin-bottom: 48px;
          }
          .menu-category-header .section-title {
            margin-bottom: 12px;
          }
          .menu-category-header .section-subtitle {
            margin: 0 auto 16px;
            max-width: 560px;
          }
          .menu-items-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .menu-item-card {
            background: white;
            border-radius: var(--radius-lg);
            padding: 28px;
            box-shadow: var(--shadow-sm);
            border: 2px solid transparent;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .menu-item-card:hover {
            transform: translateY(-8px) rotate(1deg) scale(1.02);
            box-shadow: var(--shadow-md), 0 0 40px rgba(255, 107, 53, 0.15);
            border-color: rgba(255, 107, 53, 0.4);
          }
          .menu-item-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 16px;
            margin-bottom: 12px;
          }
          .menu-item-name {
            font-size: 1.25rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -0.01em;
            line-height: 1.1;
          }
          .menu-item-price {
            font-size: 1.35rem;
            font-weight: 900;
            color: var(--color-primary);
            flex-shrink: 0;
          }
          .menu-item-description {
            color: var(--color-muted);
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 16px;
          }
          .menu-item-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          .menu-tag {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 6px 12px;
            border-radius: var(--radius-round);
            font-size: 0.75rem;
            font-weight: 900;
            text-transform: uppercase;
            background: var(--color-light);
            color: var(--color-text);
          }
          .menu-tag-spicy {
            background: rgba(232, 23, 43, 0.1);
            color: var(--color-primary);
          }
          .menu-tag-veg {
            background: rgba(6, 203, 164, 0.12);
            color: var(--color-fresh-dark);
          }
          .menu-tag-new {
            background: rgba(255, 210, 63, 0.2);
            color: #B07D00;
          }
          @media (max-width: 900px) {
            .menu-category-tabs {
              top: 88px;
            }
            .menu-items-grid {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 480px) {
            .menu-category-tab {
              padding: 10px 16px;
              font-size: 0.8rem;
            }
            .menu-item-card {
              padding: 20px;
            }
            .menu-item-name {
              font-size: 1.1rem;
            }
            .menu-item-price {
              font-size: 1.15rem;
            }
          }
        `}</style>
      </section>

      <section className="menu-cta">
        <div className="container">
          <div className="menu-cta-card">
            <div className="blob blob-play" />
            <h2 className="menu-cta-title">{t('menu.cta.title')}</h2>
            <p className="menu-cta-text">{t('menu.cta.text')}</p>
            <Link to="/locations" className="btn btn-gold">
              {t('menu.cta.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .menu-cta {
            background: var(--color-bg);
            padding: 80px 0;
          }
          .menu-cta-card {
            background: var(--color-text);
            color: white;
            border-radius: var(--radius-xl);
            padding: 64px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .menu-cta-card .blob {
            opacity: 0.2;
          }
          .menu-cta-title {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 900;
            margin-bottom: 16px;
            text-transform: uppercase;
            position: relative;
            z-index: 1;
          }
          .menu-cta-text {
            font-size: 1.15rem;
            color: rgba(255, 255, 255, 0.8);
            max-width: 560px;
            margin: 0 auto 32px;
            position: relative;
            z-index: 1;
          }
          .menu-cta-card .btn {
            position: relative;
            z-index: 1;
          }
          @media (max-width: 768px) {
            .menu-cta-card {
              padding: 40px 24px;
            }
          }
        `}</style>
      </section>
    </>
  )
}
