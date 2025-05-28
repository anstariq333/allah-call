"use client"
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

// Three.js Background Component
const BackgroundSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#6B2FB3" 
          transparent 
          opacity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
};

export default function VolunteersPage() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus(prev => ({ ...prev, message: '' }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: false, message: '' });

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/mvgaewpr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your application! We will contact you soon.'
        });
        e.target.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Sorry, there was a problem submitting your form. Please try again.'
      });
    }
  };

  const volunteerRoles = [
    {
      title: "Dawah Team Member",
      description: "Engage in meaningful conversations about Islam and answer questions from interested individuals.",
      requirements: [
        "Basic knowledge of Islamic teachings",
        "Good communication skills",
        "Patience and empathy"
      ],
      icon: "💬"
    },
    {
      title: "Event Coordinator",
      description: "Help organize and manage Islamic events, workshops, and community gatherings.",
      requirements: [
        "Organizational skills",
        "Team management experience",
        "Event planning knowledge"
      ],
      icon: "📅"
    },
    {
      title: "Content Creator",
      description: "Create engaging Islamic content for social media and website platforms.",
      requirements: [
        "Writing or video production skills",
        "Understanding of Islamic principles",
        "Social media experience"
      ],
      icon: "✍️"
    },
    {
      title: "Educational Assistant",
      description: "Support Islamic education programs and help students in their learning journey.",
      requirements: [
        "Teaching experience",
        "Knowledge of Islamic studies",
        "Mentoring skills"
      ],
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Three.js Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <BackgroundSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="relative h-[500px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/volunteer-support-community-service.png"
          alt="Volunteers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6B2FB3]/40 via-[#f58875]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Join Our Volunteer Team
          </h1>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#6B2FB3] mb-4">Make a Difference</h2>
          <p className="text-lg text-gray-600">
            Become part of our mission to spread authentic Islamic knowledge and support the Muslim community. Your time and skills can make a lasting impact.
          </p>
        </motion.div>

        {/* Volunteer Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {volunteerRoles.map((role, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:border-[#6B2FB3] hover:shadow-2xl-purple group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{role.icon}</span>
                <h3 className="text-xl font-bold text-[#6B2FB3] group-hover:text-[#f58875] transition-colors">{role.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{role.description}</p>
              <h4 className="font-semibold text-[#f58875] mb-2">Requirements:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {role.requirements.map((req, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    {req}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg mb-12 border border-gray-200"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-[#6B2FB3] mb-6">Benefits of Volunteering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Personal Growth",
                description: "Develop new skills and deepen your Islamic knowledge",
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6"
              },
              {
                title: "Community Building",
                description: "Connect with like-minded individuals and build lasting relationships",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              },
              {
                title: "Spiritual Rewards",
                description: "Earn blessings by serving the community and spreading Islamic knowledge",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#f58875] rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-semibold text-[#6B2FB3] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-[#6B2FB3] mb-6">Apply to Volunteer</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875] transition-all duration-300" 
                />
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875] transition-all duration-300" 
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875] transition-all duration-300" 
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <label className="block text-gray-700 mb-2">Preferred Role</label>
              <select 
                name="role"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875] transition-all duration-300"
              >
                <option>Select a role</option>
                {volunteerRoles.map((role, index) => (
                  <option key={index}>{role.title}</option>
                ))}
              </select>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <label className="block text-gray-700 mb-2">Why do you want to volunteer with us?</label>
              <textarea 
                name="message"
                rows="4" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875] transition-all duration-300"
              ></textarea>
            </motion.div>
            <motion.button 
              type="submit" 
              className="w-full bg-[#f58875] text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Application
            </motion.button>
          </form>
          {formStatus.message && (
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
                formStatus.error 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-green-100 text-green-700'
              }`}
            >
              <div className="flex items-center">
                {formStatus.error ? (
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                <p className="font-medium">{formStatus.message}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

// Add this style block at the end of your file
const styles = `
  @keyframes slideIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
} 