"use client"
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';

// Three.js Solar System Component
const SolarSystem = () => {
  const groupRef = useRef();
  
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.PI / 4;
    }
  }, []);

  return (
    <group ref={groupRef}>
      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#6B2FB3" emissive="#6B2FB3" emissiveIntensity={0.5} />
      </mesh>

      {/* Orbit 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 2.1, 64]} />
        <meshBasicMaterial color="#f58875" transparent opacity={0.2} />
      </mesh>

      {/* Planet 1 */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#f58875" />
        </mesh>
      </Float>

      {/* Orbit 2 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3, 3.1, 64]} />
        <meshBasicMaterial color="#6B2FB3" transparent opacity={0.2} />
      </mesh>

      {/* Planet 2 */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[3, 0, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#6B2FB3" />
        </mesh>
      </Float>

      {/* Orbit 3 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4, 4.1, 64]} />
        <meshBasicMaterial color="#f58875" transparent opacity={0.2} />
      </mesh>

      {/* Planet 3 */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[4, 0, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#f58875" />
        </mesh>
      </Float>
    </group>
  );
};

export default function BoardPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const boardMembers = [
    {
      name: "Dr. Ahmed Hassan",
      position: "Chairman",
      image: "/board/chairman.jpg",
      bio: "With over 20 years of experience in Islamic education and community leadership, Dr. Hassan brings extensive knowledge and vision to our organization.",
      achievements: [
        "Ph.D. in Islamic Studies",
        "Former Dean of Islamic Studies",
        "Published Author"
      ]
    },
    {
      name: "Fatima Rahman",
      position: "Vice Chair",
      image: "/board/vice-chair.jpg",
      bio: "A dedicated community leader with a strong background in social work and Islamic counseling.",
      achievements: [
        "Master's in Social Work",
        "Certified Islamic Counselor",
        "Community Outreach Expert"
      ]
    },
    {
      name: "Imran Malik",
      position: "Treasurer",
      image: "/board/treasurer.jpg",
      bio: "Financial expert with extensive experience in managing non-profit organizations and Islamic finance.",
      achievements: [
        "Certified Public Accountant",
        "Islamic Finance Specialist",
        "15+ Years in Non-profit Management"
      ]
    },
    {
      name: "Aisha Khan",
      position: "Secretary",
      image: "/board/secretary.jpg",
      bio: "Experienced administrator with a passion for community development and Islamic education.",
      achievements: [
        "Master's in Public Administration",
        "Community Development Specialist",
        "Educational Program Coordinator"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Three.js Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <SolarSystem />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="relative h-[500px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#6B2FB3]/40 via-[#f58875]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Board of Directors
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
          <h2 className="text-3xl lg:text-5xl font-bold text-[#6B2FB3] mb-4">Our Leadership</h2>
          <p className="text-lg text-gray-600">
            Meet the dedicated individuals who guide our organization with wisdom, experience, and a deep commitment to serving the Muslim community.
          </p>
        </motion.div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {boardMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:border-[#6B2FB3] hover:shadow-2xl-purple group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-32 h-32 mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6B2FB3] to-[#f58875] rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#6B2FB3] group-hover:text-[#f58875] transition-colors">{member.name}</h3>
                  <p className="text-[#f58875] font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {member.achievements.map((achievement, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center gap-2 text-gray-600 bg-gray-50 p-2 rounded-lg"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B2FB3] to-[#f58875] flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div 
          className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-lg mb-12 border border-gray-200"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-[#6B2FB3] mb-6">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Community Growth",
                description: "Fostering a strong, united Muslim community through education and support",
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6"
              },
              {
                title: "Islamic Education",
                description: "Promoting authentic Islamic knowledge and understanding",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              },
              {
                title: "Social Impact",
                description: "Making a positive difference in society through Islamic values",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              }
            ].map((vision, index) => (
              <motion.div 
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#6B2FB3] to-[#f58875] rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={vision.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-semibold text-[#6B2FB3] mb-2">{vision.title}</h3>
                <p className="text-gray-600">{vision.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 