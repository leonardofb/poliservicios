import React from 'react';

const MainSlider = () => {
    return (
        <section className="w3l-main-slider banner-slider" id="home">
            <div className="owl-one owl-carousel owl-theme">
                <div className="item">
                    <div className="slider-info banner-view banner-top1">
                        <div className="container">
                            <div className="banner-info">
                                <h3>Brindamos soluciones<span> en tecnología, seguridad y mantenimiento</span></h3>
                                <div className="banner-info-top">
                                    <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.</p>
                                    <a href="about.html" className="btn btn-style btn-outline-light mt-sm-5 mt-4">Read More <span className="fas fa-angle-double-right ms-2"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSlider;