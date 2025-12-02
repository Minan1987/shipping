import seaBanner from "/images/services/image1.webp";
import airBanner from "/images/services/image2.webp";
import roadBanner from "/images/services/image3.webp";
// import CourierAndExpress from "/images/services/image4.webp";

export interface ServiceSection {
  title: string;
  text?: string;
  list?: string[]; // optional
}

export interface ServiceDataItem {
  title: string;
  banner: string;
  intro: string;
  description: string[];
  sections: ServiceSection[];
}

export interface ServicesData {
  [slug: string]: ServiceDataItem;
}

export const servicesData: ServicesData = {
  "sea-freight": {
    title: "Sea Freight",
    banner: seaBanner,
    intro:
      "We offer a variety of flexible, cost effective sea freight services worldwide...",
    description: [
      "More shipments move by sea freight than any other mode of transport...",
      "Whether it is regular lane cargo or a one-off shipment...",
    ],
    sections: [
      {
        title: "Shipping Solution For You",
        text: "Whether it is regular lane cargo or a one-off shipment...",
      },
      {
        title: "Our Sea Freight Services Include:",
        list: [
          "LCL (Groupage Cargo)",
          "FCL (Full Container Loads)",
          "Breakbulk Loads",
        ],
      },
    ],
  },

  "air-freight": {
    title: "Air Freight",
    banner: airBanner,
    intro: "Fast, secure and reliable air freight services worldwide.",
    description: [
      "Air freight is the fastest mode of transport…",
      "We work with top airline carriers to ensure quick delivery.",
    ],
    sections: [
      {
        title: "Why Choose Air Freight?",
        text: "Ideal for urgent shipments requiring quick and safe delivery.",
      },
    ],
  },

  "road-freight": {
    title: "Road Freight",
    banner: roadBanner,
    intro: "Reliable and cost-effective road freight solutions worldwide.",
    description: [
      "Road transport offers flexible and fast delivery across regions.",
    ],
    sections: [],
  },
};
