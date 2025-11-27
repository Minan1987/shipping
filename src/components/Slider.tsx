import { Link } from "react-router-dom";
import slider from "/images/HomepageVideo003.mp4";

const Slider = () => {
  return (
    <div className="slider position-relative">
      <video
        autoPlay
        loop
        muted
        className="w-100"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "48px",
          left: 0,
          zIndex: -1,
        }}
      >
        <source src={slider} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container h-100 d-flex align-items-center">
        <div className="w-100 text-center text-md-start">
          <h2 className="slider-title text-light">
            Leader In Power& <br /> Automatic <span>Technologies</span>
          </h2>
          <p className="text-light py-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            <br />
            sed diam nonumy eirmod tempor invidunt
            <br />
            ut labore et dolore magna.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start">
            <Link
              to="/"
              className="btn btn-warning me-3"
              style={{ fontSize: "13px", fontWeight: "500" }}
            >
              LEARN MORE
            </Link>
            <Link
              to="services"
              className="btn btn-info text-light"
              style={{ fontSize: "13px", fontWeight: "500" }}
            >
              OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
