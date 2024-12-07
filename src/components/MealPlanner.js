// src/components/MealPlanner.js
import React from "react";

function MealPlanner() {
  // Example static meal plan
  const mealPlan = [
    { day: "Monday", recipe: "Chicken Soup" },
    { day: "Tuesday", recipe: "Vegetable Stir Fry" },
    // More days...
  ];

  return (
    <div>
      <h2>Meal Planner</h2>
      <ul>
        {mealPlan.map((meal, index) => (
          <li key={index}>
            {meal.day}: {meal.recipe}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealPlanner;
