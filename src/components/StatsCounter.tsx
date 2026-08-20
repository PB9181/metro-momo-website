import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 7, suffix: '+', label: 'Momo varieties', prefix: '' },
  { value: 3, suffix: '', label: 'Franchise formats', prefix: '' },
  { value: 100, suffix: '%', label: 'Owner support', prefix: '' },
  { value: 1, suffix: '', label: 'Dream to launch', prefix: '<' },
]

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            let start = 0
            const duration = 1500
            const startTime = performance.now()

            const step = (currentTime: number) => {
              const progress = Math.min((currentTime - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              start = Math.round(eased * target)
              setCount(start)
              if (progress < 1) {
                requestAnimationFrame(step)
              }
            }

            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="stat-counter-value">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <div className="stats-counter">
      {stats.map((stat) => (
        <div className="stat-counter-item" key={stat.label}>
          <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
          <span className="stat-counter-label">{stat.label}</span>
        </div>
      ))}

      <style>{`
        .stats-counter {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .stat-counter-item {
          text-align: center;
          padding: 24px;
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-counter-item:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
        }
        .stat-counter-value {
          display: block;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }
        .stat-counter-label {
          font-size: 0.95rem;
          color: var(--color-muted);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        @media (max-width: 768px) {
          .stats-counter {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}
