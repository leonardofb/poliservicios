// src/components/Grids3.jsx
import React from 'react';

const Grids3 = () => {
    const items = [
        { img: 'assets/images/g1.jpg', category: 'Action', title: 'We have got minds in action' },
        { img: 'assets/images/g2.jpg', category: 'Brand', title: 'Plugging ideas to your brand' },
        { img: 'assets/images/g3.jpg', category: 'Success', title: 'Ideas in charge of your Success' }
    ];

    return (
        <div className="w3l-3-grids" id="grids-3">
            <div className="container-fluid mx-lg-0">
                <div className="row pt-sm-0 pt-5">
                    {items.map((item, index) => (
                        <div key={index} className="col-lg-4 col-sm-6 mt-sm-0 px-md-0 w3-gridhny-1 position-relative">
                            <div className="grids3-info">
                                <a href="#" className="d-block zoom">
                                    <img src={item.img} alt="" className="img-fluid news-image" />
                                </a>
                                <div className="w3-grids3-info">
                                    <h6><a href="#category" className="category d-block">{item.category}</a></h6>
                                    <h4><a href="#">{item.title}</a></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Grids3;