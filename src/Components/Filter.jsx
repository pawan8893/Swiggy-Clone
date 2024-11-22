import React, { useState, useEffect } from "react";
import { LuSettings2 } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

const Filter = ({ onFilterChange, onSortChange }) => {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);

  // Fetch areas for "Filter by Area"
  const fetchAreas = async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
      const data = await response.json();
      setAreas(data.meals || []);
    } catch (error) {
      console.error("Error fetching areas:", error);
      setAreas([]);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  const applyAreaFilter = () => {
    onFilterChange(selectedArea); // Notify parent about the selected area
    setShowFilterDropdown(false); // Close dropdown
  };

  return (
    <div className="mx-4 sm:mx-6 md:mx-20">
      <h1 className="font-bold text-xl sm:text-2xl mt-6 mb-3">
        Restaurants with online food delivery in Pune
      </h1>
      <div className="flex flex-wrap gap-2 relative">
        {/* Filter Button */}
        <button
          className="flex gap-2 text-sm text-gray-600 items-center w-auto border py-1 px-3 rounded-full"
          onClick={() => setShowFilterDropdown(!showFilterDropdown)}
        >
          Filter <LuSettings2 />
        </button>

        {/* Dropdown for Filter */}
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
                  />
                  {area.strArea}
                </label>
              ))}
            </div>
            <button
              className="mt-4 w-full bg-blue-500 text-white py-1 px-3 rounded-lg"
              onClick={applyAreaFilter}
            >
              Apply
            </button>
          </div>
        )}

        {/* Sort By Button */}
        <button
          className="flex gap-2 text-sm text-gray-600 font-medium items-center w-auto border py-1 px-3 rounded-full"
          onClick={onSortChange} // Toggle sorting
        >
          Sort By <MdKeyboardArrowDown />
        </button>

        {/* Other Filter Buttons */}
        <button
          className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full"
          onClick={() => onFilterChange("fastDelivery")}
        >
          Fast Delivery
        </button>
        <button
          className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full"
          onClick={() => onFilterChange("newOnSwiggy")}
        >
          New on Swiggy
        </button>
        <button
          className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full"
          onClick={() => onFilterChange("rating")}
        >
          Rating 4.0+
        </button>
        <button
          className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full"
          onClick={() => onFilterChange("pureVeg")}
        >
          Pure Veg
        </button>
        <button
          className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full"
          onClick={() => onFilterChange("offers")}
        >
          Offers
        </button>
        <button
          className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full"
          onClick={() => onFilterChange("priceHigh")}
        >
          Rs. 300 - Rs. 600
        </button>
        <button
          className="text-sm text-gray-600 font-medium w-auto border py-1 px-3 rounded-full"
          onClick={() => onFilterChange("priceLow")}
        >
          Less than Rs. 300
        </button>
      </div>
    </div>
  );
};

export default Filter;
