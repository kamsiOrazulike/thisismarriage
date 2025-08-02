/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import ScrollButton from "../components/ScrollButton";
import Link from "next/link";

const RelationshipRoomPage: React.FC = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".py-20.bg-white");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-gradient-to-r from-[#86431a] to-[#271E19] text-white">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl md:mt-24 flex flex-col items-center">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
              Relationship Rooms
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10">
              Join interactive group sessions hosted by our facilitators online
            </p>
            <Link
              href="https://stan.store/TIMUK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-[#86431a] hover:bg-gray-100 rounded text-lg font-medium transition-colors mb-8"
            >
              Join our Relationship Rooms now
            </Link>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-32 h-1 bg-[#86431a] mx-auto mb-6"></div>
            <h2 className="font-serif text-4xl font-medium mb-6 text-[#3e2c1f]">
              A Safe & Supportive Community
            </h2>
            <p className="text-[#3e2c1f]/80 text-lg leading-relaxed">
              Our online 'relationship rooms' provide a safe and supportive
              community where couples can share their experiences, learn from
              others, hear from professionals, gaining valuable insights into
              building healthy, long-lasting relationships.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Feature 1 */}
            <div className="bg-[#f5f0e6] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#86431a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-3 text-[#3e2c1f]">
                Interactive Group Sessions
              </h3>
              <p className="text-[#3e2c1f]/70">
                Engage with other couples in facilitated discussions and
                activities
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#f5f0e6] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#c9a66b] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-3 text-[#3e2c1f]">
                Professional Insights
              </h3>
              <p className="text-[#3e2c1f]/70">
                Learn from experienced facilitators and relationship
                professionals
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#f5f0e6] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#271E19] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-3 text-[#3e2c1f]">
                Affordable Support
              </h3>
              <p className="text-[#3e2c1f]/70">
                More accessible than individual therapy while maintaining
                quality support
              </p>
            </div>
          </div>

          {/* Main Content Block */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 w-full">
              <Image
                src="/media/images/couples1.jpg"
                alt="Couples in relationship room session"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-medium mb-6 text-[#3e2c1f]">
                You're Not Alone in This Journey
              </h2>
              <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
                This service is more affordable but does not replace therapy. It
                allows you to have a collective understanding of common marital
                issues whilst feeling the benefit of not being alone.
              </p>
              <p className="text-[#3e2c1f]/80 mb-8 leading-relaxed text-lg">
                Connect with couples facing similar challenges, share your
                experiences in a judgment-free environment, and discover
                practical strategies that have worked for others.
              </p>
              <div className="bg-[#f5f0e6] p-6 rounded-lg border-l-4 border-[#86431a]">
                <p className="text-[#3e2c1f] font-medium italic">
                  "Building healthy, long-lasting relationships is easier when
                  you have a community of support and shared wisdom."
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect Section */}
          <div className="bg-[#271E19] text-white p-12 rounded-lg mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-medium mb-8 text-center">
                What to Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-xl mb-3 text-[#c9a66b]">
                    Session Format
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• 90-minute online sessions</li>
                    <li>• Small group settings (6-8 couples max)</li>
                    <li>• Structured discussions and activities</li>
                    <li>• Professional facilitation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-3 text-[#c9a66b]">
                    Topics Covered
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Communication strategies</li>
                    <li>• Conflict resolution</li>
                    <li>• Intimacy and connection</li>
                    <li>• Common relationship challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-[#86431a] text-white text-center">
        <div className="container mx-auto px-4">
          <div className="w-32 h-1 bg-[#c9a66b] mx-auto mb-6"></div>
          <h2 className="font-serif text-4xl font-medium mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Take the first step toward strengthening your relationship in a
            supportive group environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://stan.store/TIMUK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-[#86431a] hover:bg-gray-100 rounded text-lg font-medium transition-colors"
            >
              Join our Relationship Rooms now
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded text-lg font-medium transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelationshipRoomPage;
