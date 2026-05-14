export type ServiceSubpage = {
  slug: string;
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

export const SERVICES_DATA: ServiceCategory[] = [
  {
    slug: "heavy-transport",
    title: "Heavy Transport Services",
    description: "Heavy cargo transportation and industrial logistics support across Saudi Arabia.",
    intro: "Professional heavy cargo and industrial transportation solutions for construction, oil & gas, infrastructure, and manufacturing sectors.",
    industries: ["Oil & Gas", "Construction", "Infrastructure", "Manufacturing", "Steel & Fabrication"],
    services: [
      {
        slug: "flatbed-trailer-rental",
        title: "Flatbed Trailer Rental",
        description: "Transportation solutions for steel, containers, industrial materials, and general cargo.",
        overview: "Our flatbed trailer rental services provide versatile and reliable transportation for a wide range of industrial loads. Whether you are moving construction materials, shipping containers, or heavy pipes, our fleet is equipped to handle standard and oversized deck loads across KSA.",
        applications: ["Construction material transport", "Container logistics", "Steel & pipe movement", "General industrial cargo"],
        features: ["Standard & Extendable decks", "Secure tie-down systems", "GPS-tracked fleet", "Professional operators"],
        fleetDetails: {
          types: ["40ft Flatbed", "Extendable Flatbed", "Multi-axle Flatbed"],
          capacity: "Up to 50 Tons",
          availability: "Immediate mobilization across Eastern, Central, and Western regions"
        }
      },
      {
        slug: "lowbed-trailer-rental",
        title: "Lowbed Trailer Rental",
        description: "Specialized heavy equipment transportation for oversized and heavy machinery.",
        overview: "GQS specializes in lowbed trailer solutions designed for tall, heavy, and oversized machinery. Our low deck heights ensure safe clearance for high-profile equipment such as excavators, cranes, and industrial modules.",
        applications: ["Excavator & Dozer transport", "Crane component movement", "Industrial module delivery", "Oversized machinery rolls"],
        features: ["Low deck height for high clearance", "Heavy-duty ramps", "Multi-axle configurations", "Escort & permit coordination"],
        fleetDetails: {
          types: ["Gooseneck Lowbed", "Step-deck Trailer", "Multi-axle Modular"],
          capacity: "Up to 120 Tons",
          availability: "Specialized units available for project-based long-term hire"
        }
      },
      {
        slug: "heavy-cargo-transportation",
        title: "Heavy Cargo Transportation",
        description: "Safe and efficient transport coordination for industrial cargo movement.",
        overview: "We provide engineered transportation solutions for concentrated weights and critical industrial components. Our team handles every aspect from route planning to final site delivery.",
        applications: ["Transformer movement", "Pressure vessel transport", "Factory equipment relocation", "Heavy infrastructure segments"],
        features: ["Engineered tie-down plans", "Route survey included", "Civil interface management", "Full insurance coverage"],
        fleetDetails: {
          capacity: "Project specific (up to 200+ Tons with modular units)"
        }
      },
      {
        slug: "oversized-cargo-movement",
        title: "Oversized Cargo Movement",
        description: "Professional heavy haulage support for large industrial equipment and abnormal loads.",
        overview: "Handling abnormal indivisible loads requires precision and experience. GQS coordinates oversized cargo movement with a focus on safety, regulatory compliance, and minimal disruption.",
        applications: ["Wind turbine components", "Oil rig structures", "Bridge girders", "Large tanks & vessels", "Infrastructure projects", "Oil & Gas expansion", "Marine port hand-offs"],
        features: ["Escort vehicle coordination", "Night-move planning", "Police & Municipality permits", "LiDAR route scanning"]
      },
      {
        slug: "cross-border-gcc-transport",
        title: "Cross-Border GCC Transport",
        description: "Integrated GCC logistics and industrial cargo coordination.",
        overview: "Expand your reach across the GCC with our integrated cross-border logistics. We handle the documentation, customs coordination, and transport to UAE, Kuwait, Qatar, Bahrain, and Oman.",
        applications: ["Regional project supply", "GCC-wide distribution", "Cross-border equipment mobilization"],
        features: ["Customs clearance support", "Multi-country permits", "Strategic border staging", "Bilingual coordination"]
      },
      {
        slug: "industrial-equipment-transportation",
        title: "Industrial Equipment Transportation",
        description: "Factory machinery and industrial equipment transportation solutions.",
        overview: "Dedicated transport for industrial machinery, from CNC machines to large press lines. We ensure your factory assets are moved safely and installed on schedule.",
        applications: ["Factory relocation", "New machinery delivery", "Workshop equipment movement"],
        features: ["Vibration-controlled transport", "Technical rigging support", "Loading/Unloading supervision"]
      },
      {
        slug: "project-cargo-handling",
        title: "Project Cargo Handling",
        description: "Comprehensive handling support for project cargo operations.",
        overview: "GQS offers end-to-end management for project cargo. We coordinate the logistics of multiple shipments, ensuring they arrive at the site in the correct sequence for construction.",
        applications: ["Greenfield site logistics", "Refinery shutdown support", "Major infrastructure builds"],
        features: ["Sequence-based delivery", "Laydown yard management", "Real-time tracking dashboard"]
      },
      {
        slug: "port-to-site-transportation",
        title: "Port to Site Transportation",
        description: "Efficient transportation from ports to project and industrial sites.",
        overview: "Bridging the gap between the berth and the foundation. We specialize in rapid mobilization from Jubail, Dammam, and Jeddah ports to industrial zones across KSA.",
        applications: ["Imported machinery delivery", "Port-of-entry logistics", "Bulk material movement from docks"],
        features: ["Port-entry certified drivers", "Marshalling area access", "24/7 port operations support"]
      }
    ]
  },
  {
    slug: "heavy-machinery-rental",
    title: "Heavy Machinery Rental",
    description: "Reliable machinery rental solutions for industrial and construction projects.",
    intro: "GQS provides flexible heavy machinery rental solutions with maintenance transparency and standby plans for construction and industrial projects.",
    services: [
      {
        slug: "excavator-rental",
        title: "Excavator Rental",
        description: "Tracked and wheeled excavators for earthworks and plant projects.",
        overview: "Our excavator fleet includes various sizes and attachment options to suit any project, from small trenching to major earthmoving operations.",
        applications: ["Earthmoving", "Trenching", "Demolition support", "Site preparation"],
        features: ["Modern OEM fleet", "Certified operators", "On-site maintenance support"],
        fleetDetails: {
          types: ["20T Excavator", "30T Excavator", "Long-reach units"],
          availability: "Daily, Weekly, and Monthly rental options"
        }
      },
      {
        slug: "crane-rental",
        title: "Crane Rental",
        description: "Lift planning with certified operators and rigging supervision.",
        overview: "Safe and efficient lifting solutions with a range of mobile and crawler cranes. We provide full lift planning and risk assessments for every deployment.",
        applications: ["Industrial lifting", "Steel erection", "Equipment positioning", "Concrete works"],
        features: ["TUV certified cranes", "Aramco/SABIC approved operators", "Complete rigging sets"],
        fleetDetails: {
          types: ["50T Mobile Crane", "100T Mobile Crane", "Rough Terrain Cranes"],
          capacity: "Up to 250 Tons"
        }
      },
      {
        slug: "wheel-loader-rental",
        title: "Wheel Loader Rental",
        description: "Material handling and stockpile support for industrial yards.",
        overview: "High-performance wheel loaders for bulk material handling in construction sites, quarries, and industrial facilities.",
        applications: ["Stockpile management", "Bulk loading", "Site clearing", "Aggregate transport"],
        features: ["High bucket capacity", "Fuel-efficient engines", "Operator comfort & safety"]
      },
      {
        slug: "forklift-rental",
        title: "Forklift Rental",
        description: "Industrial forklifts for ports, fabrication shops, and warehouses.",
        overview: "Versatile forklift solutions for material handling. Our fleet includes electric, diesel, and rough terrain models for diverse environments.",
        applications: ["Warehouse operations", "Loading/Unloading", "Fabrication yard support", "Port logistics"],
        features: ["Side-shift capability", "Various mast heights", "Safety lights & alarms"],
        fleetDetails: {
          capacity: "3T to 25T units"
        }
      },
      {
        slug: "earthmoving-equipment-rental",
        title: "Earthmoving Equipment Rental",
        description: "Bulldozers, graders, and complementary fleet for mass earthworks.",
        overview: "Complete earthmoving solutions for large-scale development projects across Saudi Arabia.",
        applications: ["Road construction", "Land leveling", "Dam & embankment builds"],
        features: ["GPS grade control options", "Heavy-duty attachments", "24/7 technical support"]
      },
      {
        slug: "site-equipment-supply",
        title: "Site Equipment Supply",
        description: "Integrated equipment support for construction sites.",
        overview: "Providing essential site support equipment beyond heavy machinery, ensuring your project has the tools it needs for operational efficiency.",
        applications: ["Construction site support", "Infrastructure projects", "Temporary site setups"]
      },
      {
        slug: "long-term-machinery-rental",
        title: "Long-Term Machinery Rental",
        description: "Cost-effective long-term equipment leasing for major projects.",
        overview: "Tailored leasing solutions for projects lasting 6 months to 5 years. Includes full maintenance and replacement guarantees.",
        applications: ["Industrial facility builds", "Mining operations", "Long-term infrastructure contracts"],
        features: ["Fixed monthly rates", "Dedicated service team", "Equipment refresh options"]
      },
      {
        slug: "short-term-equipment-rental",
        title: "Short-Term Equipment Rental",
        description: "Flexible daily and weekly rental options for immediate needs.",
        overview: "Quick-response rental for immediate requirements. Ideal for emergency repairs, sudden workload increases, or specialized one-off tasks.",
        applications: ["Emergency maintenance", "Peak load support", "One-off specialized lifts"]
      }
    ]
  },
  {
    slug: "hiab-boom-truck-services",
    title: "Hiab & Boom Truck Services",
    description: "Professional lifting, loading, and material handling operations.",
    intro: "Professional Hiab and boom truck services for lifting, loading, unloading, and industrial material handling operations across Saudi Arabia.",
    services: [
      {
        slug: "hiab-truck-rental",
        title: "Hiab Truck Rental",
        description: "Knuckle-boom precision for congested sites and tight lifts.",
        overview: "Our Hiab trucks combine transport and lifting in one unit, making them ideal for urban projects and tight industrial spaces.",
        applications: ["Container positioning", "Generator installation", "Steel structure delivery"],
        features: ["Integrated crane & deck", "Remote control operation", "Compact footprint"]
      },
      {
        slug: "boom-truck-services",
        title: "Boom Truck Services",
        description: "Reliable lifting and transport for industrial and construction sites.",
        overview: "Boom trucks provide the reach and capacity needed for high-level material handling and equipment positioning.",
        applications: ["High-level installation", "Roof-top deliveries", "Construction material lifting"]
      },
      {
        slug: "material-handling-support",
        title: "Material Handling Support",
        description: "Professional support for efficient loading and moving of materials.",
        overview: "We don't just provide the equipment; we provide the expertise to manage your material flows safely and efficiently.",
        applications: ["Industrial logistics", "Laydown yard management", "Supply chain support"]
      },
      {
        slug: "loading-unloading-operations",
        title: "Loading & Unloading Operations",
        description: "Rapid turnarounds for convoys and laydown yards.",
        overview: "Expert teams and equipment for high-volume loading and unloading of industrial components.",
        applications: ["Port discharge", "Warehouse receiving", "Project site staging"]
      },
      {
        slug: "equipment-installation-support",
        title: "Equipment Installation Support",
        description: "Precision positioning for industrial machinery.",
        overview: "Specialized support for installing sensitive industrial equipment where precision is paramount.",
        applications: ["Factory setups", "Packaging line installation", "Medical equipment movement"]
      },
      {
        slug: "industrial-lifting-solutions",
        title: "Industrial Lifting Solutions",
        description: "Supervised lifts aligned to safety standards.",
        overview: "Engineered lifting solutions for complex industrial environments, ensuring compliance with all KSA safety regulations."
      }
    ]
  },
  {
    slug: "project-logistics-support",
    title: "Project Logistics Support",
    description: "Integrated logistics coordination and project cargo management.",
    intro: "End-to-end industrial operational and mobilization support, from port handling to site delivery.",
    services: [
      {
        slug: "industrial-logistics-coordination",
        title: "Industrial Logistics Coordination",
        description: "Managing complex supply chains for industrial projects.",
        overview: "Centralized coordination for all your industrial logistics needs, ensuring seamless movement of materials and equipment.",
        applications: ["Major plant builds", "Infrastructure developments", "Regional logistics hubs"]
      },
      {
        slug: "shutdown-logistics-support",
        title: "Shutdown Logistics Support",
        description: "Time-critical flows for maintenance turnarounds.",
        overview: "Specialized logistics support for refinery and plant shutdowns where every hour counts.",
        applications: ["Refinery turnarounds", "Power plant maintenance", "Chemical plant shutdowns"]
      },
      {
        slug: "equipment-mobilization",
        title: "Equipment Mobilization",
        description: "Rapid deployment of machinery to project sites.",
        overview: "Efficiently moving entire fleets to site to hit project start dates on time.",
        applications: ["Project startup", "Remote site mobilization", "Emergency fleet deployment"]
      },
      {
        slug: "route-survey-planning",
        title: "Route Survey & Planning",
        description: "Technical analysis for heavy cargo routes.",
        overview: "In-depth surveys to identify obstacles and plan the safest route for oversized loads.",
        applications: ["Pre-project planning", "Heavy haulage risk assessment", "Feasibility studies"]
      },
      {
        slug: "cargo-handling-support",
        title: "Cargo Handling Support",
        description: "Expert handling of industrial cargo at various stages.",
        overview: "Ensuring your cargo is handled with the right equipment and expertise to prevent damage and delays.",
        applications: ["Trans-shipment", "Site receiving", "Intermediate storage"]
      },
      {
        slug: "barge-loading-coordination",
        title: "Barge Loading Coordination",
        description: "Marine interface logistics for coastal projects.",
        overview: "Expert coordination for loading and securing heavy cargo on barges for marine transport.",
        applications: ["Coastal construction", "Offshore project support", "Inland waterway transport"]
      },
      {
        slug: "port-logistics-operations",
        title: "Port Logistics Operations",
        description: "Navigating port limits with certified efficiency.",
        overview: "Specialized operations within port limits to ensure smooth transitions from vessel to ground transport."
      }
    ]
  },
  {
    slug: "industrial-support-services",
    title: "Industrial Support Services",
    description: "End-to-end industrial operational and mobilization support.",
    intro: "Comprehensive support services tailored for the specific needs of industrial sectors in KSA.",
    services: [
      {
        slug: "construction-project-support",
        title: "Construction Project Support",
        description: "Tailored logistics for large-scale construction.",
        overview: "Providing the backbone for construction projects with reliable transport and equipment support.",
        applications: ["Roads & Bridges", "High-rise developments", "Urban infrastructure"]
      },
      {
        slug: "oil-gas-logistics-support",
        title: "Oil & Gas Logistics Support",
        description: "Meeting the rigorous demands of the energy sector.",
        overview: "Dedicated support for upstream and downstream operations, adhering to the highest safety and quality standards.",
        applications: ["Drilling site support", "Pipeline projects", "Refinery operations"]
      },
      {
        slug: "steel-fabrication-logistics",
        title: "Steel & Fabrication Logistics",
        description: "Moving long products and abnormal indivisible loads.",
        overview: "Specialized transport for steel structures, ensuring they arrive at site without damage or delay.",
        applications: ["Structural steel delivery", "Pressure vessel movement", "Modular fabrication transport"]
      },
      {
        slug: "infrastructure-project-support",
        title: "Infrastructure Project Support",
        description: "Supporting national-scale development projects.",
        overview: "Contributing to the growth of Saudi Arabia's infrastructure through dependable logistics and equipment support.",
        applications: ["Metro projects", "Water & Power utilities", "Telecom infrastructure"]
      },
      {
        slug: "factory-equipment-movement",
        title: "Factory Equipment Movement",
        description: "Precise movement of high-value industrial assets.",
        overview: "Ensuring sensitive factory equipment is moved with the care and precision it requires.",
        applications: ["Factory upgrades", "Line relocations", "Asset management"]
      },
      {
        slug: "site-mobilization-services",
        title: "Site Mobilization Services",
        description: "Everything you need to get your site operational.",
        overview: "From the first equipment delivery to full-scale operations, we support every stage of site mobilization."
      }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  for (const category of SERVICES_DATA) {
    if (category.slug === slug) return { type: "category" as const, data: category };
    const service = category.services.find((s) => s.slug === slug);
    if (service) return { type: "service" as const, data: service, category };
  }
  return null;
}

export function getAllSlugs() {
  const slugs: string[] = [];
  for (const category of SERVICES_DATA) {
    slugs.push(category.slug);
    for (const service of category.services) {
      slugs.push(service.slug);
    }
  }
  return slugs;
}
