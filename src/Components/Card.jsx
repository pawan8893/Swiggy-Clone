import React from "react";
import { MdStars } from "react-icons/md";

/**
 * Card Component
 * Displays a single card with an image, title, description, and a rating.
 *
 * Props:
 * - cardKey: Unique identifier for the card.
 * - name: Name of the card item.
 * - image: Image URL for the card.
 * - description: Description text for the card.
 * - onClick: Click event handler for the card.
 */
const Card = ({ cardKey, name, image, description, onClick }) => {
  /**
   * Function to truncate a description text to a specified word limit.
   *
   * @param {string} text 
   * @param {number} wordLimit 
   * @returns {string} 
   */
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div
      onClick={onClick}
      className="w-[270px] flex-none mt-4 mx-auto transition-transform duration-300 hover:scale-95 rounded-lg cursor-pointer"
    >
      <p className="hidden">{cardKey}</p>

      {/* Image Section */}
      <div className="h-[180px] rounded-[15px] overflow-hidden relative">
        {/* Display the card's image */}
        <img className="w-full h-full object-cover" src={image} alt={name} />

        {/* Gradient overlay with price text */}
        <div className="absolute w-full h-full top-0 flex items-end p-2 text-white text-[20px] font-bold bg-gradient-to-t from-black to-transparent">
          Items at ₹199
        </div>
      </div>

      {/* Card Title */}
      <h3 className="text-lg font-bold mt-2">{name}</h3>

      {/* Rating and Delivery Time */}
      <div className="flex items-center gap-2 mx-2 mt-1">
        <span className="text-green-600">
          <MdStars size={20} /> {/* Star icon */}
        </span>
        <p className="text-sm text-gray-700 font-medium">
          {(Math.random() * (5 - 3) + 3).toFixed(1)} · 45-50 mins 
        </p>
      </div>

      {/* Truncated Description */}
      <p className="text-gray-600 text-sm mt-2">
        {truncateDescription(description, 20)}
      </p>
    </div>
  );
};

export default Card;
