import Image from 'next/image';

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Events",
      images: [
        { src: "/images/event1.jpg", alt: "Islamic Conference" },
        { src: "/images/event2.jpg", alt: "Quran Competition" },
        { src: "/images/event3.jpg", alt: "Community Gathering" },
        { src: "/images/event4.jpg", alt: "Interfaith Dialogue" }
      ]
    },
    {
      title: "Islamic Architecture",
      images: [
        { src: "/images/mosque1.jpg", alt: "Grand Mosque" },
        { src: "/images/mosque2.jpg", alt: "Islamic Center" },
        { src: "/images/mosque3.jpg", alt: "Prayer Hall" },
        { src: "/images/mosque4.jpg", alt: "Islamic Design" }
      ]
    },
    {
      title: "Islamic Art",
      images: [
        { src: "/images/art1.jpg", alt: "Calligraphy" },
        { src: "/images/art2.jpg", alt: "Geometric Patterns" },
        { src: "/images/art3.jpg", alt: "Islamic Design" },
        { src: "/images/art4.jpg", alt: "Traditional Art" }
      ]
    },
    {
      title: "Community Activities",
      images: [
        { src: "/images/community1.jpg", alt: "Volunteer Work" },
        { src: "/images/community2.jpg", alt: "Charity Event" },
        { src: "/images/community3.jpg", alt: "Educational Program" },
        { src: "/images/community4.jpg", alt: "Youth Activity" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/mosque.png"
          alt="Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Our Gallery
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visual Journey</h2>
          <p className="text-lg text-gray-600">
            Explore our collection of images showcasing Islamic events, architecture, art, and community activities.
          </p>
        </div>

        {/* Gallery Categories */}
        {galleryCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.images.map((image, imgIndex) => (
                <div key={imgIndex} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Share Your Photos */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Photos</h2>
          <p className="text-gray-600 mb-6">
            Have photos from our events or Islamic activities? Share them with us to be featured in our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#f58875] text-white px-6 py-2 rounded-lg hover:bg-[#e67a68] transition">
              Upload Photos
            </button>
            <button className="border border-[#f58875] text-[#f58875] px-6 py-2 rounded-lg hover:bg-[#f58875] hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 