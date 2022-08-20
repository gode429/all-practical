import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/allQuotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="newQuote">
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
