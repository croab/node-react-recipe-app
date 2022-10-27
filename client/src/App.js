import React from "react";
import { Link } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <nav className={styles.navbar}>
        <div>
          {/* Logo to go here */}
        </div>
        <div>
          <Link to="/" className={styles.navbarItem}>Home</Link> |{" "}
          <Link to="/recipes" className={styles.navbarItem}>Recipes</Link> |{" "}
          <Link to="/cookbooks" className={styles.navbarItem}>Cookbooks</Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
