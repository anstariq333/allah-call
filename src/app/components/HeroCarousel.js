import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/hero1.png",
      title: "Discover the Truth",
      subtitle: "of Islam's Beautiful Message",
      description: "Join us on a journey to understand the pure teachings of Islam and find answers to life's important questions."
    },
    {
      id: 2,
      image: "/ramzan.png",
      title: "Learn & Connect",
      subtitle: "with Islamic Teachings",
      description: "Access authentic Islamic knowledge from qualified scholars and explore the wisdom of the Quran and Sunnah."
    },
    {
      id: 3,
      image: "/mosque.png",
      title: "Join Our Community",
      subtitle: "of Seekers & Learners",
      description: "Be part of a supportive community where you can learn about Islam in a welcoming and understanding environment."
    },
  ];

  return (
    <section className="relative w-full h-[500px] lg:h-[650px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        effect="fade"
        loop={true}
        className="w-full h-full hero-carousel"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt="Mosque Interior"
              fill
              className="object-cover"
              priority
              quality={90}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6B2FB3]/40 via-[#6B2FB3]/10 to-transparent"></div>
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="absolute inset-0 mt-12 flex flex-col items-center justify-center text-center z-20 text-white px-6">
              <div className="max-w-4xl mt-24 mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  {slide.title}
                  <br />
                  <span className="text-3xl md:text-5xl lg:text-6xl opacity-90">
                    {slide.subtitle}
                  </span>
                </h1>
                <p className="mt-4 hidden md:block text-lg md:text-base lg:text-lg text-gray-100 max-w-[60%] mx-auto">
                  {slide.description}
                </p>
                <div className="pt-8 sm:pt-0 lg:pt-8">
                  <button className="bg-[#f58875] hover:text-primary text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
                  <a href="/our-work" className="block w-full h-full">Discover More</a>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-white opacity-75 hover:opacity-100 transition-opacity"></div>
        <div className="swiper-button-next !text-white opacity-75 hover:opacity-100 transition-opacity"></div>
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .hero-carousel .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .hero-carousel .swiper-pagination-bullet-active {
          opacity: 1;
          background: #f58875 !important;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;

