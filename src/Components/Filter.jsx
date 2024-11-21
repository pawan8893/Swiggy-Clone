import React from 'react'
import { LuSettings2 } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

const Filter = () => {
  return (
    // <div className="mx-20">
    //   <h1 className="font-bold text-2xl mt-6 mb-3">Restaurants with online food delievery in Pune</h1>
    //   <div className="flex">
    //     <button className="flex gap-2 text-sm text-gray-600 items-center w-auto border m-2 py-1 px-3 rounded-full">Filter<LuSettings2 /></button>
    //     <button className="flex gap-2 text-sm text-gray-600 font-medium items-center w-auto border m-2 py-1 px-3 rounded-full">Sort By<MdKeyboardArrowDown /></button>
    //     <button className="items-center text-sm text-gray-600 font-medium w-auto border m-2 py-1 px-3 rounded-full">Fast Delivery</button>
    //     <button className="items-center text-sm text-gray-600 font-medium w-auto border m-2 py-1 px-3 rounded-full">New on Swiggy</button>
    //     <button className="items-center text-sm text-gray-600 font-medium w-auto border m-2 py-1 px-3 rounded-full">Rating 4.0+</button>
    //     <button className="items-center text-sm text-gray-600 font-medium w-auto border m-2 py-1 px-3 rounded-full">Pure Veg</button>
    //     <button className="items-center text-sm text-gray-600 font-medium w-auto border m-2 py-1 px-3 rounded-full">Offers</button>
    //     <button className="items-center text-sm text-gray-600 font-medium w-auto border m-2 py-1 px-3 rounded-full">Rs. 300-Rs. 600</button>
    //     <button className="items-center text-sm text-gray-600 font-medium w-auto border m-2 py-1 px-3 rounded-full">Less than Rs. 300</button>
    //   </div>
    // </div>
    <div className="mx-4 sm:mx-6 md:mx-20">
  <h1 className="font-bold text-xl sm:text-2xl mt-6 mb-3">
    Restaurants with online food delivery in Pune
  </h1>
  <div className="flex flex-wrap gap-2">
    <button className="flex gap-2 text-sm text-gray-600 items-center w-auto border py-1 px-3 rounded-full">
      Filter<LuSettings2 />
    </button>
    <button className="flex gap-2 text-sm text-gray-600 font-medium items-center w-auto border py-1 px-3 rounded-full">
      Sort By<MdKeyboardArrowDown />
    </button>
    <button className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full">
      Fast Delivery
    </button>
    <button className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full">
      New on Swiggy
    </button>
    <button className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full">
      Rating 4.0+
    </button>
    <button className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full">
      Pure Veg
    </button>
    <button className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full">
      Offers
    </button>
    <button className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full">
      Rs. 300-Rs. 600
    </button>
    <button className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full">
      Less than Rs. 300
    </button>
  </div>
</div>

    
  )
}

export default Filter
