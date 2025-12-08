import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import banner from "/images/band-2.jpg";

const Industries = () => {
  const items = [
    { title: "Aerospace" },
    { title: "Chemicals" },
    { title: "Exhibitions" },
    { title: "Manufacturing" },
    { title: "Energy" },
    { title: "Technology" },
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
                WHAT WE DO
              </h2>

              <h3 className="text-3xl font-bold mt-2">
                We Offer Different Services
              </h3>

              <p className="text-gray-600 mt-4">
                Experience exceptional Custom Clearing , warehousing and
                logistics services driven by an operationally excellent DNA.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
              {items.map((item, i) => (
                <Link
                  to={`/industries/${item.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                >
                  <div
                    key={i}
                    className="text-center bg-stone-600 rounded-lg shadow hover:shadow-lg transition-border duration-300 ease-out p-4  border-2 border-stone-600 hover:bg-stone-500 hover:border-yellow-500 underline decoration-amber-500 underline-offset-4 min-h-40 flex justify-center items-center"
                  >
                    <h5 className="text-white font-bold text-xl lg:text-2xl xl::text-4xl truncate">
                      {item.title}
                    </h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Industries;
