import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  PackageSearch,
  TrendingUp,
  CalendarCheck,
  QrCode,
  Smartphone,
  ClipboardCheck,
  ChefHat,
  Truck,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const techCategories = [
  {
    icon: LayoutDashboard,
    title: 'Central Command',
    features: [
      'Multi-unit HQ dashboard',
      'Real-time sales analytics',
      'Franchise standards tracker',
      'Performance scorecards',
    ],
  },
  {
    icon: Users,
    title: 'Workforce Management',
    features: [
      'Staff scheduling & shifts',
      'Role-based access control',
      'Training & learning library',
      'Clock-in / attendance tracking',
    ],
  },
  {
    icon: PackageSearch,
    title: 'Inventory & Procurement',
    features: [
      'Live stock levels across units',
      'Automated reorder alerts',
      'Supplier & purchase tracking',
      'Waste and shrinkage logs',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Cost Analysis',
    features: [
      'Recipe-level COGS',
      'Dynamic menu profitability',
      'Labor vs. revenue ratios',
      'Unit economics reporting',
    ],
  },
  {
    icon: CalendarCheck,
    title: 'Table Booking',
    features: [
      'Online reservation widget',
      'Table and floor management',
      'Guest notes and history',
      'Waitlist & cancellation flow',
    ],
  },
  {
    icon: QrCode,
    title: 'QR Code Ordering',
    features: [
      'Scan-to-order at the table',
      'Menu synced to kitchen',
      'Split-bill ready',
      'No extra hardware needed',
    ],
  },
  {
    icon: Smartphone,
    title: 'Online Ordering',
    features: [
      'Web ordering page',
      'Pickup and delivery flow',
      'Customer CRM & marketing',
      'Integrated payment-ready',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'HACCP & Hygiene',
    features: [
      'Digital checklist routines',
      'Temperature log tracking',
      'Cleaning schedule alerts',
      'Audit-ready documentation',
    ],
  },
  {
    icon: ChefHat,
    title: 'Kitchen Display System',
    features: [
      'Order routing to screens',
      'Prep-time tracking',
      'Course and timing control',
      'Allergy and dietary flags',
    ],
  },
  {
    icon: Truck,
    title: 'Supply Chain',
    features: [
      'Central supplier catalog',
      'Stock transfers between units',
      'Delivery receipt capture',
      'Franchise buying power',
    ],
  },
]

export default function Tech() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <span className="badge">
            <Sparkles size={16} />
            Tech-Powered Growth
          </span>
          <h1 className="page-hero-title display-text">
            Built on a restaurant
            <br />
            <span className="gradient-text">operating system</span>
          </h1>
          <p className="page-hero-subtitle">
            Every METRO MOMO partner gets access to the same operations platform that runs modern restaurant teams — covering ordering, kitchen, inventory, and back-office in one place.
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

      <section className="section tech-grid-section">
        <div className="container">
          <div className="grid-2">
            {techCategories.map((category) => (
              <div className="card tech-card" key={category.title}>
                <div className="tech-card-header">
                  <div className="tech-card-icon">
                    <category.icon size={28} />
                  </div>
                  <h3 className="card-title">{category.title}</h3>
                </div>
                <ul className="tech-card-list">
                  {category.features.map((feature) => (
                    <li key={feature}>
                      <span className="tech-card-bullet" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .tech-grid-section {
            background: var(--color-bg);
          }
          .tech-card {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .tech-card-header {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .tech-card-icon {
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
          .tech-card-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .tech-card-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.95rem;
            color: var(--color-muted);
            font-weight: 600;
          }
          .tech-card-bullet {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--color-accent);
            flex-shrink: 0;
          }
        `}</style>
      </section>

      <section className="section tech-cta">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Tech that scales with every format</h2>
            <p className="cta-text">
              Whether you start with a street stall or a full restaurant, the platform grows with you. No separate software bills, no disconnected spreadsheets — one system from day one.
            </p>
            <Link to="/models" className="btn btn-gold">
              See the Models <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          .tech-cta {
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
            max-width: 680px;
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
