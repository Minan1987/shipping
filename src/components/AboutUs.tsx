import Breadcrumb from "./Breadcrumb";
import banner from "/images/band-2.webp";

const AboutUs = () => {
  return (
    <div className=" mx-auto ">
      <img src={banner} className="w-full h-full" />
      <div className="container mx-auto  px-4 lg:px-20 xl:px-40">
        <Breadcrumb />
        <h1 className="underline decoration-yellow-500 text-lg md:text-xl lg:text-3xl font-bold my-6">
          Our objective at MD International Freight is simple – to provide a
          first-class service for businesses and individuals that require a
          professional international shipping service.
        </h1>
        <p className="text-md mb-8 leading-relaxed">
          MD Global Logistics is a leading provider of custom clearing and
          freight forwarding services, renowned for our commitment to excellence
          and reliability in global trade logistics. With a wealth of experience
          and a customer-centric approach, we streamline international shipping
          processes to empower businesses to thrive in the global marketplace.
          <br />
          <br /> Ever since our inception, we have always worked with our
          Customers in complete understanding of your needs and tailoring our
          services to deliver Safe & Timely Delivery of shipments. Our success
          and Growth stems from the fact that we never take our customer
          requirements lightly. The moment a shipment is booked, we start our
          planning process based on how best we can complete it within the
          shortest frame of time, economical to the Customer and Most important
          Safety of Shipment.
        </p>
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="mx-auto text-3xl font-semibold border-b-4 border-yellow-400 w-80 pb-2 mb-6">
            CEO Message
          </h2>
        </div>
        <p className="text-md mb-3 leading-relaxed">
          To continue in business we must look ahead, understand the trends,
          dynamics and forces holistically and in realistic terms. To make a
          sizable presence in future we must understand everything that will
          shape our business in times to come and to make it good we are
          committed to get ourselves ready for tomorrow, today.
        </p>
        <p className="text-md mb-3 leading-relaxed">
          <span className="text-blue-950 font-semibold">
            MD Global Logistics
          </span>
          , as cohesive team, is committed to systematically manage logistics by
          continuously defining, monitoring and improving performance.
        </p>

        <p className="text-md mb-3 leading-relaxed">
          Our vision servers as basic framework for our future endeavors and can
          be best summarized as to assist demanding, but responsible, clients in
          achieving their business objectives through our dedication,
          professionalism, responsiveness and shear enthusiasm. We are well
          committed to meet and exceed our client’s expectations – every time,
          anytime.
        </p>
        <p className="text-md mb-3 leading-relaxed">
          We value our business partners by adhering to the highest ethical
          standards and following above the board business practices. It is our
          endeavor to extended service of highest standards to our valued
          clients and become acknowledged partners in their success stories.
        </p>
        <p className="text-md mb-14 leading-relaxed">
          <span className="text-blue-950 font-semibold">
            MD Global Logistics
          </span>{" "}
          shall be looking forward to serve you comprehensively in your all
          logistics requirements.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
