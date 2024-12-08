// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import MealPlannerPage from "./pages/MealPlannerPage";
import './index.css';

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "20px" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Recipe Management Platform
          </Typography>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/meal-planner" element={<MealPlannerPage />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
