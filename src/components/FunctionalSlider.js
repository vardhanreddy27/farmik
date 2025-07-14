'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';

const slides = [
  {
    title: 'WHOLENESS IN EVERY BITE',
    description:
      'Explore our wholesome breakfast cereals — crafted from quinoa, millet, berries, chocolate, nuts & more. Your perfect morning fuel.',
    img: '/breakfast.png',
  },
  {
    title: 'IMMUNITY BOOSTERS',
    description:
      'Fuel your immunity with mango, turmeric and ancient grain blends crafted to support your everyday wellness.',
    img: '/breakfast.png',
  },
  {
    title: 'PLANT-BASED ENERGY',
    description:
      'Power through the day with plant-based bites rich in protein, vitamins, and fiber. No added sugar.',
    img: '/breakfast.png',
  },
];

export default function FunctionalSlider() {
  return (
    <section className="w-full min-h-screen bg-[#c7feff85] flex items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 10000 }}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 gap-40 items-center">
              
              {/* Image Side aligned to end */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="flex justify-center md:justify-end"
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </motion.div>

              {/* Text Content vertically centered */}
              <motion.div
                className="space-y-6 flex flex-col justify-center items-start"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h2 className="text-4xl font-extrabold text-black">
                  {slide.title}
                </h2>
                <p className="text-gray-700 text-lg max-w-md">
                  {slide.description}
                </p>
                
                <div className="bg-white px-6 py-4 rounded-xl shadow-md border border-gray-200 max-w-md">
                  <h3 className="text-lg font-semibold text-black mb-1">🌱 Naturally Nutritious. Delightfully Delicious.</h3>
                  <p className="text-gray-700 mb-2 text-sm">
                    From high-fiber cereals to plant-powered snacks, we focus on taste that fuels your day — without additives.
                  </p>
                  <button className="text-[var(--button-primary)] font-semibold text-sm ">
                    Explore Our Range →
                  </button>
                </div>
              </motion.div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
