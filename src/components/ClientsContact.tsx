import ContactFrom from "./ContactFrom";
import img1 from "/images/accreditations/acc1.jpg";
import img2 from "/images/accreditations/acc2.png";
import img3 from "/images/accreditations/acc3.jpg";
import img4 from "/images/accreditations/acc4.jpg";
import img5 from "/images/accreditations/acc5.jpg";
import img6 from "/images/accreditations/acc6.jpg";

const ClientsContact = () => {
  return (
    <section className="mb-5">
      <div className="container mx-auto px-4">
        {/* Parent Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT - Clients */}
          <div className="clients lg:pr-10">
            <div className="title mb-8">
              <h2 className="text-lg text-gray-600">WE WORK GLOBALLY</h2>
              <h3 className="text-4xl font-bold">Our Accreditations</h3>
            </div>
            {/* 
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              consequuntur voluptate eaque dolor officia possimus iusto iste,
              sed molestias officiis accusantium neque pariatur!
            </p> */}

            {/* Clients Logos Grid */}
            <div className="grid grid-cols-3 gap-4">
              <img
                src={img1}
                className="w-full border border-gray-200"
                alt=""
              />
              <img
                src={img2}
                className="w-full border border-gray-200"
                alt=""
              />
              <img
                src={img3}
                className="w-full border border-gray-200"
                alt=""
              />
              <img
                src={img4}
                className="w-full border border-gray-200"
                alt=""
              />
              <img
                src={img5}
                className="w-full border border-gray-200"
                alt=""
              />
              <img
                src={img6}
                className="w-full border border-gray-200"
                alt=""
              />
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
