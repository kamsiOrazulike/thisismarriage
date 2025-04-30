/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useRef } from "react";
import Card from "./components/Cards";
import ScrollButton from "./components/ScrollButton";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className="w-full h-full object-cover"
          >
            <source src="/media/videos/background-video-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10  mt-8 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl flex flex-col items-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              Empower Your Relationship
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10">
              "We support marriages through their challenges, prepare couples
              for marriage, and guide singles toward forming healthy
              partnerships."
            </p>
            <div className="flex gap-4 mb-12">
              <Link
                href="/services"
                className="px-6 py-3 bg-[#86431a] hover:bg-[#86431a]/90 text-white rounded transition-colors duration-300 font-medium"
              >
                Our Services
              </Link>
              <a
                href="https://calendly.com/thisismarriageuk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#c9a66b] text-[#c9a66b] hover:bg-[#c9a66b]/10 rounded transition-colors duration-300 font-medium"
              >
                Book a Session
              </a>
            </div>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="pt-12 pb-24 bg-[#f5f0e6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-32 h-1 bg-[#86431a] mb-6"></div>
              <h2 className="font-serif text-4xl font-medium mb-6 text-[#3e2c1f]">
                About Us
              </h2>
              <p className="text-[#3e2c1f]/80 mb-8 leading-relaxed text-lg">
                We are Curtis and Wanitta Powell, married since 2001. This is
                Marriage started back in 2016 with an honest reflection of our
                journey. We quickly realized that the real, messy, valuable
                parts of marriage were exactly what so many couples needed to
                hear.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors font-medium rounded"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-w-4 aspect-h-3 relative rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/media/images/thepowells.png"
                  alt="Curtis and Wanitta Powell"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c9a66b] rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#86431a] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#271E19] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-32 h-1 bg-[#c9a66b] mx-auto mb-6"></div>
            <h2 className="font-serif text-4xl font-medium mb-4">
              Our Services
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Specialised support for every stage of your relationship journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            <Card
              variant="feature"
              title="Marriage Coaching"
              description="Reignite the spark in your relationship and rediscover the connection that brought you together."
              aspectRatio="square"
              imageSrc="/media/images/couples1.jpg"
              imageAlt="Marriage Coaching"
            />
            <Card
              variant="feature"
              title="Premarital Counseling"
              description="Build a strong foundation for your marriage by addressing potential issues before they arise."
              aspectRatio="square"
              imageSrc="/media/images/service-premarital.jpg"
              imageAlt="Premarital Counseling"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-6 py-3 border-2 border-[#c9a66b] text-[#c9a66b] hover:bg-[#c9a66b]/10 rounded transition-colors duration-300 font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-24 bg-gradient-to-r from-[#86431a]/95 to-[#271E19]/95 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-32 h-1 bg-[#c9a66b] mx-auto mb-6"></div>
            <h2 className="font-serif text-4xl font-medium mb-6">
              The C.O.N.N.E.C.T. Model
            </h2>
            <p className="text-white/80">
              Our proven approach to building lasting connections and
              strengthening relationships
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="w-32 h-32 rounded-full bg-[#c9a66b]/20 backdrop-blur-sm flex items-center justify-center text-center hover:bg-[#c9a66b]/30 transition-all duration-300 border border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">C</div>
                <div className="text-sm">Communication</div>
              </div>
            </div>
            <div className="w-32 h-32 rounded-full bg-[#c9a66b]/20 backdrop-blur-sm flex items-center justify-center text-center hover:bg-[#c9a66b]/30 transition-all duration-300 border border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">O</div>
                <div className="text-sm">Openness</div>
              </div>
            </div>
            <div className="w-32 h-32 rounded-full bg-[#c9a66b]/20 backdrop-blur-sm flex items-center justify-center text-center hover:bg-[#c9a66b]/30 transition-all duration-300 border border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">N</div>
                <div className="text-sm">Nurturing</div>
              </div>
            </div>
            <div className="w-32 h-32 rounded-full bg-[#c9a66b]/20 backdrop-blur-sm flex items-center justify-center text-center hover:bg-[#c9a66b]/30 transition-all duration-300 border border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">N</div>
                <div className="text-sm">Negotiation</div>
              </div>
            </div>
            <div className="w-32 h-32 rounded-full bg-[#c9a66b]/20 backdrop-blur-sm flex items-center justify-center text-center hover:bg-[#c9a66b]/30 transition-all duration-300 border border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">E</div>
                <div className="text-sm">Empathy</div>
              </div>
            </div>
            <div className="w-32 h-32 rounded-full bg-[#c9a66b]/20 backdrop-blur-sm flex items-center justify-center text-center hover:bg-[#c9a66b]/30 transition-all duration-300 border border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">C</div>
                <div className="text-sm">Commitment</div>
              </div>
            </div>
            <div className="w-32 h-32 rounded-full bg-[#c9a66b]/20 backdrop-blur-sm flex items-center justify-center text-center hover:bg-[#c9a66b]/30 transition-all duration-300 border border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">T</div>
                <div className="text-sm">Trust</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-block px-6 py-3 bg-[#c9a66b] text-[#271E19] hover:bg-[#c9a66b]/90 transition-colors font-medium rounded"
            >
              Learn About Our Model
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-[#f5f0e6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-32 h-1 bg-[#c9a66b] mx-auto mb-6"></div>
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#271E19]">
              Our Products
            </h2>
            <p className="text-[#271E19]/80 max-w-2xl mx-auto">
              Tools and resources to strengthen your connection at home
            </p>
          </div>

          {/* Product Cards with improved styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connection Journal Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#c9a66b]/30 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                {/* Replace this with actual image when available */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#86431a]/80 to-[#271E19] flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-[#c9a66b] text-[#271E19] px-3 py-1 rounded-full text-sm font-medium">
                  Bestseller
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif font-medium mb-2 text-[#3e2c1f]">
                  Connection Journal
                </h3>
                <p className="text-[#3e2c1f]/70 mb-4 min-h-[3rem]">
                  Daily prompts to deepen your understanding and appreciation of
                  each other.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#86431a] text-lg">
                    £24.99
                  </span>
                  <Link
                    href="/products"
                    className="px-4 py-2 bg-[#271E19]/10 text-[#271E19] hover:bg-[#271E19] hover:text-white rounded transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Conversation Cards Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#c9a66b]/30 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                {/* Replace this with actual image when available */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a66b]/80 to-[#86431a] flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-[#c9a66b] text-[#271E19] px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif font-medium mb-2 text-[#3e2c1f]">
                  Conversation Cards
                </h3>
                <p className="text-[#3e2c1f]/70 mb-4 min-h-[3rem]">
                  52 thought-provoking questions to spark meaningful
                  conversations.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#86431a] text-lg">
                    £19.99
                  </span>
                  <Link
                    href="/products"
                    className="px-4 py-2 bg-[#271E19]/10 text-[#271E19] hover:bg-[#271E19] hover:text-white rounded transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* This Is Marriage Book Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#c9a66b]/30 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                {/* Replace this with actual image when available */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#271E19] to-[#86431a]/80 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-[#c9a66b] text-[#271E19] px-3 py-1 rounded-full text-sm font-medium">
                  New
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif font-medium mb-2 text-[#3e2c1f]">
                  This Is Marriage
                </h3>
                <p className="text-[#3e2c1f]/70 mb-4 min-h-[3rem]">
                  Our comprehensive guide to building a lasting, fulfilling
                  relationship.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#86431a] text-lg">
                    £29.99
                  </span>
                  <Link
                    href="/products"
                    className="px-4 py-2 bg-[#271E19]/10 text-[#271E19] hover:bg-[#271E19] hover:text-white rounded transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block px-6 py-3 border-2 border-[#271E19] text-[#271E19] hover:bg-[#271E19]/10 rounded transition-colors duration-300 font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#271E19] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-32 h-1 bg-[#c9a66b] mx-auto mb-6"></div>
            <h2 className="font-serif text-4xl font-medium mb-4">
              Success Stories
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Hear from couples who have transformed their relationships
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f5f0e6] p-8 rounded-lg shadow-lg border border-[#c9a66b]/50">
              <blockquote className="text-xl text-[#3e2c1f]/80 italic mb-6">
                "The work of Wanitta and Curtis through This is Marriage has
                been a priceless gift in my life as a husband and father and my
                marriage relationship."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a66b]/50 mr-4"></div>
                <div>
                  <p className="font-medium text-[#3e2c1f]">Eddie</p>
                  <p className="text-[#3e2c1f]/70">Husband & Father</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-block px-6 py-3 bg-[#c9a66b] text-[#271E19] hover:bg-[#c9a66b]/90 transition-colors font-medium rounded"
            >
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#86431a] text-white text-center">
        <div className="container mx-auto px-4">
          <div className="w-32 h-1 bg-[#c9a66b] mx-auto mb-6"></div>
          <h2 className="font-serif text-4xl font-medium mb-6">
            READY TO STRENGTHEN YOUR RELATIONSHIP?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Take the first step toward a more fulfilling partnership. Schedule a
            consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/thisismarriageuk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-[#86431a] hover:bg-gray-100 rounded text-lg font-medium transition-colors"
            >
              Book a Session
            </a>
            <Link
              href="/services"
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded text-lg font-medium transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
