/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  HomeScreen,
  AboutScreen,
  ServicesScreen,
  ProductsScreen,
  TestimonialsScreen,
} from "./sections";

export type PageType = "home" | "about" | "services" | "products" | "testimonials" | "courses";

const PageManager: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<PageType>("home");
  const [previousScreen, setPreviousScreen] = useState<PageType | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to change screens with animation
  const changeScreen = (screen: PageType) => {
    if (currentScreen === screen || isAnimating) return;

    setIsAnimating(true);
    setPreviousScreen(currentScreen);

    const currentScreenEl = `.screen-${currentScreen}`;
    const nextScreenEl = `.screen-${screen}`;

    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentScreen(screen);
        setIsAnimating(false);

        // Scroll to top when changing screens
        window.scrollTo(0, 0);
      },
    });

    // Animate current screen out
    tl.to(currentScreenEl, {
      opacity: 0,
      x: -30,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(currentScreenEl, { display: "none" });
      },
    });

    // Set up next screen and animate it in
    tl.add(() => {
      gsap.set(nextScreenEl, { display: "block", opacity: 0, x: 30 });
    });

    // Animate next screen in
    tl.to(nextScreenEl, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  // Set initial screen visibility
  useEffect(() => {
    // Show only the current screen initially
    gsap.set(`.screen-${currentScreen}`, { opacity: 1, display: "block" });

    const allScreens: PageType[] = ["home", "about", "services", "products", "testimonials"];
    allScreens.forEach((screen) => {
      if (screen !== currentScreen) {
        gsap.set(`.screen-${screen}`, { opacity: 0, display: "none" });
      }
    });
  }, [currentScreen]); // Added currentScreen as a dependency

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Home Screen - Pass the changeScreen function */}
        <div className={`screen-home w-full`}>
          <HomeScreen onNavigate={changeScreen} />
        </div>

        {/* About Screen */}
        <div className={`screen-about w-full`}>
          <AboutScreen />
        </div>

        {/* Services Screen */}
        <div className={`screen-services w-full`}>
          <ServicesScreen />
        </div>

        {/* Products Screen */}
        <div className={`screen-products w-full`}>
          <ProductsScreen />
        </div>

        {/* Testimonials Screen */}
        <div className={`screen-testimonials w-full`}>
          <TestimonialsScreen />
        </div>
      </main>

      <Footer onNavigate={changeScreen} />
    </div>
  );
};

export default PageManager;
