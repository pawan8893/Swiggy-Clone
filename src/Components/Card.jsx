import React from 'react';
import { MdStars } from "react-icons/md";

const Card = ({ name, image, area, description }) => {
  // Hardcoded lorem ipsum text
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // Limit description to 20 words
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="w-[270px] flex-none mt-4 mx-auto transition-transform duration-300 hover:scale-95 rounded-lg">
      {/* Image Section */}
      <div className="h-[180px] rounded-[15px] overflow-hidden relative">
        <img className="w-full h-full object-cover" src={image} alt={name} />
        <div className="absolute w-full h-full top-0 flex items-end p-2 text-white text-[20px] font-bold bg-gradient-to-t from-black to-transparent">
          Items at ₹199
        </div>
      </div>

      {/* Card Details */}
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <div className="flex items-center gap-2 mx-2 mt-1">
        <span className="text-green-600">
          <MdStars size={20} />
        </span>
        <p className="text-sm text-gray-700 font-medium">
          {(Math.random() * (5 - 3) + 3).toFixed(1)} · 45-50 mins
        </p>
      </div>
      <p className="text-gray-600 text-sm mt-2">
        {truncateDescription(description, 20)}
      </p>
      <p className="text-gray-400 text-xs mt-1">Location: {area || "Unknown"}</p>
    </div>
  );
};

export default Card;
