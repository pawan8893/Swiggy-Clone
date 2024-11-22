import React, { useEffect, useState } from "react";
import Card from "./Card";

const MainContent = ({ filter }) => {
  const [meals, setMeals] = useState([]); // Store meals to display
  const [error, setError] = useState(null); // Handle errors
  const [loading, setLoading] = useState(true); // Show loading state

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

  return (
    <div>
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          {meals.map((item, ind) => (
            <Card
              key={ind}
              name={item.strMeal} // Display meal name
              image={item.strMealThumb} // Display meal image
              description={`Explore the taste of ${item.strMeal}`} // Example description
            />
          ))}
        </div>
      )}
    </div>


  );
};

export default MainContent;
