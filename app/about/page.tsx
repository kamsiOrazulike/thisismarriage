"use client";

import React, { useState, useEffect, MouseEvent } from "react";

interface ConnectPoint {
  letter: string;
  title: string;
  description: string;
}

const ConnectModelSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const connectPoints: ConnectPoint[] = [
    {
      letter: "C",
      title: "Communication",
      description:
        "Honest and open discussions that bring clarity. Effective communication creates a foundation for understanding each other's needs, desires, and concerns.",
    },
    {
      letter: "O",
      title: "Openness",
      description:
        "Willingness to be vulnerable and transparent. Being open with your partner builds trust and allows for deeper connection as you share your authentic self.",
    },
    {
      letter: "N",
      title: "Nurturing",
      description:
        "Caring for each other emotionally, physically, and spiritually. Nurturing each other's growth creates a supportive environment where both partners can thrive.",
    },
    {
      letter: "N",
      title: "Negotiation",
      description:
        "Finding balance and compromise in conflicts. Healthy negotiation acknowledges that both partners' needs matter and works toward solutions that honor both perspectives.",
    },
    {
      letter: "E",
      title: "Empathy",
      description:
        "Understanding and valuing each other's experiences. Empathy allows you to connect with your partner's feelings and see the world through their eyes.",
    },
    {
      letter: "C",
      title: "Commitment",
      description:
        "Staying dedicated to growth and love. Commitment is the daily choice to invest in your relationship even during challenging seasons.",
    },
    {
      letter: "T",
      title: "Trust",
      description:
        "The foundation of emotional and relational security. Trust creates a safe space where both partners can be fully themselves without fear of judgment or betrayal.",
    },
  ];

  const openModal = (index: number): void => {
    setActiveModal(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (): void => {
    setActiveModal(null);
    document.body.style.overflow = "auto";
  };

  // Handle clicking outside the modal content to close it
  const handleModalBackdropClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (activeModal !== null) {
      // Using the correct typing for DOM events
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [activeModal]);

  return (
    <section className="py-24 bg-gradient-to-r from-[#86431a]/95 to-[#271E19]/95 text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-32 h-1 bg-[#c9a66b] mx-auto mb-6"></div>
          <h2 className="font-serif text-4xl font-medium mb-6">
            The C.O.N.N.E.C.T. Model
          </h2>
          <p className="text-white/80">
            Our proven approach to building lasting connections and
            strengthening relationships
          </p>
        </div>

        {/* Connect Model Circles */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {connectPoints.map((point, index) => (
            <button
              key={index}
              onClick={() => openModal(index)}
              className="w-32 h-32 rounded-full bg-[#c9a66b]/20 backdrop-blur-sm flex items-center justify-center text-center hover:bg-[#c9a66b]/30 transition-all duration-300 border border-white/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c9a66b]/50"
              aria-label={`Learn more about ${point.title}`}
            >
              <div>
                <div className="text-3xl font-bold mb-1">{point.letter}</div>
                <div className="text-sm">{point.title}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="https://calendly.com/thisismarriageuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#c9a66b] text-[#271E19] hover:bg-[#c9a66b]/90 transition-colors font-medium rounded"
          >
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Modals */}
      {activeModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={handleModalBackdropClick}
        >
          <div className="bg-gradient-to-r from-[#86431a] to-[#271E19] rounded-lg shadow-xl max-w-md w-full mx-auto overflow-hidden transform transition-all">
            <div className="p-6 relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white focus:outline-none"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal header with decorative element */}
              <div className="mb-4 pb-4 border-b border-white/20">
                <div className="w-16 h-16 rounded-full bg-[#c9a66b]/30 border border-[#c9a66b]/50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">
                    {connectPoints[activeModal].letter}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-center text-white">
                  {connectPoints[activeModal].title}
                </h3>
              </div>

              {/* Modal content */}
              <div className="text-white/90 text-center">
                <p className="leading-relaxed">
                  {connectPoints[activeModal].description}
                </p>
              </div>
            </div>

            {/* Modal footer */}
            <div className="bg-[#3e2c1f]/30 px-6 py-4 flex justify-center">
              <button
                onClick={closeModal}
                className="px-5 py-2 bg-[#c9a66b] text-[#271E19] hover:bg-[#c9a66b]/90 transition-colors font-medium rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ConnectModelSection;
