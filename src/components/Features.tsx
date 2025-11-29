import { Link } from "react-router-dom";
import icon1 from "/images/icon1.png";
import icon2 from "/images/icon2.png";
import icon3 from "/images/icon3.png";

const Features = () => {
  return (
    <section className="py-16">
      {/* TOP TEXT SECTION */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mx-auto text-xl font-semibold border-b-4 border-yellow-400 w-52 pb-2">
            OUR CORE FEATURES
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold mt-4 leading-normal">
            A high level Quality Control in compliance with National and
            International regulations and standards
          </h3>

          <p className="text-gray-500 py-4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            aperiam laboriosam veritatis tenetur corporis, tempore, in quidem
            voluptatibus quaerat placeat aliquam ad error quod assumenda, earum
            ducimus provident! Corporis facilis totam.
          </p>
        </div>

        {/* ICONS */}
        <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
          <div className="text-center">
            <img src={icon3} alt="icon3" className="w-16 mx-auto" />
            <h6 className="font-bold text-lg pt-2">VISION</h6>
          </div>

          <div className="text-center">
            <img src={icon2} alt="icon2" className="w-16 mx-auto" />
            <h6 className="font-bold text-lg pt-2">VALUES</h6>
          </div>

          <div className="text-center">
            <img src={icon1} alt="icon1" className="w-16 mx-auto" />
            <h6 className="font-bold text-lg pt-2">MISSION</h6>
          </div>
        </div>
      </div>

      {/* YELLOW CALL TO ACTION SECTION */}
      <div className="bg-yellow-400 mt-16 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full lg:w-4/5 mx-auto">
            <p className="text-center lg:text-left text-2xl font-light">
              Looking for an adequate solution for{" "}
              <span className="font-bold">your company</span>
            </p>

            <Link
              to="/contact-us"
              className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
