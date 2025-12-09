import {
  TopHeader,
  Menu,
  Slider,
  Footer,
  ContactUs,
  AboutUs,
  HomeServices,
  News,
  YellowContactBar,
  Services,
  ServiceDetails,
  Shop,
  HomeIndustries,
  FeaturesdServices,
  ClientsContact,
  SearchResult,
  BlueContactSection,
  RequestQuote,
  Industries,
  IndustriesDetails,
  Destinations,
} from "./components";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <Slider />
        <RequestQuote />
      </div>
      <HomeServices />
      <FeaturesdServices />
      <YellowContactBar />
      <HomeIndustries />
      <ClientsContact />
    </>
  );
};

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <header>
        <TopHeader />
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustriesDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <BlueContactSection />
      <Footer />
    </HashRouter>
  );
};

export default App;
