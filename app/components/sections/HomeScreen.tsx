/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Card from "../Cards";
import { PageType } from "../PageManager";
import ScrollButton from "../ScrollButton";

interface HomeScreenProps {
  onNavigate?: (screen: PageType) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  // Refs for hero section
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const heroButtonRef = useRef<HTMLDivElement>(null); // Changed to div as ScrollButton is a div

  // Refs for other sections
  const aboutSectionRef = useRef<HTMLElement>(null);
  const aboutTitleRef = useRef<HTMLHeadingElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const aboutButtonRef = useRef<HTMLButtonElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);

  const servicesRef = useRef<HTMLElement>(null);
  const servicesTitleRef = useRef<HTMLHeadingElement>(null);
  const servicesCardsRef = useRef<HTMLDivElement>(null);

  const testimonialsRef = useRef<HTMLElement>(null);
  const testimonialsTitleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsQuoteRef = useRef<HTMLDivElement>(null);
  const testimonialsAuthorRef = useRef<HTMLDivElement>(null);

  const ctaRef = useRef<HTMLElement>(null);
  const ctaTitleRef = useRef<HTMLHeadingElement>(null);
  const ctaTextRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      try {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
      } catch (error) {
        console.error("Failed to register GSAP plugins:", error);
        return; // Exit early if plugin registration fails
      }
    }

    // Initial animation for hero content
    const heroTl = gsap.timeline();

    // Only add animations if the refs are valid
    if (heroTitleRef.current) {
      heroTl.from(heroTitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
      });
    }

    if (heroDescRef.current) {
      heroTl.from(
        heroDescRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }

    if (heroButtonRef.current) {
      heroTl.from(
        heroButtonRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }

    // About section animations - with null checks
    const aboutElements = [
      aboutTitleRef.current,
      aboutTextRef.current,
      aboutButtonRef.current,
    ].filter(Boolean); // Filter out any null elements

    if (aboutElements.length > 0 && aboutSectionRef.current) {
      gsap.from(aboutElements, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 70%",
        },
      });
    }

    if (aboutImageRef.current && aboutSectionRef.current) {
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
    }

    // Services section animations - with null checks
    if (servicesTitleRef.current && servicesRef.current) {
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
    }

    if (
      servicesCardsRef.current &&
      servicesCardsRef.current.children.length > 0 &&
      servicesRef.current
    ) {
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

    // Testimonials section animations - with null checks
    if (testimonialsTitleRef.current && testimonialsRef.current) {
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
    }

    const testimonialElements = [
      testimonialsQuoteRef.current,
      testimonialsAuthorRef.current,
    ].filter(Boolean);

    if (testimonialElements.length > 0 && testimonialsRef.current) {
      gsap.from(testimonialElements, {
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
    }

    // CTA section animations - with null checks
    const ctaElements = [
      ctaTitleRef.current,
      ctaTextRef.current,
      ctaButtonRef.current,
    ].filter(Boolean);

    if (ctaElements.length > 0 && ctaRef.current) {
      gsap.from(ctaElements, {
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
    }

    // Clean up ScrollTrigger on component unmount
    return () => {
      if (typeof window !== "undefined") {
        try {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
        } catch (error) {
          console.error("Error cleaning up ScrollTrigger:", error);
        }
      }
    };
  }, []);

  // Function to handle scroll down
  const handleScrollDown = () => {
    if (!aboutSectionRef.current) return;

    try {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: aboutSectionRef.current, offsetY: 50 },
        ease: "power3.inOut",
      });
    } catch (error) {
      console.error("Error in scrolling:", error);
      // Fallback for scrolling if GSAP fails
      aboutSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Function to handle navigation to about screen
  const handleNavigateToAbout = () => {
    if (onNavigate) {
      onNavigate("about");
    }
  };

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
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
            <source src="/media/videos/background-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay to darken video and make text more readable */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl md:mt-24 flex flex-col items-center">
            <h1
              ref={heroTitleRef}
              className="font-serif text-3xl md:text-4xl font-medium mb-2"
            >
              CAPTURING MOMENTS IN YOUR RELATIONSHIP
            </h1>
            <p
              ref={heroDescRef}
              className="text-md md:text-xl font-light max-w-3xl mx-auto mb-10"
            >
              We support marriages in crisis, prepare couples for marriage, and
              guide singles seeking healthy partnerships. We'll help you
              navigate any relationship stage with confidence.
            </p>
            <div ref={heroButtonRef}>
              <ScrollButton onClick={handleScrollDown} />
            </div>
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
              {/* Changed from Link to button */}
              <button
                ref={aboutButtonRef}
                onClick={handleNavigateToAbout}
                className="inline-block px-6 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors font-medium"
              >
                LEARN MORE
              </button>
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
      <section ref={servicesRef} className="py-20 bg-[#271E19] text-white">
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
            {/* Using Card components for services */}
            <Card
              variant="feature"
              title="Couples Therapy"
              description="Navigate challenges together through evidence-based therapeutic approaches tailored to your relationship."
              aspectRatio="square"
              imageSrc="/media/images/service-couples.jpg"
              imageAlt="Couples Therapy"
            />
            <Card
              variant="feature"
              title="Premarital Counseling"
              description="Build a strong foundation for your marriage by addressing potential issues before they arise."
              aspectRatio="square"
              imageSrc="/media/images/service-premarital.jpg"
              imageAlt="Premarital Counseling"
            />
            <Card
              variant="feature"
              title="Relationship Renewal"
              description="Reignite the spark in your relationship and rediscover the connection that brought you together."
              aspectRatio="square"
              imageSrc="/media/images/service-renewal.jpg"
              imageAlt="Relationship Renewal"
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
            {/* Using Card component for testimonial */}
            <div ref={testimonialsQuoteRef}>
              <Card
                variant="testimonial"
                title=""
                description="The therapy sessions with ThisIsMarriage completely transformed our relationship. We learned to communicate effectively and understand each other on a deeper level. We're more connected now than we've ever been."
                author="Michael & Sarah"
                subtitle="Together for 7 years"
              />
            </div>
            <div ref={testimonialsAuthorRef} className="hidden">
              {/* This ref is kept for animation but hidden since we're using the Card component now */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        ref={ctaRef}
        className="py-20 bg-[#271E19] text-white text-center"
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
          <a
            href="https://calendly.com/thisismarriageuk"
            target="_blank"
            rel="noopener noreferrer"
            ref={ctaButtonRef}
            className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-sm text-lg font-medium transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
