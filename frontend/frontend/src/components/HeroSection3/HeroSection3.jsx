import React from "react";
import heroSection from "../../assets/HeroSection3.png";

const HeroSection3 = () => {
  return (
    <section
      className="relative w-full h-[400px] sm:h-[500px] md:h-[637px] max-w-full mx-auto bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroSection})` }}
    >
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-left px-4 sm:px-8 md:px-16 lg:px-24">
        <p
          className="text-white font-inter font-normal text-[32px] leading-[100%] tracking-[0] whitespace-nowrap"
        >
          "Shine Naturally with Everglow Silver"
        </p>
        <p className="text-white text-[51px] leading-[100%] tracking-[0] uppercase font-normal font-['Inclusive_Sans'] mt-3 sm:mt-4">
          LOVE & ENGAGEMENT
        </p>

      </div>
    </section>
  );
};

export default HeroSection3;
