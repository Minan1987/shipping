import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type featuredServices = {
  id: number;
  title: string;
  image: string;
  icon: string;
  desc: string;
  featured: boolean;
};

const FeaturesdServices = () => {
  const [featuredServices, setFeaturedServices] = useState<featuredServices[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:9000/services?featured=true");
        const data = await res.json();
        setFeaturedServices(data);
      } catch (err) {
        console.error("Error Messag:", err);
      }
    };
    fetchData();
  }, []);

  if (!featuredServices) {
    return <div>loading...</div>;
  }

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
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              to="/"
              className="bg-yellow-500 group rounded-[10px] p-3 shadow-[0_2px_6px_rgba(234,179,8,0.5)]  transition-shadow duration-300  ease-out hover:shadow-[0_0_1px_3px_#F0B100]"
            >
              <div className="text-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className=" w-16 mx-auto transition-transform duration-300 ease-out group-hover:scale-[1.15]"
                />

                <h6 className="font-semibold text-sm text-white mt-2">
                  {service.title}
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
