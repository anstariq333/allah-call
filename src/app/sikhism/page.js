"use client";
import Image from 'next/image';
import Head from 'next/head';

export default function SikhismPage() {
  const commonValues = [
    {
      title: "Monotheism",
      description: "Both Sikhism and Islam believe in One Supreme Being and reject idol worship."
    },
    {
      title: "Social Justice",
      description: "Both faiths emphasize equality, social justice, and helping the less fortunate."
    },
    {
      title: "Community Service",
      description: "Both traditions value serving the community and practicing charity."
    },
    {
      title: "Moral Living",
      description: "Both religions stress the importance of living an ethical and moral life."
    }
  ];

  const keyTopics = [
    {
      title: "Understanding Sikhism",
      content: "Sikhism is a monotheistic religion founded by Guru Nanak Dev Ji in the Punjab region, emphasizing devotion to one God and service to humanity.",
      image: "https://images.unsplash.com/photo-1546688532-18292333f5a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Historical Relations",
      content: "The history of Sikh-Muslim relations spans centuries, with periods of both cooperation and challenges, particularly in the Indian subcontinent.",
      image: "https://images.unsplash.com/photo-1733158175513-9427291425a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Modern Dialogue",
      content: "Contemporary initiatives focus on building bridges between Sikh and Muslim communities through dialogue and mutual understanding.",
      image: "https://images.unsplash.com/photo-1652535281291-e818d4bcf5b9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <>
      <Head>
        <title>Understanding Sikhism | AllahCall</title>
        <meta name="description" content="Explore Sikh traditions, beliefs, and their relationship with Islam on AllahCall." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1642355099716-a88a41a17887?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sikhism"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Understanding Sikhism
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto px-4">
                Exploring Sikh traditions with respect and understanding
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sikhism and Islam</h2>
            <p className="text-lg text-gray-600">
              While Sikhism and Islam have their own unique beliefs and practices, both faiths share important values that can foster mutual understanding and respect.
            </p>
          </div>

          {/* Common Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Shared Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commonValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Topics */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Topics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {keyTopics.map((topic, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                    <p className="text-gray-600">{topic.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Beliefs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Beliefs in Sikhism</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Belief in One God (Waheguru)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Equality of all human beings
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Service to humanity (Seva)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Honest living and sharing
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Bridges</h3>
              <p className="text-gray-600 mb-4">
                Ways to promote understanding between Sikh and Muslim communities:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Interfaith dialogue events
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Joint community service
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cultural exchange programs
                </li>
              </ul>
            </div>
          </div>

          {/* Islamic Perspective */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Islamic Perspective on Interfaith Relations</h2>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-[#f58875] pl-4 italic text-gray-600">
                "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another." (Quran 49:13)
              </blockquote>
              <p className="text-gray-600">
                Islam encourages peaceful coexistence and mutual understanding while maintaining our respective beliefs and practices.
              </p>
            </div>
          </div>

          {/* Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn More</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Comparative religious studies
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Historical research materials
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cultural exchange resources
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Join interfaith dialogues
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Attend cultural events
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Support community initiatives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 