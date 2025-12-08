import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import serviceImg1 from "/images/sample1.webp";
import serviceImg2 from "/images/sample2.webp";
import serviceImg3 from "/images/sample3.webp";
import serviceImg4 from "/images/sample4.webp";
import serviceImg5 from "/images/sample5.webp";

const HomeIndustries = () => {
  const items = [
    {
      img: serviceImg1,
      title: "Technology",
      desc: "We understand the unique logistical challenges faced by companies in the technology sector, where precision, speed, and reliability are paramount. As a leading freight forwarding business, we offer tailored solutions to facilitate the seamless movement of your technology products worldwide, whether by air, sea, or road.",
    },
    {
      img: serviceImg2,
      title: "Manufacturing",
      desc: "MD Global Freight manage the supply chain movements of many large international manufacturing companies. Our team appreciate the complex issues and unique logistical challenges facing this sector.",
    },
    {
      img: serviceImg3,
      title: "Chemical",
      desc: "The chemical goods industry has experienced significant changes over recent years with a much larger emphasis being placed on logistics compliance and regulation. MD provide businesses with specialist chemical logistics advice and guidance.",
    },
    {
      img: serviceImg4,
      title: "Energy",
      desc: "We have been providing logistics services to the oil and gas industry for many years. Our specialist team have worked on many projects across the world and understand the demands of this sector more than most.",
    },
    {
      img: serviceImg5,
      title: "Exhibitions & Events",
      desc: "When fast reactions and quick solutions are required, you can count on MD Global Freight to provide a dedicated team and exceptional service to help make your event a resounding success.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-yellow-500 text-lg font-semibold tracking-wide">
            WHAT WE DO
          </h2>

          <h3 className="text-3xl font-bold mt-2">
            We Offer Different Services
          </h3>

          <p className="text-gray-600 mt-4">
            Experience exceptional Custom Clearing , warehousing and logistics
            services driven by an operationally excellent DNA.
          </p>
        </div>

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
              <div
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

                  <p className="text-gray-600 line-clamp-3">{item.desc}</p>

                  <Link
                    to={`/industries/${item.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="inline-block mt-4 text-yellow-600 font-semibold hover:text-yellow-500 transition"
                  >
                    READ MORE
                    <hr className="border-yellow-600 mt-1 w-20" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeIndustries;
