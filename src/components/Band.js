"use client";

import React from "react";
import { ShieldCheck, Sparkles, Droplet, SearchCheck } from "lucide-react";

const Band = () => {
  const features = [
    {
      label: "100% Safe",
      icon: <ShieldCheck className="w-7 h-7 text-[#004C3F]" />,
    },
    {
      label: "No Artificial Flavors",
      icon: <Sparkles className="w-7 h-7 text-[#004C3F]" />,
    },
    {
      label: "No Additives",
      icon: <Droplet className="w-7 h-7 text-[#004C3F]" />,
    },
    {
      label: "Traceable Ingredients",
      icon: <SearchCheck className="w-7 h-7 text-[#004C3F]" />,
    },
  ];

  return (
    <section className="w-full bg-[#015244] py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-white space-y-2">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              {item.icon}
            </div>
            <p className="text-sm font-bold">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Band;
