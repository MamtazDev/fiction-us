import React from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu className="text-white" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Characters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Best & Recent
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <img
                className="rounded-circle"
                width={50}
                height={50}
                src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
