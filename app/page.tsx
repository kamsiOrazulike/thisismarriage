"use client";

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  // Refs for hero section
  const heroTitleRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroButtonRef = useRef(null);

  // Refs for other sections
  const aboutSectionRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutButtonRef = useRef(null);
  const aboutImageRef = useRef(null);

  const servicesRef = useRef(null);
  const servicesTitleRef = useRef(null);
  const servicesCardsRef = useRef<HTMLDivElement>(null);

  const testimonialsRef = useRef(null);
  const testimonialsTitleRef = useRef(null);
  const testimonialsQuoteRef = useRef(null);
  const testimonialsAuthorRef = useRef(null);

  const ctaRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaTextRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    // Initial animation for hero content
    const heroTl = gsap.timeline();

    heroTl
      .from(heroTitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
      })
      .from(
        heroDescRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        heroButtonRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );

    // About section animations
    gsap.from(
      [aboutTitleRef.current, aboutTextRef.current, aboutButtonRef.current],
      {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.from(aboutImageRef.current, {
      opacity: 0,
      x: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top 70%",
      },
    });

    // Services section animations
    gsap.from(servicesTitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 70%",
      },
    });

    if (servicesCardsRef.current) {
      gsap.from(servicesCardsRef.current.children, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 60%",
        },
      });
    }

    // Testimonials section animations
    gsap.from(testimonialsTitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top 70%",
      },
    });

    gsap.from([testimonialsQuoteRef.current, testimonialsAuthorRef.current], {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top 60%",
      },
    });

    // CTA section animations
    gsap.from([ctaTitleRef.current, ctaTextRef.current, ctaButtonRef.current], {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 70%",
      },
    });
  }, []);

  // Function to handle scroll down
  const handleScrollDown = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: aboutSectionRef.current || 0, offsetY: 50 },
      ease: "power3.inOut",
    });
  };

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/media/videos/background-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay to darken video and make text more readable */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl flex flex-col items-center">
            <h1
              ref={heroTitleRef}
              className="font-serif text-5xl md:text-7xl font-medium mb-6"
            >
              CAPTURING MOMENTS IN YOUR RELATIONSHIP
            </h1>
            <p
              ref={heroDescRef}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-10"
            >
              Building stronger connections through professional couples therapy
            </p>
            <button
              ref={heroButtonRef}
              onClick={handleScrollDown}
              className="flex flex-col items-center gap-2 mt-6 group"
            >
              <span className="text-white text-sm font-medium tracking-wider">
                SCROLL DOWN
              </span>
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutSectionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                ref={aboutTitleRef}
                className="font-serif text-4xl font-medium mb-6 text-gray-900"
              >
                BECAUSE THESE MOMENTS ARE TOO GOOD TO MISS
              </h2>
              <div ref={aboutTextRef}>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Relationships evolve with time—some stay strong while others
                  experience challenges. Our approach to couples therapy helps
                  identify patterns that may be hindering your connection and
                  develops strategies to rebuild, restore, and strengthen your
                  bond.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We believe that with the right tools and support, couples can
                  create fulfilling, intimate relationships that stand the test
                  of time.
                </p>
              </div>
              <Link
                ref={aboutButtonRef}
                href="/about"
                className="inline-block px-6 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors font-medium"
              >
                LEARN MORE
              </Link>
            </div>
            <div ref={aboutImageRef} className="relative">
              <div className="aspect-w-4 aspect-h-5 relative">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 aspect-w-1 aspect-h-1">
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-20 bg-[#b08060] text-white">
        <div className="container mx-auto px-4">
          <h2
            ref={servicesTitleRef}
            className="font-serif text-4xl font-medium mb-16 text-center"
          >
            OUR SERVICES
          </h2>
          <div
            ref={servicesCardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ServiceCard
              title="Couples Therapy"
              description="Navigate challenges together through evidence-based therapeutic approaches tailored to your relationship."
            />
            <ServiceCard
              title="Premarital Counseling"
              description="Build a strong foundation for your marriage by addressing potential issues before they arise."
            />
            <ServiceCard
              title="Relationship Renewal"
              description="Reignite the spark in your relationship and rediscover the connection that brought you together."
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2
            ref={testimonialsTitleRef}
            className="font-serif text-4xl font-medium mb-16 text-gray-900 text-center"
          >
            SUCCESS STORIES
          </h2>
          <div className="max-w-4xl mx-auto">
            <blockquote
              ref={testimonialsQuoteRef}
              className="text-xl text-gray-600 text-center italic mb-8"
            >
              "The therapy sessions with ThisIsMarriage completely transformed
              our relationship. We learned to communicate effectively and
              understand each other on a deeper level. We're more connected now
              than we've ever been."
            </blockquote>
            <div
              ref={testimonialsAuthorRef}
              className="flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 mr-4"></div>
              <div>
                <p className="font-medium text-gray-900">Michael & Sarah</p>
                <p className="text-gray-500">Together for 7 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        ref={ctaRef}
        className="py-20 bg-[#b08060] text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2
            ref={ctaTitleRef}
            className="font-serif text-4xl font-medium mb-6"
          >
            READY TO STRENGTHEN YOUR RELATIONSHIP?
          </h2>
          <p ref={ctaTextRef} className="text-xl max-w-2xl mx-auto mb-10">
            Take the first step toward a more fulfilling partnership. Schedule a
            consultation today.
          </p>
          <Link
            ref={ctaButtonRef}
            href="/contact"
            className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-sm text-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="group">
      <div className="aspect-w-1 aspect-h-1 mb-4 overflow-hidden">
        <div className="w-full h-full bg-gray-200"></div>
      </div>
      <h3 className="font-serif text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}
