"use client";
import Image from 'next/image';
import Link from 'next/link';
import PopupForm from '../components/PopupForm';
import { useState } from 'react';
 
export default function ArticlesBooksPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const categories = [
    {
      title: "Islamic Beliefs",
      description: "Articles and books explaining core Islamic beliefs and principles.",
      items: [
        "The Six Articles of Faith",
        "Understanding Tawheed",
        "The Concept of Prophethood",
        "The Day of Judgment"
      ]
    },
    {
      title: "Quran & Tafseer",
      description: "Resources for understanding and studying the Quran.",
      items: [
        "Quran Translations",
        "Tafseer Studies",
        "Quranic Sciences",
        "Memorization Guides"
      ]
    },
    {
      title: "Hadith & Sunnah",
      description: "Collections and explanations of prophetic traditions.",
      items: [
        "Major Hadith Collections",
        "Hadith Sciences",
        "Prophetic Biography",
        "Daily Sunnah Practices"
      ]
    },
    {
      title: "Fiqh & Islamic Law",
      description: "Guidance on Islamic jurisprudence and legal matters.",
      items: [
        "Prayer & Purification",
        "Zakat & Charity",
        "Marriage & Family",
        "Business Ethics"
      ]
    }
  ];

  const featuredBooks = [
    {
      title: "The Sealed Nectar",
      author: "Safiur-Rahman Al-Mubarakpuri",
      description: "A comprehensive biography of Prophet Muhammad (PBUH).",
      image: "/ScaredNector.png"
    },
    {
      title: "The Divine Reality",
      author: "Hamza Andreas Tzortzis",
      description: "A philosophical exploration of God's existence.",
      image: "/divine-reality.png"
    },
    {
      title: "There is a GOD",
      author: "Engineer Hafiz Muhmmad harris",
      description: "Islamic proofs of God's existence through Quran and logic.",
      image: "/there-is-god.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Articles & Books | AllahCall</title>
        <meta name="description" content="Explore our collection of Islamic articles and books to deepen your understanding of Islam and its teachings." />
      </Head>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1599488059966-a42a2ab36991?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Articles & Books
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Explore our collection of Islamic literature and educational resources
            </p>
            {/* <Link href="#categories" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Browse Resources
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Islamic Resources</h2>
          <p className="text-lg text-gray-600">
            Access a wealth of authentic Islamic knowledge through our carefully curated 
            collection of articles, books, and educational materials.
          </p>
        </div>

        {/* Categories Grid */}
        <div id="categories" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Books */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-4">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-[#f58875] mb-2">by {book.author}</p>
                <p className="text-gray-600">{book.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Seeking Knowledge</h3>
            <p className="text-lg mb-6">
              "Seeking knowledge is an obligation upon every Muslim." (Ibn Majah)
            </p>
            <p className="text-lg">
              Explore our resources to enhance your understanding of Islam and grow in your faith.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Reading Today</h2>
          <p className="text-lg text-gray-600 mb-8">
            Access our complete collection of articles and books to deepen your Islamic knowledge.
          </p>
          <div className="space-x-4">
            {/* <Link href="/contact" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Request Access
            </Link> */}
            <button
              onClick={() => setShowContactModal(true)}
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <PopupForm open={showContactModal} onClose={() => setShowContactModal(false)} title="Contact Us" purpose="contact" />
    
    </div>
    </>
  );
} 