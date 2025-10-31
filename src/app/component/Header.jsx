"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      
      <header
        className={`sticky top-0 z-50 shadow-md transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-[#0c3842] text-white"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 w-full max-w-7xl mx-auto">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center ring-1 ring-white/30">
              <Image
                src="/image/logo SVG.svg"
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
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="hover:text-green-300">Home</Link>
            <Link href="/about" className="hover:text-green-300">About</Link>
            <Link href="/service" className="hover:text-green-300">Services</Link>
            <Link href="/solution" className="hover:text-green-300">Solutions</Link>
            <Link href="/faq" className="hover:text-green-300">FAQ</Link>
            <Link href="/blog" className="hover:text-green-300">Blog</Link>
            <Link href="/contact" className="hover:text-green-300">Contact</Link>

       
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="ml-4 p-2 rounded-full hover:bg-white/10 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

        
          <div className="flex items-center space-x-3 md:hidden">
          
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="text-white"
              aria-label="Toggle Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-gradient-to-r from-[#0c3842] to-[#123e4d] dark:from-gray-900 dark:to-gray-800 px-6 py-3 space-y-3 w-full">
            <Link href="/" className="block hover:text-green-300">Home</Link>
            <Link href="/about" className="block hover:text-green-300">About</Link>
            <Link href="/service" className="block hover:text-green-300">Services</Link>
            <Link href="/solution" className="block hover:text-green-300">Solutions</Link>
            <Link href="/faq" className="block hover:text-green-300">FAQ</Link>
            <Link href="/blog" className="block hover:text-green-300">Blog</Link>
            <Link href="/contact" className="block hover:text-green-300">Contact</Link>
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
          className="w-14 h-14 rounded-full shadow-xl border-2 border-white dark:border-gray-700 hover:shadow-pink-400 transition-all duration-300"
        />
      </a>
    </>
  );
}
