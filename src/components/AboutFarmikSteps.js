"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    title: "Integrated Multi-Country Manufacturing",
    description:
      "Farmik’s production hubs across India, Sri Lanka, and the UAE are equipped for organic-certified, export-ready manufacturing with region-specific compliance.",
  },
  {
    title: "Supply Chain Control from Farm to Fork",
    description:
      "We handle raw material sourcing, in-house processing, packaging, and logistics — ensuring traceability and quality every step of the way.",
  },
  {
    title: "Custom Nutrition",
    description:
      "From R&D formulations to multilingual, market-ready packaging, Farmik adapts products to meet global consumer expectations.",
  },
  {
    title: "Sustainability & Compliance as Core Values",
    description:
      "All operations follow eco-safe practices and maintain USDA Organic, EU Organic, JAS, and HACCP certifications.",
  },
];

export default function AboutFarmikSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-[var(--main-bg)] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left Content */}
        <div>
          <div className="inline-block text-sm font-medium text-white bg-[var(--button-primary)] px-3 py-1 rounded-full mb-4 shadow">
            Global Farmik Network
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-snug font-satoshi">
            Empowering Wellness Through Global Manufacturing
          </h2>
          <p className="text-[var(--text-primary)] text-base md:text-lg mb-6 font-satoshi">
            At Farmik, our strength lies in vertically integrated, globally coordinated facilities — delivering high-quality, health-focused nutrition across borders.
          </p>
          -<button className="inline-flex items-center text-bold bg-green-100 gap-2 px-5 py-3  rounded-full shadow transition">
            Explore Our Products
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Right Timeline with Animation */}
        <div className="relative" ref={ref}>
          {/* Animated Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-4 top-0 w-px bg-[var(--accent-color)] z-0"
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 relative z-10"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
              >
                {/* Icon Diamond */}
                <div className="min-w-[32px] flex justify-center">
                  <div className="w-3 h-3 rotate-45 bg-[var(--highlight)] shadow-sm" />
                </div>

                {/* Text Block */}
                <div>
                  <h4 className="text-lg font-semibold text-[var(--accent-color)] font-satoshi">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[var(--text-primary)] mt-1 font-satoshi">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
