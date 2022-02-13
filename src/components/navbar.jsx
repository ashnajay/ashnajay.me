import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/interests">
                  Interests
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;