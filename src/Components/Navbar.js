import React from "react";
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      {/* <Link className="navbar-brand" to="/">
        {props.title}
      </Link> */}
      {/* for git */}
      <a className="navbar-brand" to="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <Link className="nav-link" to="/" >
              Home <span className="sr-only">(current)</span>
            </Link> */}
            <a className="nav-link" href="#" >
              Home <span className="sr-only">(current)</span>
            </a>
            
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">
              about
            </Link> */}
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
        <div
          className={`form-check form-switch text-${
            props.mode ==="light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Checked switch checkbox input
          </label>
        </div>
      </div>
    </nav>
  );
}
