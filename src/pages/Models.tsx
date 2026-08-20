import { Check, ArrowRight, Store, ShoppingBag, Container, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const models = [
  {
    icon: Store,
    name: 'Premium Street Stall',
    price: '€0',
    image: '/model-stall.png',
    description: 'Ideal for markets, festivals, and busy thoroughfares. Compact, efficient, and high visibility.',
    features: ['Compact setup', 'High visibility', 'Lower upfront cost', 'Festival & event ready', 'Basic equipment pack'],
    bestFor: 'First-time operators',
    highlighted: false,
  },
  {
    icon: ShoppingBag,
    name: 'Mall Kiosk',
    price: '€0',
    image: '/model-kiosk.png',
    description: 'Perfect for shopping centres and retail environments with consistent footfall and strong branding.',
    features: ['Premium location', 'Digital menu board', 'Strong brand presence', 'Moderate footprint', 'Mall-ready design'],
    bestFor: 'Retail-focused owners',
    highlighted: true,
  },
  {
    icon: Container,
    name: 'Shipping Container',
    price: '€0',
    image: '/model-restaurant.png',
    description: 'Best for car parks, retail hubs, and destination-style locations where a bold visual presence wins.',
    features: ['Unique visual impact', 'Permanent/semi-permanent', 'Custom branding', 'Higher capacity', 'Instagram-worthy'],
    bestFor: 'Destination locations',
    highlighted: false,
  },
  {
    icon: Building2,
    name: 'Full Restaurant',
    price: '€0',
    image: '/model-restaurant.png',
    description: 'A complete dine-in concept with broader menu options, longer hours, and long-term growth potential.',
    features: ['Full dining room', 'Expanded menu', 'Higher revenue potential', 'Event hosting', 'Territory exclusivity'],
    bestFor: 'Experienced operators',
    highlighted: false,
  },
]

const comparisonFeatures = [
  { name: 'Franchise fee', stall: '€0', kiosk: '€0', container: '€0', restaurant: '€0' },
  { name: 'Footprint', stall: '2–4 sqm', kiosk: '6–10 sqm', container: '15–30 sqm', restaurant: '50+ sqm' },
  { name: 'Staff needed', stall: '1–2', kiosk: '2–3', container: '2–4', restaurant: '5+' },
  { name: 'Menu range', stall: 'Core menu', kiosk: 'Core + combos', container: 'Full menu', restaurant: 'Full + drinks' },
  { name: 'Territory', stall: 'Event-based', kiosk: 'Mall unit', container: 'Site-specific', restaurant: 'Protected area' },
]

export default function Models() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <span className="badge">Joint Venture</span>
          <h1 className="page-hero-title display-text">
            Pick the format that
            <br />
            <span className="gradient-text">fits your ambition</span>
          </h1>
          <p className="page-hero-subtitle">
            From a compact street stall to a full restaurant — every joint-venture model starts at €0 franchise fee. We grow together through revenue sharing.
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
            max-width: 720px;
            margin: 0 auto;
          }
        `}</style>
      </section>

      <section className="section models-list">
        <div className="container">
          <div className="grid-2">
            {models.map((model) => (
              <div className={`card model-card ${model.highlighted ? 'model-card-highlighted' : ''}`} key={model.name}>
                <div className="model-card-image">
                  <img src={model.image} alt={model.name} />
                  <span className="model-card-price">{model.price}</span>
                </div>
                <div className="model-card-content">
                  <div className="model-card-header">
                    <div className="model-card-icon">
                      <model.icon size={28} />
                    </div>
                    <div>
                      <h3 className="card-title">{model.name}</h3>
                      <span className="model-card-bestfor">Best for: {model.bestFor}</span>
                    </div>
                  </div>
                  <p className="card-text">{model.description}</p>
                  <ul className="model-card-features">
                    {model.features.map((feature) => (
                      <li key={feature}>
                        <Check size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .models-list {
            background: var(--color-bg);
            padding-top: 40px;
          }
          .model-card {
            padding: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          .model-card-highlighted {
            border-color: var(--color-accent);
            box-shadow: var(--shadow-orange);
            transform: rotate(-1deg);
          }
          .model-card-highlighted:hover {
            transform: rotate(0deg) translateY(-8px);
          }
          .model-card-image {
            position: relative;
            height: 240px;
            overflow: hidden;
          }
          .model-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .model-card:hover .model-card-image img {
            transform: scale(1.1);
          }
          .model-card-price {
            position: absolute;
            top: 16px;
            right: 16px;
            background: var(--color-primary);
            color: white;
            padding: 8px 16px;
            border-radius: 999px;
            font-weight: 900;
            font-size: 1.1rem;
            box-shadow: var(--shadow-md);
          }
          .model-card-content {
            padding: 28px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .model-card-header {
            display: flex;
            gap: 16px;
            align-items: flex-start;
            margin-bottom: 12px;
          }
          .model-card-icon {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .model-card-bestfor {
            font-size: 0.85rem;
            color: var(--color-muted);
            font-weight: 700;
          }
          .model-card-features {
            list-style: none;
            margin-top: auto;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .model-card-features li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.95rem;
            color: var(--color-text);
          }
          .model-card-features li svg {
            color: var(--color-primary);
            flex-shrink: 0;
          }
        `}</style>
      </section>

      <section className="section comparison">
        <div className="container">
          <span className="badge">Compare</span>
          <h2 className="section-title">Model comparison</h2>
          <p className="section-subtitle">Quick overview of what each joint-venture format includes.</p>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Street Stall</th>
                  <th>Mall Kiosk</th>
                  <th>Container</th>
                  <th>Restaurant</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.stall}</td>
                    <td>{row.kiosk}</td>
                    <td>{row.container}</td>
                    <td>{row.restaurant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <style>{`
          .comparison {
            background: var(--color-surface);
          }
          .comparison-table-wrapper {
            overflow-x: auto;
            border-radius: var(--radius-lg);
            background: white;
            box-shadow: var(--shadow-sm);
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 700px;
          }
          .comparison-table th,
          .comparison-table td {
            padding: 18px 24px;
            text-align: left;
            border-bottom: 1px solid var(--mm-border);
          }
          .comparison-table th {
            background: var(--color-primary);
            color: white;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            font-size: 0.85rem;
          }
          .comparison-table td:first-child {
            font-weight: 800;
            color: var(--color-text);
          }
          .comparison-table td {
            color: var(--color-muted);
          }
          .comparison-table tr:last-child td {
            border-bottom: none;
          }
          .comparison-table tr:hover td {
            background: var(--mm-cream);
          }
        `}</style>
      </section>

      <section className="section models-cta">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Not sure which model is right for you?</h2>
            <p className="cta-text">
              Our partnership team will help you choose based on your territory and goals.
            </p>
            <Link to="/contact" className="btn btn-gold">
              Book a Discovery Call <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .models-cta {
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
