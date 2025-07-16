import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function IslamPage() {
  const islamicTopics = [
    {
      title: "The Five Pillars of Islam",
      description: "Learn about the fundamental practices that form the foundation of a Muslim's faith and worship.",
      image: "https://images.unsplash.com/photo-1744264362119-bd94511b0597?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/islam/pillars"
    },
    {
      title: "The Six Articles of Faith",
      description: "Understand the core beliefs that every Muslim must hold in their heart.",
      image: "https://images.unsplash.com/photo-1579305796288-c534f6cf17ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/islam/faith"
    },
    {
      title: "The Life of Prophet Muhammad (PBUH)",
      description: "Explore the life and teachings of the final Messenger of Allah.",
      image: "https://images.unsplash.com/photo-1692977579997-948328cdb7d2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/islam/prophet"
    }
  ];

  return (
    <>
      <Head>
        <title>Understanding Islam | AllahCall</title>
        <meta name="description" content="Learn about the core beliefs, practices, and teachings of Islam on AllahCall." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[500px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1587617425953-9075d28b8c46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=" Islam"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Understanding Islam
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Islam</h2>
            <p className="text-lg text-gray-600">
              Islam is a complete way of life that guides humanity in all aspects of existence. It provides a comprehensive framework for spiritual, social, and personal development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Link href="/quran-sunnah" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="relative h-48 mb-4">
                <Image
                  src="/quran&sunnah.jpg"
                  alt="Quran & Sunnah"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quran & Sunnah</h3>
              <p className="text-gray-600">The primary sources of Islamic guidance and knowledge</p>
            </Link>
            <Link href="/dawah" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="relative h-48 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1627818653012-054f17eb0648?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dawah"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dawah</h3>
              <p className="text-gray-600">Inviting others to the message of Islam with wisdom</p>
            </Link>
            <Link href="/marriage" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="relative h-48 mb-4">
                <Image
                  src="/wedding.jpg"
                  alt="Islam & Marriage"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Islam & Marriage</h3>
              <p className="text-gray-600">Understanding marriage in Islam and family values</p>
            </Link>
          </div>

          {/* Islamic Topics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {islamicTopics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative h-48 mb-4">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <Link href={topic.link} className="text-[#f58875] font-medium hover:text-[#e67a68]">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is Islam?</h3>
                <p className="text-gray-600">
                  Islam is a monotheistic religion that teaches the worship of one God (Allah) and follows the teachings of Prophet Muhammad (peace be upon him). It emphasizes peace, mercy, and justice.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Who are Muslims?</h3>
                <p className="text-gray-600">
                  Muslims are followers of Islam who believe in one God and strive to live according to Islamic teachings. There are over 1.8 billion Muslims worldwide from diverse backgrounds.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What do Muslims believe?</h3>
                <p className="text-gray-600">
                  Muslims believe in one God, angels, revealed books, prophets, the Day of Judgment, and divine decree. They follow the Five Pillars of Islam and the Six Articles of Faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 