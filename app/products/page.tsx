/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import ScrollButton from "../components/ScrollButton";

const ProductsPage: React.FC = () => {
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
              Our Products
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10">
              Explore our curated products designed to strengthen and nurture relationships.
            </p>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <div className="py-20 bg-white">
        {/* Product 1 */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 w-full">
            <Image
              src="/media/images/service-premarital.jpg"
              alt="Premarital Workbook"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#3e2c1f]">
              Premarital Workbook: Build a Strong Foundation
            </h2>
            <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
              Starting your journey with the right tools is crucial. Our Premarital Workbook provides a guided approach to understanding each other’s values, goals, and expectations, ensuring you're fully prepared for the commitment ahead. Strengthen your connection before you say "I do."
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors font-medium rounded"
            >
              View Details
            </a>
          </div>
        </div>

        {/* Product 2 */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#3e2c1f]">
              Relationship Cards: Strengthen Your Bond
            </h2>
            <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
              Relationships require continuous effort and open communication. Our Relationship Cards offer thoughtful questions and activities designed to help couples address challenges, improve intimacy, and refine communication. It’s a simple yet powerful way to nurture your relationship daily.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors font-medium rounded"
            >
              View Details
            </a>
          </div>
          <div className="relative h-96 w-full order-1 md:order-2">
            <Image
              src="/media/images/service-couples.jpg"
              alt="Relationship Cards"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Product 3 */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 w-full">
            <Image
              src="/media/images/service-renewal.jpg"
              alt="Marital Workbook"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#3e2c1f]">
              Marital Workbook: A Deeper Dive into Marriage
            </h2>
            <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
              For those in marriage, our Marital Workbook is an essential tool for couples who want to continue growing together. From resolving conflict to rekindling romance, this workbook provides structured exercises to help you rediscover each other and strengthen your commitment over time.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors font-medium rounded"
            >
              View Details
            </a>
          </div>
        </div>

        {/* Product 4 */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl font-medium mb-4 text-[#3e2c1f]">
              “Where Are the Men?” Symposium
            </h2>
            <p className="text-[#3e2c1f]/80 mb-6 leading-relaxed text-lg">
              Exploring Relationship Perspectives and Challenges within Faith Communities, Where Men May Be Outnumbered. Are you seeking to understand the challenges men face in relationships, especially within faith communities? The “Where Are the Men?” Symposium is a unique event that addresses the importance of male involvement in relationships and faith-based communities. Join us for an experience that encourages men to engage, grow, and support their relationships, and empowers women to be a part of the strategy in locating them.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors font-medium rounded"
            >
              View Details
            </a>
          </div>
          <div className="relative h-96 w-full order-1 md:order-2">
            <Image
              src="/media/images/service-renewal.jpg"
              alt="Symposium"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;