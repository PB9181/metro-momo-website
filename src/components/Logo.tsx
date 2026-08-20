type LogoProps = {
  width?: number
  variant?: 'color' | 'white' | 'dark'
}

export default function Logo({ width = 180, variant = 'color' }: LogoProps) {
  const height = Math.round(width * 0.8)
  const isWhite = variant === 'white'
  const textColor = isWhite ? '#FFFFFF' : '#1A1A1A'
  const accentColor = isWhite ? '#FFAA00' : '#D90429'
  const dumplingFill = isWhite ? '#FFFFFF' : '#FF6D00'
  const dumplingOutline = isWhite ? '#FFFFFF' : '#1A1A1A'

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="METRO MOMO logo"
    >
      {/* METRO line */}
      <text
        x="100"
        y="42"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="38"
        fontWeight="900"
        fill={textColor}
        letterSpacing="-0.02em"
      >
        METRO
      </text>

      {/* MOMO line */}
      <text
        x="100"
        y="86"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="38"
        fontWeight="900"
        fill={accentColor}
        letterSpacing="-0.02em"
      >
        MOMO
      </text>

      {/* Three small dumplings underneath */}
      <g transform="translate(0, 108)">
        {/* Left: classic steamed momo */}
        <g transform="translate(52, 0)">
          <ellipse
            cx="14"
            cy="14"
            rx="14"
            ry="10"
            fill={dumplingFill}
            stroke={dumplingOutline}
            strokeWidth="2"
          />
          <path
            d="M5 12 Q10 5 20 5 Q24 5 23 12"
            fill="none"
            stroke={dumplingOutline}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7 12 L9 8 M12 12 L13 7 M17 12 L16 7 M21 12 L19 8"
            stroke={dumplingOutline}
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>

        {/* Center: crescent potsticker */}
        <g transform="translate(86, 0)">
          <path
            d="M4 14 Q16 2 28 14 Q16 24 4 14 Z"
            fill={dumplingFill}
            stroke={dumplingOutline}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 14 Q16 7 25 14"
            fill="none"
            stroke={dumplingOutline}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line x1="9" y1="14" x2="11" y2="10" stroke={dumplingOutline} strokeWidth="1" strokeLinecap="round" />
          <line x1="14" y1="14" x2="14" y2="9" stroke={dumplingOutline} strokeWidth="1" strokeLinecap="round" />
          <line x1="19" y1="14" x2="17" y2="10" stroke={dumplingOutline} strokeWidth="1" strokeLinecap="round" />
          <line x1="23" y1="14" x2="21" y2="10" stroke={dumplingOutline} strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* Right: soup dumpling */}
        <g transform="translate(120, 0)">
          <ellipse
            cx="14"
            cy="14"
            rx="13"
            ry="10"
            fill={dumplingFill}
            stroke={dumplingOutline}
            strokeWidth="2"
          />
          <path
            d="M9 9 Q14 3 19 9"
            fill="none"
            stroke={dumplingOutline}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="14" cy="6" r="2" fill={dumplingOutline} />
          <path
            d="M8 9 Q12 6 16 9"
            stroke={dumplingOutline}
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </g>
    </svg>
  )
}
