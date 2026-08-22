import { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/index.ts'

type FaqItem = { question: string; answer: string }

export default function FAQ() {
  const { t, getArray } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = getArray('faq.items') as FaqItem[]

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <span className="badge">{t('faq.hero.badge')}</span>
          <h1 className="page-hero-title display-text">
            {t('faq.hero.title')}
            <br />
            <span className="gradient-text">{t('faq.hero.titleHighlight')}</span>
          </h1>
          <p className="page-hero-subtitle">{t('faq.hero.subtitle')}</p>
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
