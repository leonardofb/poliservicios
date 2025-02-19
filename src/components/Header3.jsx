import React from 'react';

const Header = () => {
    return (
        <header id="site-header" className="fixed-top">
            <div className="container">
                <h1>
                    <a className="navbar-brand pe-xl-5 pe-lg-4" href="index.html">
                        Poli<span className="sublog">Servicios</span>
                    </a>
                </h1>
                {/* Aquí puedes agregar otros elementos del encabezado si es necesario */}
            </div>
        </header>
    );
};

export default Header;