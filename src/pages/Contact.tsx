import { useState, FormEvent } from 'react'
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <span className="badge">Apply Now</span>
          <h1 className="page-hero-title display-text">
            Start your
            <br />
            <span className="gradient-text">partnership journey</span>
          </h1>
          <p className="page-hero-subtitle">
            Tell us about yourself and your target market. Our team will reach out within 48 hours.
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

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="badge badge-gold">Why METRO MOMO?</span>
              <h2 className="section-title">What you get as a partner</h2>
              <p className="section-subtitle">
                No prior restaurant experience required for all entry models. We are looking for owners who care about great food and community.
              </p>
              <ul className="contact-checklist">
                <li>
                  <CheckCircle size={22} />
                  Protected territory and exclusive rights
                </li>
                <li>
                  <CheckCircle size={22} />
                  Flexible formats: stall, kiosk, container, restaurant
                </li>
                <li>
                  <CheckCircle size={22} />
                  Training, supply chain, and marketing support
                </li>
                <li>
                  <CheckCircle size={22} />
                  Future-ready tech platform access
                </li>
              </ul>

              <div className="contact-details">
                <div className="contact-detail">
                  <MapPin size={20} />
                  <div>
                    <strong>Head Office</strong>
                    <span>Metro Momo HQ, Your City</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <Phone size={20} />
                  <div>
                    <strong>Phone</strong>
                    <span>+46 12 345 67 89</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <Mail size={20} />
                  <div>
                    <strong>Email</strong>
                    <span>hello@metromomo.com</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <Clock size={20} />
                  <div>
                    <strong>Response time</strong>
                    <span>Within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Application received!</h3>
                  <p>We will review your details and contact you within 48 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="form-title">Submit your interest</h3>
                  <div className="form-row">
                    <label className="form-field">
                      <span>Full name</span>
                      <input type="text" placeholder="Your name" required />
                    </label>
                    <label className="form-field">
                      <span>Email</span>
                      <input type="email" placeholder="you@example.com" required />
                    </label>
                  </div>
                  <div className="form-row">
                    <label className="form-field">
                      <span>Phone</span>
                      <input type="tel" placeholder="+46 70 123 4567" />
                    </label>
                    <label className="form-field">
                      <span>City / Territory</span>
                      <input type="text" placeholder="Where you want to open" required />
                    </label>
                  </div>
                  <label className="form-field">
                    <span>Preferred model</span>
                    <select>
                      <option value="">Select a format</option>
                      <option value="stall">Street Stall</option>
                      <option value="kiosk">Mall Kiosk</option>
                      <option value="container">Shipping Container</option>
                      <option value="restaurant">Full Restaurant</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </label>
                  <label className="form-field">
                    <span>Restaurant or business experience</span>
                    <select>
                      <option value="">Select experience level</option>
                      <option value="none">New to hospitality</option>
                      <option value="some">Some restaurant experience</option>
                      <option value="owner">Current restaurant owner</option>
                      <option value="multi">Multi-unit operator</option>
                    </select>
                  </label>
                  <label className="form-field">
                    <span>Message</span>
                    <textarea rows={4} placeholder="Tell us about your vision, budget range, or questions..." />
                  </label>
                  <button type="submit" className="btn btn-primary contact-submit">
                    Submit Application <Send size={18} />
                  </button>
                  <p className="form-disclaimer">
                    By submitting, you agree to be contacted by the METRO MOMO partnership team.
                  </p>
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
