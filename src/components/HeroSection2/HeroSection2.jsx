import React from "react";
import ringImg from "../../assets/ringImg.png";

const HeroSection2 = () => {
  return (
    <section className="w-full h-[630px] bg-gradient-to-r from-[#4f1c51] via-[#732d75] to-[#a04da3] flex items-center justify-between px-16">
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={ringImg}
          alt="Engagement Ring"
          className="h-[500px] object-contain"
        />
      </div>

      {/* Right Side - Text */}
      <div className="flex-1 text-white flex flex-col justify-center max-w-xl">
        {/* Typography Heading */}
        <h2 className="uppercase font-semibold text-[44px] leading-tight tracking-wide font-['Inclusive_Sans']">
          Love & Engagement
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-[17px] leading-relaxed tracking-wide font-light font-['Akatab']">
          EVERGLOW engagement rings feature the world’s finest diamonds and
          unparalleled craftsmanship—signatures of the House for almost two
          centuries.
        </p>
      </div>
    </section>
  );
};

export default HeroSection2;
