import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroCarousel = () => {
  const slides = [
    { id: 1, image: "/heroImage1.png", title: "Empower Your Hiring with AI", subtitle: "Find the best talent faster than ever" },
    { id: 2, image: "/heroImage2.png", title: "Streamline Your Recruitment", subtitle: "AI-powered solutions for smart hiring" },
    { id: 3, image: "/heroImage3.png", title: "Build Your Dream Team", subtitle: "Efficient, data-driven hiring decisions" },
  ];

  return (
    <section className="relative w-full h-[500px] lg:h-[500px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              quality={90}
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 text-white px-6">
              <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="mt-2 text-lg md:text-xl">{slide.subtitle}</p>
              <button className="mt-6 px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded-lg transition">
                Get Started
              </button>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev absolute left-4 text-white text-3xl z-30 cursor-pointer"></div>
        <div className="swiper-button-next absolute right-4 text-white text-3xl z-30 cursor-pointer"></div>
      </Swiper>
    </section>
  );
};

export default HeroCarousel;

