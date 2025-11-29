import { Link } from "react-router-dom";
import serviceImg1 from "/images/sample1.webp";
import serviceImg2 from "/images/sample2.webp";
import serviceImg3 from "/images/sample3.webp";

const HomeIndustries = () => {
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[serviceImg1, serviceImg2, serviceImg3].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100"
            >
              {/* Image */}
              <img
                src={img}
                className="w-full h-60 object-cover rounded-t-lg"
                alt={`service${i + 1}`}
              />

              {/* Card Body */}
              <div className="p-5">
                <h5 className="font-bold text-xl pt-2">
                  {i === 0
                    ? "Agricaltural Processing"
                    : i === 1
                    ? "Alternate Energy"
                    : "Chemical Research"}
                </h5>

                {/* Dashed line */}
                <hr className="border-dashed my-3" />

                <p className="text-gray-600">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title.
                </p>

                {/* Read More */}
                <Link
                  to="/services"
                  className="inline-block mt-4 text-yellow-600 font-semibold hover:text-yellow-500 transition"
                >
                  READ MORE
                  <hr className="border-yellow-600 mt-1 w-20" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeIndustries;
