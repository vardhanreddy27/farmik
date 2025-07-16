'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-3 bg-[var(--main-bg)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Farmik.svg"
            alt="Farmik Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-[var(--text-primary)] font-medium">
          <Link href="/" className="hover:text-[var(--button-primary)] transition">Home</Link>
          <Link href="/about" className="hover:text-[var(--button-primary)] transition">About</Link>
          
          {/* Disabled Products */}
          <span className=" pointer-events-none cursor-not-allowed">Products</span>
          <Link href="/contact" className="hover:text-[var(--button-primary)] transition">Contact</Link>
        </nav>

        {/* Disabled Shop Button */}
        <div className="hidden md:block">
          <button
            disabled
            className="bg-[var(--button-primary)] text-[var(--button-text)] px-8 py-2 rounded-full font-semibold opacity-60 cursor-not-allowed"
          >
            Shop
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 text-[var(--text-primary)] font-medium bg-[var(--main-bg)] p-4 rounded shadow-md">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-[var(--button-primary)]">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-[var(--button-primary)]">About</Link>
          
          {/* Disabled Products */}
          <span className="block opacity-60 pointer-events-none cursor-not-allowed">Products</span>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[var(--button-primary)]">Contact</Link>

          {/* Disabled Shop Button */}
          <button
            disabled
            className="w-full mt-2 bg-[var(--button-primary)] text-white px-6 py-2 rounded-full font-semibold opacity-60 cursor-not-allowed"
          >
            Shop
          </button>
        </div>
      )}
    </header>
  );
}
