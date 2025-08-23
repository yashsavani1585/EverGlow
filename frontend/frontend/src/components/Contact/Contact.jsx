import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left border-b pb-8">
          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full">
              <FaPhoneAlt className="text-green-700 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone Number</h3>
              <p className="text-gray-600">+91 72650 77755</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full">
              <FaEnvelope className="text-green-700 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Address</h3>
              <p className="text-gray-600">crystovajewels@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full">
              <FaMapMarkerAlt className="text-green-700 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Office Address</h3>
              <p className="text-gray-600">
                B-714 IT Park, Opp. AR Mall, <br /> Mota Varachha, Surat - 394101
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Have Queries? <br /> We’re Here to Help!
            </h2>
            <p className="text-gray-600 mb-4">
              Have questions, feedback, or need assistance? Connect with us, and we'll
              ensure you get the support you need.
            </p>
            <p className="text-gray-600 mb-6">
              Your trust and satisfaction are our treasures. Reach out to us anytime, and
              let us help you shine! Whether you have a question, need assistance, or want
              to share feedback, we'd love to hear from you. Let’s make your jewellery
              shopping experience exceptional.
            </p>

            {/* Highlighted Box */}
            <div className="bg-teal-100 text-gray-800 p-4 rounded-md border-l-4 border-teal-600">
              <p className="font-medium">
                Engagement rings, wedding bands, and anniversary gifts commemorate
                milestones, making the jewellery a lifelong symbol of love and
                commitment.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b border-gray-400 w-full py-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b border-gray-400 w-full py-2 focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="border-b border-gray-400 w-full py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-gray-400 w-full py-2 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Your message here..."
                className="border-b border-gray-400 w-full py-2 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-800 text-white px-6 py-2 rounded-md shadow hover:bg-purple-900 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
