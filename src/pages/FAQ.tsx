import { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowRight, MessageCircleQuestion } from 'lucide-react'
import { Link } from 'react-router-dom'
import Sticker from '../components/Sticker.tsx'
import Starburst from '../components/Starburst.tsx'
import { useTranslation } from '../i18n/index.ts'

type FaqItem = { question: string; answer: string }

export default function FAQ() {
  const { t, getArray } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = getArray('faq.items') as FaqItem[]

  return (
    <>
      <section className="faq-hero">
        <div className="faq-hero-pattern pattern-speech" aria-hidden="true" />
        <div className="faq-hero-bubbles" aria-hidden="true">
          <div className="faq-bubble faq-bubble-1">?</div>
          <div className="faq-bubble faq-bubble-2">?</div>
          <div className="faq-bubble faq-bubble-3">?</div>
          <div className="faq-bubble faq-bubble-4">?</div>
        </div>
        <div className="container faq-hero-inner">
          <div className="faq-hero-content">
            <span className="badge badge-play">
              <MessageCircleQuestion size={16} />
              {t('faq.hero.badge')}
            </span>
            <h1 className="faq-hero-title display-text">
              {t('faq.hero.title')}
              <br />
              <span className="gradient-text">{t('faq.hero.titleHighlight')}</span>
            </h1>
            <p className="faq-hero-subtitle">{t('faq.hero.subtitle')}</p>
            <div className="faq-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {t('faq.hero.ctaPrimary')} <ArrowRight size={18} />
              </Link>
              <Link to="/models" className="btn btn-secondary">
                {t('faq.hero.ctaSecondary')}
              </Link>
            </div>
            <div className="faq-hero-stickers">
              <Sticker variant="play" rotate={-8}>{t('faq.hero.sticker1')}</Sticker>
              <Sticker variant="hot" rotate={6}>{t('faq.hero.sticker2')}</Sticker>
              <Sticker variant="gold" rotate={-4}>{t('faq.hero.sticker3')}</Sticker>
            </div>
          </div>
          <Starburst color="var(--mm-pink)" size={96} className="faq-starburst" />
        </div>

        <style>{`
          .faq-hero {
            position: relative;
            overflow: hidden;
            padding: 100px 0 60px;
            background: linear-gradient(135deg, #fff0f3 0%, #fff8f0 100%);
            border-bottom: 4px dashed var(--mm-border);
            text-align: center;
          }
          .faq-hero-pattern {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .faq-hero-bubbles {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .faq-bubble {
            position: absolute;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: white;
            border: 3px solid var(--mm-pink);
            color: var(--mm-pink);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.8rem;
            box-shadow: var(--shadow-sm);
            animation: question-bounce 4s ease-in-out infinite;
          }
          .faq-bubble-1 { top: 12%; left: 8%; animation-delay: 0s; }
          .faq-bubble-2 { top: 25%; right: 10%; animation-delay: 1s; }
          .faq-bubble-3 { bottom: 20%; left: 12%; animation-delay: 2s; }
          .faq-bubble-4 { bottom: 30%; right: 8%; animation-delay: 0.5s; }
          .faq-hero-inner {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
          }
          .faq-hero-title {
            font-size: clamp(2.75rem, 7vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            margin: 24px 0 20px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
          }
          .faq-hero-subtitle {
            font-size: 1.25rem;
            color: var(--color-muted);
            max-width: 640px;
            margin: 0 auto 32px;
            line-height: 1.6;
          }
          .faq-hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 28px;
          }
          .faq-hero-stickers {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .faq-starburst {
            position: absolute;
            top: -20px;
            right: -20px;
            animation: spin-slow 18s linear infinite;
            z-index: 0;
          }
          @media (max-width: 900px) {
            .faq-hero {
              padding: 60px 0 40px;
            }
            .faq-bubble {
              width: 48px;
              height: 48px;
              font-size: 1.4rem;
            }
            .faq-starburst {
              display: none;
            }
          }
        `}</style>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-sidebar">
              <div className="faq-contact-card">
                <HelpCircle size={40} />
                <h3>{t('faq.sidebar.title')}</h3>
                <p>{t('faq.sidebar.text')}</p>
                <Link to="/contact" className="btn btn-primary">
                  {t('faq.sidebar.cta')} <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={24} className="faq-chevron" />
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .faq-section {
            background: var(--color-bg);
          }
          .faq-grid {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 48px;
            align-items: start;
          }
          .faq-sidebar {
            position: sticky;
            top: 120px;
          }
          .faq-contact-card {
            background: white;
            border-radius: var(--radius-lg);
            padding: 32px;
            box-shadow: var(--shadow-sm);
            text-align: center;
          }
          .faq-contact-card svg {
            color: var(--color-primary);
            margin-bottom: 16px;
          }
          .faq-contact-card h3 {
            font-size: 1.25rem;
            font-weight: 900;
            margin-bottom: 8px;
          }
          .faq-contact-card p {
            color: var(--color-muted);
            margin-bottom: 20px;
            font-size: 0.95rem;
          }
          .faq-contact-card .btn {
            width: 100%;
          }
          .faq-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .faq-item {
            background: white;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            transition: box-shadow 0.2s ease;
          }
          .faq-item:hover {
            box-shadow: var(--shadow-md);
          }
          .faq-question {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            padding: 24px;
            background: transparent;
            font-size: 1.1rem;
            font-weight: 800;
            text-align: left;
            color: var(--color-text);
            transition: color 0.2s ease;
          }
          .faq-question:hover {
            color: var(--color-primary);
          }
          .faq-chevron {
            transition: transform 0.3s ease;
            flex-shrink: 0;
          }
          .faq-item.open .faq-chevron {
            transform: rotate(180deg);
          }
          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
          }
          .faq-item.open .faq-answer {
            max-height: 300px;
            padding: 0 24px 24px;
          }
          .faq-answer p {
            color: var(--color-muted);
            line-height: 1.7;
          }
          @media (max-width: 900px) {
            .faq-grid {
              grid-template-columns: 1fr;
            }
            .faq-sidebar {
              position: static;
              order: 2;
            }
            .faq-list {
              order: 1;
            }
          }
        `}</style>
      </section>
    </>
  )
}
