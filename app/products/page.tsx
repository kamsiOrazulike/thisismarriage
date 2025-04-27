/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
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
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="bg-gray-200 w-full h-full"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl md:mt-24 flex flex-col items-center">
            <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">
              Our Products
            </h1>
            <p className="text-md md:text-xl font-light max-w-3xl mx-auto mb-10">
              Explore our curated products designed to strengthen and nurture relationships.
            </p>
            <ScrollButton onClick={handleScrollDown} />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md p-8">
              <h2 className="font-serif text-2xl font-medium mb-4 text-gray-900">
                Premarital Workbook: Build a Strong Foundation
              </h2>
              <p className="text-gray-600">
                Starting your journey with the right tools is crucial. Our Premarital Workbook provides a guided approach to understanding each other’s values, goals, and expectations, ensuring you're fully prepared for the commitment ahead. Strengthen your connection before you say "I do."
              </p>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md p-8">
              <h2 className="font-serif text-2xl font-medium mb-4 text-gray-900">
                Relationship Cards: Strengthen Your Bond
              </h2>
              <p className="text-gray-600">
                Relationships require continuous effort and open communication. Our Relationship Cards offer thoughtful questions and activities designed to help couples address challenges, improve intimacy, and refine communication. It’s a simple yet powerful way to nurture your relationship daily.
              </p>
            </div>

            {/* Product 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md p-8">
              <h2 className="font-serif text-2xl font-medium mb-4 text-gray-900">
                Marital Workbook: A Deeper Dive into Marriage
              </h2>
              <p className="text-gray-600">
                For those in marriage, our Marital Workbook is an essential tool for couples who want to continue growing together. From resolving conflict to rekindling romance, this workbook provides structured exercises to help you rediscover each other and strengthen your commitment over time.
              </p>
            </div>

            {/* Product 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md p-8">
              <h2 className="font-serif text-2xl font-medium mb-4 text-gray-900">
                “Where Are the Men?” Symposium
              </h2>
              <p className="text-gray-600">
                Exploring Relationship Perspectives and Challenges within Faith Communities, Where Men May Be Outnumbered. Are you seeking to understand the challenges men face in relationships, especially within faith communities? The “Where Are the Men?” Symposium is a unique event that addresses the importance of male involvement in relationships and faith-based communities. Join us for an experience that encourages men to engage, grow, and support their relationships, and empowers women to be a part of the strategy in locating them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;