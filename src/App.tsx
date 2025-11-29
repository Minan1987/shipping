import {
  TopHeader,
  Menu,
  Slider,
  Footer,
  ContactUs,
  AboutUs,
  Services,
  News,
  Industries,
  Shop,
  Projects,
  HomeIndustries,
  Features,
  ClientsContact,
  SearchResult,
  BlueContactSection,
  RequestQuote,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-full">
        <Slider />
        <RequestQuote />
      </div>
      <Services />
      <Features />
      <HomeIndustries />
      <ClientsContact />
      <BlueContactSection />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <TopHeader />
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Industries />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
