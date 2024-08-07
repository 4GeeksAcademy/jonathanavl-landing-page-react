import React from "react";


//create your first component
export const NavBar = () => {
	return (
		<nav className="navbar bg-dark border-bottom border-body" style={{ width: '100%' }}>
      <div className="container-fluid ">
        <a className="navbar-brand text-light" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};