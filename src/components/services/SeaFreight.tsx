import Breadcrumb from "../Breadcrumb";
import banner from "/images/services/image1.webp";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

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

import "swiper/css";
import "swiper/css/navigation";

const SeaFreight = () => {
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
    <div className=" mx-auto">
      <img src={banner} className="w-full h-full" />
      <div className="container mx-auto  px-4 lg:px-20 xl:px-40">
        <Breadcrumb />
        <h1 className="underline decoration-yellow-500 text-lg md:text-xl lg:text-3xl font-bold my-6">
          We offer a variety of flexible, cost effective sea freight services
          worldwide. We cover all major trade lanes for FCL, LCL and out of
          gauge consignments.
        </h1>
        <p className="text-md mb-8 leading-relaxed">
          More shipments move by sea freight than any other mode of transport.
          As an independent freight forwarder, we are able to negotiate directly
          with the world's major shipping lines to obtain preferential rates and
          special services for your sea freight shipments as required.
          <br />
        </p>
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="mx-auto text-3xl font-semibold border-b-4 border-yellow-400 w-80 pb-2 mb-6">
            Shipping Solution For You
          </h2>
        </div>
        <p className="text-md mb-3 leading-relaxed">
          Whether it is regular lane cargo or a one-off shipment, we will find
          the most suitable shipping solution for you.
        </p>
        <p className="text-md mb-3 leading-relaxed">
          With handling depots throughout the UK we are able to offer weekly
          departures to most destinations throughout the world and using the
          latest technology and online systems we will monitor your sea freight
          shipments as they move from port to port.
        </p>

        <p className="text-md mb-3 leading-relaxed">
          We are in constant communication with the shipping lines and delivery
          destinations to ensure your goods are cleared as efficiently as
          possible with a minimum amount of time spent on the quay.
        </p>

        <div className="text-center max-w-6xl mx-auto">
          <h2 className="mx-auto text-3xl font-semibold border-b-4 border-yellow-400 w-80 pb-2 mb-6">
            Shipping Solution For You
          </h2>
        </div>

        <p className="text-md mb-3 leading-relaxed">
          Our experienced sea freight team are able to offer a tailored solution
          to meet your import or export requirements. Our sea freight services
          include:
        </p>
        <ul>
          <li>- LCL (Groupage Cargo) </li>
          <li>- FCL (Full Container Loads)</li>
          <li>- Breakbulk / Conventional Loads</li>
          <li>- Reefers / Temperature Controlled Containers </li>
          <li>
            -{" "}
            <span className="text-yellow-500 font-semibold">
              Full Charter Vessels
            </span>{" "}
          </li>
          <li>
            -{" "}
            <span className="text-yellow-500 font-semibold">
              Hazardous Cargo
            </span>{" "}
          </li>
          <li>- Ro-Ro</li>
          <li>
            -{" "}
            <span className="text-yellow-500 font-semibold">
              Out of Gauge Loads
            </span>{" "}
          </li>
          <li>
            -{" "}
            <span className="text-yellow-500 font-semibold">
              Project Cargo Loads
            </span>{" "}
          </li>
        </ul>

        <p className="text-md mb-14 leading-relaxed">
          Please contact us if you have any sea freight queries.
        </p>
        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mt-10"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <Link
                to="/"
                key={i}
                className="bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100"
              >
                <img
                  src={item.img}
                  className="w-full h-60 object-cover rounded-t-lg"
                  alt={item.title}
                />

                <div className="p-5">
                  <h5 className="font-bold text-xl pt-2 truncate">
                    {item.title}
                  </h5>

                  <hr className="border-dashed my-3" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SeaFreight;
