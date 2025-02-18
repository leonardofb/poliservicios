import React from 'react';

const Header = () => {
    return (
        <header id="site-header" className="fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
                    <h1>
                        <a className="navbar-brand pe-xl-5 pe-lg-4" href="index.html">
                            Poli<span className="sublog">Servicios</span>
                        </a>
                    </h1>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="services.html">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav search-right mt-lg-0 mt-2">
                            <li className="nav-item mr-2" title="Search">
                                <a href="#search" className="search-search">
                                    <span className="fas fa-search" aria-hidden="true"></span>
                                </a>
                            </li>
                            <li className="nav-item mx-lg-4">
                                <a href="#" className="phone-btn btn-white d-none d-lg-block btn-style ms-2">
                                    <span className="fas fa-user me-2" aria-hidden="true"></span> User Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;