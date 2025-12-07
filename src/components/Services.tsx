import Breadcrumb from "./Breadcrumb";
import banner from "/images/band-1.jpg";
import HomeServices from "./HomeServices";
import FeaturesdServices from "./FeaturesdServices";

const Services = () => {
  return (
    <div className=" mx-auto">
      <img src={banner} className="w-full h-full" />
      <div className="container mx-auto px-4 lg:px-20 xl:px-40">
        <Breadcrumb />
      </div>

      <HomeServices />
      <FeaturesdServices />
    </div>
  );
};

export default Services;
