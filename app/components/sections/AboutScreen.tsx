/* eslint-disable @typescript-eslint/no-unused-vars */
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
              We are Curtis and Wanitta Powell, married since 2001, and our
              journey into This is Marriage began with a simple social media
              share on our 15th anniversary in 2016. Little did we know, our
              candid conversations about the realities of marriage would strike
              such a profound chord. Our open and honest discussions challenged
              conventional wisdom, diving deep into the human dynamics that
              shape relationships.
            </p>
            <p className="text-black mb-6 leading-relaxed">
              We soon found ourselves creating content for YouTube, Facebook,
              and Instagram Live, sharing our unvarnished perspectives on love,
              intimacy, and the beautiful complexities that come with long-term
              commitment. Our intention is to strengthen marriages by sharing
              our lived experiences and perspectives, because we're all going
              through it together.
            </p>
            <p className="text-black leading-relaxed">
              But we don't just cater to married couples - we also aim to help
              singles to prepare for relationships on the best footing possible.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-20 bg-white px-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-12 text-center text-gray-900">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                Qualifications and Experience
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Together, we have over 40 years combined professional experience
                in working systemically with individuals and families to achieve
                positive change.
              </p>
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                Philosophy and Approach
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use the three C's model of: "Conversation, Change and
                Community".
              </p>
              <ul className="space-y-6">
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Conversation:
                  </h4>
                  <p className="text-gray-600">
                    Our captured conversations provide valuable insights and
                    practical strategies to help you navigate the complexities
                    of relationships. These conversations are made available for
                    you here to watch over and over again.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Change:
                  </h4>
                  <p className="text-gray-600">
                    We recognize that every action within a marriage can lead to
                    either growth or setbacks. We will equip you with the tools
                    needed to create meaningful, lasting improvements in your
                    relationship.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Community:
                  </h4>
                  <p className="text-gray-600">
                    We understand the importance that being a part of a
                    community can improve relationships. Community creates
                    support, stability and accountability. We have created
                    community spaces, both online and in-person, as an extension
                    to participants' existing support systems.
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
