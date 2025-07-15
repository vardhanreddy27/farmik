'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function CategorySlider() {
  const categories = [
    {
      label: "Breakfast Cereals",
      image: "/Breakfastcereals.png",
      headline: "Power Your Mornings Naturally",
      bg: "bg-[#E0F4F1]",
      textBg: "bg-[#36959A]",
      arrowBg: "bg-[#36959A]",
    },
    {
      label: "Health Mix",
      image: "/Healthmixs.png",
      headline: "Protein & Fiber in Every Scoop",
      bg: "bg-[#FBE9F2]",
      textBg: "bg-[#8F2A4E]",
      arrowBg: "bg-[#8F2A4E]",
    },
    {
      label: "Cereal Flakes",
      image: "/CerealFlakes.png",
      headline: "Crunchy. Clean. Nutritionally Smart.",
      bg: "bg-[#EBF7E3]",  // light green
      textBg: "bg-[#6BAE42]", // green
      arrowBg: "bg-[#6BAE42]",
    },
    {
      label: "Porridge",
      image: "/Porridge.png",
      headline: "Comfort Food, Reinvented with Millet",
      bg: "bg-[#FFF1DC]", // light orange beige
      textBg: "bg-[#E38B29]", // orange
      arrowBg: "bg-[#E38B29]",
    },
    {
      label: "Bars",
      image: "/Barsnew.png",
      headline: "Snack Clean. Snack Strong.",
      bg: "bg-[#FFF4E0]", // soft yellow
      textBg: "bg-[#D4A016]", // golden yellow
      arrowBg: "bg-[#D4A016]",
    },
  ];

  return (
    <section className="py-10 bg-white px-4 sm:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Our Collection</h2>
      <p className="text-center text-[#444] text-lg mt-1 font-semibold">you’ll want them all!</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`group relative rounded-2xl shadow-md overflow-hidden flex flex-col justify-between transform transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer ${cat.bg}`}
          >
            {/* Image with headline and arrow */}
            <div className="relative w-full h-[280px] flex flex-col justify-end items-center">
              <Image
                src={cat.image}
                alt={cat.label}
                width={240}
                height={240}
                className="object-contain"
              />

              {/* Headline + Arrow */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 text-center">
                <p className="text-xs font-bold text-[var(--text-primary)] leading-snug">
                  {cat.headline}
                </p>
                <div
                  className={`mt-2 mx-auto w-6 h-6 rounded-full flex items-center justify-center shadow-md ${cat.arrowBg}`}
                >
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>
            </div>

            {/* Bottom Label */}
            <div className={`w-full text-white text-[15px] font-bold text-center py-4 ${cat.textBg}`}>
              {cat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
