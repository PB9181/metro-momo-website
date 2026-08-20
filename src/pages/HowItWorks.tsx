import { ClipboardList, MapPinned, FileCheck, Handshake, GraduationCap, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Submit Interest',
    text: 'Tell us your preferred location, format, and budget. We review every application personally.',
  },
  {
    step: '02',
    icon: MapPinned,
    title: 'Discovery Meeting',
    text: 'Meet our team to understand the concept, operations, and whether the fit is mutual.',
  },
  {
    step: '03',
    icon: FileCheck,
    title: 'Application & Review',
    text: 'Complete the application, site review, and financial model together.',
  },
  {
    step: '04',
    icon: Handshake,
    title: 'Agreement & Territory',
    text: 'Secure your protected area, sign the agreement, and begin setup.',
  },
  {
    step: '05',
    icon: GraduationCap,
    title: 'Training',
    text: 'Intensive operations, product, and customer-experience training for you and your team.',
  },
  {
    step: '06',
    icon: Rocket,
    title: 'Launch Day',
    text: 'Open with grand-opening support, marketing push, and a field team on standby.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <span className="badge">How It Works</span>
          <h1 className="page-hero-title">
            From application to
            <br />
            <span className="gradient-text">opening day</span>
          </h1>
          <p className="page-hero-subtitle">
            A clear, six-step path for owners who want to move fast and build something lasting.
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

      <section className="section steps-section">
        <div className="container">
          <div className="steps-timeline">
            {steps.map((item, index) => (
              <div className="step-row" key={item.title}>
                <div className="step-number-column">
                  <div className="step-number-bubble">{item.step}</div>
                  {index < steps.length - 1 && <div className="step-line" />}
                </div>
                <div className="step-card">
                  <div className="step-icon">
                    <item.icon size={28} />
                  </div>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-text">{item.text}</p>
                </div>
              </div>
            ))}
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
              <span className="badge badge-gold">Ongoing Support</span>
              <h2 className="section-title">We stay with you after launch</h2>
              <p className="section-subtitle">
                Launch is just the beginning. Our franchise team provides continuous support to keep your unit growing.
              </p>
              <ul className="support-list">
                <li>Monthly performance reviews</li>
                <li>New product and menu updates</li>
                <li>Marketing campaigns and seasonal promotions</li>
                <li>Supply chain and procurement support</li>
                <li>Operations coaching and mystery-shop programs</li>
                <li>Access to the METRO MOMO owner community</li>
              </ul>
            </div>
            <div className="support-image">
              <div className="image-card">
                <img src="/model-restaurant.png" alt="METRO MOMO restaurant support" />
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
            <h2 className="cta-title">Ready to start your journey?</h2>
            <p className="cta-text">
              Submit your interest and our team will walk you through every step.
            </p>
            <Link to="/contact" className="btn btn-gold">
              Submit Interest <Rocket size={18} />
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
