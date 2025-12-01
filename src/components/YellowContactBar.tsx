import { Link } from "react-router-dom";

const YellowContactBar = () => {
  return (
    <div className="bg-yellow-500 mt-16 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full lg:w-4/5 mx-auto">
          <p className="text-center lg:text-left text-2xl font-light">
            Looking for an logistic solution for{" "}
            <span className="font-bold">shipping your shipment</span>
          </p>

          <Link
            to="/contact-us"
            className="bg-blue-950 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-900 transition"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YellowContactBar;
