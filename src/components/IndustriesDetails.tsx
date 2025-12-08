import { industriesData } from "./industriesData";
import Breadcrumb from "./Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";

type IndustriesSlug = keyof typeof industriesData;

const IndustriesDetails = () => {
  const params = useParams<{ slug: string }>();
  const slug = params.slug as IndustriesSlug;

  if (!slug || !industriesData[slug]) {
    return <h2>Industry Not Found</h2>;
  }

  const data = industriesData[slug];

  const SliderItems = [
    { title: "Aerospace" },
    { title: "Chemicals" },
    { title: "Exhibitions" },
    { title: "Manufacturing" },
    { title: "Energy" },
    { title: "Technology" },
  ];

  return (
    <div className="mx-auto">
      {/* Dynamic Banner */}
      <img
        src={data.banner}
        className="w-full h-full min-h-[350px] object-cover"
      />

      <div className="container mx-auto px-4 lg:px-20 xl:px-40 ">
        <Breadcrumb />

        {/* INTRO */}
        <h1 className="underline decoration-yellow-500 text-lg md:text-xl lg:text-3xl font-bold my-6">
          {data.intro}
        </h1>

        {/* DESCRIPTION PARAGRAPHS */}
        {data.description.map((p, i) => (
          <p
            key={i}
            className="text-md mb-5 whitespace-pre-line leading-relaxed"
          >
            {p}
          </p>
        ))}

        {/* SECTIONS */}
        {data.sections.map((section, i) => (
          <div key={i} className="text-center max-w-6xl mx-auto mt-10">
            <h2 className=" text-3xl font-semibold border-b-4 border-yellow-400 w-fit pb-2 mb-4">
              {section.title}
            </h2>

            {section.text && (
              <p className=" text-left text-md mb-5 whitespace-pre-line leading-relaxed">
                {section.text}
              </p>
            )}

            {section.list && (
              <ul className="text-left ml-5 leading-relaxed">
                {section.list!.map((li, idx) => (
                  <li key={idx}> {li}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {/* SLIDER */}
      <div className="container p-4 text-center mx-auto mb-6">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="mx-auto text-3xl font-semibold border-b-4 border-yellow-400 w-80 pb-2 mb-6">
            Other Services
          </h2>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mt-10"
        >
          {SliderItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="text-center bg-stone-600 rounded-lg shadow hover:shadow-lg transition p-4  border-2 border-yellow-500 underline decoration-amber-500 underline-offset-4">
                {/* <img src={item.img} className="w-full " /> */}
                <h5 className="text-white font-bold text-xl truncate">
                  {item.title}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IndustriesDetails;
