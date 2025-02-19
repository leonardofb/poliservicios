import React from 'react';

const Features = () => {
    return (
        <section className="w3l-featureshny py-5" id="features">
            <div className="container py-md-4 py-2">
                <div className="row align-items-center">
                    <div className="col-lg-8 pe-lg-5 mb-lg-0 mb-5">
                        <div className="w3l-header-sec text-left mb-md-5 mb-4">
                            <h6 className="title-subhny mb-2"><span>Creative Strategy</span></h6>
                            <h5 className="">Company that believes in the power of <span className="span-bold">creative strategy</span></h5>
                            <p className="mt-3 pr-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                                Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit
                                amet. Vivamus a et ut justo, init in dolor.
                            </p>
                            <a href="services.html" className="btn btn-primary btn-style mt-lg-5 mt-4"> Read More <span className="fas fa-angle-double-right ms-2"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-lg-0 mb-md-5 mb-4">
                        <div className="whybox-wrap mb-4">
                            <div className="whybox-wrap-grid">
                                <div className="icon">
                                    <span className="fas fa-lightbulb"></span>
                                </div>
                                <div className="info">
                                    <h4><a href="#url">Collect Ideas</a></h4>
                                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum amet elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="whybox-wrap mb-4">
                            <div className="whybox-wrap-grid">
                                <div className="icon">
                                    <span className="fas fa-database"></span>
                                </div>
                                <div className="info">
                                    <h4><a href="#url">Data Analysis</a></h4>
                                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum amet elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="whybox-wrap">
                            <div className="whybox-wrap-grid">
                                <div className="icon">
                                    <span className="fas fa-chart-area"></span>
                                </div>
                                <div className="info">
                                    <h4><a href="#url">Finalize Product</a></h4>
                                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum amet elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;