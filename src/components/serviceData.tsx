import type { ReactNode } from "react";
import seaBanner from "/images/services/image1.webp";
import airBanner from "/images/services/image2.webp";
import roadBanner from "/images/services/image3.webp";
import CourierAndExpressBanner from "/images/services/image4.webp";
import ImportServicesBanner from "/images/services/image5.webp";
import CustomsClearanceBanner from "/images/services/image6.webp";
import ExportServicesBanner from "/images/services/image7.webp";
import documentationBanner from "/images/services/image8.webp";
import WarehousingBanner from "/images/services/image9.webp";
import FreightPackagingBanner from "/images/services/image10.webp";
import { Link } from "react-router-dom";

export interface ServiceSection {
  title: string;
  text?: string | ReactNode;
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
      "We offer a variety of flexible, cost effective sea freight services worldwide. We cover all major trade lanes for FCL, LCL and out of gauge consignments.",
    description: [
      "More shipments move by sea freight than any other mode of transport. As an independent freight forwarder, we are able to negotiate directly with the world's major shipping lines to obtain preferential rates and special services for your sea freight shipments as required.",
    ],
    sections: [
      {
        title: "Shipping Solution For You",
        text: "Whether it is regular lane cargo or a one-off shipment, we will find the most suitable shipping solution for you.\n With handling depots throughout the UK we are able to offer weekly departures to most destinations throughout the world and using the latest technology and online systems we will monitor your sea freight shipments as they move from port to port.\n We are in constant communication with the shipping lines and delivery destinations to ensure your goods are cleared as efficiently as possible with a minimum amount of time spent on the quay.",
      },
      {
        title: "Variety of Freight Services",
        text: "Our experienced sea freight team are able to offer a tailored solution to meet your import or export requirements. Our sea freight services include:",
        list: [
          "- LCL (Groupage Cargo) ",
          "- FCL (Full Container Loads)",
          "- Breakbulk / Conventional Loads",
          "- Reefers / Temperature Controlled Containers ",
          "- Full Charter Vessels ",
          "- Hazardous Cargo",
          "- Ro-Ro",
          "- Out of Gauge Loads",
          "- Project Cargo Loads",
        ],
      },
    ],
  },

  "air-freight": {
    title: "Air Freight",
    banner: airBanner,
    intro:
      "Over recent years MG Global Freight has grown to become one of the largest independent air freight forwarder service providers in the UK.",
    description: [
      "We know that for urgent or time-sensitive consignments, air freight forwarding is more often than not the most suitable method of transport - we understand that speed and reliability are of the essence.",
    ],
    sections: [
      {
        title: "Logistics Accreditation",
        text: "Through our IATA accreditation, our air freight department has a long-standing and well-respected relationship with all major airlines, which enables us to negotiate the best possible rates and services for your consignments.\n We work with an expansive network of independent agents across the world who are committed to providing optimum local expertise and knowledge including customs clearance, deliveries and collections, as required.",
      },
      {
        title: "Worldwide Network",
        text: "Our network of worldwide agents are carefully selected by us and are required to pass rigorous checks and audits to ensure that our high standards are maintained throughout.\n Whatever your requirements we are confident that we can offer you a tailor-made and competitively priced air freight service that best suits your needs",
      },
    ],
  },

  "road-freight": {
    title: "Road Freight",
    banner: roadBanner,
    intro:
      "MD Global Freight provides a diverse range of export and import road freight services between the UK and most European countries.",
    description: [
      "Our experienced road freight team will choose the right service for your consignment. We work with large multinational haulage companies who operate daily services across Europe and beyond as well as smaller intimate companies for more specialised or dedicated services.",
    ],
    sections: [
      {
        title: "Road Freight Solutions",
        text: "Contact one of our road freight experts who will listen closely to your requirements before presenting you with the most suitable option. Our road freight services include:",
        list: [
          "- Same and Next Day Collections",
          "- Full and Part - Load Trailer Movements",
          "- Standard Groupage Services ",
          "- Inbound 24/48 Hour Transit Times",
          "- Total European Coverage",
          "- Pallet Distribution",
          "- Driver - Accompanied Service ",
          "- Project Loads",
          "- Abnormal, Large Load and Out of Gauge Shipments",
          "- Dedicated Vehicles for Special Consignments",
          "- ADR/IMDG Hazardous Cargo",
        ],
      },
    ],
  },
  "courier-and-express": {
    title: "Courier and Express",
    banner: CourierAndExpressBanner,
    intro:
      "Choose our worldwide courier and express delivery service when you need your urgent cargo moving. Our courier service is all fully trackable online",
    description: [
      "We have long term relationships with all major courier and express delivery companies and due to the volumes we send each month, our customers benefit from our buying power.",
    ],
    sections: [
      {
        title: "Cost Effective Shipping",
        text: "We research the most cost effective and suitable service for your consignment based on your requirements. On most occasions we will propose several options for you to choose from.\n\nAll courier and express delivery shipments can be tracked online using the latest technologies allowing you to locate your consignment as it moves across the world from point A to B.",
      },
      {
        title: "Courier and Express Shipping Solutions",
        text: "Our courier and express delivery services include:",
        list: [
          "- Hand Carry",
          "- Out of Gauge Shipments",
          "- Time Definitive Cargo",
          "- Charter Services",
          "- Direct Drive",
          "- Exhibitions and Event Solutions",
          "- Project Cargo",
        ],
      },
    ],
  },
  "import-services": {
    title: "Import Services",
    banner: ImportServicesBanner,
    intro:
      "At MD Global Freight we have the knowledge, expertise and experience to provide you with a complete import services package.",
    description: [
      "MD Global Freight have been providing import services by air, road and sea for many years. We can offer a full imports service from the point of collection at the premises of your overseas supplier right through to delivery to your door in the UK.",
    ],
    sections: [
      {
        title: "Worldwide Network",
        text: "Through our worldwide network of quality, hand-picked agents we can ensure that we can provide our clients with the right service at the right price.\n\nOur constant tracking of your shipment ensures you are always kept informed of the arrival date of your shipment and the expected time of delivery.",
      },
      {
        title: "Other Logistics Services",
        text: "We also offer a full customs brokerage service at any UK port or airport. We have a direct link with UK Customs system through CHIEF (Customs Handling of Import and Export Freight) which will ensure your shipments are cleared in the quickest time possible.\n\nIf you have any queries or you would like to know a little more about our import services, please send us an email.",
      },
    ],
  },
  "customs-clearance": {
    title: "Customs Clearance",
    banner: CustomsClearanceBanner,
    intro:
      "At MD Global Freight we have the ability to provide customs clearance for your import and export shipments across all UK sea terminals and airports.",
    description: [
      "We hold a direct computer link to customs and all major UK ports, which allows us to provide an efficient and trusted customs clearance process for our customers.\n\nOur in house technology provides our customs clearance operators with full access to your shipment details in minutes. This allows us to request consignment information or obtain copy documentation at the click of a button.",
    ],
    sections: [
      {
        title: "Tariff Guidance and Advice",
        text: "In addition, our skilled staff are more than happy to discuss and provide guidance on customs tariff classifications, potential duties and taxes involved, tariff concessions as well as any permit and licensing assistance. Customs clearance services we are able to provide include the following:",
        list: [
          "- Custom Documentation",
          "- Customs Brokering",
          "- Inland Clearance",
          "- Tariff Guidance",
          "- Free Zones",
          "- Inward Processing Relief (IPR)",
          "- End - Use Relief",
          "- Deferring Payment of Customs Charges",
        ],
      },
    ],
  },
  "export-services": {
    title: "Export Services",
    banner: ExportServicesBanner,
    intro:
      "MD Global Freight provide export services by air, sea and road for a range of companies varying in size, location and business sector.",
    description: [
      "We are able to provide a fully multi-modal export service to most destinations across the world. Our export team will listen to your needs and advise the most suitable service for your cargo.",
    ],
    sections: [
      {
        title: "Competitive Export Shipping Costs",
        text: "Due to our good relations with the world's major airlines and shipping lines we are able to secure extremely competitive rates along with priority export services. We constantly monitor your shipments all the way through its journey, whether it is to arrival at the local customs depot or delivered direct through to your customer.  ",
      },
      {
        title: "Large Worldwide Network",
        text: (
          <>
            We also employ a broad network of agents to assist with customs
            clearance procedures and any documentation requirements at the
            country of destination.
            <br />
            <br />
            If you have any queries in relation to our export services, please{" "}
            <Link to="/contact-us" className="text-yellow-600 font-semibold">
              contact us
            </Link>
            .
          </>
        ),
      },
    ],
  },
  documentation: {
    title: "Documentation",
    banner: documentationBanner,
    intro:
      "It is easy to become confused with international shipping documents. We can assist you with certificates of origin, export licenses, air waybills and much more.",
    description: [
      "Each overseas destination has its own very unique shipping documentation requirements and without the correct or accurate shipping documentation, you may find that your consignment is delayed at the port of export or import. In most cases this can be easily avoided.",
    ],
    sections: [
      {
        title: "Experienced Freight Team",
        text: "Our helpful staff are fully trained and through their vast experience will be more than happy to advise you what import or export shipping documentation is required for your shipment.\n\n In addition to the usual air way bills, bills of lading, commercial invoices and packing lists, we can provide a full letter of credit service, which includes full vetting to ensure you are able to comply with all aspects of the credit.\n We can also assist with export licence requirements and certificates of origin.",
      },
    ],
  },
  warehousing: {
    title: "Warehousing",
    banner: WarehousingBanner,
    intro:
      "We are your trusted partner for comprehensive warehousing solutions in the UK. Here's an overview of the top-tier warehousing services we offer",
    description: [""],
    sections: [
      {
        title: "Storage Solutions:",
        list: [
          "• Our strategically located warehouses across the UK offer secure and flexible storage options for various types of inventory.",
          "• We provide ambient, chilled, and frozen storage facilities to accommodate a wide range of products, ensuring optimal preservation and integrity.",
          "• With scalable storage solutions, we adapt to your changing inventory requirements, optimising space utilisation and minimising costs.",
        ],
      },
      {
        title: "Labelling and Packaging:",
        list: [
          "• Our comprehensive labelling services ensure accurate product identification and traceability throughout the supply chain.",
          "• We offer customisable labelling solutions to meet industry standards and regulatory requirements.",
          "• Our packaging solutions focus on product protection and presentation, incorporating efficient packing techniques and materials tailored to your specific needs.",
        ],
      },
      {
        title: "Pick and Pack Services:",
        list: [
          "• Our streamlined pick and pack services enhance order fulfillment efficiency, reducing turnaround times and improving customer satisfaction.",
          "• We employ advanced picking technologies and methodologies to ensure accuracy and speed in processing customer orders.",
          "• Customisable pick and pack options, such as batch picking, single-item picking, and kitting services, allow for flexibility and customization to meet diverse customer demands.",
        ],
      },
      {
        title: "Inventory Management:",
        list: [
          "• Our advanced inventory management system provides real-time visibility and control over inventory levels, enabling efficient stock tracking and replenishment.",
          "• We offer inventory forecasting and reporting capabilities to optimize inventory levels, minimise stockouts, and reduce carrying costs.",
          "• Our inventory management solutions can be seamlessly integrated with your existing systems, providing a unified platform for inventory control and management.",
        ],
      },
      {
        title: "Value-Added Services:",
        list: [
          "• In addition to core warehousing services, we offer a range of value-added services to enhance your supply chain operations.",
          "• Our value-added services include quality control inspections, product customisation, repackaging, and reverse logistics management.",
          "• With our expertise and dedication to excellence, we go above and beyond to meet your unique requirements and exceed your expectations.",
        ],
      },
      {
        title: "",
        text: (
          <>
            We are committed to delivering superior warehousing solutions that
            drive efficiency, optimise costs, and add value to your supply
            chain. Partner with us today to experience the difference in
            logistics excellence.{" "}
            <Link to="/contact-us" className="text-yellow-600 font-semibold">
              contact us
            </Link>{" "}
            to discuss your warehousing needs and explore how we can support
            your business growth.
          </>
        ),
      },
    ],
  },
  "freight-packaging": {
    title: "Freight Packaging",
    banner: FreightPackagingBanner,
    intro:
      "We understand the importance of using the correct freight packaging materials and supplies to protect your cargo as it moves across the world.",
    description: [
      "Whether your goods are heavy, out of gauge, hazardous or of high value, they must arrive safely and in good condition, which means that the export freight packing has to be fit for purpose.\n\n",
    ],
    sections: [
      {
        title: "",
        text: "Our experience and expertise will ensure that your cargo arrives at its destination in exactly the same condition as it leaves your premises, and in alignment with all legislative requirements. Our freight packing service includes the following:",
        list: [
          "- Export Packing",
          "- On - Site Freight Packing",
          "- Custom Made Packing Service",
          "- Cases, Crates and Pallets",
          "- Packing of Dangerous Goods",
          "- Compliance with ISPM15 Standards",
        ],
      },
    ],
  },
};
