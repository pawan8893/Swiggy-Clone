import React from 'react';

/**
 * Footer Component
 * Displays the footer with a logo and copyright information.
 */
const Footer = () => {
  return (
    <div className="bg-black mt-5">
      {/* Footer Content Container */}
      <div className="pt-7 pb-11 mx-4 sm:mx-10 md:mx-20 lg:mx-40 text-center sm:text-left">
        {/* Logo Section */}
        <img
          className="h-[20px] sm:h-[30px] mx-auto sm:mx-0"
          src="images/swiggy-foot.png"
          alt="swiggy-logo"
        />

        {/* Copyright Information */}
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          &copy; 2023 Bundl Technologies Pvt. Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
