import React from "react";
import profileImage from "../../assets/jawellarycontactPage.png"; // tumhare image ka path

const YourProfile = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side Image */}
        <div className="h-full">
          <img
            src={profileImage}
            alt="Profile Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Profile</h2>
          <form className="space-y-4">
            
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-md bg-gray-100"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-md bg-gray-100"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border rounded-md bg-gray-100"
            />

            {/* Phone Number */}
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md bg-gray-100"
            />

            {/* Address */}
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border rounded-md bg-gray-100"
            />

            {/* Apartment */}
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full p-3 border rounded-md bg-gray-100"
            />

            {/* City, State, Zip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded-md bg-gray-100"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full p-3 border rounded-md bg-gray-100"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full p-3 border rounded-md bg-gray-100"
              />
            </div>

            {/* DOB */}
            <input
              type="date"
              className="w-full p-3 border rounded-md bg-gray-100"
            />

            {/* Gender */}
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="male" />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="female" />
                <span>Female</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-teal-800 text-white py-3 rounded-md hover:bg-teal-900 transition"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
