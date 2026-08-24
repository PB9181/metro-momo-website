type GalleryImage = {
  src: string
  alt: string
}

type GalleryProps = {
  images: GalleryImage[]
}

export default function Gallery({ images }: GalleryProps) {
  const visible = images.slice(0, 8)

  return (
    <div className="gallery-masonry">
      {visible.map((image, index) => (
        <div className="gallery-item photo-frame" key={`${image.src}-${index}`}>
          <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
