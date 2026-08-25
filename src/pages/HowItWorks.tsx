import { ClipboardList, MapPinned, FileCheck, Handshake, GraduationCap, Rocket, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Sticker from '../components/Sticker.tsx'
import Starburst from '../components/Starburst.tsx'
import Squiggle from '../components/Squiggle.tsx'
import { useTranslation } from '../i18n/index.ts'

const stepIcons: Record<string, React.ComponentType<{ size?: number | string }>> = {
  ClipboardList,
  MapPinned,
  FileCheck,
  Handshake,
  GraduationCap,
  Rocket,
}

type StepItem = { iconKey: string; step: string; title: string; text: string }

export default function HowItWorks() {
  const { t, getArray } = useTranslation()

  const steps = getArray('howItWorks.steps') as StepItem[]
  const supportList = getArray('howItWorks.support.list') as string[]

  return (
    <>
      <section className="how-it-works-hero">
        <div className="how-it-works-hero-pattern pattern-arrows" aria-hidden="true" />
        <div className="how-it-works-hero-path" aria-hidden="true">
          <svg viewBox="0 0 600 160" preserveAspectRatio="none">
            <path d="M20 140 C 120 140, 120 20, 220 20 S 320 140, 420 140 S 520 60, 580 60" fill="none" stroke="var(--mm-coral)" strokeWidth="3" strokeDasharray="8 8" />
            <polygon points="570,50 590,60 570,70" fill="var(--mm-coral)" />
          </svg>
        </div>
        <div className="container how-it-works-hero-inner">
          <div className="how-it-works-hero-content">
            <span className="badge badge-fresh">
              <Rocket size={16} />
              {t('howItWorks.hero.badge')}
            </span>
            <h1 className="how-it-works-hero-title display-text">
              {t('howItWorks.hero.title')}
              <br />
              <span className="gradient-text">{t('howItWorks.hero.titleHighlight')}</span>
            </h1>
            <p className="how-it-works-hero-subtitle">{t('howItWorks.hero.subtitle')}</p>
            <div className="how-it-works-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {t('howItWorks.hero.ctaPrimary')} <ArrowRight size={18} />
              </Link>
              <Link to="/models" className="btn btn-secondary">
                {t('howItWorks.hero.ctaSecondary')}
              </Link>
            </div>
            <Squiggle color="var(--mm-fresh)" width={160} height={24} strokeWidth={5} className="how-it-works-hero-squiggle" />
          </div>

          <div className="how-it-works-hero-steps">
            <div className="step-bubble step-bubble-1">01</div>
            <div className="step-bubble step-bubble-2">02</div>
            <div className="step-bubble step-bubble-3">03</div>
            <div className="step-bubble step-bubble-4">04</div>
            <div className="step-bubble step-bubble-5">05</div>
            <div className="step-bubble step-bubble-6">06</div>
            <div className="how-it-works-stickers">
              <Sticker variant="hot" rotate={-8}>{t('howItWorks.hero.sticker1')}</Sticker>
              <Sticker variant="gold" rotate={6}>{t('howItWorks.hero.sticker2')}</Sticker>
              <Sticker variant="fresh" rotate={-4}>{t('howItWorks.hero.sticker3')}</Sticker>
            </div>
            <Starburst color="var(--mm-gold)" size={80} className="how-it-works-starburst" />
          </div>
        </div>

        <style>{`
          .how-it-works-hero {
            position: relative;
            overflow: hidden;
            padding: 100px 0 60px;
            background: var(--color-bg);
            border-bottom: 4px dashed var(--mm-border);
          }
          .how-it-works-hero-pattern {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .how-it-works-hero-path {
            position: absolute;
            bottom: 10%;
            left: 0;
            width: 100%;
            height: 160px;
            pointer-events: none;
            opacity: 0.25;
            z-index: 0;
          }
          .how-it-works-hero-path svg {
            width: 100%;
            height: 100%;
          }
          .how-it-works-hero-path path {
            animation: border-dance 2s linear infinite;
          }
          .how-it-works-hero-inner {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 48px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .how-it-works-hero-content {
            max-width: 640px;
          }
          .how-it-works-hero-title {
            font-size: clamp(2.75rem, 7vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            margin: 24px 0 20px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
          }
          .how-it-works-hero-subtitle {
            font-size: 1.25rem;
            color: var(--color-muted);
            max-width: 540px;
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .how-it-works-hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 24px;
          }
          .how-it-works-hero-squiggle {
            margin-top: 8px;
          }
          .how-it-works-hero-steps {
            position: relative;
            height: 420px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .step-bubble {
            position: absolute;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.1rem;
            color: white;
            box-shadow: var(--shadow-md);
            animation: float 5s ease-in-out infinite;
          }
          .step-bubble-1 { background: var(--color-primary); top: 8%; left: 10%; animation-delay: 0s; }
          .step-bubble-2 { background: var(--color-secondary); top: 30%; right: 15%; animation-delay: 0.5s; }
          .step-bubble-3 { background: var(--color-fresh); top: 52%; left: 25%; animation-delay: 1s; }
          .step-bubble-4 { background: var(--color-violet); top: 14%; right: 38%; animation-delay: 1.5s; }
          .step-bubble-5 { background: var(--color-hot); top: 62%; right: 30%; animation-delay: 2s; }
          .step-bubble-6 { background: var(--color-electric); top: 40%; left: 5%; animation-delay: 2.5s; }
          .how-it-works-stickers {
            position: absolute;
            bottom: 4%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .how-it-works-starburst {
            position: absolute;
            top: -20px;
            right: 0;
            animation: spin-slow 16s linear infinite;
          }
          @media (max-width: 900px) {
            .how-it-works-hero {
              padding: 60px 0 40px;
            }
            .how-it-works-hero-path {
              display: none;
            }
            .how-it-works-hero-inner {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 32px;
            }
            .how-it-works-hero-content {
              max-width: 100%;
            }
            .how-it-works-hero-actions {
              justify-content: center;
            }
            .how-it-works-hero-squiggle {
              margin: 0 auto;
            }
            .how-it-works-hero-steps {
              height: 320px;
            }
            .how-it-works-starburst {
              display: none;
            }
          }
        `}</style>
      </section>

      <section className="section steps-section">
        <div className="container">
          <div className="steps-timeline">
            {steps.map((item, index) => {
              const IconComponent = stepIcons[item.iconKey]
              return (
                <div className="step-row" key={item.title}>
                  <div className="step-number-column">
                    <div className="step-number-bubble">{item.step}</div>
                    {index < steps.length - 1 && <div className="step-line" />}
                  </div>
                  <div className="step-card">
                    <div className="step-icon">
                      {IconComponent && <IconComponent size={28} />}
                    </div>
                    <h3 className="step-title">{item.title}</h3>
                    <p className="step-text">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <style>{`
          .steps-section {
            background: var(--color-bg);
          }
          .steps-timeline {
            max-width: 800px;
            margin: 0 auto;
          }
          .step-row {
            display: flex;
            gap: 32px;
            position: relative;
          }
          .step-number-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
            width: 80px;
          }
          .step-number-bubble {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.1rem;
            box-shadow: var(--shadow-md);
            z-index: 1;
          }
          .step-line {
            width: 4px;
            flex: 1;
            background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
            margin: 8px 0;
            border-radius: 2px;
          }
          .step-card {
            background: white;
            border-radius: var(--radius-lg);
            padding: 32px;
            box-shadow: var(--shadow-sm);
            margin-bottom: 32px;
            flex: 1;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-left: 4px solid var(--color-primary);
          }
          .step-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
          }
          .step-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
          }
          .step-title {
            font-size: 1.5rem;
            font-weight: 900;
            margin-bottom: 8px;
          }
          .step-text {
            color: var(--color-muted);
            font-size: 1rem;
            line-height: 1.6;
          }
          @media (max-width: 600px) {
            .step-row {
              gap: 16px;
            }
            .step-number-column {
              width: 56px;
            }
            .step-number-bubble {
              width: 48px;
              height: 48px;
              font-size: 0.9rem;
            }
            .step-card {
              padding: 24px;
            }
          }
        `}</style>
      </section>

      <section className="section support-section">
        <div className="container">
          <div className="support-grid">
            <div className="support-content">
              <span className="badge badge-gold">{t('howItWorks.support.badge')}</span>
              <h2 className="section-title">{t('howItWorks.support.title')}</h2>
              <p className="section-subtitle">{t('howItWorks.support.subtitle')}</p>
              <ul className="support-list">
                {supportList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="support-image">
              <div className="image-card">
                <img src="/model-restaurant.png" alt={t('howItWorks.support.imageAlt')} />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .support-section {
            background: var(--color-surface);
          }
          .support-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          .support-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .support-list li {
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--color-text);
            padding-left: 28px;
            position: relative;
          }
          .support-list li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          }
          .support-image .image-card {
            height: 420px;
            transform: rotate(2deg);
          }
          .support-image img {
            height: 100%;
          }
          @media (max-width: 900px) {
            .support-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .support-image .image-card {
              height: 300px;
              transform: rotate(0deg);
            }
          }
        `}</style>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">{t('howItWorks.cta.title')}</h2>
            <p className="cta-text">{t('howItWorks.cta.text')}</p>
            <Link to="/contact" className="btn btn-gold">
              {t('howItWorks.cta.cta')} <Rocket size={18} />
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
