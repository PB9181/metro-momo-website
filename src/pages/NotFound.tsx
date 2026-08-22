import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/index.ts'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="section not-found">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-emoji">🥟</div>
          <h1 className="not-found-title">{t('notFound.title')}</h1>
          <h2 className="not-found-subtitle">{t('notFound.subtitle')}</h2>
          <p className="not-found-text">{t('notFound.text')}</p>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            {t('notFound.cta')}
          </Link>
        </div>
      </div>

      <style>{`
        .not-found {
          background: var(--color-bg);
          min-height: 70vh;
          display: flex;
          align-items: center;
          text-align: center;
        }
        .not-found-content {
          max-width: 480px;
          margin: 0 auto;
        }
        .not-found-emoji {
          font-size: 5rem;
          margin-bottom: 16px;
          animation: float 4s ease-in-out infinite;
        }
        .not-found-title {
          font-size: clamp(6rem, 15vw, 10rem);
          font-weight: 900;
          line-height: 1;
          color: var(--color-primary);
          margin-bottom: 8px;
          opacity: 0.2;
        }
        .not-found-subtitle {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 900;
          margin-bottom: 16px;
        }
        .not-found-text {
          color: var(--color-muted);
          font-size: 1.1rem;
          margin-bottom: 32px;
        }
      `}</style>
    </section>
  )
}
