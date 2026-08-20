import { Heart, Globe, ChefHat, Sparkles, Target, HandHeart } from 'lucide-react'

const values = [
  {
    icon: ChefHat,
    title: 'Authentic Recipes',
    text: 'Handed-down fillings and dough techniques, standardized for consistency across every location.',
  },
  {
    icon: Globe,
    title: 'Scalable Brand',
    text: 'One recognizable identity, flexible enough for local markets and global ambitions.',
  },
  {
    icon: Heart,
    title: 'Owner-first',
    text: 'Built by people who have run kitchens. You keep your store, your team, and your community.',
  },
  {
    icon: Sparkles,
    title: 'Modern Experience',
    text: 'Tech, design, and operations that feel contemporary without losing the soul of the food.',
  },
  {
    icon: Target,
    title: 'Proven Systems',
    text: 'Playbooks, training, and supply chains that remove the guesswork from opening day.',
  },
  {
    icon: HandHeart,
    title: 'Shared Success',
    text: 'We grow when our franchisees grow. Support does not end after the agreement is signed.',
  },
]

export default function About() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <span className="badge">About Us</span>
          <h1 className="page-hero-title">
            A movement for
            <br />
            <span className="gradient-text">momos and owners</span>
          </h1>
          <p className="page-hero-subtitle">
            METRO MOMO was born from a simple belief: great dumplings deserve a great system.
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

      <section className="section about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-image">
              <div className="image-card">
                <img src="/about-community.png" alt="People enjoying momos together" />
              </div>
            </div>
            <div className="about-story-content">
              <span className="badge badge-gold">Our Story</span>
              <h2 className="section-title">Why we started METRO MOMO</h2>
              <p className="about-story-body">
                We grew up watching momos bring people together — around street carts, family kitchens, and festival stalls.
                They are not just a snack; they are a reason to pause, share, and connect.
              </p>
              <p className="about-story-body">
                When we looked at the food franchise landscape, we saw two extremes: generic fast-food chains and beautiful
                but unscalable independents. METRO MOMO sits in the middle — a brand with real cultural roots and the operational
                backbone to grow across cities without losing its heart.
              </p>
              <p className="about-story-body">
                Today, we are building an umbrella that brings independent owners together under one proven system.
                Every franchisee keeps their local identity while gaining the brand, supply, training, and technology
                usually reserved for much larger chains.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          .about-story {
            background: var(--color-bg);
          }
          .about-story-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          .about-story-image .image-card {
            height: 480px;
            transform: rotate(2deg);
          }
          .about-story-image img {
            height: 100%;
          }
          .about-story-body {
            font-size: 1.05rem;
            color: var(--color-muted);
            line-height: 1.7;
            margin-bottom: 20px;
          }
          @media (max-width: 900px) {
            .about-story-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .about-story-image .image-card {
              height: 320px;
              transform: rotate(0deg);
            }
          }
        `}</style>
      </section>

      <section className="section values">
        <div className="container">
          <span className="badge">What We Believe</span>
          <h2 className="section-title">Our values</h2>
          <p className="section-subtitle">
            The principles that guide every decision we make as a franchise network.
          </p>

          <div className="grid-3">
            {values.map((value) => (
              <div className="card value-card" key={value.title}>
                <div className="card-icon">
                  <value.icon size={28} />
                </div>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .values {
            background: var(--color-surface);
          }
          .value-card {
            border-left: 4px solid var(--color-primary);
          }
        `}</style>
      </section>
    </>
  )
}
