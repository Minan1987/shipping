import { Link } from "react-router-dom";

const BlueContactSection = () => {
  return (
    <section className="blue-contact-section py-4">
      <div className="container">
        <div className="flex justify-center items-center w-full m-auto">
          <div className="text-center lg:text-start">
            <p className="text-2xl m-0">
              If You Need Any Industrial Solution... We Are Available For You
            </p>
          </div>
          <div className="text-center lg:text-center">
            <Link
              to="/contact-us"
              className="btn btn-warning text-light fw-bold"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueContactSection;
