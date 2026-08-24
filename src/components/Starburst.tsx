type StarburstProps = {
  color?: string
  size?: number
  className?: string
}

export default function Starburst({ color = 'var(--color-accent)', size = 64, className = '' }: StarburstProps) {
  const rays = 12
  const points = Array.from({ length: rays * 2 }).map((_, i) => {
    const angle = (i * Math.PI) / rays
    const radius = i % 2 === 0 ? size / 2 : size / 5
    const x = size / 2 + Math.cos(angle) * radius
    const y = size / 2 + Math.sin(angle) * radius
    return `${x},${y}`
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon points={points.join(' ')} />
    </svg>
  )
}
