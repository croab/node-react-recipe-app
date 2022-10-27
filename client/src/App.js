import React from "react";
import { Route, Routes } from "react-router-dom"

import styles from "./App.module.css";
import FilesUploadComponent from "./components/files-upload-component";
import Navbar from "./components/navbar";
import Cookbooks from "./routes/cookbooks";
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
          <Route path="cookbooks" element={<Cookbooks />} />
          <Route path="upload" element={<FilesUploadComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
