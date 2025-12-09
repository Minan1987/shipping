import Breadcrumb from "./Breadcrumb";
import banner from "/images/band-2.webp";
import icon1 from "/images/destinations/icon1.png";
import icon2 from "/images/destinations/icon2.png";
import icon3 from "/images/destinations/icon3.png";
import icon4 from "/images/destinations/icon4.png";
import icon5 from "/images/destinations/icon5.png";
import icon6 from "/images/destinations/icon6.png";

const Destinations = () => {
  const items = [
    { title: "Africa", image: icon1 },
    { title: "Asia", image: icon2 },
    { title: "Australasia", image: icon3 },
    { title: "Europe", image: icon4 },
    { title: "North America", image: icon5 },
    { title: "South America", image: icon6 },
  ];
  return (
    <div className=" mx-auto">
      <img src={banner} className="w-full h-full min-h-[350px] object-cover" />
      <div className="container mx-auto px-4 lg:px-20 xl:px-40">
        <Breadcrumb />
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4">
            {/* Title */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-yellow-500 text-lg font-semibold tracking-wide">
                Destinations
              </h2>

              <h3 className="text-3xl font-bold mt-2">
                We operate across key global destinations
              </h3>

              <p className="text-gray-600 mt-4">
                From international shipping to customs clearance and
                warehousing, we provide reliable and seamless logistics
                solutions across multiple strategic destinations worldwide. Your
                cargo moves faster, safer, and smarter with our trusted network.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="text-center bg-yellow-500 rounded-lg min-h-40 flex flex-col justify-center items-center p-4"
                >
                  <h5 className="text-white font-bold text-xl lg:text-2xl xl::text-4xl truncate">
                    {item.title}
                  </h5>
                  <img src={item.image} className="invert brightness-0" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Destinations;
