import { useState, FormEvent } from 'react'
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'
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
      <section className="section page-hero">
        <div className="container">
          <span className="badge">{t('contact.hero.badge')}</span>
          <h1 className="page-hero-title display-text">
            {t('contact.hero.title')}
            <br />
            <span className="gradient-text">{t('contact.hero.titleHighlight')}</span>
          </h1>
          <p className="page-hero-subtitle">{t('contact.hero.subtitle')}</p>
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

      <section className="section contact-section">
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
