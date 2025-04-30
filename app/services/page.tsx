/* eslint-disable react/no-unescaped-entities */
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
      <section className="relative h-[80vh] overflow-hidden bg-gradient-to-r from-[#86431a] to-[#271E19] text-white">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl md:mt-24 flex flex-col items-center">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10">
              Explore our range of services designed to strengthen your
              relationships.
            </p>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <div className="py-20 bg-white">
        {/* Service 1 */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 w-full">
            <Image
              src="/media/images/couples1.jpg"
              alt="Married Couples Coaching"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#3e2c1f]">
              Married Couples Coaching
            </h2>
            <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
              Our relationship Marriage coaching is designed for couples in
              crisis. This course helps couples enhance communication, resolve
              conflicts, and deepen their emotional bond. We offer both
              in-person and online to accommodate your preferences and needs.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors font-medium rounded"
            >
              Book Here
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#3e2c1f]">
              Premarital & Singles Coaching
            </h2>
            <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
              We offer pre-marital coaching and courses for those contemplating
              marriage. Be prepared to address the questions that could
              potentially arise in marriage. Feel prepared to walk into marriage
              with a better knowledge of expectations.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors font-medium rounded"
            >
              Book Here
            </a>
          </div>
          <div className="relative h-96 w-full order-1 md:order-2">
            <Image
              src="/media/images/service-premarital.jpg"
              alt="Premarital & Singles Coaching"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Service 3 */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 w-full">
            <Image
              src="/media/images/couples2.jpg"
              alt="Quarterly Face-to-Face Meetup"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#3e2c1f]">
              Quarterly Face-to-Face Meetup
            </h2>
            <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
              Attend in-person events held quarterly, where couples can connect
              with others, participate in interactive activities, and benefit
              from the guidance of our facilitators in a group setting. These
              meetups offer an opportunity for couples to learn, socialize, and
              build a support network.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#3e2c1f]">
              Online 'Relationship Rooms'
            </h2>
            <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
              Join interactive group sessions hosted by our facilitators online.
              Our online 'relationship rooms' provide a safe and supportive
              community where couples can share their experiences, learn from
              others, and gain valuable insights into building healthy,
              long-lasting relationships.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors font-medium rounded"
            >
              Book Here
            </a>
          </div>
          <div className="relative h-96 w-full order-1 md:order-2">
            <Image
              src="/media/images/couples3.jpg"
              alt="Online 'Relationship Rooms'"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#86431a]/95 to-[#271E19]/95 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="w-32 h-1 bg-[#c9a66b] mx-auto mb-6"></div>
          <h2 className="font-serif text-4xl font-medium mb-6">
            Ready to Strengthen Your Relationship?
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
