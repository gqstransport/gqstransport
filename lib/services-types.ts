export type ServiceSubpage = {
  id?: string;
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  overview?: string;
  applications?: string[];
  features?: string[];
  fleetDetails?: {
    types?: string[];
    capacity?: string;
    availability?: string;
  };
  status?: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
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
    intro: "Professional heavy cargo and industrial transportation solutions for construction, oil & gas, infrastructure, and manufacturing sectors.",
    industries: ["Oil & Gas", "Construction", "Infrastructure", "Manufacturing", "Steel & Fabrication"]
  },
  {
    slug: "heavy-machinery-rental",
    title: "Heavy Machinery Rental",
    description: "Reliable machinery rental solutions for industrial and construction projects.",
    intro: "GQS provides flexible heavy machinery rental solutions with maintenance transparency and standby plans for construction and industrial projects."
  },
  {
    slug: "hiab-boom-truck-services",
    title: "Hiab & Boom Truck Services",
    description: "Professional lifting, loading, and material handling operations.",
    intro: "Professional Hiab and boom truck services for lifting, loading, unloading, and industrial material handling operations across Saudi Arabia."
  },
  {
    slug: "project-logistics-support",
    title: "Project Logistics Support",
    description: "Integrated logistics coordination and project cargo management.",
    intro: "End-to-end industrial operational and mobilization support, from port handling to site delivery."
  },
  {
    slug: "industrial-support-services",
    title: "Industrial Support Services",
    description: "End-to-end industrial operational and mobilization support.",
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
