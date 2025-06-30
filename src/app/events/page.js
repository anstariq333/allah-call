"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function EventsPage() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [modalEvent, setModalEvent] = useState(null);

  const handleOpenModal = (event) => {
    setShowModal(true);
    setModalEvent(event);
    setForm({ name: '', email: '', phone: '' });
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalEvent(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const upcomingEvents = [
    {
      title: "Islamic Knowledge Conference",
      date: "March 15, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Islamic Center, New York",
      description: "A day-long conference featuring renowned scholars discussing various aspects of Islamic knowledge and contemporary issues.",
      image: "/event.jpg"
    },
    {
      title: "Quran Recitation Competition",
      date: "April 5, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Community Hall, Chicago",
      description: "Annual Quran recitation competition for all age groups with exciting prizes, certificates, special guest appearances, and community-wide participation.",
      image: "https://images.unsplash.com/photo-1712249239061-7d4f49ec9d44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "New Muslims Support Group",
      date: "Every Saturday",
      time: "3:00 PM - 5:00 PM",
      location: "Online",
      description: "Weekly support group for new Muslims to learn about Islam, share personal experiences, ask meaningful questions,  and build a strong, supportive community.",
      image: "https://images.unsplash.com/photo-1712249237537-8c5a0420653b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const pastEvents = [
    {
      title: "Interfaith Dialogue",
      date: "February 10, 2024",
      location: "Community Center, Los Angeles",
      description: "A successful event bringing together people of different faiths to promote understanding and harmony.",
      image: "https://images.unsplash.com/photo-1627818653012-054f17eb0648?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Islamic Art Exhibition",
      date: "January 20, 2024",
      location: "Art Gallery, Houston",
      description: "Showcasing beautiful Islamic calligraphy and artwork from local artists.",
      image: "https://images.unsplash.com/photo-1549128967-147ab17d5415?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[450px] w-full">
        <Image
          src="/main-event.jpg"
          alt="Events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Events & Activities
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Events</h2>
          <p className="text-lg text-gray-600">
            Participate in our diverse range of events designed to educate, inspire, and bring the community together.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="w-full bg-[#f58875] text-white py-2 rounded-lg hover:bg-[#e67a68] transition" onClick={() => handleOpenModal(event)}>
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </p>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter to receive updates about upcoming events and activities.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]"
            />
            <button
              type="submit"
              className="bg-[#f58875] text-white px-6 py-2 rounded-lg hover:bg-[#e67a68] transition"
            >
              Subscribe
            </button>
          </form>
        </div> */}

        {/* Modal Popup */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
              <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl font-bold mb-2 text-center text-[#6B2FB3]">Event Registration</h2>
                  {modalEvent && <p className="text-center text-gray-600 mb-4">{modalEvent.title}</p>}
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]"
                    required
                  />
                  <button type="submit" className="w-full bg-[#f58875] text-white py-2 rounded-lg hover:bg-[#e67a68] transition">Submit</button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[200px]">
                  <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Registered Successfully!</h3>
                  <p className="text-gray-600 mb-4">Thank you for registering. We look forward to seeing you at the event!</p>
                  <button onClick={handleCloseModal} className="bg-[#f58875] text-white px-6 py-2 rounded-lg hover:bg-[#e67a68] transition">Close</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 