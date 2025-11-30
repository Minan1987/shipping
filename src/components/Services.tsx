import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Service = {
  id: number;
  title: string;
  image: string;
  icon: string;
  desc: string;
  featured: boolean;
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:9000/services?featured=false"
        );
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Error Message:", err);
      }
    };

    fetchData();
  }, []);

  if (!services) {
    return <div>loading...</div>;
  }

  return (
    <section className="py-16">
      {/* TOP TEXT SECTION */}
      <div className="container mx-auto px-4">
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
            {services.map((service) => (
              <Link
                key={service.id}
                to="/"
                className="group rounded-[10px] p-3 shadow-[0_2px_5px_0_rgba(142,154,173,.6)] transition-shadow duration-300  ease-out hover:shadow-[0_0_1px_3px_#F0B100]"
              >
                <div className="text-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="mx-auto transition-transform duration-300 ease-out group-hover:scale-[1.15] max-h-20"
                  />

                  <h6 className="font-semibold text-lg text-yellow-500 mt-2">
                    {service.title}
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

export default Services;
