"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Define types for our navigation
type PageType = "home" | "about" | "services" | "courses";

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#271E19]/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation("home")}
          >
            <Image
              src="/media/images/logo.png"
              alt="ThisIsMarriage Logo"
              width={180}
              height={180}
              className="mr-2"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks
              isScrolled={isScrolled}
              currentPage={currentPage}
              onNavigate={handleNavigation}
            />
            <a
              href="https://calendly.com/thisismarriageuk"
              target="_blank"
              className={`px-5 py-2 rounded border-2 transition-colors ${
                isScrolled
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              Book a Session
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isScrolled ? "text-white" : "text-white"}`}
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
            <NavLinks
              isMobile={true}
              currentPage={currentPage}
              onNavigate={handleNavigation}
            />
            <a
              href="https://calendly.com/thisismarriageuk"
              target="_blank"
              className="px-5 py-2 rounded border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-center"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

interface NavLinksProps {
  isScrolled?: boolean;
  isMobile?: boolean;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

function NavLinks({
  isScrolled = true,
  isMobile = false,
  currentPage,
  onNavigate,
}: NavLinksProps) {
  const baseClass = isMobile
    ? "text-gray-900 hover:text-gray-600"
    : isScrolled
    ? "text-white/80 hover:text-white"
    : "text-white/80 hover:text-white";

  const activeClass = isMobile
    ? "text-[#271E19] font-medium"
    : "text-white font-bold";

  return (
    <>
      <button
        onClick={() => onNavigate("home")}
        className={`${currentPage === "home" ? activeClass : baseClass}`}
      >
        Home
      </button>
      <button
        onClick={() => onNavigate("about")}
        className={`${currentPage === "about" ? activeClass : baseClass}`}
      >
        About
      </button>
      <button
        onClick={() => onNavigate("services")}
        className={`${currentPage === "services" ? activeClass : baseClass}`}
      >
        Services
      </button>
      <button
        onClick={() => onNavigate("courses")}
        className={`${currentPage === "courses" ? activeClass : baseClass}`}
      >
        Courses
      </button>
    </>
  );
}
