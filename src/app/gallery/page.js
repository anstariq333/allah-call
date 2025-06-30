import Image from 'next/image';
import AllahCallGrid from '../components/AllahCallGrid';

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Events",
      images: [
        { src: "https://images.unsplash.com/photo-1547119879-c379a507fd2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Islamic Conference" },
        { src: "https://images.unsplash.com/photo-1712249239061-7d4f49ec9d44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Quran Competition" },
        { src: "https://images.unsplash.com/photo-1712249237537-8c5a0420653b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Community Gathering" },
        { src: "https://images.unsplash.com/photo-1558617861-07ffd51a4782?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Interfaith Dialogue" }
      ]
    },
    {
      title: "Islamic Architecture",
      images: [
        { src: "https://images.unsplash.com/photo-1597329084427-64a6518d0445?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Grand Mosque" },
        { src: "https://images.unsplash.com/photo-1671882151764-65e08a0325ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Islamic Center" },
        { src: "https://images.unsplash.com/photo-1640774328301-cb95cdc3a8d6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Prayer Hall" },
        { src: "https://images.unsplash.com/photo-1566213729219-bb86d09c4189?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Islamic Design" }
      ]
    },
    {
      title: "Islamic Art",
      images: [
        { src: "https://images.unsplash.com/photo-1685594425042-dbdcc7710da2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Calligraphy" },
        { src: "https://images.unsplash.com/photo-1676607185227-4f0e70228d3f?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Geometric Patterns" },
        { src: "https://images.unsplash.com/photo-1624140931502-278f30d90a96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Islamic Design" },
        { src: "https://images.unsplash.com/photo-1605469798293-4637e243844c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Traditional Art" }
      ]
    },
    {
      title: "Community Activities",
      images: [
        { src: "https://images.unsplash.com/photo-1641569707854-c80945fb4719?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Volunteer Work" },
        { src: "https://images.unsplash.com/photo-1562709911-a355229de124?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Charity Event" },
        { src: "https://images.unsplash.com/photo-1660795591590-65c3bbbada48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Educational Program" },
        { src: "https://images.unsplash.com/photo-1649822574475-b4a49f3d8496?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Youth Activity" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1623439844752-524658b16ce6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

         {/* AllahCallGrid Section */}
         {/* <AllahCallGrid /> */}

        {/* Share Your Photos */}
        {/* <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
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
        </div> */}
      </div>
    </div>
  );
} 