/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import ScrollButton from "../components/ScrollButton";

// Define the model point type
interface ModelPoint {
  letter: string;
  title: string;
  description: string;
  icon: string; // Font Awesome class name
}

const AboutPage: React.FC = () => {
  // CONNECT Model points data
  const connectModel: ModelPoint[] = [
    {
      letter: "C",
      title: "Communication",
      description: "Honest and open discussions that bring clarity.",
      icon: "fas fa-comments",
    },
    {
      letter: "O",
      title: "Openness",
      description: "Willingness to be vulnerable and transparent.",
      icon: "fas fa-door-open",
    },
    {
      letter: "N",
      title: "Nurturing",
      description:
        "Caring for each other emotionally, physically, and spiritually.",
      icon: "fas fa-seedling",
    },
    {
      letter: "N",
      title: "Negotiation",
      description: "Finding balance and compromise in conflicts.",
      icon: "fas fa-handshake",
    },
    {
      letter: "E",
      title: "Empathy",
      description: "Understanding and valuing each other's experiences.",
      icon: "fas fa-heart",
    },
    {
      letter: "C",
      title: "Commitment",
      description: "Staying dedicated to growth and love.",
      icon: "fas fa-lock",
    },
    {
      letter: "T",
      title: "Trust",
      description: "The foundation of emotional and relational security.",
      icon: "fas fa-shield-alt",
    },
  ];

  const handleScrollDown = () => {
    const nextSection = document.querySelector(".py-20.bg-gray-100");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-gray-100">
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
              About Us
            </h1>
            <p className="text-md md:text-xl font-light max-w-3xl mx-auto mb-10">
              Unfiltered conversations about marriage - That's the essence of
              'This is Marriage.'
            </p>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-100 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Who We Are
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full">
              <Image
                src="/media/images/thepowells.png"
                alt="Curtis and Wanitta Powell"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-800 leading-relaxed mb-6">
                We are Curtis and Wanitta Powell, married since 2001, and let's
                be real—marriage is a beautiful yet challenging journey. This is
                Marriage started back in 2016 with a simple social media post on
                our 15th anniversary. We were honestly reflecting on our journey
                on camera, and instantly, people became engaged.
              </p>
              <p className="text-gray-800 leading-relaxed mb-6">
                We learned that the honest, messy, and valuable parts of
                marriage we were talking about were exactly what so many couples
                and singles needed to hear. We listened to the feedback and took
                our conversations to YouTube, Facebook, and Instagram Live,
                diving into real talk about love, intimacy, and the everyday
                realities of doing life together.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Our mission? To strengthen marriages by keeping it all the way
                real—no clichés, just our lived experiences, lessons learned,
                and insights into what it truly takes to make a relationship
                thrive. We understand that we're all figuring this thing out
                together, so we decided to open the conversation to those in
                committed relationships, those contemplating marriage, and
                singles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model Section */}
      <section className="py-20 bg-white px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Model
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900 text-center">
              The C.O.N.N.E.C.T. Model
            </h3>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Together, we have over 40 years of combined professional
                experience working systemically with individuals and families to
                achieve positive change. We have created the C.O.N.N.E.C.T.
                Model, which underpins our work with you.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Marriage thrives when couples truly connect. Our C.O.N.N.E.C.T.
                Model focuses on the core principles that create deep, lasting
                bonds.
              </p>
            </div>
          </div>

          {/* CONNECT Model Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {connectModel.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-[#271E19] text-white rounded-full font-bold text-xl mr-3">
                    {point.letter}
                  </span>
                  <h4 className="text-xl font-medium text-gray-900">
                    {point.title}
                  </h4>
                </div>
                <div className="h-px w-full bg-gray-200 mb-4"></div>
                <p className="text-gray-600 flex-grow">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Add a call to action */}
          <div className="mt-16 text-center">
            <p className="text-gray-700 mb-6">
              Ready to strengthen your relationship with our proven
              C.O.N.N.E.C.T. approach?
            </p>
            <a
              href="https://calendly.com/thisismarriageuk"
              target="_blank"
              className="inline-block px-8 py-3 rounded bg-[#271E19] text-white hover:bg-[#3a2c25] transition-colors duration-300"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* You might want to add a testimonial section here */}
    </div>
  );
};

export default AboutPage;
