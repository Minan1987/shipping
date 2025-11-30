import { Link } from "react-router-dom";
import icon11 from "/images/services/icon11.png";
import icon12 from "/images/services/icon12.png";
import icon13 from "/images/services/icon13.png";
import icon14 from "/images/services/icon14.png";
import icon15 from "/images/services/icon15.png";

const FeaturesdServices = () => {
  const items = [
    { img: icon11, title: "Dangerous Goods" },
    { img: icon12, title: "Project Logistics" },
    { img: icon13, title: "Charter Services" },
    { img: icon14, title: "Out of Gauge" },
    { img: icon15, title: "Hand Carry" },
  ];

  return (
    <section className="py-16">
      {/* TOP TEXT SECTION */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="mx-auto text-3xl font-semibold border-b-4 border-yellow-400 w-80 pb-2">
            Our Specialist Services
          </h2>
        </div>

        {/* ICONS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10 text-center">
          {items.map((item, i) => (
            <Link
              key={i}
              to="/"
              className="bg-yellow-500 group rounded-[10px] p-3 shadow-[0_2px_6px_rgba(234,179,8,0.5)]  transition-shadow duration-300  ease-out hover:shadow-[0_0_1px_3px_#F0B100]"
            >
              <div className="text-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto transition-transform duration-300 ease-out group-hover:scale-[1.15] max-h-20"
                />

                <h6 className="font-semibold text-lg text-white mt-2">
                  {item.title}
                </h6>
              </div>
            </Link>
          ))}
        </div>

        {/* YELLOW CALL TO ACTION SECTION */}
        <div className="bg-yellow-500 mt-16 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full lg:w-4/5 mx-auto">
              <p className="text-center lg:text-left text-2xl font-light">
                Looking for an adequate solution for{" "}
                <span className="font-bold">your company</span>
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
      </div>
    </section>
  );
};

export default FeaturesdServices;
