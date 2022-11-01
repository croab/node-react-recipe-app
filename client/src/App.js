import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
// import FilesUploadComponent from "./components/files-upload-component";

// Shared
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";

// Routes
import PagesRouter from './routes/pagesRouter';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.bodyContainer}>
        <div className={styles.bodyWrapper}>
          <PagesRouter />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;