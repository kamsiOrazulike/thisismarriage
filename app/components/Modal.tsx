"use client";

import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="relative bg-[#f5f0e6] rounded-lg shadow-lg max-w-lg w-full p-6 max-h-[80vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#86431a] hover:text-[#c9a66b] text-xl"
        >
          &times;
        </button>
        <div className="relative max-h-[calc(80vh-120px)] overflow-y-auto pb-4 mt-4">
          {/* Added padding-right to increase space between scrollbar and close button */}
          <div className="text-[#3e2c1f] px-4">
            {children}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#f5f0e6] to-transparent pointer-events-none"></div>
        </div>
        <style jsx>{`
          ::-webkit-scrollbar {
            width: 3px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #c9a66b50;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background-color: #86431a50;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Modal;
