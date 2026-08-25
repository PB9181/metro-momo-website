import { useState, FormEvent } from 'react'
import { Send, CheckCircle, MapPin, Phone, Mail, Clock, ArrowRight, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import Sticker from '../components/Sticker.tsx'
import Starburst from '../components/Starburst.tsx'
import { useTranslation } from '../i18n/index.ts'

type ContactDetail = { label: string; value: string }
type SelectOption = { value: string; label: string }
type FormField = { label: string; placeholder?: string; options?: SelectOption[] }

export default function Contact() {
  const { t, getArray, getObject } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const benefits = getArray('contact.benefits.items') as string[]
  const details = getObject('contact.details') as Record<string, ContactDetail>
  const formFields = getObject('contact.form.fields') as Record<string, FormField>

  const detailIcons = [MapPin, Phone, Mail, Clock]
  const detailKeys = ['headOffice', 'phone', 'email', 'response'] as const

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-pattern pattern-dots" aria-hidden="true" />
        <div className="contact-hero-glow" aria-hidden="true" />
        <div className="container contact-hero-inner">
          <div className="contact-hero-content">
            <span className="badge badge-gold">
              <Handshake size={16} />
              {t('contact.hero.badge')}
            </span>
            <h1 className="contact-hero-title display-text">
              {t('contact.hero.title')}
              <br />
              <span className="gradient-text">{t('contact.hero.titleHighlight')}</span>
            </h1>
            <p className="contact-hero-subtitle">{t('contact.hero.subtitle')}</p>
            <div className="contact-hero-actions">
              <a href="#contact-form" className="btn btn-primary">
                {t('contact.hero.ctaPrimary')} <ArrowRight size={18} />
              </a>
              <Link to="/locations" className="btn btn-outline-light">
                {t('contact.hero.ctaSecondary')}
              </Link>
            </div>
            <div className="contact-hero-stickers">
              <Sticker variant="gold" rotate={-8}>{t('contact.hero.sticker1')}</Sticker>
              <Sticker variant="hot" rotate={6}>{t('contact.hero.sticker2')}</Sticker>
              <Sticker variant="fresh" rotate={-4}>{t('contact.hero.sticker3')}</Sticker>
            </div>
          </div>

          <div className="contact-hero-trust">
            <div className="contact-trust-card">
              <div className="contact-trust-icon"><Handshake size={32} /></div>
              <strong>Joint venture</strong>
              <span>Revenue-sharing partnership</span>
            </div>
            <div className="contact-trust-card">
              <div className="contact-trust-icon"><Clock size={32} /></div>
              <strong>48-hour reply</strong>
              <span>Partnership team response</span>
            </div>
            <div className="contact-trust-card">
              <div className="contact-trust-icon"><MapPin size={32} /></div>
              <strong>Protected territory</strong>
              <span>Exclusive rights in your area</span>
            </div>
            <Starburst color="var(--mm-gold)" size={80} className="contact-starburst" />
          </div>
        </div>

        <style>{`
          .contact-hero {
            position: relative;
            overflow: hidden;
            padding: 100px 0 60px;
            background: linear-gradient(135deg, #2a1818 0%, #1f1a1a 100%);
            color: white;
            border-bottom: 4px solid var(--mm-gold);
          }
          .contact-hero-pattern {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0.06;
            background-image: radial-gradient(circle, var(--mm-gold) 2px, transparent 2px);
            background-size: 24px 24px;
          }
          .contact-hero-glow {
            position: absolute;
            top: -80px;
            right: -80px;
            width: 360px;
            height: 360px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 210, 63, 0.18) 0%, transparent 70%);
            pointer-events: none;
            animation: blob-morph 6s ease-in-out infinite;
          }
          .contact-hero-inner {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 48px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .contact-hero-content {
            max-width: 640px;
          }
          .contact-hero-title {
            font-size: clamp(2.75rem, 7vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            margin: 24px 0 20px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
          }
          .contact-hero-title .gradient-text {
            filter: drop-shadow(0 0 20px rgba(255, 42, 140, 0.6)) drop-shadow(0 4px 12px rgba(232, 23, 43, 0.4));
          }
          .contact-hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.82);
            max-width: 540px;
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .contact-hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 28px;
          }
          .contact-hero-stickers {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
          .contact-hero-trust {
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .contact-trust-card {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            border-radius: var(--radius-lg);
            padding: 24px;
            text-align: center;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          .contact-trust-card:hover {
            transform: translateY(-6px) rotate(-1deg);
            background: rgba(255, 255, 255, 0.12);
          }
          .contact-trust-card:nth-child(3) {
            grid-column: span 2;
          }
          .contact-trust-icon {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--mm-gold) 0%, var(--mm-coral) 100%);
            color: var(--color-text);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
          }
          .contact-trust-card strong {
            display: block;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 0.9rem;
            margin-bottom: 4px;
          }
          .contact-trust-card span {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.85rem;
          }
          .contact-starburst {
            position: absolute;
            top: -24px;
            right: -24px;
            animation: spin-slow 16s linear infinite;
            z-index: 0;
          }
          @media (max-width: 900px) {
            .contact-hero {
              padding: 60px 0 40px;
            }
            .contact-hero-inner {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 40px;
            }
            .contact-hero-content {
              max-width: 100%;
            }
            .contact-hero-actions {
              justify-content: center;
            }
            .contact-hero-stickers {
              justify-content: center;
            }
            .contact-hero-trust {
              max-width: 480px;
              margin: 0 auto;
            }
            .contact-starburst {
              display: none;
            }
          }
        `}</style>
      </section>

      <section id="contact-form" className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="badge badge-gold">{t('contact.benefits.badge')}</span>
              <h2 className="section-title">{t('contact.benefits.title')}</h2>
              <p className="section-subtitle">{t('contact.benefits.subtitle')}</p>
              <ul className="contact-checklist">
                {benefits.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={22} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="contact-details">
                {detailKeys.map((key, index) => {
                  const detail = details[key]
                  const IconComponent = detailIcons[index]
                  return (
                    <div className="contact-detail" key={key}>
                      <IconComponent size={20} />
                      <div>
                        <strong>{detail.label}</strong>
                        <span>{detail.value}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>{t('contact.success.title')}</h3>
                  <p>{t('contact.success.text')}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="form-title">{t('contact.form.title')}</h3>
                  <div className="form-row">
                    <label className="form-field">
                      <span>{formFields.name.label}</span>
                      <input type="text" placeholder={formFields.name.placeholder} required />
                    </label>
                    <label className="form-field">
                      <span>{formFields.email.label}</span>
                      <input type="email" placeholder={formFields.email.placeholder} required />
                    </label>
                  </div>
                  <div className="form-row">
                    <label className="form-field">
                      <span>{formFields.phone.label}</span>
                      <input type="tel" placeholder={formFields.phone.placeholder} />
                    </label>
                    <label className="form-field">
                      <span>{formFields.city.label}</span>
                      <input type="text" placeholder={formFields.city.placeholder} required />
                    </label>
                  </div>
                  <label className="form-field">
                    <span>{formFields.model.label}</span>
                    <select>
                      {formFields.model.options?.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </label>
                  <label className="form-field">
                    <span>{formFields.experience.label}</span>
                    <select>
                      {formFields.experience.options?.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </label>
                  <label className="form-field">
                    <span>{formFields.message.label}</span>
                    <textarea rows={4} placeholder={formFields.message.placeholder} />
                  </label>
                  <button type="submit" className="btn btn-primary contact-submit">
                    {t('contact.form.submit')} <Send size={18} />
                  </button>
                  <p className="form-disclaimer">{t('contact.form.disclaimer')}</p>
                </form>
              )}
            </div>
          </div>
        </div>

        <style>{`
          .contact-section {
            background: var(--color-bg);
          }
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: start;
          }
          .contact-info {
            max-width: 480px;
          }
          .contact-checklist {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin: 24px 0 40px;
          }
          .contact-checklist li {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1rem;
            font-weight: 700;
            color: var(--color-text);
          }
          .contact-checklist li svg {
            color: var(--color-primary);
            flex-shrink: 0;
          }
          .contact-details {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .contact-detail {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 16px;
            background: white;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
          }
          .contact-detail svg {
            color: var(--color-secondary);
            flex-shrink: 0;
          }
          .contact-detail strong {
            display: block;
            font-weight: 800;
          }
          .contact-detail span {
            color: var(--color-muted);
            font-size: 0.95rem;
          }
          .contact-form-card {
            background: white;
            border-radius: var(--radius-lg);
            padding: 40px;
            box-shadow: var(--shadow-md);
            border-top: 4px solid var(--color-primary);
          }
          .form-title {
            font-size: 1.5rem;
            font-weight: 900;
            margin-bottom: 24px;
          }
          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .form-field {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-size: 0.9rem;
            font-weight: 700;
            color: var(--color-text);
          }
          .form-field input,
          .form-field select,
          .form-field textarea {
            padding: 14px 16px;
            border: 2px solid var(--mm-border);
            border-radius: var(--radius-sm);
            font-size: 1rem;
            font-family: inherit;
            background: white;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }
          .form-field input:focus,
          .form-field select:focus,
          .form-field textarea:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 4px rgba(217, 4, 41, 0.1);
          }
          .form-field textarea {
            resize: vertical;
          }
          .contact-submit {
            width: 100%;
            margin-top: 8px;
          }
          .form-disclaimer {
            font-size: 0.8rem;
            color: var(--color-muted);
            text-align: center;
            margin-top: -8px;
          }
          .contact-success {
            text-align: center;
            padding: 32px 0;
          }
          .contact-success-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgba(217, 4, 41, 0.1);
            color: var(--color-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
          }
          .contact-success h3 {
            font-size: 1.5rem;
            font-weight: 900;
            margin-bottom: 8px;
          }
          .contact-success p {
            color: var(--color-muted);
          }
          @media (max-width: 900px) {
            .contact-grid {
              grid-template-columns: 1fr;
              gap: 48px;
            }
            .contact-form-card {
              padding: 28px;
            }
            .form-row {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>
    </>
  )
}
