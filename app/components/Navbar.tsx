/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageType } from "./PageManager";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine current page based on pathname
  const getCurrentPage = (): PageType => {
    if (pathname === "/") return "home";
    if (pathname === "/about") return "about";
    if (pathname === "/services") return "services";
    if (pathname === "/courses") return "courses";
    if (pathname === "/products") return "products";
    if (pathname === "/testimonials") return "testimonials";
    return "home";
  };

  const currentPage = getCurrentPage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (page: PageType) => {
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
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src="/media/images/logo.png"
              alt="ThisIsMarriage Logo"
              width={180}
              height={180}
              className="mr-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks
              isScrolled={isScrolled}
              currentPage={currentPage}
              onNavigate={handleNavigate}
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
            aria-label="Toggle menu"
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
              onNavigate={handleNavigate}
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
  // Base classes for link styling
  const baseClass = isMobile
    ? "text-gray-800 hover:text-gray-600 relative py-1 transition-all duration-300"
    : isScrolled
    ? "text-white/80 hover:text-white relative py-1 transition-all duration-300"
    : "text-white/80 hover:text-white relative py-1 transition-all duration-300";

  // Active classes for link styling
  const activeClass = isMobile
    ? "text-[#271E19] font-medium relative py-1 transition-all duration-300"
    : "text-white font-bold relative py-1 transition-all duration-300";

  // Links configuration
  const links = [
    { href: "/", label: "Home", type: "home" as PageType },
    { href: "/about", label: "About", type: "about" as PageType },
    { href: "/services", label: "Services", type: "services" as PageType },
    { href: "/courses", label: "Courses", type: "courses" as PageType },
    { href: "/products", label: "Products", type: "products" as PageType },
    { href: "/testimonials", label: "Testimonials", type: "testimonials" as PageType },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            currentPage === link.type ? activeClass : baseClass
          } group`}
          onClick={() => onNavigate(link.type)}
        >
          {link.label}
          <span 
            className={`absolute left-0 bottom-0 w-full h-0.5 transform origin-left transition-transform duration-300 ease-out
              ${currentPage === link.type 
                ? isMobile 
                  ? 'bg-[#271E19] scale-x-100' 
                  : 'bg-white scale-x-100' 
                : 'scale-x-0 group-hover:scale-x-100'
              } 
              ${isMobile 
                ? 'bg-gray-800 group-hover:bg-[#271E19]' 
                : 'bg-white/70 group-hover:bg-white'
              }`}
          ></span>
        </Link>
      ))}
    </>
  );
}