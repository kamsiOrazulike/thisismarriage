/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import ScrollButton from "../ScrollButton";

const AboutScreen: React.FC = () => {
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

        <div className="pt-32 pb-12 container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="font-serif text-3xl md:text-7xl font-medium mb-6 text-white">
              About ThisIsMarriageUK
            </h1>
            <p className="text-md md:text-xl text-white max-w-3xl mx-auto mb-10">
              Unfiltered conversations about marriage - That's the essence of
              'This is Marriage.'
            </p>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </div>

      {/* Who we are Section */}
      <div className="py-20 bg-white px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 w-full order-2 md:order-1">
            <Image
              src="/media/images/thepowells.png"
              alt="Curtis and Wanitta Powell"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col order-1 md:order-2">
            <p className="text-black mt-4 mb-6 leading-relaxed">
              We are Curtis and Wanitta Powell, married since 2001, and let’s be real—marriage is a beautiful yet challenging journey. This is Marriage started back in 2016 with a simple social media post on our 15th anniversary. We were honestly reflecting on our journey on camera, and instantly, people became engaged.
            </p>
            <p className="text-black mb-6 leading-relaxed">
              We learned that the honest, messy, and valuable parts of marriage we were talking about were exactly what so many couples and singles needed to hear. We listened to the feedback and took our conversations to YouTube, Facebook, and Instagram Live, diving into real talk about love, intimacy, and the everyday realities of doing life together.
            </p>
            <p className="text-black leading-relaxed">
              Our mission? To strengthen marriages by keeping it all the way real—no clichés, just our lived experiences, lessons learned, and insights into what it truly takes to make a relationship thrive. We understand that we’re all figuring this thing out together, so we decided to open the conversation to those in committed relationships, those contemplating marriage, and singles.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-20 bg-white px-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-12 text-center text-gray-900">
            Our Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                The C.O.N.N.E.C.T. Model
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Marriage thrives when couples truly connect. Our C.O.N.N.E.C.T. Model focuses on the core principles that create deep, lasting bonds.
              </p>
              <ul className="space-y-6">
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Communication:
                  </h4>
                  <p className="text-gray-600">
                    Honest and open discussions that bring clarity.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Openness:
                  </h4>
                  <p className="text-gray-600">
                    Willingness to be vulnerable and transparent.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Nurturing:
                  </h4>
                  <p className="text-gray-600">
                    Caring for each other emotionally, physically, and spiritually.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Negotiation:
                  </h4>
                  <p className="text-gray-600">
                    Finding balance and compromise in conflicts.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Empathy:
                  </h4>
                  <p className="text-gray-600">
                    Understanding and valuing each other’s experiences.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Commitment:
                  </h4>
                  <p className="text-gray-600">
                    Staying dedicated to growth and love.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Trust:
                  </h4>
                  <p className="text-gray-600">
                    The foundation of emotional and relational security.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative h-96 order-1 md:order-2">
              <Image
                src="/media/images/approach.jpg"
                alt="Couple embracing"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Overview */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-12 text-center text-gray-900">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                For Married Couples
              </h3>
              <p className="text-gray-600 mb-6">
                Our relationship Marriage coaching is designed for couples in
                crisis. This course helps couples enhance communication, resolve
                conflicts, and deepen their emotional bond. We offer both
                in-person and online to accommodate your preferences and needs.
              </p>
              <ul className="text-gray-600 space-y-2">
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
                  Personalized couples coaching sessions
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
                  Interactive group sessions online
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
                  Quarterly face-to-face meetups
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                For Singles & Pre-Marital
              </h3>
              <p className="text-gray-600 mb-6">
                We offer pre-marital coaching and courses for those
                contemplating marriage. Be prepared to address the questions
                that could potentially arise in marriage. Feel prepared to walk
                into marriage with a better knowledge of expectations.
              </p>
              <ul className="text-gray-600 space-y-2">
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
                  'Prepare and Enrich' facilitation
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
                  Relationship readiness assessment
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
                  Personalized coaching sessions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-12 text-center text-gray-900">
            What Couples Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-10 rounded-lg shadow-md">
              <blockquote className="text-xl text-gray-600 italic mb-6">
                "The coaching sessions with Curtis and Wanitta completely
                transformed our relationship. We learned to communicate
                effectively and understand each other on a deeper level. We're
                more connected now than we've ever been."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <p className="font-medium text-gray-900">Michael & Sarah</p>
                  <p className="text-gray-500">Together for 7 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-[#271E19] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-6">
            Ready to Transform Your Relationship?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Join us on this journey to create stronger, more fulfilling
            connections.
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

export default AboutScreen;
