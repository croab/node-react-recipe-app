import styles from "./../App.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./../public/images/cookbook-colorful-logo.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Cookbook logo" className={styles.logo}/>
      </div>
      <div className={styles.navigation}>
        <ul>
          <li><CustomLink to="/" className={styles.navbarItem}>Home</CustomLink></li>
          <li><CustomLink to="/recipes" className={styles.navbarItem}>Recipes</CustomLink></li>
          <li><CustomLink to="/upload" className={styles.navbarItem}>Upload</CustomLink></li>
          <li><CustomLink to="/cookbooks" className={styles.navbarItem}>Cookbooks</CustomLink></li>
        </ul>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}