"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header Navbar */}
      <header
        style={{ backgroundColor: "#0c3842" }}
        className="text-white sticky top-0 z-40 shadow-md"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center ring-1 ring-white/30">
              <Image
                src="/logo svg.svg"
                alt="AD SHASTREE Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg">AD SHASTREE</h1>
              <p className="text-xs opacity-90">
                Creative social media & brand builders
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/" className="hover:text-green-300 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-300 transition">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link href="#" className="hover:text-green-300 transition">
                Services
              </Link>
              <div className="absolute left-0 w-48 mt-2 bg-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all ease-in-out duration-300">
                <Link
                  href="/service/design"
                  className="block px-4 py-2 text-white bg-gradient-to-r from-[#39a5be] to-[#09546d] hover:text-black transition-colors duration-300"
                >
                  Design
                </Link>
                <Link
                  href="/service/development"
                  className="block px-4 py-2 text-white bg-gradient-to-r from-[#33bfdf] to-[#123e4d] hover:text-black transition-colors duration-300"
                >
                  Development
                </Link>
                <Link
                  href="/service/marketing"
                  className="block px-4 py-2 text-white bg-gradient-to-r from-[#0c3842] to-[#123e4d] hover:text-black transition-colors duration-300"
                >
                  Marketing
                </Link>
              </div>
            </div>

            <Link href="/solution" className="hover:text-green-300 transition">
              Solutions
            </Link>
            <Link href="/faq" className="hover:text-green-300 transition">
              FAQ
            </Link>
            <Link href="/blog" className="hover:text-green-300 transition">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-green-300 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden bg-gradient-to-r from-[#0c3842] to-[#123e4d] px-6 py-3 space-y-3">
            <Link href="/" className="block hover:text-green-300">
              Home
            </Link>
            <Link href="/about" className="block hover:text-green-300">
              About
            </Link>
            <Link href="/service" className="block hover:text-green-300">
              Services
            </Link>
            <Link href="/solution" className="block hover:text-green-300">
              Solutions
            </Link>
            <Link href="/faq" className="block hover:text-green-300">
              FAQ
            </Link>
            <Link href="/blog" className="block hover:text-green-300">
              Blog
            </Link>
            <Link href="/contact" className="block hover:text-green-300">
              Contact
            </Link>
          </div>
        )}
      </header>

      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-32 right-6 z-50 hover:scale-110 transition-transform duration-300 animate-bounce"
      >
        <img
          src="/image/instra.jpeg"
          alt="Instagram"
          className="w-14 h-14 rounded-full shadow-xl border-2 border-white hover:shadow-pink-400 transition-all duration-300"
        />
      </a>
    </>
  );
}
