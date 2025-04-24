/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

const TestimonialsPage: React.FC = () => {
  return (
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

      {/* Additional Testimonials */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-medium mb-12 text-center text-gray-900">
            More Success Stories
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
    </div>
  );
};

export default TestimonialsPage;