import { Sparkles, Flame, Star, Heart, Zap } from 'lucide-react'

type StickerVariant = 'red' | 'gold' | 'fresh' | 'play' | 'outline'
type StickerIcon = 'sparkles' | 'flame' | 'star' | 'heart' | 'zap'

type StickerProps = {
  children: React.ReactNode
  variant?: StickerVariant
  icon?: StickerIcon
  rotate?: number
  className?: string
}

const iconMap: Record<StickerIcon, React.ComponentType<{ size?: number | string }>> = {
  sparkles: Sparkles,
  flame: Flame,
  star: Star,
  heart: Heart,
  zap: Zap,
}

export default function Sticker({ children, variant = 'red', icon, rotate = 0, className = '' }: StickerProps) {
  const Icon = icon ? iconMap[icon] : null

  return (
    <span
      className={`sticker sticker-${variant} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {Icon && <Icon size={16} />}
      {children}
    </span>
  )
}
