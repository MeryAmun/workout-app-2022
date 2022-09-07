import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Home, Navbar, ExerciseDetails, Footer } from "./components/index";
const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};
export default App;
