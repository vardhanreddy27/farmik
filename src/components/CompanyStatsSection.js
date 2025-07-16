"use client";

import React from "react";
import Image from "next/image";
import {
  Globe,
  FlaskConical,
  Leaf,
} from "lucide-react";

export default function CompanyStatsSection() {
  const highlights = [
    {
      icon: <Globe className="w-5 h-5 text-[var(--accent-color)]" />,
      label: "Presence Across 20+ Countries and 5 Continents",
    },
    {
      icon: <FlaskConical className="w-5 h-5 text-[var(--highlight)]" />,
      label: "Innovation in Smart Nutrition & Clean-Label R&D",
    },
    {
      icon: <Leaf className="w-5 h-5 text-[var(--button-primary)]" />,
      label: "Nature-Based Superfoods with Sustainable Origins",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-10 bg-[var(--main-bg)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[400px]">
        {/* Left: Image */}
        <div className="h-full flex items-center justify-center">
          <div className="relative w-full h-[400px] rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/bigbanner.webp"
              alt="Farmik Global Facility"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="h-full flex flex-col justify-center space-y-5">
          <div>
            <span className="text-xs text-white bg-[var(--button-primary)] px-3 py-1 rounded-full font-medium shadow">
              About Farmik
            </span>
            <h2 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mt-3 leading-snug font-satoshi">
              Farmik brings future-ready wellness solutions to the global stage.
            </h2>
            <p className="text-sm text-[var(--text-primary)] mt-3 leading-relaxed font-satoshi">
              From smart health mixes to ready-to-eat nutrition, Farmik delivers sustainable, scientifically formulated superfoods to global markets through certified, integrated facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] px-4 py-3 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4"
              >
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
                  {item.icon}
                </div>
                <p className="text-sm text-[var(--text-primary)] font-satoshi">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
