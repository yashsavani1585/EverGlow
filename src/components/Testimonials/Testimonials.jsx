import React from "react";
import leftImg from "../../assets/testimonial-left.png";
import rightImg from "../../assets/testimonial-right.png";

// Star SVG component for decoration
const StarIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="currentColor"
    aria-hidden="true"
  >
    <polygon points="50,0 61.8,38.2 100,38.2 69.1,61.8 79.3,100 50,76.4 20.7,100 30.9,61.8 0,38.2 38.2,38.2" />
  </svg>
);

const TestimonialSection = () => {
  return (
    <div className="bg-white font-serif">
      {/* Header */}
      <div className="text-center pt-16 pb-8 bg-white">
        <h2
          className="text-4xl md:text-5xl font-medium text-[#4f1c51]"
          style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
        >
          Customer Testimonials
        </h2>
        <p className="text-lg md:text-xl mt-2 text-[#8b5e83]">
          See what our clients have to say
        </p>
      </div>

      {/* Testimonials Section */}
      <section className="w-full bg-[#4f1c51] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[623px] flex items-center justify-center">
        {/* === Border Lines === */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top Horizontal */}
          <div className="absolute top-0 left-0 w-full h-px bg-white"></div>
          {/* Bottom Horizontal */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-white"></div>
          {/* Left Vertical */}
          <div className="absolute top-0 left-0 h-full w-px bg-white"></div>
          {/* Right Vertical */}
          <div className="absolute top-0 right-0 h-full w-px bg-white"></div>
        </div>

        {/* Left Image */}
        <div className="absolute z-10 left-[10%] bottom-[15%]">
          <img
            src={leftImg}
            alt="A satisfied customer wearing jewelry"
            className="w-40 h-40 md:w-40 md:h-40 object-cover rounded-md shadow-2xl border-2 border-white"
          />
        </div>

        {/* Right Image */}
        <div className="absolute z-10 right-[10%] top-[15%]">
          <img
            src={rightImg}
            alt="Another satisfied customer showcasing a product"
            className="w-40 h-40 md:w-40 md:h-40 object-cover rounded-md shadow-2xl border-2 border-white"
          />
        </div>

        {/* Testimonial Text */}
        <div className="relative z-20 text-center flex flex-col items-center max-w-2xl">
          <p
            className="text-2xl md:text-3xl lg:text-4xl leading-snug px-4"
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            “Beautiful Jewellery and amazing
            <br />
            Quality I would definitely
            <br />
            purchase more!”
          </p>

          {/* Slider Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-white/40 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-white/40 rounded-full"></span>
          </div>
        </div>

        {/* Decorative Stars */}
        <div className="absolute top-[30%] left-[25%] z-10">
          <StarIcon className="w-8 h-8 text-white opacity-90" />
        </div>
        <div className="absolute bottom-[30%] right-[25%] z-10">
          <StarIcon className="w-6 h-6 text-white opacity-40" />
        </div>
        <div className="absolute bottom-[10%] right-[10%] z-10">
          <StarIcon className="w-12 h-12 text-white opacity-20" />
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
