import ContactFrom from "./ContactFrom";
import { ImLocation } from "react-icons/im";
import { MdPhone, MdOutlineMailOutline } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import Breadcrumb from "./Breadcrumb";
import banner from "/images/band-1.jpg";

const ContactUs = () => {
  return (
    <div className=" mx-auto">
      <img src={banner} className="w-full h-full min-h-[350px] object-cover" />
      <div className="container mx-auto px-4 lg:px-20 xl:px-40">
        <Breadcrumb />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Get In Touch
              <hr className="border-yellow-500 w-24 mt-2" />
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <ImLocation className="text-yellow-500 text-xl" />
                <span>
                  24 Gloucester Avenue, Manchester, M45 6BX, UNITED KINGDOM
                </span>
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <MdPhone className="text-yellow-500 text-xl" />
                <span>0845 825 4390</span>
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <MdOutlineMailOutline className="text-yellow-500 text-xl" />
                <span>info@mdgloballogistic.com</span>
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <LuAlarmClock className="text-yellow-500 text-xl" />
                <span>Mon - Sat : 9am to 6pm</span>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <ContactFrom />
          </div>
        </div>

        {/* MAP */}
        <div className="mb-8">
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="MD Global Location"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4747.736965232625!2d-2.270316025162336!3d53.531445172434336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae843d6784d9%3A0x49e0b02f42fcf7a!2s24%20Gloucester%20Ave%2C%20Prestwich%2C%20Manchester%20M25%203BL%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
