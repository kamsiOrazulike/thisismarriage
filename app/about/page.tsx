/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import ScrollButton from "../components/ScrollButton";

const AboutPage: React.FC = () => {
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
              About ThisIsMarriageUK
            </h1>
            <p className="text-md md:text-xl font-light max-w-3xl mx-auto mb-10">
              Unfiltered conversations about marriage - That's the essence of 'This is Marriage.'
            </p>
            <ScrollButton onClick={() => console.log("Scroll down clicked")} />
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;