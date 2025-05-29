"use client";
import Image from 'next/image';

export default function ChristianityPage() {
  const commonGrounds = [
    {
      title: "Belief in One God",
      description: "Both Islam and Christianity are monotheistic religions that believe in One Supreme Creator."
    },
    {
      title: "Prophets and Messengers",
      description: "Muslims respect Jesus (peace be upon him) as one of God's mighty messengers and honor Mary, his mother."
    },
    {
      title: "Moral Values",
      description: "Both religions emphasize love, mercy, charity, and good conduct towards all of humanity."
    },
    {
      title: "Sacred Texts",
      description: "Both traditions have revealed scriptures that guide their followers in faith and practice."
    }
  ];

  const keyTopics = [
    {
      title: "Jesus in Islam",
      content: "Muslims believe that Jesus (Isa) was one of the most important prophets of God, born miraculously to Mary, and honored in both this world and the hereafter.",
      image: "/images/jesus-islam.jpg"
    },
    {
      title: "Mary in Islam",
      content: "Mary (Maryam) is highly respected in Islam. An entire chapter of the Quran is named after her, and she is considered one of the most pious women in history.",
      image: "/images/mary-islam.jpg"
    },
    {
      title: "Interfaith Dialogue",
      content: "Islam encourages respectful dialogue with Christians to build understanding and cooperation for the common good of society.",
      image: "/images/interfaith-dialogue.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/bible.jpg"
          alt="Christianity"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Understanding Christianity
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Christianity and Islam</h2>
          <p className="text-lg text-gray-600">
            Islam and Christianity share many common values and beliefs. Understanding these similarities while respecting our differences helps build meaningful dialogue and peaceful coexistence.
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
              "Say, 'O People of the Book! Come to a word common between us and you: that we shall worship none but God and that we shall not associate anything with Him.'" (Quran 3:64)
            </blockquote>
            <p className="text-gray-600">
              The Quran encourages dialogue with Christians and Jews (People of the Book) and emphasizes our common heritage of monotheism and moral values.
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
                Download comparative study materials
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Watch interfaith dialogue videos
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Access scholarly articles
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
                Join interfaith discussion groups
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Participate in community events
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Attend workshops and seminars
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 