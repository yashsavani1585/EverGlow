// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/thumbs";
// import { Thumbs, Autoplay } from "swiper/modules";

// import img1 from "../../assets/productImg.png";
// import img2 from "../../assets/EverglowPost1.png";
// import img3 from "../../assets/EverglowPost2.png";
// import img4 from "../../assets/EverglowPost3.png";
// import img5 from "../../assets/EverglowPost4.png";

// const MoreInfo2 = () => {
//   const images = [img1, img2, img3, img4, img5];
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* ---------------- LEFT SIDE (Images + Swiper) ---------------- */}
//       <div className="flex flex-col md:flex-row gap-4 w-full">
//         {/* Thumbnails */}
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           direction="vertical"
//           spaceBetween={10}
//           slidesPerView={4}
//           watchSlidesProgress
//           loop={true}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           breakpoints={{
//             0: { direction: "horizontal", slidesPerView: 4 },
//             640: { direction: "horizontal", slidesPerView: 5 },
//             768: { direction: "vertical", slidesPerView: 4 },
//           }}
//           modules={[Thumbs, Autoplay]}
//           className="w-full md:w-20 md:h-[500px]"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`thumb-${index}`}
//                 className="w-full h-20 sm:h-24 object-cover rounded-md cursor-pointer border hover:border-purple-600 transition"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Main Image */}
//         <Swiper
//           spaceBetween={10}
//           thumbs={{ swiper: thumbsSwiper }}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           modules={[Thumbs, Autoplay]}
//           className="flex-1 rounded-xl w-full"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`product-${index}`}
//                 className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-xl"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* ---------------- RIGHT SIDE (Details) ---------------- */}
//       <div className="w-full flex flex-col space-y-6">
//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold leading-snug">
//             Celestial Grace: Channel-set Silver Diamond Earrings
//           </h2>
//           <div className="flex flex-wrap items-center gap-3 mt-3">
//             <span className="text-lg sm:text-2xl font-bold">₹2299</span>
//             <span className="text-gray-500 line-through text-sm sm:text-base">₹2599</span>
//             <span className="bg-gray-100 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border">
//               Sale 10%
//             </span>
//           </div>
//           <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
//             Earrings are jewelry that can be worn on one's ears. Earrings are commonly
//             worn in a piercing in the earlobe or another external part of the ear,
//             or by some other means, such as stickers or clip-ons.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col gap-4">
//           <div className="flex flex-col sm:flex-row gap-3">
//             <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
//               Buy Now
//             </button>
//             <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
//               Add to Cart
//             </button>
//           </div>
//           <button className="w-full bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
//             Order On Whatsapp
//           </button>
//         </div>

//         {/* Offers Section */}
//         <div className="bg-[#4F1c51] text-white rounded-lg p-5 space-y-4">
//           <h3 className="font-semibold text-lg">Offers For You</h3>
//           {["FLAT 100 off", "Everglow Jewels"].map((offer, idx) => (
//             <div key={idx} className="bg-white text-black rounded-md p-4 shadow-sm">
//               <p className="font-bold">{offer}</p>
//               <p className="text-sm text-gray-600 mt-1">
//                 Comes with authenticity & guarantee certificate of Everglow Jewels with lifetime exchange guarantee.
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Shipping & Return Policy */}
//         <div className="space-y-3">
//           {["Shipping", "Return Policy"].map((policy, idx) => (
//             <details key={idx} className="border rounded-md px-4 py-3 cursor-pointer">
//               <summary className="font-semibold">{policy}</summary>
//               <p className="text-sm text-gray-600 mt-2">
//                 {policy === "Shipping"
//                   ? "Free shipping on all orders above ₹1000. Delivery in 4-6 business days."
//                   : "Easy 7-day return & exchange policy with 100% refund guarantee."}
//               </p>
//             </details>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoreInfo2;


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs, Autoplay } from "swiper/modules";

import img1 from "../../assets/productImg.png";
import img2 from "../../assets/EverglowPost1.png";
import img3 from "../../assets/EverglowPost2.png";
import img4 from "../../assets/EverglowPost3.png";
import img5 from "../../assets/EverglowPost4.png";

const MoreInfo2 = () => {
  const images = [img1, img2, img3, img4, img5];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* ---------------- LEFT SIDE (Images + Thumbnails) ---------------- */}
      <div className="flex flex-col w-full">
        {/* Main Image Swiper */}
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Thumbs, Autoplay]}
          className="w-full rounded-xl"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`product-${index}`}
                className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails Swiper (always horizontal below main image) */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          watchSlidesProgress
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 3 },   // mobile
            480: { slidesPerView: 4 }, // larger mobile
            768: { slidesPerView: 5 }, // tablet+
            1024: { slidesPerView: 6 } // desktop big
          }}
          modules={[Thumbs, Autoplay]}
          className="mt-4 w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`thumb-${index}`}
                className="w-full h-20 sm:h-24 object-cover rounded-md cursor-pointer border hover:border-purple-600 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---------------- RIGHT SIDE (Details) ---------------- */}
      <div className="w-full flex flex-col space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold leading-snug">
            Celestial Grace: Channel-set Silver Diamond Earrings
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="text-lg sm:text-2xl font-bold">₹2299</span>
            <span className="text-gray-500 line-through text-sm sm:text-base">
              ₹2599
            </span>
            <span className="bg-gray-100 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border">
              Sale 10%
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Earrings are jewelry that can be worn on one's ears. Earrings are
            commonly worn in a piercing in the earlobe or another external part
            of the ear, or by some other means, such as stickers or clip-ons.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
              Buy Now
            </button>
            <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
              Add to Cart
            </button>
          </div>
          <button className="w-full bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
            Order On Whatsapp
          </button>
        </div>

        {/* Offers Section */}
        <div className="bg-[#4F1c51] text-white rounded-lg p-5 space-y-4">
          <h3 className="font-semibold text-lg">Offers For You</h3>
          {["FLAT 100 off", "Everglow Jewels"].map((offer, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-md p-4 shadow-sm"
            >
              <p className="font-bold">{offer}</p>
              <p className="text-sm text-gray-600 mt-1">
                Comes with authenticity & guarantee certificate of Everglow
                Jewels with lifetime exchange guarantee.
              </p>
            </div>
          ))}
        </div>

        {/* Shipping & Return Policy */}
        <div className="space-y-3">
          {["Shipping", "Return Policy"].map((policy, idx) => (
            <details
              key={idx}
              className="border rounded-md px-4 py-3 cursor-pointer"
            >
              <summary className="font-semibold">{policy}</summary>
              <p className="text-sm text-gray-600 mt-2">
                {policy === "Shipping"
                  ? "Free shipping on all orders above ₹1000. Delivery in 4-6 business days."
                  : "Easy 7-day return & exchange policy with 100% refund guarantee."}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo2;
