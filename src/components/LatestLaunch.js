'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { X } from 'lucide-react';
import SplitType from 'split-type';
import { gsap } from 'gsap';

const wrap = (min, max, v) => ((((v - min) % (max - min)) + (max - min)) % (max - min)) + min;

function ParallaxCardColumn({ items, baseVelocity = 8, onCardClick }) {
  const baseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && itemRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const itemHeight = itemRef.current.offsetHeight;
        setRepetitions(Math.ceil(containerHeight / itemHeight) + 2);
      }
    };
    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [items]);

  const y = useTransform(baseY, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    if (isHovered.current) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    directionFactor.current = velocityFactor.get() < 0 ? -1 : 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseY.set(baseY.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[60vh] sm:h-[75vh] w-full sm:w-[280px] overflow-hidden"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <motion.div className="absolute flex flex-col gap-4" style={{ y }}>
        {Array.from({ length: repetitions }).flatMap((_, i) =>
          items.map((item, index) => (
            <div
              key={`${i}-${index}`}
              ref={i === 0 && index === 0 ? itemRef : null}
              onClick={() => onCardClick(item)}
              className="cursor-pointer relative h-[160px] w-[90vw] max-w-[260px] rounded-2xl shadow-md bg-cover bg-center flex items-end overflow-hidden mx-auto"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="w-full p-3" />
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}

function VelocityScrollColumn({ defaultVelocity = 0.5, numColumns = 2, items, onCardClick }) {
  return (
    <div className="flex flex-row justify-center gap-2 w-full">
      {Array.from({ length: numColumns }).map((_, i) => (
        <ParallaxCardColumn
          key={i}
          items={items}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default function LatestLaunch() {
  const [selectedItem, setSelectedItem] = useState(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const split = new SplitType('#launch-heading', { types: 'words' });
    gsap.set('#launch-heading', { opacity: 1 });
    gsap.set('.word', { y: 100, opacity: 0 });

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.to('.word', {
          y: 0,
          opacity: 1,
          stagger: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (headingRef.current) observer.observe(headingRef.current);
  }, []);

  const cards = [
    {
      image: "/bfbanner.webp",
      title: "Berry Blast Millet Muesli",
      tagline: "Berries. Millets. Perfection.",
      benefits: "Antioxidants · High Fiber · Low Sugar",
    },
    {
      image: "/snacksbanner.webp",
      title: "Multi-Millet Chocos",
      tagline: "Smart Breakfast, Every Morning",
      benefits: "Gluten-Free · High Protein · No Maida",
    },
    {
      image: "/both.webp",
      title: "Multi Millet Muesli & Millet Chocos",
      tagline: "Snack Clean. Snack Bold.",
      benefits: "Kids Friendly  · Gluten-Free · Rich in Fiber",
    },
    {
      image: "/milkshakes.webp",
      title: "Super Gains Milkshakes",
      tagline: "Sustained Energy, Naturally",
      benefits: "Jaggery ·  Kids Friendly · Clean Label",
    },
    {
      image: "/barsbg.webp",
      title: "Meal replacement protien bars",
      tagline: "Power of 12 Super Grains",
      benefits: "High Protein · Kids Friendly · Plant Based",
    },
    {
      image: "/chocoballs.webp",
      title: "Roasted Makhana – Peri Peri",
      tagline: "Light Snack. Big Crunch.",
      benefits: "Gluten-Free · Roasted · Low Cal",
    }, {
      image: "/oats.jpg",
      title: "Roasted Makhana – Peri Peri",
      tagline: "Light Snack. Big Crunch.",
      benefits: "Gluten-Free · Roasted · Low Cal",
    },
  ];

  return (
    <section className="w-full px-4 bg-white">
      <div className="text-center px-4 p-8">
        <h2 className="text-3xl md:text-4xl font-bold">Latest Launch</h2>
        <p className="text-gray-500 mt-1 pb-8 text-sm">Explore our top-performing, family-loved innovations.</p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pl-3">
        <div className="flex-1 text-center lg:text-left">
          <h1
            id="launch-heading"
            ref={headingRef}
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 overflow-hidden opacity-0"
          >
            New from <br />
            <span className="text-[var(--button-primary)]">Farmik Superfoods</span> Powered by Nature. Crafted for Wellness.
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto lg:mx-0 text-base md:text-lg">
            Healthy Eating, Now Deliciously Simple.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
            <Link href="/Contact">
              <button className="bg-[var(--button-primary)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
                Shop Now
              </button>
            </Link>
            <Link href="/WholesaleBulk">
              <button className="border border-[var(--button-primary)] text-[var(--button-primary)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--button-primary)] hover:text-white transition">
                See Full Range
              </button>
            </Link>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            100% Natural · Backed by R&D · Loved by Families
          </div>
        </div>

        <div className="flex-1 w-full relative h-[65vh] sm:h-[75vh]">
          <VelocityScrollColumn items={cards} onCardClick={setSelectedItem} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative overflow-y-auto max-h-[90vh]"
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedItem(null)}
              >
                <X size={20} />
              </button>
              <div className="w-full relative h-60 rounded-xl mb-4 overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="100%"
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{selectedItem.title}</h2>
              <p className="text-sm italic text-[var(--button-primary)] mb-2">{selectedItem.tagline}</p>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Benefits:</strong> {selectedItem.benefits}
              </p>
              <button
                className="bg-[var(--button-primary)] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition w-full"
                onClick={() => (window.location.href = '/WholesaleBulk')}
              >
                Shop Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
