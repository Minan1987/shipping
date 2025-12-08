import type { ReactNode } from "react";
import AerospaceBanner from "/images/industries/image1.webp";
import ChemicalsBanner from "/images/industries/image2.webp";
import ExhibitionsBanner from "/images/industries/image3.webp";
import ManufacturingBanner from "/images/industries/image4.webp";
import EnergyBanner from "/images/industries/image5.webp";
import TechnologyBanner from "/images/industries/image6.webp";
import { Link } from "react-router-dom";

export interface IndustrieSection {
  title: string;
  text?: string | ReactNode;
  list?: string[]; // optional
}

export interface ServiceDataItem {
  title: string;
  banner: string;
  intro: string;
  description: string[];
  sections: IndustrieSection[];
}

export interface IndustriesData {
  [slug: string]: ServiceDataItem;
}

export const industriesData: IndustriesData = {
  aerospace: {
    title: "Aerospace",
    banner: AerospaceBanner,
    intro:
      "Md Global Shipping provide a wide range of supply chain solutions to the aerospace sector. Our staff are familiar with industry terms and jargon – we understand and speak your language.",
    description: [
      "Our highly trained staff will provide you with guidance and direction at every stage of the shipping process. We can help you with the movement of aircraft engines, raw materials and fragile components.",
    ],
    sections: [
      {
        title: "Dedicated Team",
        text: (
          <>
            Our customer base includes aircraft manufacturers, airlines, and
            other businesses involved in the maintenance of aerospace
            products.The majority of the pieces we send overseas for the
            aerospace industry are either out of gauge, of high value, or both.
            <br /> We are confident that our specialist aerospace team have the
            knowledge and expertise to handle all aspects of your consignment
            including documentation, haulage, loading and handling.
            <br />
            Please{" "}
            <Link to="/contact-us" className="text-yellow-500 font-semibold">
              contact us
            </Link>{" "}
            if you have any queries in respect of our services.
          </>
        ),
      },
    ],
  },

  chemicals: {
    title: "Chemicals",
    banner: ChemicalsBanner,
    intro:
      "The chemical goods industry has experienced significant changes over recent years with a much larger emphasis being placed on logistics compliance and regulation. MD Global Shipping provide businesses with specialist chemical logistics advice and guidance.",
    description: [
      "Md Global Shipping have been importing and exporting chemical goods by air, sea and road for many years.\nWe use only UN approved packaging for our hazardous cargo and compliance is checked with the UK HSE (Health Safety Executive) and CPL (Classification, Packaging and Labelling) regulations in advance.",
    ],
    sections: [
      {
        title: "Shipping Hazardous Cargo",
        text: "We are licenced to store and handle seven classes of hazardous packed chemicals including gases, flammable liquids, flammable solids, oxidising and organic substances, radioactive materials, corrosive substances and miscellaneous dangerous goods.",
      },
      {
        title: "Trained Staff",
        text: "All company vehicles and drivers are ADR trained, which allows us to handle, collect and deliver hazardous materials throughout the UK on a same day/next day basis. Some of the services we provide are listed below:",
        list: [
          "- Multimodal Transportation",
          "- Warehousing",
          "- Trained Personnel",
          "- Product specific Packaging",
          "- Documentation Checks",
          "- Certified Drivers",
          "- Emergency Contingency Plans",
        ],
      },
      {
        title: "",
        text: "We take safety and compliance very seriously at Md Global Shipping and you can rest assured that we meet the most rigorous requirements set by the chemical goods industry.",
      },
    ],
  },

  exhibitions: {
    title: "Exhibitions",
    banner: ExhibitionsBanner,
    intro:
      "When fast reactions and quick solutions are required, you can count on Md Global Shipping to provide a dedicated team and exceptional service to help make your event a resounding success.",
    description: [
      "Our exhibition and events team have experience of supporting many trade shows across the UK and worldwide. We appreciate that the delivery and collection of your stand and promotional materials is of paramount importance to ensure your event runs smoothly.",
    ],
    sections: [
      {
        title: "Experienced Events Agent",
        text: "We regularly handle and transport exhibits, stands, fragile items and oversized cargo, however, if you have something in mind that is slightly out of the ordinary to make your display stand out from the rest, feel free to run the idea by us. We like a challenge! \nAs you would expect, our team is completely flexible to your needs and they frequently work to very strict deadlines.",
      },
      {
        title: "Worldwide Services",
        text: "As we are an independent forwarder, we also have the advantage of being able to carefully select the agents that represent us outside the UK. This ensures that our high standards are met across the world. Some of the services we provide are listed below:",
        list: [
          "- Shipping to and from your show site",
          "- Storage prior and post event",
          "- Handling your equipment onto your exhibition stand space",
          "- Return to your premises or onward forwarding to another event",
          "- Customs clearance and temporary imports",
          "- Full documentation service, including certificates of origin and invoices",
          "- Oversized and out of gauge items",
          "- Worldwide network of specialist exhibition agents",
          "- Extensive knowledge of the exhibition industry",
          "- Dedicated team with a single point of contact",
        ],
      },
      {
        title: "",
        text: (
          <>
            If you are planning on attending a trade show, exhibition or event,{" "}
            <Link to="/contact-us" className="text-yellow-500 font-semibold">
              contact us
            </Link>{" "}
            to discuss your
          </>
        ),
      },
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    banner: ManufacturingBanner,
    intro:
      "Md Global Shipping manage the supply chain movements of many large international manufacturing companies. Our team appreciate the complex issues and unique logistical challenges facing this sector.",
    description: [
      "The outlook for the UK manufacturing industry looks promising. The sector has seen significant growth over recent years with many UK companies experiencing the largest hike in business confidence since the global financial crisis.",
    ],
    sections: [
      {
        title: "Experienced Logistics Provider",
        text: "We have worked hand in hand with hundreds of manufacturing businesses over the last few decades and many customers would view our role in their own business operations as key to their success.\nWe provide a wide range of services to manufacturing companies of all sizes. We can assist you with the inbound supply of raw materials and components from overseas, as well as the outbound supply of your finished product to your customer. Some of the services we provide are listed below:",
        list: [
          "- Air, Sea and Road Freight Solutions",
          "- Customs Clearance",
          "- Same Day / Next Day UK Delivery or Collection",
          "- Repackaging",
          "- Bulky / Out of Gauge Shipments",
          "- Project Cargo",
          "- Temporary Imports",
          "- Warehousing",
        ],
      },
      {
        title: "Courier and Express Shipping Solutions",
        text: (
          <>
            Md Global Shipping will provide you with a logistical service that
            is bespoke to your company requirements, allowing you to concentrate
            on your core activities.{" "}
            <Link to="/contact-us" className="text-yellow-500 font-semibold">
              contact us
            </Link>{" "}
            today for more information.
          </>
        ),
      },
    ],
  },
  energy: {
    title: "Energy",
    banner: EnergyBanner,
    intro:
      "We have been providing logistics services to the oil and gas industry for many years. Our specialist team have worked on many projects across the world and understand the demands of this sector more than most.",
    description: [
      "We are an experienced global project carrier and our dedicated team has been providing logistical services to the oil and gas industry for many years.\nThis sector has changed a lot over the last two decades. Most oil and gas hotspots today are located in remote parts of the world, and as a result, it is crucial that you use an experienced logistics provider to move your materials and equipment overseas.",
    ],
    sections: [
      {
        title: "",
        text: "Md Global Shipping has adapted with the industry and continues to provide a wide range of logistical services to the oil and gas sector. Some of the services we provide are listed below:",
        list: [
          "- Air, Sea and Road Freight Solutions",
          "- Dedicated Air and Sea Charters",
          "- Line Item Part / Materials Tracking",
          "- Worldwide Presence",
          "- Break Bulk",
          "- Heavy Lifting",
          "- Project Cargo",
          "- Customs Clearance",
          "- Packing",
          "- Warehouse and Distribution",
        ],
      },
      {
        title: "",
        text: (
          <>
            Our flexibility, project experience and strong relationships with
            companies associated with the oil and gas industry make us the ideal
            logistics partner.{" "}
            <Link to="/contact-us" className="text-yellow-500 font-semibold">
              contact
            </Link>{" "}
            our dedicated team to find out more.
          </>
        ),
      },
    ],
  },
  technology: {
    title: "Technology",
    banner: TechnologyBanner,
    intro:
      "We understand the unique logistical challenges faced by companies in the technology sector, where precision, speed, and reliability are paramount. As a leading freight forwarding business, we offer tailored solutions to facilitate the seamless movement of your technology products worldwide, whether by air, sea, or road.",
    description: [""],
    sections: [
      {
        title: "Global Freight Forwarding:",
        list: [
          "• Leveraging our extensive network of partners and carriers, we offer comprehensive freight forwarding services to facilitate the efficient transportation of your technology products to destinations across the globe.",
          "• Whether you require air freight for urgent shipments, sea freight for cost-effective transportation of bulk goods, or road freight for domestic distribution, we have the expertise and resources to meet your specific requirements.",
        ],
      },
      {
        title: "Customised Logistics Solutions:",
        list: [
          "• We understand that the technology sector demands tailored logistics solutions to accommodate unique product specifications, regulatory requirements, and delivery timelines.",
          "• Our team of logistics experts works closely with you to develop customised transportation plans that optimise efficiency, minimise costs, and ensure on-time delivery of your technology products.",
        ],
      },
      {
        title: "Supply Chain Management:",
        list: [
          "• Our end-to-end supply chain management services are designed to streamline your logistics operations and enhance visibility and control throughout the supply chain.",
          "• From procurement and inventory management to warehousing and distribution, we offer comprehensive solutions to optimise the flow of your technology products from manufacturer to end-user.",
        ],
      },
      {
        title: "Specialised Handling and Packaging:",
        list: [
          "• We recognise the importance of proper handling and packaging to protect delicate technology products during transit.",
          "• Our specialised handling capabilities, coupled with customised packaging solutions, ensure that your technology products are transported safely and securely, minimising the risk of damage or loss.",
        ],
      },
      {
        title: "Compliance and Regulatory Support:",
        list: [
          "• Navigating complex international trade regulations and compliance requirements can be challenging for technology companies.",
          "• Our team stays abreast of regulatory changes and provides expert guidance to ensure that your shipments comply with all applicable regulations, including customs clearance and export/import documentation.",
        ],
      },
      {
        title: "Dedicated Customer Support:",
        list: [
          "• We are committed to providing exceptional customer service and support to our clients in the technology sector.",
          "• Our dedicated customer support team is available round-the-clock to address your inquiries, track shipments, and resolve any logistics issues promptly, ensuring a smooth and hassle-free experience.",
        ],
      },
      {
        title: "",
        text: "Whether you are a small technology startup or a multinational corporation, Md Global Shipping is your trusted partner for all your logistics needs. With our industry expertise, global reach, and commitment to excellence, we help you navigate the complexities of international trade and logistics, allowing you to focus on innovating and growing your business in the dynamic technology sector.",
      },
    ],
  },
};
