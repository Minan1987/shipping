import { Link } from "react-router-dom";
import slider from "/images/HomepageVideo003.mp4";

const Slider = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      >
        <source src={slider} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="w-full text-center md:text-left mt-12 md:mt-0">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Leader In Power & <br /> Automatic{" "}
            <span className="text-yellow-400">Technologies</span>
          </h2>

          <p className="text-gray-200 mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            <br />
            sed diam nonumy eirmod tempor invidunt
            <br />
            ut labore et dolore magna.
          </p>

          <div className="flex justify-center md:justify-start mt-6 gap-4">
            <Link
              to="/"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-sm px-5 py-2 rounded"
            >
              LEARN MORE
            </Link>

            <Link
              to="/services"
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm px-5 py-2 rounded"
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
