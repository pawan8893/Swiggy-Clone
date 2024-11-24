import React, { useEffect } from "react";

/**
 * MyModal Component
 * Displays a modal with meal details such as title, image, category, and origin.
 * 
 * Props:
 * - handleClose: Function to close the modal.
 * - meal: Object containing meal details like title, image, category, and area.
 */
const MyModal = ({ handleClose, meal }) => {
  // Effect to disable background scroll when the modal is open
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black opacity-30 backdrop-blur-sm flex justify-center items-center"></div>

      {/* Modal Box */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white text-black border rounded-xl px-5 sm:px-10 py-5 shadow-lg flex flex-col gap-5 mx-auto">
          {/* Meal Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black text-center">
            {meal?.strMeal || "No Title"}
          </h2>

          {/* Meal Image */}
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="w-[200px] sm:w-[250px] md:w-[300px] mx-auto rounded-lg mb-3"
          />

          {/* Meal Category and Area */}
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 text-center">
            <span className="block sm:inline">
              <strong>Category:</strong> {meal?.strCategory || "N/A"}
            </span>{" "}
            |{" "}
            <span className="block sm:inline">
              <strong>Origin:</strong> {meal?.strArea || "Unknown"}
            </span>
          </p>

          {/* Exit Button */}
          <button
            onClick={handleClose}
            className="mt-4 text-sm sm:text-base md:text-lg w-full px-3 py-2 sm:px-5 sm:py-3 bg-[#ff5200] text-center text-white font-medium rounded-md transition duration-200 hover:bg-[#e04a00]"
          >
            Exit
          </button>
        </div>
      </div>
    </>
  );
};

export default MyModal;
