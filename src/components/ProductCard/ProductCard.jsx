import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, imageH = "h-[200px] md:h-[280px]" }) => {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col">
      {/* Image */}
      <div className={`w-full ${imageH} overflow-hidden bg-gray-50`}>
        <img
          src={product.img || product.image || product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 text-center">
          {product.title || product.name || product.titleName}
        </h3>

        {/* Price Row */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold text-purple-700">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-500">
              {product.oldPrice}
            </span>
          )}
        </div>

        {/* Buttons */}
<div className="mt-auto flex gap-2">
  {/* More Info Button */}
  <Link to="/moreInform" className="flex-1">
    <button className="w-full border border-[#4f1c51] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-purple-50 transition">
      More Info
    </button>
  </Link>

  {/* Add to Cart Button */}
  <button className="flex-1 bg-[#4f1c51] border border-purple-700 text-white text-sm font-medium py-2 px-3 rounded-xl hover:bg-purple-800 transition">
    Add to Cart
  </button>
</div>

      </div>
    </div>
  );
};

export default ProductCard;
