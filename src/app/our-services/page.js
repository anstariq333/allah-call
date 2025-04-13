"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function OurServicesPage() {
  const services = [
    {
      title: "Articles & Books",
      description: "Access a rich collection of Islamic literature, articles, and educational materials.",
      path: "/articles-books",
      image: "/images/articles.jpg"
    },
    {
      title: "Muslim Revival",
      description: "Programs and resources to strengthen faith and reconnect with Islamic teachings.",
      path: "/muslim-revival",
      image: "/images/revival.jpg"
    },
    {
      title: "Rejoining Muslim Ummah",
      description: "Support and guidance for those seeking to reconnect with the Muslim community.",
      path: "/rejoining-muslim-ummah",
      image: "/images/ummah.jpg"
    },
    {
      title: "Publish Your Work",
      description: "Platform for scholars and writers to share their Islamic knowledge and research.",
      path: "/publish-your-work",
      image: "/images/publish.jpg"
    }
  ];

  const features = [
    {
      title: "Authentic Content",
      content: "All materials are carefully reviewed by qualified scholars to ensure authenticity."
    },
    {
      title: "Easy Access",
      content: "Resources available online and offline, accessible anytime, anywhere."
    },
    {
      title: "Community Support",
      content: "Connect with scholars and fellow Muslims for guidance and support."
    },
    {
      title: "Regular Updates",
      content: "New content and resources added regularly to support continuous learning."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/mosque.png"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Comprehensive resources and support for your Islamic journey
            </p>
            <Link href="#services" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-lg text-gray-600">
            AllahCall provides a range of services to support Muslims in their journey of faith, 
            learning, and community engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Link href={service.path} key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Service Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Serving the Ummah</h3>
            <p className="text-lg mb-6">
              "The best of people are those that bring most benefit to the rest of mankind." (Daraqutni)
            </p>
            <p className="text-lg">
              Our services are designed to benefit the Muslim community and support the spread of authentic Islamic knowledge.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need More Information?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to learn more about our services or to discuss your specific needs.
          </p>
          <div className="space-x-4">
            <Link href="/contact" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Contact Us
            </Link>
            <Link href="/articles-books" 
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              Browse Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 