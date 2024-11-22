import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black bottom-0 mt-5">
      <div className="pt-7 pb-11 mx-4 sm:mx-10 md:mx-20 lg:mx-40 text-center sm:text-left">
        <img
          className="h-[20px] sm:h-[30px] mx-auto sm:mx-0"
          src="images/swiggy-foot.png"
          alt="swiggy-logo"
        />
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          &copy;2023 Bundl Technologies Pvt. Ltd
        </p>
      </div>
    </div>
  )
}

export default Footer
