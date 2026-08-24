type SquiggleProps = {
  color?: string
  width?: number
  height?: number
  className?: string
  strokeWidth?: number
}

export default function Squiggle({
  color = 'var(--color-primary)',
  width = 120,
  height = 24,
  className = '',
  strokeWidth = 4,
}: SquiggleProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d={`M0 ${height / 2} Q${width * 0.25} 0, ${width * 0.5} ${height / 2} T${width} ${height / 2}`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
