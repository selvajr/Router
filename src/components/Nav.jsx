import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = ({ select = "all" }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <h4 className="navbar-toggler active bold1" href="#">{select.toUpperCase()}</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 toleft">
              <li className={select == "all" ? "selected" : ""}>
                <Link className="link" to={"/all"}>
                  All
                </Link>
              </li>
              <li
                className={select == "full-stack-development" ? "selected" : ""}
              >
                <Link className="link" to={"/full-stack-development"}>
                  Full Stack Development
                </Link>
              </li>
              <li className={select == "data-science" ? "selected" : ""}>
                <Link className="link" to={"/data-science"}>
                  Data Science
                </Link>
              </li>
              <li className={select == "cyber-security" ? "selected" : ""}>
                <Link className="link" to={"/cyber-security"}>
                  Cyber security
                </Link>
              </li>
              <li className={select == "career" ? "selected" : ""}>
                <Link className="link" to={"/career"}>
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
