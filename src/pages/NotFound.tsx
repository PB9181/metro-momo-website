import { Home, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import Sticker from '../components/Sticker.tsx'
import Starburst from '../components/Starburst.tsx'
import { useTranslation } from '../i18n/index.ts'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="not-found">
      <div className="not-found-pattern pattern-dots" aria-hidden="true" />
      <div className="not-found-blobs" aria-hidden="true">
        <div className="not-found-blob not-found-blob-1" />
        <div className="not-found-blob not-found-blob-2" />
      </div>
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-mascot">
            <div className="not-found-momo">🥟</div>
            <div className="not-found-search">
              <Search size={28} />
              <span>{t('notFound.searchLabel')}</span>
            </div>
            <Sticker variant="hot" rotate={-8} className="not-found-sticker">{t('notFound.sticker1')}</Sticker>
          </div>
          <h1 className="not-found-title">{t('notFound.title')}</h1>
          <h2 className="not-found-subtitle">{t('notFound.subtitle')}</h2>
          <p className="not-found-text">{t('notFound.text')}</p>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            {t('notFound.cta')}
          </Link>
          <Starburst color="var(--mm-gold)" size={72} className="not-found-starburst" />
        </div>
      </div>

      <style>{`
        .not-found {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #fff8f0 0%, #fff0f3 50%, #f0f8ff 100%);
          min-height: 80vh;
          display: flex;
          align-items: center;
          text-align: center;
          padding: 80px 0;
        }
        .not-found-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.08;
          background-image: radial-gradient(circle, var(--mm-hot-pink) 2px, transparent 2px);
          background-size: 24px 24px;
        }
        .not-found-blobs {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .not-found-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: blob-morph 6s ease-in-out infinite;
        }
        .not-found-blob-1 {
          width: 300px;
          height: 300px;
          background: var(--mm-pink);
          top: -80px;
          left: -80px;
        }
        .not-found-blob-2 {
          width: 260px;
          height: 260px;
          background: var(--mm-electric-blue);
          bottom: -60px;
          right: -60px;
          animation-delay: 1s;
        }
        .not-found-content {
          position: relative;
          z-index: 1;
          max-width: 520px;
          margin: 0 auto;
        }
        .not-found-mascot {
          position: relative;
          width: 160px;
          height: 160px;
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .not-found-momo {
          font-size: 6rem;
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 12px 24px rgba(232, 23, 43, 0.2));
        }
        .not-found-search {
          position: absolute;
          top: 0;
          right: 0;
          background: white;
          padding: 8px 14px;
          border-radius: 999px;
          box-shadow: var(--shadow-md);
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          color: var(--mm-electric-blue);
          animation: spin-slow 8s linear infinite;
        }
        .not-found-search span {
          animation: spin-slow 8s linear infinite reverse;
          display: inline-block;
        }
        .not-found-sticker {
          position: absolute;
          bottom: -10px;
          left: -20px;
        }
        .not-found-title {
          font-size: clamp(6rem, 15vw, 10rem);
          font-weight: 900;
          line-height: 1;
          color: var(--color-primary);
          margin-bottom: 8px;
          opacity: 0.15;
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
        .not-found-starburst {
          position: absolute;
          bottom: -40px;
          right: -40px;
          animation: spin-slow 14s linear infinite;
          z-index: 0;
        }
        @media (max-width: 480px) {
          .not-found-mascot {
            width: 130px;
            height: 130px;
          }
          .not-found-momo {
            font-size: 5rem;
          }
          .not-found-starburst {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
