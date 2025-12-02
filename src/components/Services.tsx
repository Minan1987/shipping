import Breadcrumb from "./Breadcrumb";
import banner from "/images/band-1.jpg";

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
import { Link } from "react-router-dom";

const Services = () => {
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
    <div className=" mx-auto mt-[168px]">
      <img src={banner} className="w-full h-[135px]" />
      <div className="container mx-auto  px-4 lg:px-20 xl:px-40">
        <Breadcrumb />

        {/* ICONS */}
        <div className="container pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10 text-center ">
            {items.map((item, i) => (
              <Link
                key={i}
                to={`/services/${item.title.toLowerCase().replace(/ /g, "-")}`}
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
    </div>
  );
};

export default Services;
