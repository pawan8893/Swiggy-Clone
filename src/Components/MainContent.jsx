import React, { useEffect, useState } from "react";
import Card from "./Card";

const MainContent = ({ filter, handleOpen }) => {
  const [meals, setMeals] = useState([]); // Store meals to display
  const [error, setError] = useState(null); // Handle errors
  const [loading, setLoading] = useState(true); // Show loading state
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
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

  return (
    <div>
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {currentMeals.map((item, ind) => (
              <Card
                handleOpen={handleOpen}
                key={ind}
                name={item.strMeal} // Display meal name
                image={item.strMealThumb} // Display meal image
                description={`Explore the taste of ${item.strMeal}`} // Example description
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
                  : "bg-orange-500 text-white"
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
                  : "bg-orange-500 text-white"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
};

export default MainContent;

