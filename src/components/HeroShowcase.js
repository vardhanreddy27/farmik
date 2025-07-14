'use client';

import Image from 'next/image';

const imageColumns = [
  ['/berryblastwithbg.webp', '/berryblastwithbg.webp'],
  ['/berryblastwithbg.webp', '/berryblastwithbg.webp', '/berryblastwithbg.webp'],
  ['/berryblastwithbg.webp', '/berryblastwithbg.webp', '/berryblastwithbg.webp', '/berryblastwithbg.webp'],
];

export default function HeroShowcase() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <p className="text-sm text-green-700 font-medium mb-2">
          Nourish Your Life, Naturally 🌿
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Premium Superfoods <br className="hidden sm:block" /> Backed by Science & Tradition
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Explore Farmik’s curated range of healthy cereals, snacks, and wellness blends – crafted from ancient grains, powered by modern nutrition, and certified for purity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[var(--button-primary)] text-white px-6 py-3 rounded-full transition-all">
            Explore Products
          </button>
          <button className="bg-green-100 px-6 py-3 font-medium rounded-full">
            Contact Team
          </button>
        </div>
      </div>

      {/* Right Grid */}
      <div className="md:w-1/2 flex gap-4 justify-center md:justify-end min-h-[300px]">
        {imageColumns.map((column, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-4 justify-center"
          >
            {column.map((src, imgIndex) => (
              <div
                key={imgIndex}
                className="w-32 h-20 sm:w-36 sm:h-24 md:w-44 md:h-28 relative rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`Farmik Product ${colIndex}-${imgIndex}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  priority
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
