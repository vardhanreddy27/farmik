'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-3 bg-[var(--main-bg)] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left: Logo */}
        <Link href="/">
          <Image
            src="/Farmik.svg"
            alt="Farmik Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex gap-8 text-[var(--text-primary)] font-medium">
          <Link href="/" className="hover:text-[var(--button-primary)] transition">Home</Link>
          <Link href="/" className="hover:text-[var(--button-primary)] transition">About</Link>
          <Link href="/" className="hover:text-[var(--button-primary)] transition">Products</Link>
          <Link href="/contact" className="hover:text-[var(--button-primary)] transition">Contact</Link>
        </nav>

        {/* Right: Shop Button */}
        <div className="hidden md:block">
          <Link href="/shop">
   <button className="bg-[var(--button-primary)] text-[var(--button-text)] px-8 py-2 rounded-full font-semibold hover:bg-[var(--button-hover)] transition-all">
  Shop
</button>

          </Link>
        </div>

        {/* Mobile: Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile: Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 text-[var(--text-primary)] font-medium">
          {['/', '/about', '/products', '/contact'].map((path, index) => {
            const label = ['Home', 'About', 'Products', 'Contact'][index];
            return (
              <Link
                key={label}
                href={path}
                onClick={() => setIsOpen(false)}
                className="block hover:text-[var(--button-primary)]"
              >
                {label}
              </Link>
            );
          })}
          <Link href="/shop" onClick={() => setIsOpen(false)}>
            <button className="w-full mt-2 bg-[var(--button-primary)] text-white px-6 py-2 rounded-full font-semibold hover:bg-[var(--button-hover)] transition">
              Shop
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
