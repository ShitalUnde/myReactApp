import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function Navbar(props) {
  console.log(props);

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "orange" : "white",
    };
  };

  const auth = useAuth();

  return (
    <>
      <nav
        className={`navbar bg-${props.mode} navbar-expand-lg`}
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            TextUtils
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link`}
                  style={navLinkStyles}
                  aria-current="page"
                  to={"/"}
                >
                  {"Home"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link`}
                  style={navLinkStyles}
                  aria-current="page"
                  to={"/about"}
                >
                  {"About"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link`}
                  style={navLinkStyles}
                  aria-current="page"
                  to={"/contact-us"}
                >
                  {"Contact Us"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link`}
                  style={navLinkStyles}
                  aria-current="page"
                  to={"/product"}
                >
                  {"Product"}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={`nav-link`}
                  style={navLinkStyles}
                  aria-current="page"
                  to={"/profile"}
                >
                  {"Profile"}
                </NavLink>
              </li>

              {!auth.user && (
                <li className="nav-item">
                  <NavLink
                    className={`nav-link`}
                    style={navLinkStyles}
                    aria-current="page"
                    to={"/login"}
                  >
                    {"Login"}
                  </NavLink>
                </li>
              )}
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.updateMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark" ? "Disable" : "Enable"} Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      // isActive: PropTypes.bool.isRequired,
    })
  ).isRequired,

  mainData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,

  // mainData: PropTypes.object.isRequired,
};
