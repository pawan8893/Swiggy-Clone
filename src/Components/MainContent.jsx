import React, { useEffect, useState } from "react";
import Card from "./Card";
import MyModal from "./MyModal";

const MainContent = ({ filter, handleOpen }) => {
  const [meals, setMeals] = useState([]); // Store meals to display
  const [error, setError] = useState(null); // Handle errors
  const [loading, setLoading] = useState(true); // Show loading state
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [selectedMeal, setSelectedMeal] = useState(null); // Selected card data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const itemsPerPage = 12; // Number of meals per page

  // Function to fetch meals based on the region
  const fetchMealsByArea = async (areaFilter) => {
    setLoading(true);
    setError(null); // Reset error state

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaFilter}`
      );
      const data = await response.json();
      setMeals(data.meals || []); // Save fetched meals
    } catch (error) {
      setError("Error fetching meals.");
    } finally {
      setLoading(false);
    }
  };

  // UseEffect to fetch meals when filter changes
  useEffect(() => {
    const defaultArea = "Indian"; // Default area to show meals
    fetchMealsByArea(filter || defaultArea); // Fetch meals based on filter or default to Indian
  }, [filter]);

  // Calculate the current meals to display
  const indexOfLastMeal = currentPage * itemsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - itemsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

  // Handle page changes
  const totalPages = Math.ceil(meals.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Handle opening the modal with selected card data
  const handleCardClick = async(cardkey) => {
    try {
      console.log("cardKey",cardkey)
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cardkey}`
      );
      const data = await response.json();
      console.log("data in card click",data)
      setSelectedMeal(data.meals[0] || []); // Save fetched meals
      console.log("selected meal",selectedMeal)
    } catch (error) {
      setError("Error fetching selected meals data.");
    } finally {
      setLoading(false);
    }
    // console.log("meal in card click",)
    // setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleModalClose = () => {
    setSelectedMeal(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {currentMeals.map((item, ind) => (
             <Card
             handleOpen={handleOpen}
             key={item.idMeal} // Set as React's internal key
             cardKey={item.idMeal} // Pass explicitly as a prop
             name={item.strMeal} // Display meal name
             image={item.strMealThumb} // Display meal image
             description={`Explore the taste of ${item.strMeal}`} // Example description
             onClick={() => handleCardClick(item.idMeal)} // Pass clicked meal data
           />
           
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#ff5200] text-white"
              }`}
            >
              Previous
            </button>
            <span className="font-bold text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#ff5200] text-white"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Render Modal */}
      {isModalOpen && (
        <MyModal
          handleClose={handleModalClose}
          meal={selectedMeal} // Pass selected meal data to modal
        />
      )}
    </div>
  );
};

export default MainContent;