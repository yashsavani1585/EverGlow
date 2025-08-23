import React from "react";
import divider from "../../assets/Formdesignadd.png";

const PersonalizedJewelryForm = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Divider Image */}
      <div className="flex items-center justify-center mb-8">
        <img src={divider} alt="divider" className="h-8" />
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name*"
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="tel"
            placeholder="Mobile Number*"
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Row 2 */}
        <input
          type="email"
          placeholder="Email Address*"
          required
          className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
        />

        {/* Row 3 */}
        <select
          required
          className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
        >
          <option value="">Choose Type</option>
          <option value="ring">Ring</option>
          <option value="necklace">Necklace</option>
          <option value="bracelet">Bracelet</option>
          <option value="earrings">Earrings</option>
        </select>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Total Budget"
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="text"
            placeholder="Metal Type"
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* File Upload */}
        <div>
          <label
            htmlFor="fileUpload"
            className="block w-full border rounded-md px-4 py-3 text-gray-500 cursor-pointer hover:bg-purple-50"
          >
            <input
              id="fileUpload"
              type="file"
              accept=".pdf, .jpg, .png, .jpeg, .doc, .docx"
              className="hidden"
            />
            <span className="text-purple-700 font-medium">Choose File</span>
          </label>
          <p className="text-gray-500 text-sm mt-2">
            Allowed types: pdf, jpg, png, jpeg, doc, docx.
          </p>
        </div>

        {/* Textarea */}
        <textarea
          rows="4"
          placeholder="Please describe your idea for this Custom Project..."
          className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-purple-900 text-white px-6 py-3 rounded-md shadow hover:bg-purple-800 transition w-full md:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalizedJewelryForm;
