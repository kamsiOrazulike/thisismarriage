/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Modal from "../components/Modal";

const TestimonialsPage: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<{
    quote: string;
    author: string;
    subtitle: string;
  } | null>(null);

  const testimonials = [
    {
      category: "General",
      entries: [
        {
          quote:
            "Whenever I have attended a live session or read any of the posts from ‘This is Marriage’, there's always a gem of wisdom for those looking for marriage or those already married.",
          author: "Anon",
          subtitle: "General Audience",
        },
        {
          quote:
            "Your honest candid approach has been helpful to promote and create safety and reduce isolation. I wish I had this when I was going through my marriage difficulties, it may have helped us to survive the course.",
          author: "Kelly",
          subtitle: "General Audience",
        },
        {
          quote:
            "I have found the space offers a beacon of insight and understanding, and invaluable perspectives on the complexities of human experience, fostering empathy and growth. Their guest offers professional and lived experience on the topics they discuss and as a Trainee Systemic psychotherapist, the space has supported my learning personally and professionally.",
          author: "Phillipa",
          subtitle: "Trainee Systemic Psychotherapist",
        },
        {
          quote:
            "Listening to the intimate conversations between Curtis and Wanitta are at times breathtaking as they are so authentic and vulnerable during these moments. Whilst the majority of the world are faking it to make it; This Is Marriage is authentic with zero sugar coating, just the real deal transparent married couple with over two decades of life experiences as a married couple.",
          author: "Daniella",
          subtitle: "General Audience",
        },
        {
          quote:
            "This is Marriage reminds us that, though not always perfect, marriage can be beautiful.",
          author: "Xoli",
          subtitle: "General Audience",
        },
      ],
    },
    {
      category: "Couples",
      entries: [
        {
          quote:
            "I cannot recommend Curtis and Wanitta enough! They have truly made our relationship stronger in ways that we couldn’t imagine. The coaching sessions helped us to improve our communication skills by teaching us how to actively listen to each other and communicate our needs and feelings effectively. Through this me and my partner have had a decrease in conflict as we now know how to address issues before they escalate. Curtis and Wanitta made it comfortable for us to speak openly without the fear of being judged or feeling like we were being cut off. It was our first time seeking counseling, and we were nervous about what to expect. However, they created a safe space for us to explore our thoughts and emotions. Thanks to the coaching sessions, we feel equipped with the tools and techniques necessary to take our relationship to the next level. Their guidance and support have truly transformed our relationship and has allowed us to grow and evolve as individuals and as a couple. Thank you so much for sharing your wisdom, expertise and experiences.",
          author: "Bernard & Michelle",
          subtitle: "Married Couple",
        },
        {
          quote:
            "The work of Wanitta and Curtis through This is Marriage has been a priceless gift in my life as a husband and father and my marriage relationship.",
          author: "Eddie",
          subtitle: "Husband & Father",
        },
      ],
    },
    {
      category: "Singles",
      entries: [
        {
          quote:
            "This is Marriage has provided me the space and scope to really explore and examine, not just the coming together of two people, but moreover, the development and interrogation of self.",
          author: "Cams",
          subtitle: "Single",
        },
        {
          quote:
            "As an unmarried man who desires to walk that path someday, This is Marriage has exposed me to authentic married life and has been a blueprint for what I can try to emulate in my own life. I like that they discuss various issues that married people face and they don’t shy away from the difficult conversations.",
          author: "Kennedy",
          subtitle: "Unmarried Man",
        },
      ],
    },
  ];

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className="bg-[#f5f0e6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#86431a] to-[#271E19] text-white flex items-center justify-center text-center px-4">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            What Couples Say
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
            Hear from couples and individuals who have transformed their
            relationships with our guidance.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {testimonials.map((group, index) => (
            <div key={index} className="mb-16">
              <h2 className="font-serif text-3xl font-medium mb-8 text-[#3e2c1f]">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {group.entries.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-lg shadow-lg border border-[#c9a66b]/50"
                  >
                    <blockquote className="text-lg text-[#3e2c1f]/80 italic mb-6">
                      "{truncateText(testimonial.quote, 200)}"
                    </blockquote>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#c9a66b]/50 mr-4"></div>
                      <div>
                        <p className="font-medium text-[#3e2c1f]">
                          {testimonial.author}
                        </p>
                        <p className="text-[#3e2c1f]/70">
                          {testimonial.subtitle}
                        </p>
                      </div>
                    </div>
                    {testimonial.quote.length > 200 && (
                      <button
                        onClick={() => setSelectedTestimonial(testimonial)}
                        className="text-[#86431a] hover:text-[#c9a66b] font-medium"
                      >
                        Read More
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Testimonial */}
      <Modal
        isOpen={!!selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      >
        {selectedTestimonial && (
          <div>
            <blockquote className="text-lg text-[#3e2c1f]/80 italic mb-6">
              "{selectedTestimonial.quote}"
            </blockquote>
            <p className="font-medium text-[#3e2c1f]">
              {selectedTestimonial.author}
            </p>
            <p className="text-[#3e2c1f]/70">
              {selectedTestimonial.subtitle}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TestimonialsPage;
