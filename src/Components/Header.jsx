import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between w-full mx-2 my-2">
        <div>
            <img className="h-[30px]" src="images/swiggy-logo.png" alt="swiggy logo" />
        </div>
        <div className="flex justify-between px-2 py-1 w-1/4 items-center border rounded-lg">
            <input className="w-full" type="text" placeholder="Search for restaurant and food" />
            <IoIosSearch/>
        </div>
    </div>
  )
}

export default Header
