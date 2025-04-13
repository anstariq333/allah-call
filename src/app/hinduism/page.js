"use client";
import Image from 'next/image';

export default function HinduismPage() {
  const commonValues = [
    {
      title: "Moral Ethics",
      description: "Both traditions emphasize moral conduct, truthfulness, and ethical behavior in daily life."
    },
    {
      title: "Respect for Knowledge",
      description: "Both religions place high value on seeking knowledge and wisdom for spiritual growth."
    },
    {
      title: "Family Values",
      description: "Strong emphasis on family bonds, respect for elders, and maintaining family traditions."
    },
    {
      title: "Charitable Acts",
      description: "Both faiths encourage charity, helping the needy, and serving humanity."
    }
  ];

  const keyTopics = [
    {
      title: "Understanding Hinduism",
      content: "Hinduism is one of the world's oldest religions, with rich traditions of philosophy, spirituality, and cultural practices spanning thousands of years.",
      image: "/images/hinduism-overview.jpg"
    },
    {
      title: "Cultural Heritage",
      content: "India's rich cultural heritage has historically fostered peaceful coexistence between Hindu and Muslim communities, sharing art, literature, and music.",
      image: "/images/indo-islamic.jpg"
    },
    {
      title: "Interfaith Dialogue",
      content: "Building bridges through understanding and respect, focusing on shared values and peaceful coexistence.",
      image: "/images/hindu-muslim-dialogue.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/mosque.png"
          alt="Hinduism"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Understanding Hinduism
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Building bridges through knowledge and mutual respect
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hinduism and Islam</h2>
          <p className="text-lg text-gray-600">
            Understanding different faiths helps build bridges between communities. While Islam and Hinduism have distinct beliefs, they share many universal values that can foster mutual respect and peaceful coexistence.
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

        {/* Historical Coexistence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Historical Coexistence</h3>
            <p className="text-gray-600 mb-4">
              The Indian subcontinent has a rich history of Hindu-Muslim cultural synthesis in various fields:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Architecture and Art
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Music and Literature
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Philosophy and Science
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Bridges Today</h3>
            <p className="text-gray-600 mb-4">
              Modern initiatives for fostering Hindu-Muslim understanding include:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Interfaith dialogue programs
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Cultural exchange events
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Joint community service
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
              Islam encourages peaceful coexistence and mutual understanding with people of different faiths while maintaining our own beliefs and practices.
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
                Cultural heritage resources
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Historical documentation
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
                Participate in cultural events
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
  );
} 