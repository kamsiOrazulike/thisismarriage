"use client";
import { PageType } from "./PageManager";

interface NavLinksProps {
  isScrolled?: boolean;
  isMobile?: boolean;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function NavLinks({
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