/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import ScrollButton from "../ScrollButton";

const CoursesScreen: React.FC = () => {
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
          <div className="flex flex-col items-center text-center mb-16">
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
      </div>

      {/* Courses Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-12 text-gray-900 text-center">
            Featured Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
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
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#271E19] mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      6 weekly live sessions
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#271E19] mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Practical assignments</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#271E19] mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Private coaching session
                    </span>
                  </div>
                </div>
                <button className="w-full py-3 bg-[#271E19] text-white rounded hover:bg-[#a07050] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                <Image
                  src="/media/images/course2.jpg"
                  alt="Premarital Course"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[#271E19]/20 text-[#271E19] px-3 py-1 rounded-full text-sm font-medium">
                    8-Week Course
                  </span>
                  <span className="font-medium text-gray-900">$349</span>
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                  Premarital Foundation
                </h3>
                <p className="text-gray-600 mb-6">
                  Build a solid foundation for your marriage with this
                  comprehensive course. Explore expectations, communication
                  styles, conflict resolution, and financial planning to ensure
                  a strong start to your life together.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#271E19] mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      8 weekly live sessions
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#271E19] mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Compatibility assessment
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#271E19] mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Two private coaching sessions
                    </span>
                  </div>
                </div>
                <button className="w-full py-3 bg-[#271E19] text-white rounded hover:bg-[#a07050] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/media/images/course3.jpg"
                  alt="Intimacy Course"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-3 text-gray-900">
                  Rebuilding Intimacy
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Rediscover emotional and physical connection in your
                  relationship with practical tools and guidance.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#271E19] font-medium">$199</span>
                  <button className="px-4 py-2 bg-[#271E19] text-white rounded text-sm hover:bg-[#a07050] transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Course 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/media/images/course4.jpg"
                  alt="Conflict Resolution Course"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-3 text-gray-900">
                  Conflict Resolution
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Transform conflicts into opportunities for growth with
                  effective communication techniques.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#271E19] font-medium">$179</span>
                  <button className="px-4 py-2 bg-[#271E19] text-white rounded text-sm hover:bg-[#a07050] transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Course 5 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/media/images/course5.jpg"
                  alt="Singles Course"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-3 text-gray-900">
                  Ready for Commitment
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  For singles preparing for a committed relationship. Learn what
                  makes relationships thrive.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#271E19] font-medium">$149</span>
                  <button className="px-4 py-2 bg-[#271E19] text-white rounded text-sm hover:bg-[#a07050] transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workshops Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-12 text-gray-900 text-center">
            Upcoming Workshops
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Workshop 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <div className="mb-4">
                <span className="bg-[#271E19]/20 text-[#271E19] px-3 py-1 rounded-full text-sm font-medium">
                  May 15, 2025
                </span>
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-gray-900">
                Weekend Retreat: Reconnect & Renew
              </h3>
              <p className="text-gray-600 mb-4">
                A 2-day immersive experience for couples looking to deepen their
                connection and revitalize their relationship.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#271E19] font-medium">
                  $399 per couple
                </span>
                <button className="px-4 py-2 bg-[#271E19] text-white rounded hover:bg-[#a07050] transition-colors">
                  Register
                </button>
              </div>
            </div>

            {/* Workshop 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <div className="mb-4">
                <span className="bg-[#271E19]/20 text-[#271E19] px-3 py-1 rounded-full text-sm font-medium">
                  June 8, 2025
                </span>
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-gray-900">
                Communication Masterclass
              </h3>
              <p className="text-gray-600 mb-4">
                A full-day intensive workshop focusing on effective
                communication techniques for couples at any stage.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#271E19] font-medium">
                  $199 per couple
                </span>
                <button className="px-4 py-2 bg-[#271E19] text-white rounded hover:bg-[#a07050] transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Programs Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 p-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium mb-6 text-gray-900 text-center">
              Custom Programs
            </h2>
            <p className="text-gray-600 mb-8 text-center text-lg">
              Looking for a tailored approach? We offer customized programs
              designed to address your specific relationship needs and goals.
            </p>
            <div className="text-center">
              <p className="text-gray-600 mb-8">
                Our personalized programs are designed for couples with unique
                situations or specific challenges. We'll work closely with you
                to develop a customized curriculum that addresses your
                particular needs and goals.
              </p>
              <button className="px-8 py-3 bg-[#271E19] text-white rounded hover:bg-[#a07050] transition-colors inline-block">
                Contact Us for Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#271E19] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-6">
            Ready to Transform Your Relationship?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Invest in your relationship today and build the foundation for a
            lifetime of connection and understanding.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-sm text-lg font-medium transition-colors">
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesScreen;
