import React from "react";
import { Link } from "react-router-dom";
import icon1 from "/images/icon1.png";
import icon2 from "/images/icon2.png";
import icon3 from "/images/icon3.png";

const Features = () => {
  return (
    <section className="features py-5">
      <div className="container">
        <div className="text-center w-75 m-auto">
          <h2 className="main-title" style={{ width: "200px" }}>
            OUR CORE FEATURES
          </h2>
          <h3 className="fs-1 fw-bold m-auto">
            A high level Quality Control in compliance with National and
            International regulations and standards
          </h3>
          <p className="m-auto text-secondary py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            aperiam laboriosam veritatis tenetur corporis, tempore, in quidem
            voluptatibus quaerat placeat aliquam ad error quod assumenda, earum
            ducimus provident! Corporis facilis totam.
          </p>
        </div>
        <div className="feature-icons row justify-content-center aling-items-center mt-5">
          <div className="col-2 col-lg-1 text-center">
            <img src={icon3} alt="icon3" className="w-50" />
            <h6 className="fw-bold fs-5 pt-2">VISION</h6>
          </div>
          <div className="col-2 col-lg-1 text-center">
            <img src={icon2} alt="icon2" className="w-50" />
            <h6 className="fw-bold fs-5 pt-2">VALUES</h6>
          </div>
          <div className="col-2 col-lg-1 text-center">
            <img src={icon1} alt="icon1" className="w-50" />
            <h6 className="fw-bold fs-5 pt-2">MISSION</h6>
          </div>
        </div>
      </div>
      <div className="yellow-section bg-warning py-5 my-5">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center w-100 w-lg-75 m-auto">
            <div className="col-12 col-lg-10 text-center text-lg-start">
              <p className="fs-2">
                Looking for an adequate solution for{" "}
                <span className="fw-bold fs-2">your company</span>
              </p>
            </div>
            <div className="col-12 col-lg-2 text-center text-lg-end">
              <Link to="/contact-us" className="btn btn-dark-blue">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
