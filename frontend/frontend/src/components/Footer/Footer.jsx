// import {
//     FaInstagram,
//     FaWhatsapp,
//     FaFacebookF,
//     FaLinkedinIn,
//     FaPinterestP,
// } from "react-icons/fa";

// import bgurl from "../../assets/bgurl.png"; // 🔹 Background image
// import Logo from "../../assets/EverGlow1.png"; // 🔹 Logo

// export default function Footer() {
//     return (
//         <footer
//             className="text-white py-14 px-6"
//             style={{
//                 backgroundImage: `url(${bgurl})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}
//         >
//             {/* 🔹 Main Grid */}
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

//                 {/* 1. About + Logo + Social */}
//                 <div className="md:col-span-1 text-center md:text-left">
//                     <img
//                         src={Logo}
//                         alt="EverGlow Logo"
//                         className="w-[180px] h-auto mx-auto md:mx-0"
//                     />
//                     <p className="text-sm leading-relaxed mb-3 mt-3 max-w-[240px] mx-auto md:mx-0">
//                         At EverGlow, we believe that Jewellery is more than adornment.
//                         Founded in 2023, our passion for quality drives us to create unique
//                         pieces.
//                     </p>
//                     <div className="flex justify-center md:justify-start gap-4 text-xl">
//                         {[FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaPinterestP].map(
//                             (Icon, i) => (
//                                 <Icon
//                                     key={i}
//                                     className="cursor-pointer hover:text-[#451c49] transition-colors"
//                                 />
//                             )
//                         )}
//                     </div>
//                 </div>

//                 {/* 2. Policies */}
//                 <div>
//                     <h3 className="font-serif text-lg mb-4 border-b border-white/30 pb-2">
//                         POLICIES
//                     </h3>
//                     <ul className="space-y-2 text-sm">
//                         {[
//                             "Exchange & Buy Back Policy",
//                             "Shipping Policy",
//                             "Privacy Policy",
//                             "Terms and Conditions",
//                         ].map((item, i) => (
//                             <li
//                                 key={i}
//                                 className="hover:underline cursor-pointer hover:text-[#451c49] transition"
//                             >
//                                 {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* 3. Categories */}
//                 <div>
//                     <h3 className="font-serif text-lg mb-4 border-b border-white/30 pb-2">
//                         CATEGORIES
//                     </h3>
//                     <ul className="space-y-2 text-sm">
//                         {[
//                             "Rings",
//                             "Earrings",
//                             "Bracelets",
//                             "Pendants",
//                             "Nosepins",
//                         ].map((item, i) => (
//                             <li
//                                 key={i}
//                                 className="hover:underline cursor-pointer hover:text-[#451c49] transition"
//                             >
//                                 {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* 4. Our Company */}
//                 <div>
//                     <h3 className="font-serif text-lg mb-4 border-b border-white/30 pb-2">
//                         OUR COMPANY
//                     </h3>
//                     <ul className="space-y-2 text-sm">
//                         {[
//                             "Custom Jewellery",
//                             "About Us",
//                             "About Lab Diamonds",
//                             "Ring Size Guide",
//                             "FAQs",
//                             "Blogs",
//                             "Store Locator",
//                             "Contact Us",
//                         ].map((item, i) => (
//                             <li
//                                 key={i}
//                                 className="hover:underline cursor-pointer hover:text-yellow-300 transition"
//                             >
//                                 {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                <div>
//   {/* Heading */}
//   <h3 className="uppercase text-sm tracking-widest mb-2 text-white">
//     Newsletter
//   </h3>

//   {/* Subheading */}
//   <p className="text-3xl font-serif mb-6 text-white">Join Today</p>

//   {/* Email Input + Button in one Rounded Box */}
//   <div className="flex w-75 items-center border border-white rounded-full overflow-hidden max-w-md">
//     <input
//       type="email"
//       placeholder="Enter your Email here"
//       className="bg-transparent flex-1 px-5 py-3 text-base text-white placeholder-white outline-none"
//       aria-label="Email for newsletter"
//     />
//     <button
//       type="submit"
//       className="flex items-center justify-center w-12 h-12 mr-5 m-1 rounded-full  bg-white text-#451c51 transition"
//       aria-label="Subscribe to newsletter"
//     >
//       ▶
//     </button>
//   </div>
// </div>




//             </div>

//             {/* 🔹 Bottom Copyright */}
//             <div className="mt-12 border-t border-white/50 pt-4 text-center text-xs md:text-sm">
//                 © {new Date().getFullYear()} EverGlow. All Rights Reserved.
//             </div>
//         </footer>
//     );
// }


import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import bgurl from "../../assets/bgurl.png"; // 🔹 Background image
import Logo from "../../assets/EverGlow1.png"; // 🔹 Logo

export default function Footer() {
  return (
    <footer
      className="text-white py-14 px-6"
      style={{
        backgroundImage: `url(${bgurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {/* 1. About + Logo + Social */}
        <div className="text-center md:text-left">
          <img
            src={Logo}
            alt="EverGlow Logo"
            className="w-[160px] h-auto mx-auto md:mx-0"
          />
          <p className="text-sm leading-relaxed mb-4 mt-3 max-w-[240px] mx-auto md:mx-0">
            At EverGlow, we believe that Jewellery is more than adornment.
            Founded in 2023, our passion for quality drives us to create unique
            pieces.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            {[FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaPinterestP].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="cursor-pointer hover:text-yellow-300 transition-colors"
                />
              )
            )}
          </div>
        </div>

        {/* 2. Policies */}
        <div>
          <h3 className="font-serif text-lg mb-4 border-b border-white/30 pb-2">
            POLICIES
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Exchange & Buy Back Policy",
              "Shipping Policy",
              "Privacy Policy",
              "Terms and Conditions",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:underline cursor-pointer hover:text-yellow-300 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Categories */}
        <div>
          <h3 className="font-serif text-lg mb-4 border-b border-white/30 pb-2">
            CATEGORIES
          </h3>
          <ul className="space-y-2 text-sm">
            {["Rings", "Earrings", "Bracelets", "Pendants", "Nosepins"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:underline cursor-pointer hover:text-yellow-300 transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* 4. Our Company */}
        <div>
          <h3 className="font-serif text-lg mb-4 border-b border-white/30 pb-2">
            OUR COMPANY
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Custom Jewellery",
              "About Us",
              "About Lab Diamonds",
              "Ring Size Guide",
              "FAQs",
              "Blogs",
              "Store Locator",
              "Contact Us",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:underline cursor-pointer hover:text-yellow-300 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Newsletter */}
        <div className="max-w-xl mx-auto text-center md:text-left">
          {/* Heading */}
          <h3 className="uppercase text-sm tracking-widest mb-2 text-white">
            Newsletter
          </h3>
          <p className="text-3xl font-serif mb-6 text-white">Join Today</p>

          {/* Email Input + Button */}
          <form className="flex items-center border border-white rounded-full overflow-hidden max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter your Email here"
              className="bg-transparent flex-1 px-5 py-3 text-base text-white placeholder-white outline-none"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="flex items-center justify-center w-12 h-12 mr-2 m-1 rounded-full bg-white text-[#451c51] hover:bg-[#451c51] hover:text-black transition"
              aria-label="Subscribe to newsletter"
            >
              <IoIosArrowForward size={22} />
            </button>
          </form>
        </div>
      </div>

      {/* 🔹 Bottom Copyright */}
      <div className="mt-12 border-t border-white/50 pt-4 text-center text-xs md:text-sm">
        © {new Date().getFullYear()} EverGlow. All Rights Reserved.
      </div>
    </footer>
  );
}
