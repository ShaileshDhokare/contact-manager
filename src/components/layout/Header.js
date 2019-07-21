import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          {props.heading}
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
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
					<i className="fa fa-home mr-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
					<Link className="nav-link" to="/contact/add">
						<i className="fa fa-plus mr-2"></i>
						Add Contact
					</Link>
            </li>
            <li className="nav-item">
					<Link className="nav-link" to="/about">
						<i className="fa fa-question-circle-o mr-2"></i>
						About
					</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired
};
Header.defaultProps = {
  heading: "My App"
};

export default Header;
