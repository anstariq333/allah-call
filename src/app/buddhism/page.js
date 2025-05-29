"use client";
import Image from 'next/image';

export default function BuddhismPage() {
  const commonValues = [
    {
      title: "Peace and Compassion",
      description: "Both traditions emphasize peace, compassion, and kindness towards all beings."
    },
    {
      title: "Ethical Living",
      description: "Both religions stress the importance of moral conduct and ethical behavior."
    },
    {
      title: "Mindfulness",
      description: "Both traditions value mindfulness, self-reflection, and spiritual awareness."
    },
    {
      title: "Service to Humanity",
      description: "Both faiths encourage serving others and helping those in need."
    }
  ];

  const keyTopics = [
    {
      title: "Understanding Buddhism",
      content: "Buddhism is a path of spiritual development leading to insight into the true nature of reality, founded by Siddhartha Gautama in ancient India.",
      image: "/buddism.jpg"
    },
    {
      title: "Historical Connections",
      content: "Muslims and Buddhists have interacted throughout history along the Silk Road and in various Asian regions, sharing knowledge and cultural exchanges.",
      image: "/images/silk-road.jpg"
    },
    {
      title: "Contemporary Dialogue",
      content: "Modern initiatives focus on finding common ground and promoting mutual understanding between Buddhist and Muslim communities.",
      image: "/images/buddhist-muslim-dialogue.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/buddism.jpg"
          alt="Buddhism"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Understanding Buddhism
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Exploring Buddhist traditions with respect and understanding
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Buddhism and Islam</h2>
          <p className="text-lg text-gray-600">
            While Buddhism and Islam have distinct beliefs and practices, both traditions share universal values that can serve as a foundation for mutual understanding and respect.
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

        {/* Historical Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Historical Interactions</h3>
            <p className="text-gray-600 mb-4">
              Buddhist-Muslim interactions have occurred throughout history in various regions:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                The Silk Road Trade Routes
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Southeast Asian Civilizations
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Central Asian Cultures
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Dialogue</h3>
            <p className="text-gray-600 mb-4">
              Contemporary initiatives for Buddhist-Muslim understanding include:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Interfaith conferences
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Academic exchanges
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Community outreach programs
              </li>
            </ul>
          </div>
        </div>

        {/* Islamic Perspective */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Islamic Perspective on Interfaith Relations</h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-[#f58875] pl-4 italic text-gray-600">
              "And We have sent you not but as a mercy for all creation." (Quran 21:107)
            </blockquote>
            <p className="text-gray-600">
              Islam teaches respect for all of humanity and encourages peaceful coexistence while maintaining our own beliefs and practices.
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
                Support peace initiatives
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 