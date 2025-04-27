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
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/media/images/background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl md:mt-24 flex flex-col items-center">
            <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">
              Our Courses
            </h1>
            <p className="text-md md:text-xl font-light max-w-3xl mx-auto mb-10">
              Discover our specialized courses designed to strengthen relationships at every stage.
            </p>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </section>

      {/* Courses Section */}
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