'use client';

import Image from 'next/image';

export default function NewsletterHero() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Branding Content */}
        <div className="space-y-6">
          <p className="text-lg text-[var(--button-primary)] font-medium">Hey, Health Enthusiasts 🌿</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            Farmik Wellness. Fresh updates, zero hassle.
          </h1>
          <p className="text-gray-700 text-lg">
            Join our superfoods community and be the first to know about new flavors, exclusive offers, and nutrition tips curated by experts.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="text"
              placeholder="Enter your email..."
              className="border border-gray-300 px-4 py-3 rounded-full w-full sm:w-72 bg-white text-[var(--text-primary)]"
            />
            <button className="bg-[var(--button-primary)] hover:bg-[var(--button-hover)] text-white px-6 py-3 rounded-full font-semibold transition">
              Subscribe Now
            </button>
          </div>

          {/* Offer Confirmation Text */}
          <p className="text-sm text-gray-500 mt-2">
            🎁 Sign up & unlock healthy savings, seasonal picks, and inside stories from Farmik.
          </p>
        </div>

        {/* Right: Mobile UI Image */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/phone.png"
            alt="Farmik Newsletter Preview"
            width={200}
            height={460}
          />

          {/* Top-Left Overlay */}
          <div className="absolute top-4 left-4 backdrop-blur-md bg-white/40 text-[var(--text-primary)] px-4 py-2 rounded-md text-sm shadow-lg border border-white/60">
            ⚠️ Hot picks! <br />
            <span className="text-xs text-gray-700">Stock running out fast</span>
          </div>

          {/* Bottom-Right Overlay */}
          <div className="absolute bottom-4 right-4 backdrop-blur-md bg-white/40 text-[var(--text-primary)] px-4 py-2 rounded-md text-sm shadow-lg border border-white/60">
            🛒 In High Demand! <br />
            <span className="text-xs text-gray-700">Flying off the shelves.

</span>
          </div>
        </div>
      </div>
    </section>
  );
}
