import navbarStyles from "./../assets/styles/navbar.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./../assets/images/cookbook-colorful-logo.png";

export default function Navbar() {
  return (
    <nav className={navbarStyles.navbarCustom}>
      <div className={navbarStyles.logoContainer}>
        <img src={logo} alt="Cookbook logo" className={navbarStyles.logo}/>
      </div>
      <div className={navbarStyles.navigation}>
        <ul>
          <li><CustomLink to="/" className={navbarStyles.navbarItem}>Home</CustomLink></li>
          <li><CustomLink to="/recipes" className={navbarStyles.navbarItem}>Recipes</CustomLink></li>
          <li><CustomLink to="/upload" className={navbarStyles.navbarItem}>Upload</CustomLink></li>
          <li><CustomLink to="/cookbooks" className={navbarStyles.navbarItem}>Cookbooks</CustomLink></li>
          <li><CustomLink to="/users/signup" className={navbarStyles.navbarItem}>Signup</CustomLink></li>
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