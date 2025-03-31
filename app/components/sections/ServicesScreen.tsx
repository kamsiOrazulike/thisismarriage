/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import ScrollButton from "../ScrollButton";
import Link from "next/link";

const ServicesScreen: React.FC = () => {
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
              Our Services
            </h1>
            <p className="text-md md:text-xl text-white max-w-3xl mx-auto mb-10">
              We offer a range of specialized therapy services designed to help
              couples at every stage of their relationship journey.
            </p>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </div>

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
              <ul className="text-gray-600 space-y-2 mb-8">
                <li className="flex items-start">
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
                  Effective communication strategies
                </li>
                <li className="flex items-start">
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
                  Conflict resolution techniques
                </li>
                <li className="flex items-start">
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
                  Rebuilding emotional intimacy
                </li>
              </ul>
              <Link
                href="https://calendly.com/thisismarriageuk"
                target="_blank"
                className="px-6 py-3 bg-[#271E19] text-white rounded hover:bg-[#a07050] transition-colors"
              >
                Book Here
              </Link>
            </div>
          </div>

          {/* Online Relationship Rooms Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-medium mb-4 text-gray-900">
                Online 'Relationship Rooms'
              </h2>
              <p className="text-gray-600 mb-6">
                Join interactive group sessions are hosted by our facilitators
                online. Our online "relationship rooms" provide a safe and
                supportive community where couples can share their experiences,
                learn from others, and gain valuable insights into building
                healthy, long-lasting relationships.
              </p>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li className="flex items-start">
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
                  Interactive group discussions
                </li>
                <li className="flex items-start">
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
                  Safe community environment
                </li>
                <li className="flex items-start">
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
                  Expert facilitation and guidance
                </li>
              </ul>
              <Link
                href="https://calendly.com/thisismarriageuk"
                target="_blank"
                className="px-6 py-3 bg-[#271E19] text-white rounded hover:bg-[#a07050] transition-colors"
              >
                Book Here
              </Link>
            </div>
            <div className="relative h-96 w-full order-1 md:order-2">
              <Image
                src="/media/images/online-rooms.jpg"
                alt="Couple embracing"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Premarital & Singles Coaching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 w-full">
              <Image
                src="/media/images/premarital-coaching.jpg"
                alt="Couple at sunset"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-medium mb-4 text-gray-900">
                Premarital & Singles Coaching
              </h2>
              <p className="text-gray-600 mb-6">
                We offer pre-marital coaching and courses for those
                contemplating marriage. Be prepared to address the questions
                that could potentially arise in marriage. Feel prepared to walk
                into marriage with a better knowledge of expectations.
              </p>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li className="flex items-start">
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
                  Compatibility assessment
                </li>
                <li className="flex items-start">
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
                  Expectations alignment
                </li>
                <li className="flex items-start">
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
                  Conflict resolution skills
                </li>
              </ul>
              <Link
                href="https://calendly.com/thisismarriageuk/pre-marital-coaching-session"
                target="_blank"
                className="px-6 py-3 bg-[#271E19] text-white rounded hover:bg-[#a07050] transition-colors"
              >
                Book Here
              </Link>
            </div>
          </div>

          {/* Quarterly Face-to-Face Meetup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-medium mb-4 text-gray-900">
                Quarterly Face-to-Face Meetup
              </h2>
              <p className="text-gray-600 mb-6">
                Attend in-person events held quarterly, where couples can
                connect with others, participate in interactive activities, and
                benefit from the guidance of our facilitators in a group
                setting. These meetups offer an opportunity for couples to
                learn, socialize, and build a support network.
              </p>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li className="flex items-start">
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
                  Interactive workshops
                </li>
                <li className="flex items-start">
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
                  Expert-led discussions
                </li>
                <li className="flex items-start">
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
                  Community building
                </li>
              </ul>
              <Link
                href="https://calendly.com/thisismarriageuk/free-10-minute-consultation"
                target="_blank"
                className="px-6 py-3 bg-[#271E19] text-white rounded hover:bg-[#a07050] transition-colors"
              >
                Schedule
              </Link>
            </div>
            <div className="relative h-96 w-full order-1 md:order-2">
              <Image
                src="/media/images/meetup.jpg"
                alt="Couple embracing"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-12 text-center text-gray-900">
            Our Philosophy
          </h2>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-600 text-center">
              We use the three C's model of: "Conversation, Change and
              Community".
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Conversation */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                Conversation
              </h3>
              <p className="text-gray-600">
                Our captured conversations provide valuable insights and
                practical strategies to help you navigate the complexities of
                relationships. These conversations are made available for you
                here to watch over and over again.
              </p>
            </div>

            {/* Change */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                Change
              </h3>
              <p className="text-gray-600">
                We recognize that every action within a marriage can lead to
                either growth or setbacks. We will equip you with the tools
                needed to create meaningful, lasting improvements in your
                relationship.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                Community
              </h3>
              <p className="text-gray-600">
                We understand the importance that being a part of a community
                can improve relationships. Community creates support, stability
                and accountability. We have created community spaces, both
                online and in-person, as an extension to participants' existing
                support systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#271E19] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-6">
            Ready to Strengthen Your Relationship?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Take the first step toward a more fulfilling partnership today.
          </p>
          <a
            href="https://calendly.com/thisismarriageuk"
            target="_blank"
            className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-sm text-lg font-medium transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;
