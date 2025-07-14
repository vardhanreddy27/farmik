'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--main-bg)] text-gray-700 pt-8 pb-4 px-4 md:pt-12 md:pb-6 md:px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-y-0 md:gap-10 text-center md:text-left">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Link href="/">
            <Image
              src="/Farmik.svg"
              alt="Farmik Logo"
              width={190}
              height={60}
              className=""
              priority
            />
          </Link>
          <p className="text-sm leading-snug max-w-xs">
            Farmik brings you internationally certified superfoods, proudly made in India — where tradition meets innovation in every bite. 🌿
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-md font-semibold">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/products" className="hover:underline">Our Products</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop Now</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <h4 className="text-md font-semibold">Contact</h4>
          <p className="text-sm">📧 support@agasthyasuperfoods.com</p>
          <p className="text-sm">📞 +91 70757 04167</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="text-md font-semibold">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-gray-600 text-lg">
            <a href="https://www.facebook.com/profile.php?id=61576634257472" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a href="https://www.instagram.com/mr.flakesnutrix/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/company/agasthya-super-foods-india-pvt-ltd/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-blue-700" />
            </a>
            <a href="https://www.youtube.com/@agasthyasuperfoods" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-6 pt-4 text-center text-xs text-gray-500">
        © 2025 Farmik, a brand by Agasthya Superfoods India Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
