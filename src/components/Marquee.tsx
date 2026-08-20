type MarqueeProps = {
  images: { src: string; alt: string }[]
  direction?: 'left' | 'right'
  speed?: number
}

export default function Marquee({ images, direction = 'left', speed = 30 }: MarqueeProps) {
  const duplicated = [...images, ...images, ...images]

  return (
    <div className="marquee">
      <div
        className="marquee-track"
        style={{
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
          animationDuration: `${speed}s`,
        }}
      >
        {duplicated.map((image, index) => (
          <div className="marquee-item" key={`${image.src}-${index}`}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <style>{`
        .marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marquee-scroll linear infinite;
        }
        .marquee-item {
          width: 280px;
          height: 200px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }
        .marquee-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .marquee-item:hover img {
          transform: scale(1.1);
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @media (max-width: 768px) {
          .marquee-item {
            width: 200px;
            height: 150px;
          }
        }
      `}</style>
    </div>
  )
}
