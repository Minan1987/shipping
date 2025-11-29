import { Link } from "react-router-dom";
import slider from "/images/HomepageVideo003.mp4";

const Slider = () => {
  return (
    <div className="relative h-1/2 w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={slider} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="w-full h-full flex flex-col justify-end items-center text-center space-y-8 mb-8">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Shipping for Businesses
          </h2>

          {/* <p className="text-gray-200 mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            <br />
            sed diam nonumy eirmod tempor invidunt
            <br />
            ut labore et dolore magna.
          </p> */}

          <div className="flex justify-center items-center space-x-4">
            <Link
              to="/"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-sm px-5 py-2 rounded"
            >
              LEARN MORE
            </Link>

            <Link
              to="/services"
              className="bg-blue-950 hover:bg-blue-900 text-white font-medium text-sm px-5 py-2 rounded"
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
