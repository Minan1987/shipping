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
  Shop,
  Projects,
  HomeIndustries,
  FeaturesdServices,
  ClientsContact,
  SearchResult,
  BlueContactSection,
  RequestQuote,
} from "./components";
import { HashRouter, Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-full">
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
      <header>
        <TopHeader />
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
      <BlueContactSection />
      <Footer />
    </HashRouter>
  );
};

export default App;
