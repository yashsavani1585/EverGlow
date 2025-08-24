import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import ringImg from "../../assets/Rings.png";
import earringImg from "../../assets/Earrings.png";
import braceletImg from "../../assets/Bracelet.png";
import necklaceImg from "../../assets/Necklace.png";
import pendantImg from "../../assets/PandaleSet.png";

const categories = [
  { id: 1, title: "RINGS", img: ringImg, link: "/rings" },
  { id: 2, title: "EARRINGS", img: earringImg, link: "/earrings" },
  { id: 3, title: "BRACELET", img: braceletImg, link: "/bracelet" },
  { id: 4, title: "NECKLACE", img: necklaceImg, link: "/necklace" },
  { id: 5, title: "PENDANT SET", img: pendantImg, link: "/pendantset" },
];

const CategorySection = () => {
  const [index, setIndex] = useState(0);

  // Loop Next
  const nextSlide = () => {
    setIndex((prev) => (prev >= categories.length - 2 ? 0 : prev + 1));
  };

  // Loop Prev
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? categories.length - 2 : prev - 1));
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-900">
          Find Your Perfect Match
        </h2>
        <p className="text-lg md:text-xl text-purple-600 font-medium mt-2">
          Radiance Fits for Everyone
        </p>
      </div>

      {/* --- Mobile + Tablet Slider (sm–lg) --- */}
      <div className="block xl:hidden relative">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 50}%)` }}
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="w-1/2 flex-shrink-0 flex flex-col items-center text-center px-2"
              >
                <Link to={cat.link}>
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm md:text-base font-medium text-purple-900">
                    {cat.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows Below */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={prevSlide}
            className="bg-white shadow-md p-3 rounded-full hover:bg-purple-100"
          >
            <FaChevronLeft className="text-purple-900 text-lg sm:text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white shadow-md p-3 rounded-full hover:bg-purple-100"
          >
            <FaChevronRight className="text-purple-900 text-lg sm:text-xl" />
          </button>
        </div>
      </div>

      {/* --- Desktop Grid (xl+) --- */}
      <div className="hidden xl:grid max-w-7xl mx-auto grid-cols-3 lg:grid-cols-5 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.link}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-40 h-40 xl:w-44 xl:h-44 overflow-hidden rounded-2xl shadow-md">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-base font-medium text-purple-900">
              {cat.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
