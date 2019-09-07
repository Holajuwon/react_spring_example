import React from "react";
import { NavLink } from "react-router-dom";
import headerStyles from "../styles/header.module.css";
import { Spring } from "react-spring/renderprops";

const Header = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -100 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className={headerStyles.headerContainer}>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Header;
