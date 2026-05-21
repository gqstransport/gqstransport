export type ServiceSubpage = {
  id?: string;
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  image?: string;
  overview?: string;
  applications?: string[];
  features?: string[];
  titleAr?: string;
  descriptionAr?: string;
  overviewAr?: string;
  applicationsAr?: string[];
  featuresAr?: string[];
  fleetDetails?: {
    types?: string[];
    capacity?: string;
    availability?: string;
    typesAr?: string[];
    capacityAr?: string;
    availabilityAr?: string;
  };
  status?: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  services: ServiceSubpage[];
  industries?: string[];
  faq?: { question: string; answer: string }[];
};

export const CATEGORIES: Omit<ServiceCategory, 'services'>[] = [
  {
    slug: "heavy-transport",
    title: "Heavy Transport Services",
    description: "Heavy cargo transportation and industrial logistics support across Saudi Arabia.",
    image: "/assets/images/fleet_heavy_cargo.png",
    intro: "Professional heavy cargo and industrial transportation solutions for construction, oil & gas, infrastructure, and manufacturing sectors.",
    industries: ["Oil & Gas", "Construction", "Infrastructure", "Manufacturing", "Steel & Fabrication"]
  },
  {
    slug: "heavy-machinery-rental",
    title: "Heavy Machinery Rental",
    description: "Reliable machinery rental solutions for industrial and construction projects.",
    image: "/assets/images/fleet_excavator.png",
    intro: "GQS provides flexible heavy machinery rental solutions with maintenance transparency and standby plans for construction and industrial projects."
  },
  {
    slug: "hiab-boom-truck-services",
    title: "Hiab & Boom Truck Services",
    description: "Professional lifting, loading, and material handling operations.",
    image: "/assets/images/hiab_crab_truck_1779372960214.png",
    intro: "Professional Hiab and boom truck services for lifting, loading, unloading, and industrial material handling operations across Saudi Arabia."
  },
  {
    slug: "project-logistics-support",
    title: "Project Logistics Support",
    description: "Integrated logistics coordination and project cargo management.",
    image: "/assets/images/project_logistics_barge_1779372987721.png",
    intro: "End-to-end industrial operational and mobilization support, from port handling to site delivery."
  },
  {
    slug: "industrial-support-services",
    title: "Industrial Support Services",
    description: "End-to-end industrial operational and mobilization support.",
    image: "/assets/images/founder_operations.png",
    intro: "Comprehensive support services tailored for the specific needs of industrial sectors in KSA."
  }
];

export function groupServices(flatServices: ServiceSubpage[]): ServiceCategory[] {
  return CATEGORIES.map((cat) => {
    const categoryServices = flatServices.filter(
      (s) => s.categorySlug === cat.slug && s.status !== "Inactive"
    );
    return {
      ...cat,
      services: categoryServices,
    };
  });
}
