import { ArrowRight, MapPin, Utensils, Users, ChefHat, LayoutDashboard, PackageSearch, QrCode, Smartphone, ClipboardCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee.tsx'
import StatsCounter from '../components/StatsCounter.tsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="blob blob-red" />
        <div className="blob blob-orange" />
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="badge">
              <Utensils size={16} />
              Authentic Himalayan Street Food
            </span>
            <h1 className="hero-title display-text">
              Bring the Taste of Nepal
              <br />
              <span className="gradient-text text-shadow-pop">to Your City</span>
            </h1>
            <p className="hero-subtitle">
              Launch a METRO MOMO joint venture — a fast-growing MOMO concept built for simplicity,
              scalability, and serious brand appeal. From street stalls to full restaurants.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link to="/models" className="btn btn-secondary">
                See Models
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <Users className="hero-stat-icon" size={24} />
                <div>
                  <strong>Owner-first</strong>
                  <span>Built by restaurant owners</span>
                </div>
              </div>
              <div className="hero-stat">
                <MapPin className="hero-stat-icon" size={24} />
                <div>
                  <strong>Multi-format</strong>
                  <span>Stall, kiosk, or restaurant</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src="/hero-momos.png" alt="Steaming METRO MOMO dumplings on a red plate" />
              <div className="hero-image-badge">
                <ChefHat size={20} />
                <span>No chef required</span>
              </div>
            </div>
          </div>
        </div>

        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFF3E6"></path>
          </svg>
        </div>

        <style>{`
          .hero {
            position: relative;
            overflow: hidden;
            padding: 80px 0 140px;
            background: var(--color-bg);
          }
          .hero-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .hero-content {
            max-width: 560px;
          }
          .hero-title {
            font-size: clamp(2.75rem, 6vw, 4.75rem);
            font-weight: 900;
            line-height: 1.05;
            margin: 24px 0 20px;
            letter-spacing: -0.03em;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            color: var(--color-muted);
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .hero-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 40px;
          }
          .hero-stats {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
          }
          .hero-stat {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.95rem;
          }
          .hero-stat-icon {
            color: var(--color-secondary);
            flex-shrink: 0;
          }
          .hero-stat strong {
            display: block;
            font-weight: 900;
            color: var(--color-text);
          }
          .hero-stat span {
            color: var(--color-muted);
          }
          .hero-visual {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .hero-image-wrapper {
            position: relative;
            border-radius: var(--radius-xl);
            overflow: hidden;
            box-shadow: var(--shadow-lg);
            transform: rotate(2deg);
            transition: transform 0.3s ease;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            padding: 8px;
          }
          .hero-image-wrapper:hover {
            transform: rotate(0deg) scale(1.02);
          }
          .hero-image-wrapper img {
            border-radius: calc(var(--radius-xl) - 8px);
            width: 100%;
            max-width: 540px;
            aspect-ratio: 16/9;
            object-fit: cover;
          }
          .hero-image-badge {
            position: absolute;
            bottom: -16px;
            left: -16px;
            background: white;
            padding: 12px 20px;
            border-radius: 999px;
            box-shadow: var(--shadow-md);
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 800;
            color: var(--color-primary);
            animation: pulse-soft 3s ease-in-out infinite;
          }
          @media (max-width: 900px) {
            .hero {
              padding: 60px 0 100px;
            }
            .hero-inner {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .hero-content {
              max-width: 100%;
            }
            .hero-actions {
              justify-content: center;
            }
            .hero-stats {
              justify-content: center;
            }
            .hero-image-wrapper {
              transform: rotate(0deg);
              max-width: 100%;
            }
            .hero-image-badge {
              left: 50%;
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      <section className="section marquee-section">
        <div className="container marquee-header">
          <span className="badge">Food that sells itself</span>
          <h2 className="section-title">Real MOMO, real flavor</h2>
        </div>
        <Marquee
          images={[
            { src: '/hero-momos.png', alt: 'Steaming MOMO' },
            { src: '/jhol-momo.png', alt: 'Jhol MOMO in broth' },
            { src: '/menu-fried-momo.png', alt: 'Fried chili MOMO' },
            { src: '/about-community.png', alt: 'People enjoying MOMO' },
            { src: '/model-restaurant.png', alt: 'METRO MOMO restaurant' },
            { src: '/model-stall.png', alt: 'Street food stall' },
          ]}
          speed={40}
        />

        <style>{`
          .marquee-section {
            background: var(--color-surface);
            padding-bottom: 80px;
          }
          .marquee-header {
            text-align: center;
            margin-bottom: 48px;
          }
          .marquee-section .badge {
            margin-bottom: 16px;
          }
          .marquee-section .section-title {
            margin: 0 auto;
          }
        `}</style>
      </section>

      <section className="section intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image">
              <div className="image-card">
                <img src="/about-community.png" alt="People enjoying MOMO together" />
              </div>
            </div>
            <div className="intro-content">
              <span className="badge">The Himalayan Soup Dumpling</span>
              <h2 className="section-title">
                More than food.
                <br />
                <span className="gradient-text">A community ritual.</span>
              </h2>
              <p className="section-subtitle">
                METRO MOMO was created to bring one of Nepal's most loved comfort foods to a wider audience.
                MOMO represents warmth, sharing, and the joy of eating together.
              </p>
              <p className="intro-body">
                While global cuisines have thrived, authentic Himalayan flavours have remained underrepresented.
                We are building a franchise that combines cultural authenticity with modern food-service simplicity —
                so every owner can serve something real.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .intro {
            background: var(--color-surface);
          }
          .intro-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          .intro-image .image-card {
            height: 420px;
            transform: rotate(-2deg);
          }
          .intro-image .image-card:hover {
            transform: rotate(0deg) scale(1.02);
          }
          .intro-image img {
            height: 100%;
          }
          .intro-body {
            font-size: 1.05rem;
            color: var(--color-muted);
            margin-bottom: 28px;
            line-height: 1.7;
          }
          @media (max-width: 900px) {
            .intro-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .intro-image .image-card {
              height: 300px;
              transform: rotate(0deg);
            }
          }
        `}</style>
      </section>

      <section className="section models-preview">
        <div className="container">
          <span className="badge">Joint Venture</span>
          <h2 className="section-title">Choose your format</h2>
          <p className="section-subtitle">
            From compact stalls to ghost kitchens — pick the model that fits your location and ambition. No franchise fees; we grow through revenue sharing.
          </p>

          <div className="grid-3">
            <div className="card model-preview-card">
              <div className="model-preview-image">
                <img src="/model-kiosk.png" alt="Street stall and kiosk model" />
              </div>
              <h3 className="card-title">Street Stall & Kiosk</h3>
              <p className="card-text">Markets, festivals, malls, and high-footfall streets.</p>
              <span className="model-price">€0</span>
            </div>
            <div className="card model-preview-card">
              <div className="model-preview-image">
                <img src="/model-restaurant.png" alt="Full restaurant model" />
              </div>
              <h3 className="card-title">Full Restaurant</h3>
              <p className="card-text">Full dine-in with broader menu and longer hours.</p>
              <span className="model-price">€0</span>
            </div>
            <div className="card model-preview-card">
              <div className="model-preview-image">
                <img src="/model-stall.png" alt="Ghost kitchen model" />
              </div>
              <h3 className="card-title">Virtual & Ghost Kitchens</h3>
              <p className="card-text">Delivery and pickup-only with minimal front-of-house costs.</p>
              <span className="model-price">€0</span>
            </div>
          </div>

          <div className="models-preview-cta">
            <Link to="/models" className="btn btn-primary">
              Compare All Models <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .models-preview {
            background: var(--color-bg);
          }
          .model-preview-card {
            padding: 0 0 32px;
            overflow: hidden;
          }
          .model-preview-card:hover {
            transform: translateY(-8px) rotate(0deg);
          }
          .model-preview-image {
            height: 200px;
            overflow: hidden;
            margin-bottom: 24px;
          }
          .model-preview-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .model-preview-card:hover .model-preview-image img {
            transform: scale(1.1);
          }
          .model-preview-card .card-title,
          .model-preview-card .card-text {
            padding: 0 24px;
          }
          .model-price {
            display: block;
            margin-top: 12px;
            padding: 0 24px;
            font-size: 1.25rem;
            font-weight: 900;
            color: var(--color-primary);
          }
          .models-preview-cta {
            text-align: center;
            margin-top: 48px;
          }
        `}</style>
      </section>

      <section className="section tech-preview">
        <div className="container">
          <span className="badge">Tech-Powered</span>
          <h2 className="section-title">One platform for every location</h2>
          <p className="section-subtitle">
            Every partner gets access to the Fewa restaurant operating system — inventory, ordering, bookings, staff, and compliance in one place.
          </p>

          <div className="grid-3">
            <div className="card tech-preview-card">
              <div className="tech-preview-icon">
                <LayoutDashboard size={28} />
              </div>
              <h3 className="card-title">Central Command</h3>
              <p className="card-text">HQ dashboard, sales analytics, and franchise standards across all units.</p>
            </div>
            <div className="card tech-preview-card">
              <div className="tech-preview-icon">
                <PackageSearch size={28} />
              </div>
              <h3 className="card-title">Inventory & Cost</h3>
              <p className="card-text">Live stock, recipe COGS, and automated reorder alerts.</p>
            </div>
            <div className="card tech-preview-card">
              <div className="tech-preview-icon">
                <QrCode size={28} />
              </div>
              <h3 className="card-title">QR Ordering</h3>
              <p className="card-text">Scan-to-order at the table, synced straight to the kitchen.</p>
            </div>
            <div className="card tech-preview-card">
              <div className="tech-preview-icon">
                <Smartphone size={28} />
              </div>
              <h3 className="card-title">Online Ordering</h3>
              <p className="card-text">Web orders, pickup, delivery, and customer CRM.</p>
            </div>
            <div className="card tech-preview-card">
              <div className="tech-preview-icon">
                <Users size={28} />
              </div>
              <h3 className="card-title">Workforce</h3>
              <p className="card-text">Scheduling, access control, training, and attendance.</p>
            </div>
            <div className="card tech-preview-card">
              <div className="tech-preview-icon">
                <ClipboardCheck size={28} />
              </div>
              <h3 className="card-title">HACCP & Hygiene</h3>
              <p className="card-text">Digital checklists, temperature logs, and audit-ready docs.</p>
            </div>
          </div>

          <div className="tech-preview-cta">
            <Link to="/tech" className="btn btn-secondary">
              Explore the Full Tech Stack <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .tech-preview {
            background: var(--color-surface);
          }
          .tech-preview-card {
            text-align: center;
            padding: 32px 24px;
          }
          .tech-preview-icon {
            width: 64px;
            height: 64px;
            border-radius: 18px;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
          }
          .tech-preview-cta {
            text-align: center;
            margin-top: 48px;
          }
        `}</style>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-section-header">
            <span className="badge">By the numbers</span>
            <h2 className="section-title">Built to scale</h2>
          </div>
          <StatsCounter />
        </div>

        <style>{`
          .stats-section {
            background: var(--color-bg);
          }
          .stats-section-header {
            text-align: center;
            margin-bottom: 48px;
          }
          .stats-section-header .badge {
            margin-bottom: 16px;
          }
        `}</style>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to bring MOMO to your city?</h2>
            <p className="cta-text">
              Join the partnership network built for owners who want to serve something authentic and scalable.
            </p>
            <Link to="/contact" className="btn btn-gold">
              Start Your Application <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .cta-section {
            background: var(--color-surface);
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
