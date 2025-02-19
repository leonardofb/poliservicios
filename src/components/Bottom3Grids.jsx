import React from "react";
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";

const Bottom3Grids = () => {
  const grids = [
    { img: g1, category: "Action", title: "We have got minds in", highlight: "action" },
    { img: g2, category: "Brand", title: "Plugging ideas to your", highlight: "brand" },
    { img: g3, category: "Success", title: "Ideas in charge of your", highlight: "Success" },
  ];

  return (
    <div className="w3l-3-grids" id="grids-3">
      <div className="container-fluid mx-lg-0">
        <div className="row pt-sm-0 pt-5">
          {grids.map((grid, index) => (
            <div key={index} className="col-lg-4 col-sm-6 mt-sm-0 px-md-0 w3-gridhny-1 position-relative">
              <div className="grids3-info">
                <a href="#blog" className="d-block zoom">
                  <img src={grid.img} alt="" className="img-fluid news-image" />
                </a>
                <div className="w3-grids3-info">
                  <h6><a href="#category" className="category d-block">{grid.category}</a></h6>
                  <h4><a href="#">{grid.title} <span>{grid.highlight}</span></a></h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bottom3Grids;
