// src/components/RecipeSearch.js
import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

function RecipeSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box>
      <TextField
        label="Search Recipes"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleChange}
      />
    </Box>
  );
}

export default RecipeSearch;
