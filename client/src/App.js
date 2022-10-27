import React from "react";
import { Route, Routes } from "react-router-dom"

import styles from "./App.module.css";
import Navbar from "./components/navbar";
import Home from "./routes/home";
import Recipes from "./routes/recipes";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          {/* <Route path="cookbooks" element={<Cookbooks />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
