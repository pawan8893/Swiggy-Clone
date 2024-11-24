import React, { useEffect, useState } from "react";
import Card from "./Card";
import MyModal from "./MyModal";

/**
 * MainContent Component
 * Displays a grid of meal cards, handles filtering, sorting, pagination, 
 * and shows modal for detailed meal information.
 * 
 * Props:
 * - filter: Selected filter area (e.g., "Indian").
 * - handleOpen: Function to handle additional actions on modal open.
 * - sortTrigger: Boolean to toggle between ascending and descending sorting.
 */


const MainContent = ({ filter, handleOpen, sortTrigger }) => {
  const [meals, setMeals] = useState([]); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 12; 

  // Function to fetch meals based on the region
  const fetchMealsByArea = async (areaFilter) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaFilter}`
      );
      const data = await response.json();
      setMeals(data.meals || []); 
    } catch (error) {
      setError("Error fetching meals.");
    } finally {
      setLoading(false);
    }
  };

  // UseEffect to fetch meals when filter changes
  useEffect(() => {
    const defaultArea = "Indian"; 
    fetchMealsByArea(filter || defaultArea); 
  }, [filter]);

  // Sort meals based on the sortTrigger state
  useEffect(() => {
    if (sortTrigger) {
      setMeals((prevMeals) =>
        prevMeals.slice().sort((a, b) => b.strMeal.localeCompare(a.strMeal)) // Descending
      );
    } else {
      setMeals((prevMeals) =>
        prevMeals.slice().sort((a, b) => a.strMeal.localeCompare(b.strMeal)) // Ascending
      );
    }
  }, [sortTrigger]);

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
  const handleCardClick = async (cardkey) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cardkey}`
      );
      const data = await response.json();
      setSelectedMeal(data.meals[0] || []); 
    } catch (error) {
      setError("Error fetching selected meals data.");
    } finally {
      setLoading(false);
    }
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
                key={item.idMeal}
                cardKey={item.idMeal}
                name={item.strMeal}
                image={item.strMealThumb}
                description={`Explore the taste of ${item.strMeal}`}
                onClick={() => handleCardClick(item.idMeal)}
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
        <MyModal handleClose={handleModalClose} meal={selectedMeal} />
      )}
    </div>
  );
};

export default MainContent;
