import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="bg-dark text-light">
    <div className="container py-4">
      <h1 className="display-2">My Food Delivery Website</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/restaurants" className="nav-link">
              Restaurants
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
