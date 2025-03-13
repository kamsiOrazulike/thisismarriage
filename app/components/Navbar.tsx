"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#b08060]/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/media/images/logo.svg"
              alt="ThisIsMarriage Logo"
              width={250}
              height={250}
              className="mr-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            <Link
              href="/contact"
              className={`px-5 py-2 rounded border-2 transition-colors ${
                isScrolled
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              Book a Session
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                isScrolled ? "text-white" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <NavLinks isMobile={true} />
            <Link
              href="/contact"
              className="px-5 py-2 rounded border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-center"
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinks({ isScrolled = true, isMobile = false }) {
  const linkClass = isMobile
    ? "text-white/80 hover:text-white"
    : isScrolled
    ? "text-white/80 hover:text-white"
    : "text-white/80 hover:text-white";

  return (
    <>
      <Link href="/" className={linkClass}>
        Home
      </Link>
      <Link href="/about" className={linkClass}>
        About
      </Link>
      <Link href="/courses" className={linkClass}>
        Courses
      </Link>
      <Link href="/blog" className={linkClass}>
        Blog
      </Link>
    </>
  );
}
