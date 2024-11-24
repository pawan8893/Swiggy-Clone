import React, { useState, useEffect } from "react";
import { LuSettings2 } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";

/**
 * Filter Component
 * Provides filter and sorting functionality for restaurants.
 * 
 * Props:
 * - onFilterChange: Function to notify parent component of the selected filter.
 * - onSortChange: Function to notify parent component of the selected sort order.
 */
const Filter = ({ onFilterChange, onSortChange }) => {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false); 
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null); 
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);

  // Predefined Utility buttons
  const btns = [
    { value: "Fast Delivery" },
    { value: "New on Swiggy" },
    { value: "Rating 4.0+" },
    { value: "Pure Veg" },
    { value: "Offers" },
    { value: "Rs. 300 - Rs. 600" },
    { value: "Less than Rs. 300" },
  ];

  // Fetch areas for the "Filter by Area" functionality
  const fetchAreas = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const data = await response.json();
      setAreas(data.meals || []); 
    } catch (error) {
      console.error("Error fetching areas:", error);
      setAreas([]); 
    }
  };

  // Fetch areas when the component is mounted
  useEffect(() => {
    fetchAreas();
  }, []);

  // Apply the selected area filter
  const applyAreaFilter = () => {
    onFilterChange(selectedArea); 
    setShowFilterDropdown(false); 
  };

  return (
    <div className="mx-4 sm:mx-6 md:mx-20">
      {/* Header Section */}
      <h1 className="font-bold text-xl sm:text-2xl mt-6 mb-3">
        Restaurants with online food delivery in India
      </h1>
      <div className="flex flex-wrap gap-2 relative">
        {/* Filter Button */}
        <button
          className="flex gap-2 text-sm text-gray-600 items-center w-auto border py-1 px-3 rounded-full"
          onClick={() => setShowFilterDropdown(!showFilterDropdown)}
        >
          Filter <LuSettings2 />
        </button>

        {/* Filter Dropdown */}
        {showFilterDropdown && (
          <div className="absolute top-12 left-0 w-64 bg-white shadow-md rounded-lg p-4 z-10">
            <h3 className="font-semibold text-gray-800 mb-2">Filter by Area</h3>
            <div className="space-y-2">
              {areas.map((area, index) => (
                <label key={index} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="area"
                    value={area.strArea}
                    onChange={() => setSelectedArea(area.strArea)}
                    className="w-5 h-5 text-orange-500 accent-[#ff5200]"
                  />
                  {area.strArea}
                </label>
              ))}
            </div>
            <button
              className="mt-4 w-full bg-[#ff5200] text-white py-1 px-3 rounded-lg"
              onClick={applyAreaFilter}
            >
              Apply
            </button>
          </div>
        )}

        {/* Sort By Button */}
        <button
          className="flex gap-2 text-sm text-gray-600 font-medium items-center w-auto border py-1 px-3 rounded-full"
          onClick={() => setShowSortByDropdown(!showSortByDropdown)}
        >
          Sort By <MdKeyboardArrowDown />
        </button>

        {/* Sort By Dropdown */}
        {showSortByDropdown && (
          <div className="absolute top-12 left-0 w-64 bg-white shadow-md rounded-lg p-4 z-10">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="ascending"
                  value="asc"
                  className="w-5 h-5 text-orange-500 accent-[#ff5200]"
                />
                Sort Alphabetically <BsArrowDownUp />
              </label>
            </div>
            <button
              className="mt-4 w-full bg-[#ff5200] text-white py-1 px-3 rounded-lg"
              onClick={() => {
                const isChecked = document.querySelector(
                  'input[name="ascending"]:checked'
                );
                if (isChecked) {
                  onSortChange();
                }
                setShowSortByDropdown(false);
              }}
            >
              Apply
            </button>
          </div>
        )}

        {/* Utility Buttons */}
        {btns.map((btn, index) => (
          <button
            key={index}
            className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full"
          >
            {btn.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
