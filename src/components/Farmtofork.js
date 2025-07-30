"use client";

import React from "react";
import Image from "next/image";

export default function Farmtofork() {
  return (
    <section className="w-full py-14 px-4 md:px-10 bg-[var(--main-bg)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-[460px] rounded-2xl overflow-hidden ">
          <Image
            src="/farmtofork.webp"
            alt="Farmik Global Facility"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-4">
          <span className="text-xs text-white bg-[var(--button-primary)] px-3 py-1 rounded-full font-medium shadow w-fit">
            Farm to Fork Process
          </span>

          <h2 className="text-xl md:text-2xl font-semibold mt-1 text-[var(--text-primary)] font-satoshi leading-relaxed">
        From farm to your plate
          </h2>

          <p className="text-sm text-[var(--text-primary)] font-satoshi leading-relaxed">
            Every Farmik product travels a trusted path — from farm to your fork — preserving purity, nutrition, and sustainability at each step.
          </p>

          <div className="grid grid-cols-1 gap-3 pt-2">
            {[
              {
                step: "🌱 Step 1 – Grown at the Farm:",
                desc: "It all starts at organic fields where ancient grains and superfoods are grown sustainably without synthetic chemicals or GMOs.",
              },
              {
                step: "🏭 Step 2 – Processed at Our Facility:",
                desc: "The harvest is brought to our ISO- and HACCP-certified facility for gentle cleaning, roasting, and minimal processing that locks in nutrition.",
              },
              {
                step: "📦 Step 3 – Packed & Stored Securely:",
                desc: "Finished goods are sealed in moisture-resistant packaging and stored in temperature-controlled warehouses for peak freshness.",
              },
              {
                step: "🛒 Step 4 – Delivered to Fork:",
                desc: "Farmik products reach customers through retail shelves, health stores, and online platforms — ready for everyday nourishment.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] px-4 py-3 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="text-sm text-[var(--text-primary)] font-satoshi leading-snug">
                  <strong>{item.step}</strong> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
