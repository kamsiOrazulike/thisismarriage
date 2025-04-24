/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import Image from "next/image";
import ScrollButton from "../components/ScrollButton";

const ServicesPage: React.FC = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".py-20.bg-white");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="w-full h-full bg-gray-200"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl md:mt-24 flex flex-col items-center">
            <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">
              Our Services
            </h1>
            <p className="text-md md:text-xl font-light max-w-3xl mx-auto mb-10">
              Explore our range of services designed to strengthen your relationships.
            </p>
            <ScrollButton onClick={() => console.log("Scroll down clicked")} />
          </div>
        </div>
      </section>

      {/* Married Couples Coaching Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 w-full">
              <Image
                src="/media/images/couples-coaching.jpg"
                alt="Couple embracing"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-medium mb-4 text-gray-900">
                Married Couples Coaching
              </h2>
              <p className="text-gray-600 mb-6">
                Our relationship Marriage coaching is designed for couples in
                crisis. This course helps couples enhance communication, resolve
                conflicts, and deepen their emotional bond. We offer both
                in-person and online to accommodate your preferences and needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;