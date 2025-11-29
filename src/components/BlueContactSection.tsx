import { Link } from "react-router-dom";

const BlueContactSection = () => {
  return (
    <section className="py-4 bg-blue-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 lg:gap-0">
          <div className="text-center lg:text-left">
            <p className="text-2xl text-white m-0">
              If You Need Any Industrial Solution... We Are Available For You
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/contact-us"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-md transition-all"
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
