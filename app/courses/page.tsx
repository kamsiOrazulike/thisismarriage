"use client";

import React from "react";
import Image from "next/image";
import ScrollButton from "../components/ScrollButton";

const CoursesPage: React.FC = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".py-20.bg-white");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/media/images/background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
          />
          {/* Overlay to darken image and make text more readable */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="pt-32 container mx-auto px-4 relative z-10">
          {/* Content */}
          <h1 className="font-serif text-3xl md:text-7xl font-medium mb-6 text-white">
            Our Courses
          </h1>
          <p className="text-md md:text-xl text-white max-w-3xl mx-auto mb-10">
            Discover our specialized courses designed to strengthen
            relationships at every stage
          </p>
          <ScrollButton onClick={handleScrollDown} />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-12 text-gray-900 text-center">
            Featured Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Course 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                <Image
                  src="/media/images/course1.jpg"
                  alt="Communication Course"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[#271E19]/20 text-[#271E19] px-3 py-1 rounded-full text-sm font-medium">
                    6-Week Course
                  </span>
                  <span className="font-medium text-gray-900">$249</span>
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                  Communication Mastery for Couples
                </h3>
                <p className="text-gray-600 mb-6">
                  Learn effective communication strategies that foster
                  understanding and deepen your connection. This course covers
                  active listening, non-violent communication, and conflict
                  resolution techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;