import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
      <h1>
        <a className="navbar-brand" href="/">
          Poli<span className="sublog">Servicios</span>
        </a>
      </h1>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll">
        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link active" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
