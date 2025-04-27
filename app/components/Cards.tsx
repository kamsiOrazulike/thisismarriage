/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  // Core card properties
  title: string;
  description: string;

  // Optional styling and content properties
  variant?:
    | "basic"
    | "feature"
    | "course"
    | "workshop"
    | "service"
    | "testimonial";
  className?: string;

  // Optional image properties
  imageSrc?: string;
  imageAlt?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "auto";

  // Optional link or button properties
  buttonText?: string;
  buttonLink?: string;
  buttonVariant?: "primary" | "secondary" | "outline";
  isExternalLink?: boolean;

  // Optional course-specific properties
  duration?: string;
  price?: string;

  // Optional list items
  listItems?: string[];

  // Optional testimonial-specific properties
  author?: string;
  subtitle?: string;
  avatarSrc?: string;

  // Optional metadata badge (for course duration, date, etc.)
  badge?: string;

  // Optional callback for button click if not using a link
  onClick?: () => void;

  // Pass any additional props we haven't explicitly defined
  [x: string]: any;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  variant = "basic",
  className = "",
  imageSrc,
  imageAlt = "",
  aspectRatio = "auto",
  buttonText,
  buttonLink,
  buttonVariant = "primary",
  isExternalLink = false,
  duration,
  price,
  listItems,
  author,
  subtitle,
  avatarSrc,
  badge,
  onClick,
  ...rest
}) => {
  // Determine base card styling based on variant
  let cardBaseClasses =
    "overflow-hidden rounded-lg transition-all duration-300 ";
  let imageContainerClasses = "relative ";
  let contentClasses = "";

  // Configure aspect ratio for image container
  switch (aspectRatio) {
    case "square":
      imageContainerClasses += "aspect-square w-full";
      break;
    case "portrait":
      imageContainerClasses += "aspect-[3/4] w-full";
      break;
    case "landscape":
      imageContainerClasses += "aspect-[16/9] w-full";
      break;
    default:
      if (variant === "course") {
        imageContainerClasses += "h-64 w-full";
      } else if (variant === "service") {
        imageContainerClasses += "h-96 w-full";
      } else {
        imageContainerClasses += "h-48 w-full";
      }
  }

  // Set card styling based on variant
  switch (variant) {
    case "feature":
      cardBaseClasses += "group hover:shadow-lg";
      contentClasses = "mt-4 p-6";
      // Ensure proper height for the feature card images
      if (!imageContainerClasses.includes("h-")) {
        imageContainerClasses += " h-64";
      }
      break;
    case "course":
      cardBaseClasses +=
        "bg-white shadow-md hover:shadow-xl border border-[#c9a66b]/30";
      contentClasses = "p-8";
      break;
    case "workshop":
      cardBaseClasses +=
        "bg-white shadow-md hover:shadow-xl border border-[#c9a66b]/20";
      contentClasses = "p-6";
      break;
    case "service":
      cardBaseClasses += "hover:shadow-lg";
      contentClasses = "p-6";
      break;
    case "testimonial":
      cardBaseClasses +=
        "bg-[#f5f0e6] p-10 shadow-md border border-[#c9a66b]/20";
      contentClasses = "";
      break;
    default:
      cardBaseClasses += "bg-white hover:shadow-md";
      contentClasses = "p-6";
  }

  // Configure button styling
  let buttonClasses = "";
  switch (buttonVariant) {
    case "primary":
      buttonClasses =
        "bg-[#86431a] text-white hover:bg-[#86431a]/90 transition-colors";
      break;
    case "secondary":
      buttonClasses =
        "bg-[#c9a66b] text-[#271E19] hover:bg-[#c9a66b]/90 transition-colors";
      break;
    case "outline":
      buttonClasses =
        "border-2 border-[#86431a] text-[#86431a] hover:bg-[#86431a]/10 transition-colors";
      break;
  }

  // Determine the button or link element
  const renderButton = () => {
    if (!buttonText) return null;

    const buttonContent = (
      <button
        className={`${
          buttonVariant === "primary"
            ? "px-4 py-2 rounded"
            : "px-6 py-2 rounded"
        } font-medium ${buttonClasses}`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    );

    if (buttonLink) {
      if (isExternalLink) {
        return (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            {buttonContent}
          </a>
        );
      } else {
        return (
          <Link href={buttonLink} className="inline-block">
            {buttonContent}
          </Link>
        );
      }
    } else {
      return buttonContent;
    }
  };

  return (
    <div className={`${cardBaseClasses} ${className}`} {...rest}>
      {/* Image container with overlay for feature cards */}
      {imageSrc && (
        <div className={imageContainerClasses} style={{ position: "relative" }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={variant === "feature"}
            style={{ objectFit: "cover" }}
            className={`rounded-t-lg ${
              variant === "feature"
                ? "group-hover:scale-105 transition-transform duration-500"
                : ""
            }`}
          />

          {/* Overlay for feature cards */}
          {variant === "feature" && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#271E19] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
          )}

          {/* Title and description overlay for feature cards */}
          {variant === "feature" && (
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="font-serif font-medium text-white text-xl mb-2">
                {title}
              </h3>
              <p className="text-white/90 text-sm">{description}</p>
            </div>
          )}
        </div>
      )}

      {/* Card content - only render separately for non-feature cards */}
      {variant !== "feature" && (
        <div className={contentClasses}>
          {/* Badge (for course duration, workshop date, etc.) */}
          {badge && (
            <div className="mb-4">
              <span className="bg-[#c9a66b]/20 text-[#86431a] px-3 py-1 rounded-full text-sm font-medium">
                {badge}
              </span>
            </div>
          )}

          {/* Price and duration row for courses */}
          {(price || duration) && (
            <div className="flex justify-between items-center mb-3">
              {duration && (
                <span className="bg-[#c9a66b]/20 text-[#86431a] px-3 py-1 rounded-full text-sm font-medium">
                  {duration}
                </span>
              )}
              {price && (
                <span className="font-medium text-[#86431a]">{price}</span>
              )}
            </div>
          )}

          {/* Title */}
          <h3
            className={`font-serif font-medium text-[#3e2c1f] ${
              variant === "course" ? "text-2xl mb-4" : "text-xl mb-3"
            }`}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={`text-[#3e2c1f]/80 ${
              variant === "course" ? "mb-6" : "mb-4"
            } ${variant === "service" ? "" : "text-sm"}`}
          >
            {description}
          </p>

          {/* List items with checkmarks - only shown if listItems is provided */}
          {listItems && listItems.length > 0 && (
            <div className={`space-y-2 ${buttonText ? "mb-6" : ""}`}>
              {listItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#86431a] mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#3e2c1f]/80">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Author info for testimonial cards */}
          {variant === "testimonial" && author && (
            <div className="flex items-center mt-6">
              {avatarSrc ? (
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#c9a66b]">
                  <Image
                    src={avatarSrc}
                    alt={author}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#c9a66b]/30 mr-4 flex items-center justify-center">
                  <span className="text-[#86431a] font-medium text-sm">
                    {author.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <p className="font-medium text-[#3e2c1f]">{author}</p>
                {subtitle && <p className="text-[#3e2c1f]/70">{subtitle}</p>}
              </div>
            </div>
          )}

          {/* Price and button row for smaller course cards */}
          {variant !== "course" &&
            variant !== "testimonial" &&
            buttonText &&
            price && (
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#86431a] font-medium">{price}</span>
                {renderButton()}
              </div>
            )}

          {/* Full-width button for courses */}
          {variant === "course" && buttonText && (
            <button className={`w-full py-3 ${buttonClasses} rounded`}>
              {buttonText}
            </button>
          )}

          {/* Standard button for other cases */}
          {variant !== "course" && buttonText && !price && renderButton()}
        </div>
      )}
    </div>
  );
};

export default Card;
