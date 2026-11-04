function Gallery() {
  const photos = [
    {
      id: 1,
      src: "/images/gallery-1.png",
      alt: "Yoo & Yours coffee cart at an event"
    },
    {
      id: 2,
      src: "/images/gallery-2.png",
      alt: "Freshly prepared matcha latte"
    },
    {
      id: 3,
      src: "/images/gallery-3.jpg",
      alt: "Coffee and matcha drinks served at a gathering"
    }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <p className="eyebrow">THE GALLERY</p>
        <h2>Little moments, lovingly captured.</h2>
        <p>
          A collection of sweet gatherings, thoughtful details,
          and moments worth remembering.
        </p>
      </div>

      <div className="gallery-grid">
        {/* We'll display our photos here */}
        {photos.map((photo) => (
            <div className="gallery-item" key={photo.id}>
                <img src={photo.src} alt={photo.alt} />
                </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;