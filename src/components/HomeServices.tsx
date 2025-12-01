import { Link } from "react-router-dom";
import icon1 from "/images/services/icon1.png";
import icon2 from "/images/services/icon2.png";
import icon3 from "/images/services/icon3.png";
import icon4 from "/images/services/icon4.png";
import icon5 from "/images/services/icon5.png";
import icon6 from "/images/services/icon6.png";
import icon7 from "/images/services/icon7.png";
import icon8 from "/images/services/icon8.png";
import icon9 from "/images/services/icon9.png";
import icon10 from "/images/services/icon10.png";

const HomeServices = () => {
  const items = [
    { img: icon1, title: "Sea Freight" },
    { img: icon2, title: "Air Freight" },
    { img: icon3, title: "Road Freight" },
    { img: icon4, title: "Courier and Express" },
    { img: icon5, title: "Import Services" },
    { img: icon6, title: "Customs Clearance" },
    { img: icon7, title: "Export Services" },
    { img: icon8, title: "Documentation" },
    { img: icon9, title: "Warehousing" },
    { img: icon10, title: "Freight Packaging" },
  ];

  return (
    <section className="py-16">
      {/* TOP TEXT SECTION */}
      <div className="container mx-auto px-4 lg:px-20 xl:px-40">
        <div className="text-center max-w-3xl mx-auto ">
          <h2 className="mx-auto text-3xl font-semibold border-b-4 border-yellow-500 w-64 pb-2">
            Our Core Services
          </h2>

          <h3 className="text-sm md:text-md  mt-4 text-gray-500 leading-normal">
            Experience exceptional Custom Clearing , warehousing and logistics
            services driven by an operationally excellent DNA.
          </h3>
        </div>

        {/* ICONS */}
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10 text-center ">
            {items.map((item, i) => (
              <Link
                key={i}
                to="/"
                className="group rounded-[10px] p-3 shadow-[0_2px_5px_0_rgba(142,154,173,.6)] transition-shadow duration-300  ease-out hover:shadow-[0_0_1px_3px_#F0B100]"
              >
                <div className="text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto transition-transform duration-300 ease-out group-hover:scale-[1.15] max-h-20"
                  />

                  <h6 className="font-semibold text-lg text-yellow-500 mt-2">
                    {item.title}
                  </h6>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
