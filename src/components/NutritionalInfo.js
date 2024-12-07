// src/components/NutritionalInfo.js
import React from "react";

function NutritionalInfo({ ingredients }) {
  // Example static data, could be dynamic based on API call
  const nutritionalData = {
    calories: 200,
    protein: 10,
    carbs: 30,
    fat: 5,
  };

  return (
    <div>
      <h3>Nutritional Information</h3>
      <p>Calories: {nutritionalData.calories}</p>
      <p>Protein: {nutritionalData.protein}g</p>
      <p>Carbs: {nutritionalData.carbs}g</p>
      <p>Fat: {nutritionalData.fat}g</p>
    </div>
  );
}

export default NutritionalInfo;
