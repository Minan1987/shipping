import { servicesData } from "./serviceData";
import Breadcrumb from "./Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";

type ServiceSlug = keyof typeof servicesData;

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: ServiceSlug }>();
  if (!slug || !servicesData[slug]) {
    return <h2>Service Not Found</h2>;
  }

  const data = servicesData[slug];

  return (
    <div className="mx-auto">
      {/* Dynamic Banner */}
      <img src={data.banner} className="w-full h-full" />

      <div className="container mx-auto px-4 lg:px-20 xl:px-40">
        <Breadcrumb />

        {/* INTRO */}
        <h1 className="underline decoration-yellow-500 text-lg md:text-xl lg:text-3xl font-bold my-6">
          {data.intro}
        </h1>

        {/* DESCRIPTION PARAGRAPHS */}
        {data.description.map((p, i) => (
          <p key={i} className="text-md mb-5 leading-relaxed">
            {p}
          </p>
        ))}

        {/* SECTIONS */}
        {data.sections.map((section, i) => (
          <div key={i} className="text-center max-w-6xl mx-auto mt-10">
            <h2 className="mx-auto text-3xl font-semibold border-b-4 border-yellow-400 w-80 pb-2 mb-6">
              {section.title}
            </h2>

            {section.text && (
              <p className="text-md mb-5 leading-relaxed">{section.text}</p>
            )}

            {/* {section.list && (
              <ul className="text-left ml-5 leading-relaxed">
                {section.list.map((li, idx) => (
                  <li key={idx}>- {li}</li>
                ))}
              </ul>
            )} */}
          </div>
        ))}

        {/* SLIDER */}
        {/* <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          loop
          autoplay={{ delay: 2500 }}
          className="mt-10"
        >
          {data.sliderItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 border border-gray-100">
                <img src={item.img} className="w-full h-60 object-cover rounded-t-lg" />
                <h5 className="font-bold text-xl pt-2 truncate">{item.title}</h5>
                <hr className="border-dashed my-3" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default ServiceDetails;
