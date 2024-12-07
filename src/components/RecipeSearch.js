// src/components/RecipeSearch.js
import React, { useState } from "react";

function RecipeSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="recipe-search">
      <input
        type="text"
        placeholder="Search Recipes..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default RecipeSearch;
