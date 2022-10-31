import React from "react";
import { Route, Routes } from "react-router-dom"

import styles from "./App.module.css";
import FilesUploadComponent from "./components/files-upload-component";

// Shared
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";

// Roots of pages
import Cookbooks from "./routes/cookbooks";
import Home from "./routes/home";
import Recipes from "./routes/recipes";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.bodyContainer}>
        <div className={styles.bodyWrapper}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="cookbooks" element={<Cookbooks />} />
            <Route path="upload" element={<FilesUploadComponent />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
