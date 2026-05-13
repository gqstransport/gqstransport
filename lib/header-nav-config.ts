/** Static nav tree: labels resolved at runtime from `nav` + `navMenu` messages. */

export type ResolvedNavLink = {
  kind: "link";
  href: string;
  label: string;
};

export type ResolvedNavDropdown = {
  kind: "dropdown";
  id: string;
  label: string;
  indexHref: string;
  indexLabel: string;
  items: { href: string; label: string }[];
};

export type ResolvedNavSection = ResolvedNavLink | ResolvedNavDropdown;

export type HeaderNavChild = {
  href: string;
  /** `navMenu.{group}.{key}` */
  group: string;
  key: string;
};

export type HeaderNavDropdown = {
  kind: "dropdown";
  /** Trigger label from `nav.{navKey}` */
  navKey: string;
  /** Section index link (shown in panel header) */
  indexHref: string;
  children: HeaderNavChild[];
};

export type HeaderNavLink = {
  kind: "link";
  href: string;
  navKey: string;
};

export type HeaderNavEntry = HeaderNavLink | HeaderNavDropdown;

export const HEADER_NAV_ENTRIES: HeaderNavEntry[] = [
  { kind: "link", href: "/", navKey: "home" },
  {
    kind: "dropdown",
    navKey: "aboutUs",
    indexHref: "/about-us",
    children: [
      { href: "/about-us/company-overview", group: "about", key: "companyOverview" },
      { href: "/about-us/vision-mission", group: "about", key: "visionMission" },
      { href: "/about-us/core-values", group: "about", key: "coreValues" },
      { href: "/about-us/operational-areas", group: "about", key: "operationalAreas" },
      { href: "/about-us/why-choose-us", group: "about", key: "whyChooseUs" },
    ],
  },
  {
    kind: "dropdown",
    navKey: "services",
    indexHref: "/services",
    children: [
      { href: "/services/heavy-transport", group: "services", key: "heavyTransport" },
      { href: "/services/heavy-machinery-rental", group: "services", key: "heavyMachineryRental" },
      { href: "/services/hiab-boom-truck", group: "services", key: "hiabBoomTruck" },
      { href: "/services/project-logistics", group: "services", key: "projectLogistics" },
    ],
  },
  {
    kind: "dropdown",
    navKey: "fleetEquipment",
    indexHref: "/fleet-equipment",
    children: [
      { href: "/fleet-equipment/flatbed-trailers", group: "fleet", key: "flatbedTrailers" },
      { href: "/fleet-equipment/lowbed-trailers", group: "fleet", key: "lowbedTrailers" },
      { href: "/fleet-equipment/hiab-trucks", group: "fleet", key: "hiabTrucks" },
      { href: "/fleet-equipment/excavators", group: "fleet", key: "excavators" },
      { href: "/fleet-equipment/cranes", group: "fleet", key: "cranes" },
      { href: "/fleet-equipment/wheel-loaders", group: "fleet", key: "wheelLoaders" },
      { href: "/fleet-equipment/forklifts", group: "fleet", key: "forklifts" },
    ],
  },
  {
    kind: "dropdown",
    navKey: "industries",
    indexHref: "/industries",
    children: [
      { href: "/industries/oil-gas", group: "industries", key: "oilGas" },
      { href: "/industries/construction", group: "industries", key: "construction" },
      { href: "/industries/steel-fabrication", group: "industries", key: "steelFabrication" },
      { href: "/industries/ports-marine", group: "industries", key: "portsMarine" },
      { href: "/industries/industrial-manufacturing", group: "industries", key: "industrialManufacturing" },
      { href: "/industries/infrastructure-projects", group: "industries", key: "infrastructureProjects" },
    ],
  },
  {
    kind: "dropdown",
    navKey: "projects",
    indexHref: "/projects",
    children: [
      { href: "/projects/heavy-equipment-transport", group: "projects", key: "heavyEquipmentTransport" },
      { href: "/projects/cross-border-logistics", group: "projects", key: "crossBorderLogistics" },
      { href: "/projects/industrial-cargo-movement", group: "projects", key: "industrialCargoMovement" },
      { href: "/projects/port-handling-projects", group: "projects", key: "portHandlingProjects" },
      { href: "/projects/machinery-mobilization", group: "projects", key: "machineryMobilization" },
    ],
  },
  {
    kind: "dropdown",
    navKey: "resources",
    indexHref: "/blog",
    children: [
      { href: "/blog", group: "resources", key: "blogHome" },
      { href: "/blog/heavy-transport-news", group: "resources", key: "blogTransportNews" },
      { href: "/blog/machinery-rental-tips", group: "resources", key: "blogRentalTips" },
      { href: "/blog/logistics-industry-updates", group: "resources", key: "blogIndustryUpdates" },
      { href: "/blog/project-logistics-articles", group: "resources", key: "blogProjectLogistics" },
      { href: "/blog/safety-operations", group: "resources", key: "blogSafety" },
      { href: "/careers", group: "resources", key: "careers" },
      { href: "/careers/apply-online", group: "resources", key: "applyOnline" },
    ],
  },
  { kind: "link", href: "/contact-us", navKey: "contactUs" },
];
