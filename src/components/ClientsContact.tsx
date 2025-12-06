import { Link } from "react-router-dom";
import ContactFrom from "./ContactFrom";
import img1 from "/images/accreditations/acc1.jpg";
import img2 from "/images/accreditations/acc2.png";
import img3 from "/images/accreditations/acc3.jpg";
import img4 from "/images/accreditations/acc4.jpg";
import img5 from "/images/accreditations/acc5.jpg";
import img6 from "/images/accreditations/acc6.jpg";

const ClientsContact = () => {
  return (
    <section className="mb-16">
      <div className="container mx-auto px-4 lg:px-20 xl:px-40">
        {/* Parent Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT - Clients */}
          <div className="clients lg:pr-8">
            <div className="title mb-4">
              <h2 className="text-lg text-gray-600">WE WORK GLOBALLY</h2>
              <h3 className="text-4xl font-bold">Our Accreditations</h3>
            </div>

            {/* Accreditations Logos Grid */}
            <div className="grid grid-cols-3 gap-4">
              <Link to="https://www.gov.uk/">
                <img
                  src={img1}
                  className="w-full border border-gray-200"
                  alt="AEO"
                />
              </Link>
              <Link to="https://bifa.org/">
                <img
                  src={img2}
                  className="w-full border border-gray-200"
                  alt="BIFA"
                />
              </Link>
              <Link to="https://fiata.org/">
                <img
                  src={img3}
                  className="w-full border border-gray-200"
                  alt="FIATA"
                />
              </Link>
              <Link to="https://www.iata.org/">
                <img
                  src={img4}
                  className="w-full border border-gray-200"
                  alt="IATA"
                />
              </Link>
              <Link to="https://www.eastwestln.com/">
                <img
                  src={img5}
                  className="w-full border border-gray-200"
                  alt=""
                />
              </Link>
              <Link to="">
                {" "}
                <img
                  src={img6}
                  className="w-full border border-gray-200"
                  alt=""
                />
              </Link>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="contacts lg:pl-10 mt-5 lg:mt-0">
            <div className="title mb-4">
              <h2 className="text-lg text-gray-600 w-[110px]">CONTACT US</h2>
              <h3 className="text-4xl font-bold">Get In Touch</h3>
            </div>

            <ContactFrom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsContact;
