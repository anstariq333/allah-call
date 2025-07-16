"use client";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function PublishWorkPage() {
  const publicationTypes = [
    {
      title: "Articles",
      description: "Share your insights and research on Islamic topics.",
      requirements: [
        "Original content",
        "Proper references",
        "Clear writing style",
        "Relevant to Islamic studies"
      ],
      icon: (
        <svg className="w-14 h-14 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" />
          <path strokeWidth="2" d="M7 8h10M7 12h6M7 16h8" />
        </svg>
      )
    },
    {
      title: "Books",
      description: "Publish your Islamic books and research works.",
      requirements: [
        "Comprehensive content",
        "Scholarly review",
        "Proper formatting",
        "Clear objectives"
      ],
      icon: (
        <svg className="w-14 h-14 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" />
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 12V4l9 5-9 5-9-5 9-5v8z" />
        </svg>
      )
    },
    {
      title: "Research Papers",
      description: "Contribute to Islamic academic research.",
      requirements: [
        "Academic rigor",
        "Proper methodology",
        "Detailed references",
        "Clear conclusions"
      ],
      icon: (
        <svg className="w-14 h-14 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
          <path strokeWidth="2" d="M8 8h8M8 12h4M8 16h6" />
          <circle cx="16" cy="16" r="2" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Educational Materials",
      description: "Create resources for Islamic education.",
      requirements: [
        "Educational value",
        "Age-appropriate content",
        "Clear instructions",
        "Engaging format"
      ],
      icon: (
        <svg className="w-14 h-14 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
          <path strokeWidth="2" d="M16 3v4M8 3v4M3 9h18" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Wide Reach",
      content: "Your work will be accessible to a global audience of Muslims and researchers."
    },
    {
      title: "Professional Support",
      content: "Receive guidance and support from our editorial team throughout the publishing process."
    },
    {
      title: "Quality Assurance",
      content: "Your work will be reviewed by qualified scholars to ensure authenticity and accuracy."
    },
    {
      title: "Community Impact",
      content: "Contribute to the spread of authentic Islamic knowledge and benefit the Ummah."
    }
  ];

  return (
    <>
      <Head>
        <title>Publish Your Work | AllahCall</title>
        <meta name="description" content="Share your Islamic research, articles, and creative works with the global community on AllahCall." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[500px] w-full object-center">
          <Image
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D"
            alt="Beautiful Mosque"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Publish Your Work
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Share your Islamic knowledge and research with the world
              </p>
              <Link href="#publications" 
                className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                  text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                  transform hover:-translate-y-1 hover:shadow-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Knowledge</h2>
            <p className="text-lg text-gray-600">
              We provide a platform for scholars, researchers, and writers to publish their 
              Islamic works and contribute to the spread of authentic knowledge.
            </p>
          </div>

          {/* Publication Types Grid */}
          <div id="publications" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {publicationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  {type.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Requirements:</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Publishing Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Spreading Knowledge</h3>
              <p className="text-lg mb-6">
                "The best charity is that a Muslim learns knowledge and then teaches it to others." (Ibn Majah)
              </p>
              <p className="text-lg">
                Share your knowledge and contribute to the spread of authentic Islamic teachings.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Publish?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Submit your work and join our community of Islamic scholars and writers.
            </p>
            <div className="space-x-4">
              <Link href="/contact" 
                className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                  font-medium hover:bg-[#e57764] transition-all duration-300">
                Submit Work
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
    </>
  );
} 