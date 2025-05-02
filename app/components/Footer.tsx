"use client";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

// Type for our screens - exactly matching the Navbar component
type PageType = "home" | "about" | "services" | "courses";

type FooterProps = {
  onNavigate?: (screen: PageType) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  const setCurrentPage = (screen: PageType) => {
    if (onNavigate) {
      onNavigate(screen);
    }
  };

  const handleNavigate = (screen: PageType) => {
    setCurrentPage(screen);
    if (onNavigate) {
      onNavigate(screen);
    }
  };

  return (
    <footer
      className="relative bg-cover bg-center pt-16 pb-8"
      style={{ backgroundImage: "url('/media/images/desert.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-[#271E19]/60"
        aria-hidden="true"
      ></div>
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div
              className="flex items-center mb-4 cursor-pointer"
              onClick={() => handleNavigate("home")}
            >
              <Image
                src="/media/images/logo.png"
                alt="ThisIsMarriage Logo"
                width={180}
                height={180}
              />
            </div>
            <p className="text-[#f5f0e6] mb-6 max-w-md">
              Dedicated to helping couples build stronger, more fulfilling
              relationships through evidence-based therapy and compassionate
              support.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.instagram.com/thisismarriageuk/" icon="instagram" />
              <SocialLink href="https://www.youtube.com/channel/UCb7tOqZUaQ3zHG5pXTt-9oA" icon="youtube" />
              {/* <SocialLink href="#" icon="facebook" /> */}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-[#f5f0e6] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/testimonials">Testimonials</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-[#f5f0e6] mb-2">
              Get in Touch
            </h3>
            <address className="not-italic text-[#f5f0e6] space-y-2">
              <p className="pt-2">
                <a
                  href="mailto:contact@thisismarriage.co.uk"
                  className="hover:text-[#c9a66b] transition-colors"
                >
                  contact@thisismarriage.co.uk
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#c9a66b] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#f5f0e6] text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ThisIsMarriage. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-[#f5f0e6] text-sm hover:text-[#c9a66b]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#f5f0e6] text-sm hover:text-[#c9a66b]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-[#f5f0e6] hover:text-[#c9a66b] transition-colors text-left"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: "instagram" | "facebook" | "twitter" | "youtube";
}) {
  const iconMap = {
    instagram: <FaInstagram className="w-5 h-5 text-[#f5f0e6]" />,
    facebook: <FaFacebook className="w-5 h-5 text-[#f5f0e6]" />,
    twitter: <FaTwitter className="w-5 h-5 text-[#f5f0e6]" />,
    youtube: <FaYoutube className="w-5 h-5 text-[#f5f0e6]" />,
  };

  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-[#c9a66b] flex items-center justify-center text-white hover:bg-[#f5f0e6] transition-colors"
    >
      {iconMap[icon]}
    </Link>
  );
}
