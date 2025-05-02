/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import ScrollButton from "../components/ScrollButton";
import ConnectModelSection from "../../components/ConnectModelSection";

const AboutPage: React.FC = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".py-20.bg-[#f5f0e6]");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#271E19] text-[#f5f0e6]">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/media/images/background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-[#271E19]/70"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl md:mt-24 flex flex-col items-center">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10">
              Unfiltered conversations about marriage - That's the essence of
              'This is Marriage.'
            </p>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-[#f5f0e6] px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-medium text-center text-[#3e2c1f] mb-12">
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
              <p className="text-[#3e2c1f]/80 leading-relaxed mb-6">
                We are Curtis and Wanitta Powell, married since 2001, and let's
                be real—marriage is a beautiful yet challenging journey. This is
                Marriage started back in 2016 with a simple social media post on
                our 15th anniversary. We were honestly reflecting on our journey
                on camera, and instantly, people became engaged.
              </p>
              <p className="text-[#3e2c1f]/80 leading-relaxed mb-6">
                We learned that the honest, messy, and valuable parts of
                marriage we were talking about were exactly what so many couples
                and singles needed to hear. We listened to the feedback and took
                our conversations to YouTube, Facebook, and Instagram Live,
                diving into real talk about love, intimacy, and the everyday
                realities of doing life together.
              </p>
              <p className="text-[#3e2c1f]/80 leading-relaxed">
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

      {/* CONNECT Model Section */}
      <ConnectModelSection />

      {/* Our live talks */}
      <section className="py-24 bg-[#f5f0e6] relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-32 h-1 bg-[#3e2c1f] mx-auto mb-6"></div>
          <h2 className="text-[#3e2c1f] font-serif text-4xl font-medium mb-6">
            Our Live Talks
          </h2>
          <p className="text-[#3e2c1f]/80">
            Join us for engaging discussions on love, relationships, and
            everything in between. Our live talks are designed to foster
            meaningful conversations and provide valuable insights into the
            complexities of relationships.
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 mb-20">
          <div className="order-2 md:order-1">
            <p className="bg-[#3e2c1f]/30 px-4 py-2 rounded-full mb-8 text-sm font-medium text-[#3e2c1f] border border-[#3e2c1f]/20 uppercase inline-block w-auto">
              Ongoing
            </p>
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#3e2c1f]">
              “Where Are the Men?” Symposium
            </h2>
            <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
              Exploring Relationship Perspectives and Challenges within Faith
              Communities, Where Men May Be Outnumbered. Are you seeking to
              understand the challenges men face in relationships, especially
              within faith communities? The “Where Are the Men?” Symposium is a
              unique event that addresses the importance of male involvement in
              relationships and faith-based communities. Join us for an
              experience that encourages men to engage, grow, and support their
              relationships, and empowers women to be a part of the strategy in
              locating them.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors font-medium rounded"
            >
              View Details
            </a>
          </div>
          <div className="flex flex-row relative order-1 md:order-2">
            <Image
              src="/media/images/WATM3.png"
              alt="Symposium"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "32%", height: "auto", margin: "0 auto" }}
              className="rounded-lg shadow-lg"
              draggable={false}
            />
            <Image
              src="/media/images/WATM2.png"
              alt="Symposium"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "32%", height: "auto", margin: "0 auto" }}
              className="rounded-lg shadow-lg"
              draggable={false}
            />
            <Image
              src="/media/images/WATM1.png"
              alt="Symposium"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "32%", height: "auto", margin: "0 auto" }}
              className="rounded-lg shadow-lg"
              draggable={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
