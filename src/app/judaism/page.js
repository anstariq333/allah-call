"use client";
import Image from 'next/image';

export default function JudaismPage() {
  const commonGrounds = [
    {
      title: "Monotheism",
      description: "Both Judaism and Islam are strictly monotheistic religions, believing in One God who is the Creator and Sustainer of all existence."
    },
    {
      title: "Prophetic Tradition",
      description: "Muslims and Jews share many prophets, including Abraham, Moses, David, and Solomon (peace be upon them all)."
    },
    {
      title: "Divine Law",
      description: "Both religions emphasize the importance of divine law and guidance in daily life, with similar principles regarding worship and ethics."
    },
    {
      title: "Ethical Values",
      description: "Both traditions emphasize justice, charity, family values, and moral conduct in personal and social life."
    }
  ];

  const keyTopics = [
    {
      title: "Abrahamic Heritage",
      content: "Both Judaism and Islam trace their spiritual lineage to Prophet Abraham (peace be upon him), who is considered the patriarch of monotheism.",
      image: "/images/abraham-heritage.jpg"
    },
    {
      title: "Moses in Islam",
      content: "Prophet Moses (Musa) is mentioned more times in the Quran than any other prophet, and his story is central to Islamic teachings.",
      image: "/images/moses-islam.jpg"
    },
    {
      title: "Jerusalem",
      content: "Jerusalem holds special significance in both religions as a holy city and has been a center of worship and spiritual life for millennia.",
      image: "/images/jerusalem.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/juadism.jpg"
          alt="Judaism"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Understanding Judaism
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Exploring our shared heritage and fostering mutual understanding
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Judaism and Islam</h2>
          <p className="text-lg text-gray-600">
            Judaism and Islam share deep historical and theological connections. Understanding these connections helps build bridges between our communities while respecting our unique traditions.
          </p>
        </div>

        {/* Common Grounds */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Grounds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonGrounds.map((ground, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ground.title}</h3>
                <p className="text-gray-600">{ground.description}</p>
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

        {/* Quranic References */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quranic References</h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-[#f58875] pl-4 italic text-gray-600">
              "We sent down the Torah, containing guidance and light, by which the prophets who submitted themselves to Allah judged the Jews." (Quran 5:44)
            </blockquote>
            <p className="text-gray-600">
              The Quran acknowledges the Torah as a divine scripture and recognizes the special status of the Children of Israel in receiving divine guidance through numerous prophets.
            </p>
          </div>
        </div>

        {/* Historical Coexistence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Historical Coexistence</h3>
            <p className="text-gray-600 mb-4">
              Throughout history, there have been many periods of peaceful coexistence and mutual enrichment between Jewish and Muslim communities, particularly in:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Medieval Spain (Al-Andalus)
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Ottoman Empire
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                North African Communities
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Bridges Today</h3>
            <p className="text-gray-600 mb-4">
              We can learn from our shared history to build better understanding and cooperation today through:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Interfaith dialogue initiatives
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Joint community service projects
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Educational exchanges and programs
              </li>
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Materials</h3>
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
                  Historical documents and research
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Scholarly articles and books
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Involved</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Join interfaith discussion groups
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Attend cultural exchange events
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Volunteer for community projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 