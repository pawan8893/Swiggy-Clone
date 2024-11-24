import React from "react";
import { IoIosSearch } from "react-icons/io"; // Importing search icon from react-icons

/**
 * Header Component
 * Displays the app's header with a logo and a search bar.
 */
const Header = () => {
  return (
    <header>
      {/* Header container with responsive alignment */}
      <div className="flex flex-wrap w-full items-center justify-between mx-auto my-3">
        {/* Logo Section */}
        <div className="mx-4">
          <img
            className="h-[30px] sm:h-[40px] md:h-[50px]"
            src="images/swiggy-logo.png"
            alt="swiggy logo"
          />
        </div>

        {/* Search Bar Section */}
        <form className="flex items-center justify-between mx-4 mt-3 sm:mt-0 px-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-lg bg-gray-100 text-gray-500">
          {/* Search input field */}
          <input
            className="w-full bg-gray-100 m-1 text-sm sm:text-base focus:outline-none"
            type="text"
            placeholder="Search for restaurant and food"
          />
          {/* Search button with icon */}
          <button
            type="button"
            className="text-gray-500 hover:text-black transition duration-200"
          >
            <IoIosSearch /> {/* Search icon */}
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
