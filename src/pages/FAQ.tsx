import { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    question: 'Do I need restaurant experience?',
    answer: 'No. Our model is designed to be accessible for first-time operators as well as experienced business owners. We provide training, playbooks, and ongoing support so you can run the business confidently from day one.',
  },
  {
    question: 'Do I need a chef?',
    answer: 'No. METRO MOMO uses pre-portioned recipes and a simple preparation process that reduces kitchen complexity. Your team can be trained to produce consistent, high-quality momos without traditional chef experience.',
  },
  {
    question: 'What franchise formats are available?',
    answer: 'We offer four formats: Premium Street Stall, Mall Kiosk, Shipping Container, and Full Restaurant. Each has a different setup cost, footprint, and operational profile. Visit our Models page to compare them.',
  },
  {
    question: 'What support will I receive?',
    answer: 'You receive onboarding, site selection guidance, training, supply chain access, marketing support, operational coaching, and launch assistance. Support continues after opening with reviews, menu updates, and community access.',
  },
  {
    question: 'How do I choose the right territory?',
    answer: 'Our team evaluates footfall, local competition, demographic fit, and your budget with you. We then protect your agreed territory so you can build your customer base without internal competition.',
  },
  {
    question: 'What is the application process?',
    answer: 'Submit your interest, attend a discovery meeting, complete an application and site review, sign the agreement and secure your territory, complete training, and launch. The full process is outlined on our How It Works page.',
  },
  {
    question: 'Can I use the Fewa operations app later?',
    answer: 'Yes. As the network grows, franchisees will be able to connect to the same operations platform that powers modern restaurant teams — covering POS, ordering, kitchen, and back-office tools.',
  },
  {
    question: 'How long does it take to open?',
    answer: 'Timeline depends on the format. A street stall or kiosk can be ready in 6–10 weeks, while a restaurant typically takes 3–6 months including site works, permits, and training.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <span className="badge">FAQ</span>
          <h1 className="page-hero-title">
            Questions?
            <br />
            <span className="gradient-text">We have answers.</span>
          </h1>
          <p className="page-hero-subtitle">
            Everything you need to know about becoming a METRO MOMO franchisee.
          </p>
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
                <h3>Still have questions?</h3>
                <p>Our franchise team is happy to talk through your specific situation.</p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us <ArrowRight size={18} />
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
