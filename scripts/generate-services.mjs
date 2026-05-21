import fs from 'fs';
import path from 'path';

const services = [
  // Heavy Transport Services
  {
    id: "s1", slug: "flatbed-trailer-rental", categorySlug: "heavy-transport",
    title: "Flatbed Trailer Rental",
    description: "Reliable flatbed trailer rental services for transporting steel, construction materials, and standard cargo across Saudi Arabia.",
    image: "/assets/images/fleet_flatbed.png",
    overview: "GQS provides high-capacity flatbed trailers equipped for a variety of industrial loads. Perfect for construction materials, pipes, and general freight, ensuring safe and timely deliveries.",
    applications: ["Construction material transport", "Container logistics", "Steel & pipe movement", "General industrial cargo"],
    features: ["Standard & extendable decks", "Secure tie-down systems", "GPS-tracked fleet", "Professional operators"],
    fleetDetails: { types: ["40ft Flatbed", "Extendable Flatbed"], capacity: "Up to 50 Tons", availability: "Immediate across KSA" },
    status: "Active"
  },
  {
    id: "s2", slug: "lowbed-trailer-rental", categorySlug: "heavy-transport",
    title: "Lowbed Trailer Rental",
    description: "Specialized lowbed trailer solutions for oversized machinery and tall industrial equipment transport.",
    image: "/assets/images/fleet_lowbed.png",
    overview: "Designed for tall, heavy, and oversized machinery, our lowbed trailers provide safe clearance and robust transport for excavators, cranes, and large plant modules.",
    applications: ["Excavator & Dozer transport", "Crane component movement", "Industrial module delivery"],
    features: ["Low deck height for high clearance", "Heavy-duty ramps", "Multi-axle configurations"],
    fleetDetails: { types: ["Gooseneck Lowbed", "Step-deck Trailer"], capacity: "Up to 120 Tons", availability: "Project-based hire" },
    status: "Active"
  },
  {
    id: "s3", slug: "heavy-cargo-transportation", categorySlug: "heavy-transport",
    title: "Heavy Cargo Transportation",
    description: "Multi-axle transport solutions designed for moving exceptionally heavy and oversized industrial cargo.",
    image: "/assets/images/fleet_heavy_cargo.png",
    overview: "Our heavy cargo transportation services utilize high-tonnage multi-axle systems to transport oversized pressure vessels and heavy structural components safely and efficiently.",
    applications: ["Refinery pressure vessels", "Modular building modules", "Power plant generators"],
    features: ["Engineered haulage plans", "Route survey and permit approvals", "Hydraulic platform trailers"],
    fleetDetails: { types: ["Multi-Axle Hydraulic Trailer", "Heavy Step-Deck Trailer"], capacity: "Up to 250 Tons", availability: "Requires route survey" },
    status: "Active"
  },
  {
    id: "s4", slug: "oversized-cargo-movement", categorySlug: "heavy-transport",
    title: "Oversized Cargo Movement",
    description: "Expert coordination and transport of out-of-gauge (OOG) and oversized cargo for industrial projects.",
    image: "/assets/images/multi_axle_trailer_1779372858200.png",
    overview: "Handling oversized cargo requires precision. We provide end-to-end logistics, including route planning, escort coordination, and specialized equipment to ensure safe delivery.",
    applications: ["Wind turbine components", "Large storage tanks", "Factory machinery"],
    features: ["Specialized escort vehicles", "Government permit handling", "Customized tie-down engineering"],
    fleetDetails: { types: ["Modular trailers", "Extendable lowbeds"], capacity: "Various", availability: "On request" },
    status: "Active"
  },
  {
    id: "s5", slug: "cross-border-gcc-transport", categorySlug: "heavy-transport",
    title: "Cross-Border GCC Transport",
    description: "Seamless international freight and heavy cargo transportation across the GCC region.",
    image: "/assets/images/heavy_commercial_vehicle_1779372943837.png",
    overview: "We facilitate smooth cross-border logistics across Saudi Arabia, UAE, Bahrain, Kuwait, and Oman, managing customs clearance and secure transport for all cargo types.",
    applications: ["International plant relocation", "Regional supply chain", "Cross-border material delivery"],
    features: ["Customs clearance support", "Cross-border permits", "Real-time tracking across borders"],
    fleetDetails: { types: ["Standard and Heavy Transport Fleet"], capacity: "Various", availability: "Scheduled runs" },
    status: "Active"
  },
  {
    id: "s6", slug: "industrial-equipment-transportation", categorySlug: "heavy-transport",
    title: "Industrial Equipment Transportation",
    description: "Dedicated transport services for industrial machinery, transformers, and manufacturing equipment.",
    image: "/assets/images/semi_low_bed_trailer_1779372878042.png",
    overview: "Safely moving sensitive and heavy industrial equipment. We utilize air-ride suspensions and specialized trailers to protect high-value assets during transit.",
    applications: ["Transformer transport", "Manufacturing plant equipment", "Sensitive machinery"],
    features: ["Air-ride suspension trailers", "Vibration monitoring", "Tarp and protection services"],
    fleetDetails: { types: ["Air-ride flatbeds", "Enclosed trailers"], capacity: "Up to 60 Tons", availability: "Immediate" },
    status: "Active"
  },
  {
    id: "s7", slug: "project-cargo-handling", categorySlug: "heavy-transport",
    title: "Project Cargo Handling",
    description: "Comprehensive management and transportation of large-scale project cargo.",
    image: "/assets/images/project_logistics_barge_1779372987721.png",
    overview: "For massive industrial projects, we manage the entire cargo lifecycle—from vessel discharge at the port to final site installation, ensuring seamless project flow.",
    applications: ["Mega-project logistics", "EPC contractor support", "Infrastructure developments"],
    features: ["Dedicated project managers", "Laydown yard coordination", "Synchronized delivery schedules"],
    fleetDetails: { types: ["Mixed fleet deployment"], capacity: "Project specific", availability: "Long-term contracts" },
    status: "Active"
  },
  {
    id: "s8", slug: "port-to-site-transportation", categorySlug: "heavy-transport",
    title: "Port to Site Transportation",
    description: "Efficient port clearance and direct-to-site transportation for imported industrial goods.",
    image: "/assets/images/fleet_flatbed.png",
    overview: "Streamlining your supply chain by moving goods directly from major Saudi ports (Dammam, Jeddah, Jubail) to your project site without unnecessary delays.",
    applications: ["Imported machinery delivery", "Bulk material transport", "Container drayage"],
    features: ["Port clearance coordination", "Direct dispatch", "Container stripping services"],
    fleetDetails: { types: ["Flatbeds", "Container chassis"], capacity: "Standard cargo", availability: "Daily operations" },
    status: "Active"
  },

  // Heavy Machinery Rental
  {
    id: "s9", slug: "excavator-rental", categorySlug: "heavy-machinery-rental",
    title: "Excavator Rental",
    description: "High-performance tracked and wheeled excavators available for earthworks and trenching.",
    image: "/assets/images/fleet_excavator.png",
    overview: "Our modern excavator fleet offers various sizes and attachments, providing the power and precision needed for major earthmoving and site preparation operations.",
    applications: ["Earthmoving", "Trenching", "Demolition support", "Site preparation"],
    features: ["Modern OEM fleet", "Certified operators", "On-site maintenance support"],
    fleetDetails: { types: ["20T Excavator", "30T Excavator", "Long-reach units"], capacity: "Various", availability: "Daily, Weekly, Monthly" },
    status: "Active"
  },
  {
    id: "s10", slug: "crane-rental", categorySlug: "heavy-machinery-rental",
    title: "Crane Rental",
    description: "Mobile and crawler cranes with certified operators for safe industrial lifting.",
    image: "/assets/images/fleet_crane.png",
    overview: "Safe and efficient lifting solutions. We provide comprehensive lift planning, risk assessments, and highly certified equipment for complex industrial lifts.",
    applications: ["Industrial lifting", "Steel erection", "Equipment positioning", "Concrete works"],
    features: ["TUV certified cranes", "Aramco/SABIC approved operators", "Complete rigging sets"],
    fleetDetails: { types: ["50T to 250T Mobile Cranes", "Rough Terrain Cranes"], capacity: "Up to 250 Tons", availability: "On request" },
    status: "Active"
  },
  {
    id: "s11", slug: "wheel-loader-rental", categorySlug: "heavy-machinery-rental",
    title: "Wheel Loader Rental",
    description: "High-capacity wheel loaders for bulk material handling and site logistics.",
    image: "/assets/images/fleet_wheel_loader.png",
    overview: "Advanced, fuel-efficient wheel loaders designed for aggregate handling and industrial site support, maximizing productivity on your work site.",
    applications: ["Aggregate material loading", "Site clearing", "Bulk stock handling"],
    features: ["High bucket capacities", "Fuel-efficient engines", "All-terrain tyres"],
    fleetDetails: { types: ["3 CBM Loader", "5 CBM Loader"], capacity: "Up to 8 Tons payload", availability: "Immediate mobilization" },
    status: "Active"
  },
  {
    id: "s12", slug: "forklift-rental", categorySlug: "heavy-machinery-rental",
    title: "Forklift Rental",
    description: "Diesel and electric industrial forklifts for warehouse and cargo handling.",
    image: "/assets/images/fleet_forklift.png",
    overview: "Robust forklift rental options with varying mast heights to support warehouse operations, factory logistics, and port side-handling.",
    applications: ["Warehouse pallet movement", "Factory logistics", "Loading/unloading"],
    features: ["Diesel & Electric models", "Triplex masts", "Side-shift attachments"],
    fleetDetails: { types: ["3-Ton", "5-Ton", "10-Ton Forklifts"], capacity: "Up to 15 Tons", availability: "Immediate" },
    status: "Active"
  },
  {
    id: "s13", slug: "earthmoving-equipment-rental", categorySlug: "heavy-machinery-rental",
    title: "Earthmoving Equipment Rental",
    description: "A complete range of dozers, graders, and compactors for major civil works.",
    image: "/assets/images/fleet_earthmoving.png",
    overview: "Equip your civil projects with top-tier earthmoving machinery. We supply reliable equipment to ensure your groundworks are completed on schedule.",
    applications: ["Highway construction", "Land grading", "Soil compaction"],
    features: ["GPS grading technology available", "Heavy-duty rippers", "Experienced operators"],
    fleetDetails: { types: ["Bulldozers", "Motor Graders", "Rollers"], capacity: "Various", availability: "Project-based" },
    status: "Active"
  },
  {
    id: "s14", slug: "site-equipment-supply", categorySlug: "heavy-machinery-rental",
    title: "Site Equipment Supply",
    description: "Generators, compressors, and lighting towers for remote industrial sites.",
    image: "/assets/images/scissor_lift_1779372897964.png",
    overview: "Powering your operations in remote locations. We provide essential site equipment to keep your projects running 24/7 without interruption.",
    applications: ["Remote site powering", "Night-shift operations", "Pneumatic tool supply"],
    features: ["Silenced generators", "LED lighting towers", "High-CFM compressors"],
    fleetDetails: { types: ["Generators (50kVA - 500kVA)", "Air Compressors"], capacity: "Continuous operation", availability: "Immediate" },
    status: "Active"
  },
  {
    id: "s15", slug: "long-term-machinery-rental", categorySlug: "heavy-machinery-rental",
    title: "Long-Term Machinery Rental",
    description: "Cost-effective, multi-year leasing solutions for heavy machinery fleets.",
    image: "/assets/images/crawler_crane_1779372923714.png",
    overview: "Optimize your capital expenditure with our long-term rental agreements, featuring dedicated maintenance programs and equipment replacement guarantees.",
    applications: ["Mining operations", "Long-term infrastructure projects", "Facility management"],
    features: ["Fixed monthly rates", "Preventative maintenance included", "24/7 breakdown support"],
    fleetDetails: { types: ["Entire equipment portfolio"], capacity: "Fleet scale", availability: "Custom agreements" },
    status: "Active"
  },
  {
    id: "s16", slug: "short-term-equipment-rental", categorySlug: "heavy-machinery-rental",
    title: "Short-Term Equipment Rental",
    description: "Flexible daily and weekly rentals to manage peak workloads and emergencies.",
    image: "/assets/images/fleet_excavator.png",
    overview: "Need equipment fast? Our short-term rental options provide instant access to high-quality machinery to bridge gaps in your own fleet.",
    applications: ["Emergency repairs", "Peak season workloads", "Short-duration tasks"],
    features: ["Rapid mobilization", "No long-term commitment", "Fully fueled and serviced delivery"],
    fleetDetails: { types: ["Standard machinery"], capacity: "Various", availability: "Same-day delivery possible" },
    status: "Active"
  },

  // Hiab / Boom Truck Services
  {
    id: "s17", slug: "hiab-truck-rental", categorySlug: "hiab-boom-truck-services",
    title: "Hiab Truck Rental",
    description: "Knuckle-boom crane trucks combining transport and lifting in a single unit.",
    image: "/assets/images/fleet_boom_truck.png",
    overview: "Our Hiab trucks are the perfect solution for urban projects and tight spaces, offering the ability to lift, load, and transport materials efficiently without requiring a separate crane.",
    applications: ["Container positioning", "Generator installation", "Steel structure delivery"],
    features: ["Integrated crane & deck", "Remote control operation", "Compact footprint"],
    fleetDetails: { types: ["Standard Hiab", "Heavy lift Hiab"], capacity: "Up to 15 Tons lifting", availability: "Immediate" },
    status: "Active"
  },
  {
    id: "s18", slug: "boom-truck-services", categorySlug: "hiab-boom-truck-services",
    title: "Boom Truck Services",
    description: "Versatile stiff-boom trucks for extended reach and precise material placement.",
    image: "/assets/images/image_8.png",
    overview: "Boom trucks provide greater reach than standard knuckle-booms, making them ideal for roofing, elevated material delivery, and utility work.",
    applications: ["Roofing material delivery", "Utility pole installation", "Signage erection"],
    features: ["Long telescopic reach", "High stability", "Certified operators"],
    fleetDetails: { types: ["Telescopic Boom Trucks"], capacity: "Up to 20 Tons lifting", availability: "Immediate" },
    status: "Active"
  },
  {
    id: "s19", slug: "material-handling-support", categorySlug: "hiab-boom-truck-services",
    title: "Material Handling Support",
    description: "Dedicated equipment and personnel for on-site material distribution.",
    image: "/assets/images/hiab_crab_truck_1779372960214.png",
    overview: "We streamline your site logistics by providing specialized material handlers and Boom trucks to move goods precisely where they are needed.",
    applications: ["Construction site distribution", "Warehouse transfers", "Yard management"],
    features: ["Precision placement", "Reduced manual labor", "Increased site safety"],
    fleetDetails: { types: ["Hiab trucks", "Telehandlers"], capacity: "Site specific", availability: "Daily/Weekly" },
    status: "Active"
  },
  {
    id: "s20", slug: "loading-unloading-operations", categorySlug: "hiab-boom-truck-services",
    title: "Loading & Unloading Operations",
    description: "Expert handling services for discharging cargo from trailers and containers.",
    image: "/assets/images/fleet_boom_truck.png",
    overview: "Ensure safe and rapid unloading of valuable cargo with our specialized Hiab and forklift operations, minimizing turnaround times for transport vehicles.",
    applications: ["Container stripping", "Trailer offloading", "Fragile cargo handling"],
    features: ["Damage-free guarantee", "Specialized lifting attachments", "Rapid execution"],
    fleetDetails: { types: ["Hiab units", "Heavy Forklifts"], capacity: "Up to 20 Tons", availability: "Scheduled" },
    status: "Active"
  },
  {
    id: "s21", slug: "equipment-installation-support", categorySlug: "hiab-boom-truck-services",
    title: "Equipment Installation Support",
    description: "Precision lifting for placing machinery and equipment into final positions.",
    image: "/assets/images/image_8.png",
    overview: "Our experienced operators use precision Boom trucks to assist installation crews in placing HVAC units, transformers, and industrial machinery safely.",
    applications: ["HVAC rooftop installation", "Factory machinery placement", "Telecom tower support"],
    features: ["Millimeter precision", "Coordination with installation teams", "Rigging expertise"],
    fleetDetails: { types: ["Boom Trucks", "Hiab"], capacity: "Varies by reach", availability: "Project-based" },
    status: "Active"
  },
  {
    id: "s22", slug: "industrial-lifting-solutions", categorySlug: "hiab-boom-truck-services",
    title: "Industrial Lifting Solutions",
    description: "Customized lifting strategies utilizing compact truck-mounted cranes.",
    image: "/assets/images/hiab_crab_truck_1779372960214.png",
    overview: "For complex industrial environments where traditional cranes cannot operate, our specialized Hiab trucks provide the necessary lifting power and maneuverability.",
    applications: ["Refinery maintenance", "Indoor factory lifts", "Congested site operations"],
    features: ["Low-clearance capability", "Zero-emission indoor options (electric)", "Advanced load monitoring"],
    fleetDetails: { types: ["Specialized heavy Hiabs"], capacity: "Up to 25 Tons", availability: "Requires site survey" },
    status: "Active"
  },

  // Project Logistics Support
  {
    id: "s23", slug: "industrial-logistics-coordination", categorySlug: "project-logistics-support",
    title: "Industrial Logistics Coordination",
    description: "Centralized management of complex supply chains for mega-projects.",
    image: "/assets/images/project_logistics_barge_1779372987721.png",
    overview: "We act as your logistics control tower, coordinating multiple transport modes, managing laydown yards, and sequencing deliveries to optimize project execution.",
    applications: ["EPC projects", "Plant construction", "Infrastructure mega-projects"],
    features: ["Control tower approach", "Digital tracking systems", "Dedicated logistics engineers"],
    fleetDetails: { types: ["All asset classes"], capacity: "Unlimited", availability: "Long-term contracts" },
    status: "Active"
  },
  {
    id: "s24", slug: "shutdown-logistics-support", categorySlug: "project-logistics-support",
    title: "Shutdown Logistics Support",
    description: "Time-critical logistics operations for plant turnarounds and shutdowns.",
    image: "/assets/images/oil_gas_logistics_1779373006706.png",
    overview: "During a shutdown, every minute counts. We provide 24/7 dedicated transport and lifting support to ensure maintenance teams have the materials they need instantly.",
    applications: ["Refinery turnarounds", "Power plant maintenance", "Factory shutdowns"],
    features: ["24/7 dedicated dispatch", "Pre-staged equipment", "Emergency response teams"],
    fleetDetails: { types: ["Flatbeds", "Cranes", "Forklifts"], capacity: "High volume", availability: "Requires advance booking" },
    status: "Active"
  },
  {
    id: "s25", slug: "equipment-mobilization", categorySlug: "project-logistics-support",
    title: "Equipment Mobilization",
    description: "Rapid deployment of heavy machinery and infrastructure to new work sites.",
    image: "/assets/images/fleet_flatbed.png",
    overview: "Setting up a new site requires moving massive amounts of equipment. We handle the entire mobilization process, ensuring your site is operational on day one.",
    applications: ["New site setup", "Rig moves", "Camp mobilization"],
    features: ["Convoy management", "Route planning", "Synchronized arrival"],
    fleetDetails: { types: ["Lowbeds", "Heavy haulers"], capacity: "Fleet scale", availability: "Project-based" },
    status: "Active"
  },
  {
    id: "s26", slug: "route-survey-planning", categorySlug: "project-logistics-support",
    title: "Route Survey & Planning",
    description: "Engineering surveys and logistical planning for out-of-gauge cargo transport.",
    image: "/assets/images/multi_axle_trailer_1779372858200.png",
    overview: "Before moving heavy cargo, our engineering team conducts comprehensive route surveys to identify obstacles, assess bridge capacities, and plan bypasses.",
    applications: ["Heavy haulage prep", "Oversized module transport", "Remote site access"],
    features: ["3D swept path analysis", "Bridge structural assessments", "Obstacle removal coordination"],
    fleetDetails: { types: ["Survey vehicles"], capacity: "N/A", availability: "Pre-project phase" },
    status: "Active"
  },
  {
    id: "s27", slug: "cargo-handling-support", categorySlug: "project-logistics-support",
    title: "Cargo Handling Support",
    description: "Professional rigging and handling crews for sensitive project materials.",
    image: "/assets/images/founder_operations.png",
    overview: "We provide highly trained rigging crews and specialized tackle to handle delicate, heavy, or awkwardly shaped cargo without risk of damage.",
    applications: ["Turbine handling", "Glass facade movement", "Sensitive electronics transport"],
    features: ["Aramco certified riggers", "Specialized spreader beams", "Soft-sling techniques"],
    fleetDetails: { types: ["Rigging gear", "Cranes"], capacity: "Varies", availability: "On request" },
    status: "Active"
  },
  {
    id: "s28", slug: "barge-loading-coordination", categorySlug: "project-logistics-support",
    title: "Barge Loading Coordination",
    description: "Roll-on/Roll-off (RoRo) and lifting operations for marine transport.",
    image: "/assets/images/project_logistics_barge_1779372987721.png",
    overview: "Managing the complex interface between land and sea. We coordinate the secure loading and lashing of heavy cargo onto barges and vessels.",
    applications: ["Marine infrastructure projects", "Island developments", "Offshore rig support"],
    features: ["RoRo engineering", "Marine lashing certification", "Tide window management"],
    fleetDetails: { types: ["Multi-axle trailers", "Heavy Cranes"], capacity: "Vessel limits", availability: "Project-based" },
    status: "Active"
  },
  {
    id: "s29", slug: "port-logistics-operations", categorySlug: "project-logistics-support",
    title: "Port Logistics Operations",
    description: "Dedicated operations within port facilities for rapid cargo turnaround.",
    image: "/assets/images/fleet_heavy_cargo.png",
    overview: "We maintain a strong presence at major Saudi ports, offering cross-docking, temporary storage, and rapid dispatch to keep your supply chain moving.",
    applications: ["Import/Export handling", "Customs inspection support", "Break-bulk handling"],
    features: ["Port-access permitted fleet", "Stevedoring coordination", "Secure storage areas"],
    fleetDetails: { types: ["Terminal tractors", "Flatbeds"], capacity: "High volume", availability: "Continuous" },
    status: "Active"
  },

  // Industrial Support Services
  {
    id: "s30", slug: "construction-project-support", categorySlug: "industrial-support-services",
    title: "Construction Project Support",
    description: "Integrated logistics and equipment supply for major civil construction.",
    image: "/assets/images/fleet_earthmoving.png",
    overview: "From groundbreaking to handover, we supply the transport and machinery required to keep construction projects on schedule and within budget.",
    applications: ["Commercial developments", "Residential mega-projects", "Infrastructure"],
    features: ["Dedicated site coordinators", "Flexible fleet scaling", "Just-in-time delivery"],
    fleetDetails: { types: ["Mixed construction fleet"], capacity: "Project scale", availability: "Long-term contracts" },
    status: "Active"
  },
  {
    id: "s31", slug: "oil-gas-logistics-support", categorySlug: "industrial-support-services",
    title: "Oil & Gas Logistics Support",
    description: "Highly compliant logistics services tailored for the upstream and downstream sectors.",
    image: "/assets/images/oil_gas_logistics_1779373006706.png",
    overview: "Operating in the Oil & Gas sector demands the highest safety standards. Our fleet and operators are fully certified to Aramco and SABIC requirements.",
    applications: ["Rig moves", "Pipeline construction", "Refinery maintenance"],
    features: ["Aramco/SABIC compliance", "Explosion-proof equipment options", "HSE focused operations"],
    fleetDetails: { types: ["Specialized O&G fleet"], capacity: "Various", availability: "Contract-based" },
    status: "Active"
  },
  {
    id: "s32", slug: "steel-fabrication-logistics", categorySlug: "industrial-support-services",
    title: "Steel & Fabrication Logistics",
    description: "Specialized transport for exceptionally long and heavy structural steel.",
    image: "/assets/images/semi_low_bed_trailer_1779372878042.png",
    overview: "We provide extendable trailers and specialized handling for structural steel, ensuring girders and fabricated sections arrive safely and ready for erection.",
    applications: ["Bridge construction", "Skyscraper framing", "Industrial shed builds"],
    features: ["Extendable flatbeds (up to 30m)", "Heavy-duty stanchions", "Tandem lifting support"],
    fleetDetails: { types: ["Extendable Trailers"], capacity: "Up to 80 Tons per load", availability: "Daily/Weekly" },
    status: "Active"
  },
  {
    id: "s33", slug: "infrastructure-project-support", categorySlug: "industrial-support-services",
    title: "Infrastructure Project Support",
    description: "Logistical backbone for national rail, road, and utility developments.",
    image: "/assets/images/fleet_wheel_loader.png",
    overview: "Supporting Vision 2030 by providing the heavy lift and transport capacity required for the Kingdom's massive infrastructure overhaul.",
    applications: ["Metro projects", "Highway expansions", "Water desalination plants"],
    features: ["High-volume material transport", "Night-time city operations", "Dedicated fleet allocation"],
    fleetDetails: { types: ["Tippers", "Flatbeds", "Cranes"], capacity: "Massive scale", availability: "Long-term" },
    status: "Active"
  },
  {
    id: "s34", slug: "factory-equipment-movement", categorySlug: "industrial-support-services",
    title: "Factory Equipment Movement",
    description: "Internal factory relocations and heavy machinery installations.",
    image: "/assets/images/scissor_lift_1779372897964.png",
    overview: "Moving machinery inside an active factory requires extreme care. We use specialized skates, jacks, and compact cranes to move equipment without disrupting operations.",
    applications: ["Production line relocation", "New machine installation", "Factory decommissioning"],
    features: ["Air-skate systems", "Electric compact cranes", "Minimal disruption guarantee"],
    fleetDetails: { types: ["Jacking & Skidding systems"], capacity: "Up to 400 Tons", availability: "Scheduled" },
    status: "Active"
  },
  {
    id: "s35", slug: "site-mobilization-services", categorySlug: "industrial-support-services",
    title: "Site Mobilization Services",
    description: "Turnkey mobilization including portacabins, fencing, and initial groundworks.",
    image: "/assets/images/founder_operations.png",
    overview: "We take an empty plot of land and turn it into a fully functional construction site, handling everything from office delivery to temporary power setup.",
    applications: ["Remote camp setup", "Urban construction site prep", "Event logistics"],
    features: ["Single point of contact", "Rapid execution", "Comprehensive equipment supply"],
    fleetDetails: { types: ["Flatbeds", "Hiabs", "Earthmovers"], capacity: "Full site", availability: "Project-based" },
    status: "Active"
  }
];

const json = JSON.stringify(services, null, 2);
fs.writeFileSync('d:/projects/gqs-project/gqs/data/services.json', json);
fs.writeFileSync('d:/projects/gqs-project/gqs-backend/data/services.json', json);

console.log('Successfully generated services.json in both locations.');
