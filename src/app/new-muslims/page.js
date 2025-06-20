"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function NewMuslimsPage() {
  const sections = [
    {
      title: "Accept Islam Now",
      description: "Take your first step towards embracing Islam. Learn about the declaration of faith (Shahada) and begin your spiritual journey.",
      path: "/accept-islam-now",
      image: "/images/accept-islam.jpg"
    },
    {
      title: "Shahada",
      description: "Understand the meaning and significance of the testimony of faith, the foundation of becoming a Muslim.",
      path: "/shahada",
      image: "/images/shahada.jpg"
    },
    {
      title: "New Muslim Guidelines",
      description: "Essential guidance and practical tips for those who have recently embraced Islam.",
      path: "/new-muslim-guidelines",
      image: "/images/guidelines.jpg"
    },
    {
      title: "Testimonies of New Muslims",
      description: "Read inspiring stories of people who have found peace and purpose in Islam.",
      path: "/testimonies-of-new-muslims",
      image: "/images/testimonies.jpg"
    }
  ];

  const keyPoints = [
    {
      title: "Personal Support",
      content: "One-on-one guidance from experienced mentors to help you on your journey."
    },
    {
      title: "Learning Resources",
      content: "Access to educational materials, books, and courses designed for new Muslims."
    },
    {
      title: "Community Connection",
      content: "Join a welcoming community of Muslims and fellow converts for support and friendship."
    },
    {
      title: "Practical Guidance",
      content: "Learn about daily prayers, Islamic practices, and lifestyle with step-by-step assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="http://images.unsplash.com/photo-1616596871445-bb8290a7a2c2?q=80&w=1107&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Islam
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Begin your journey to spiritual fulfillment with guidance and support
            </p>
            <Link href="/accept-islam-now" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Begin Your Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Path to Islam</h2>
          <p className="text-lg text-gray-600">
            Whether you're curious about Islam or have already taken your Shahada, we're here to support 
            your journey with knowledge, community, and practical guidance.
          </p>
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <Link href={section.path} key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How We Support You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Learn More?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to answer your questions and provide guidance on your journey to Islam.
          </p>
          <div className="space-x-4">
            <Link href="/accept-islam-now" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Accept Islam Now
            </Link>
            <Link href="/contact" 
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 