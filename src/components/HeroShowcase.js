'use client';

import Image from 'next/image';

const imageColumns = [
  ['/berryblastwithbg.webp', '/berryblastwithbg.webp'],
  ['/berryblastwithbg.webp', '/berryblastwithbg.webp', '/berryblastwithbg.webp'],
  ['/berryblastwithbg.webp', '/berryblastwithbg.webp', '/berryblastwithbg.webp', '/berryblastwithbg.webp'],
];

export default function HeroShowcase() {
  return (
    <section className="w-full px-10 py-8 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text */}
      <div className="md:w-1/2 mb-12 md:mb-0">
        <p className="text-sm text-green-700 font-medium mb-2">
          Nourish Your Life, Naturally 🌿
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Premium Superfoods <br /> Backed by Science & Tradition
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Explore Farmik’s curated range of healthy cereals, snacks, and wellness blends – crafted from ancient grains, powered by modern nutrition, and certified for purity.
        </p>
        <div className="flex gap-4">
          <button className="bg-[var(--button-primary)] text-white px-6 py-3 rounded-full transition-all">
            Explore Products
          </button>
          <button className="bg-green-100 px-6 py-3 font-medium rounded-full">
            Contact Team
          </button>
        </div>
      </div>

      {/* Right Grid with Vertically Centered Columns */}
      <div className="md:w-1/2 flex gap-4 justify-end min-h-[400px]">
        {imageColumns.map((column, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-4 justify-center"
          >
            {column.map((src, imgIndex) => (
              <div
                key={imgIndex}
                className="w-44 h-28 relative rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`Farmik Product ${colIndex}-${imgIndex}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
