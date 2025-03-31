import React from "react";

interface ScrollButtonProps {
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center mt-6 group"
      aria-label="Scroll down"
    >
      <div
        className="bg-black/20 hover:bg-black/30 border border-white/30 hover:border-white/50 rounded-full pt-2 pb-4 px-6 flex flex-row items-center gap-3 text-white/90 transition-colors duration-300"
        style={{ backdropFilter: "blur(8px)" }}
      >
        {/* Cross icon */}
        <div className="relative w-5 h-5 flex justify-center items-center">
          {/* Vertical line */}
          <div className="absolute w-px mt-2 h-7 bg-white"></div>

          {/* Horizontal line */}
          <div className="absolute w-3 h-px bg-white"></div>

          {/* Moving green dot - only moves up and down */}
          <span
            className="absolute w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm shadow-green-400/50"
            style={{
              animation: "moveVertical 2s ease-in-out infinite",
            }}
          ></span>
        </div>
        <span className="text-xs mt-2 font-medium tracking-wide">scroll</span>
      </div>

      {/* CSS for custom animation - only vertical movement */}
      <style jsx>{`
        @keyframes moveVertical {
          0%,
          100% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </button>
  );
};

export default ScrollButton;
