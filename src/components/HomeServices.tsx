import { Link } from "react-router-dom";
import serviceImg1 from "/images/sample1.webp";
import serviceImg2 from "/images/sample2.webp";
import serviceImg3 from "/images/sample3.webp";

const HomeServices = () => {
  return (
    <section className="services py-5">
      <div className="container">
        <div className="text-center w-50 m-auto">
          <h2 className="main-title">WHAT WE DO</h2>
          <h3 className="fs-1 fw-bold m-auto">We Offer Different Services</h3>
          <p className="text-secondary py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis fuga doloribus, molestias quod facere ex illo delectus
            dolores beatae enim nulla totam rerum qui rem eveniet voluptate
            cupiditate!
          </p>
        </div>
        <div className="row pt-4">
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src={serviceImg1}
                className="card-img-top rounded-3"
                alt="service1"
              />
              <div className="card-body  shadow-sm">
                <h5 className="card-title fw-bold pt-3">
                  Agricaltural Processing
                </h5>
                <hr className="dashed-line" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
                <Link to="/services" className="btn read-more">
                  READ MORE
                  <hr />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src={serviceImg2}
                className="card-img-top rounded-3"
                alt="service2"
              />
              <div className="card-body  shadow-sm">
                <h5 className="card-title fw-bold pt-3">Alternate Energy</h5>
                <hr className="dashed-line" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
                <Link to="/services" className="btn read-more">
                  READ MORE
                  <hr />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src={serviceImg3}
                className="card-img-top rounded-3"
                alt="service3"
              />
              <div className="card-body  shadow-sm">
                <h5 className="card-title fw-bold pt-3">Chemical Research</h5>
                <hr className="dashed-line" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
                <Link to="/services" className="btn read-more">
                  READ MORE
                  <hr />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
