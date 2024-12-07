// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import MealPlannerPage from "./pages/MealPlannerPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Management Platform</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/meal-planner" element={<MealPlannerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
