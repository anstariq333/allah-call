"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function TestimoniesPage() {
  const testimonies = [
    {
      name: "Sarah Johnson",
      location: "United States",
      image: "/images/testimonial-1.jpg",
      quote: "Islam brought peace to my heart and clarity to my mind. The concept of direct connection with Allah resonated deeply with me.",
      story: "I was searching for meaning in life when I first learned about Islam. The logical approach to faith and the emphasis on direct connection with God drew me in."
    },
    {
      name: "David Martinez",
      location: "Spain",
      image: "/images/testimonial-2.jpg",
      quote: "The brotherhood and sisterhood in Islam is unlike anything I've experienced before. It truly feels like one global family.",
      story: "After studying various religions, I found that Islam's teachings about social justice and community responsibility aligned perfectly with my values."
    },
    {
      name: "Emma Wilson",
      location: "United Kingdom",
      image: "/images/testimonial-3.jpg",
      quote: "The beautiful thing about Islam is how it guides every aspect of life while maintaining a balance between spiritual and worldly matters.",
      story: "My journey to Islam began through Muslim friends who showed me the beauty of their faith through their actions and character."
    },
    {
      name: "Michael Chen",
      location: "Canada",
      image: "/images/testimonial-4.jpg",
      quote: "Islam answered the deep philosophical questions I had about existence and purpose in a way that satisfied both my heart and mind.",
      story: "As a person with a scientific background, I found Islam's emphasis on seeking knowledge and understanding the natural world particularly appealing."
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
              Journey to Islam
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Inspiring stories of those who found their path to Islam
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stories of Guidance</h2>
          <p className="text-lg text-gray-600">
            Every journey to Islam is unique and beautiful. These testimonies share how different people 
            found their way to the truth and how Islam transformed their lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonies.map((testimony, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={testimony.image}
                  alt={testimony.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <blockquote className="italic text-gray-600 mb-4">
                  "{testimony.quote}"
                </blockquote>
                <p className="text-gray-600 mb-4">{testimony.story}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">{testimony.name}</h3>
                    <p className="text-gray-500">{testimony.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspiration Box */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Your Journey Awaits</h3>
            <p className="text-lg mb-6">
              "Indeed, Allah guides whom He wills to His straight path." (Quran 2:213)
            </p>
            <p className="text-lg">
              Every person's journey to Islam is different, but the destination is the same: 
              peace through submission to Allah.
            </p>
          </div>
        </div>

        {/* Share Your Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have you recently embraced Islam? We'd love to hear your story and share it 
              to inspire others on their journey to Islam.
            </p>
            <Link href="/contact" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Submit Your Story
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you're interested in learning more about Islam or are considering becoming a Muslim, 
            we're here to help guide you on your journey.
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