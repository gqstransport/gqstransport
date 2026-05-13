import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** @typedef {{ path: string; comp: string; ns: string; titleEn: string; titleAr: string; descEn: string; descAr: string }} RouteDef */

/** @type {RouteDef[]} */
const routes = [
  // About Us
  {
    path: "about-us/company-overview",
    comp: "CompanyOverviewPage",
    ns: "pages.aboutUs.companyOverview",
    titleEn: "Company Overview",
    titleAr: "نبذة عن الشركة",
    descEn: "Learn how Gulf Quality Structures delivers heavy transport and equipment solutions across KSA.",
    descAr: "تعرّف على كيفية تقديم جلف كواليتي ستروكتشرز لحلول النقل الثقيل والمعدات في المملكة.",
  },
  {
    path: "about-us/vision-mission",
    comp: "VisionMissionPage",
    ns: "pages.aboutUs.visionMission",
    titleEn: "Vision & Mission",
    titleAr: "الرؤية والرسالة",
    descEn: "Our long-term direction and the commitments that guide every mobilization.",
    descAr: "توجّهنا على المدى الطويل والالتزامات التي توجه كل عملية تحريك.",
  },
  {
    path: "about-us/core-values",
    comp: "CoreValuesPage",
    ns: "pages.aboutUs.coreValues",
    titleEn: "Core Values",
    titleAr: "القيم الأساسية",
    descEn: "Safety, reliability, and partnership embedded in how we operate.",
    descAr: "السلامة والموثوقية والشراكة مدمجة في أسلوب عملنا.",
  },
  {
    path: "about-us/operational-areas",
    comp: "OperationalAreasPage",
    ns: "pages.aboutUs.operationalAreas",
    titleEn: "Operational Areas",
    titleAr: "المناطق التشغيلية",
    descEn: "Regions and corridors where GQS supports critical logistics.",
    descAr: "المناطق والممرات التي تدعم فيها جي كيو إس اللوجستيات الحرجة.",
  },
  {
    path: "about-us/why-choose-us",
    comp: "WhyChooseUsAboutPage",
    ns: "pages.aboutUs.whyChooseUs",
    titleEn: "Why Choose Us",
    titleAr: "لماذا نحن",
    descEn: "Mobilization speed, fleet depth, and compliance you can audit with confidence.",
    descAr: "سرعة التحريك وعمق الأسطول والامتثال الذي يمكنك التحقق منه بثقة.",
  },
  // Services — Heavy Transport
  {
    path: "services/heavy-transport/flatbed-trailer-rental",
    comp: "FlatbedTrailerRentalPage",
    ns: "pages.services.heavyTransport.flatbedTrailerRental",
    titleEn: "Flatbed Trailer Rental",
    titleAr: "تأجير مقطورات مسطحة",
    descEn: "Versatile flatbed capacity for standard and oversized deck loads.",
    descAr: "قدرة مسطحة متعددة الاستخدامات للأحمال القياسية والممتدة.",
  },
  {
    path: "services/heavy-transport/lowbed-trailer-rental",
    comp: "LowbedTrailerRentalPage",
    ns: "pages.services.heavyTransport.lowbedTrailerRental",
    titleEn: "Lowbed Trailer Rental",
    titleAr: "تأجير مقطورات لووبيد",
    descEn: "Low deck height for tall and heavy machinery moves.",
    descAr: "ارتفاع سطح منخفض لنقل المعدات الطويلة والثقيلة.",
  },
  {
    path: "services/heavy-transport/heavy-cargo-transport",
    comp: "HeavyCargoTransportPage",
    ns: "pages.services.heavyTransport.heavyCargoTransport",
    titleEn: "Heavy Cargo Transport",
    titleAr: "نقل البضائع الثقيلة",
    descEn: "Engineered moves for concentrated weights and critical schedules.",
    descAr: "عمليات نقل هندسية للأوزان المركزة والجداول الحرجة.",
  },
  {
    path: "services/heavy-transport/cross-border-transport",
    comp: "CrossBorderTransportPage",
    ns: "pages.services.heavyTransport.crossBorderTransport",
    titleEn: "Cross-Border Transport",
    titleAr: "النقل عبر الحدود",
    descEn: "Coordinated documentation and escorts for GCC corridor projects.",
    descAr: "تنسيق للوثائق والمرافق لمشاريع ممر دول مجلس التعاون.",
  },
  {
    path: "services/heavy-transport/industrial-logistics-support",
    comp: "IndustrialLogisticsSupportPage",
    ns: "pages.services.heavyTransport.industrialLogisticsSupport",
    titleEn: "Industrial Logistics Support",
    titleAr: "دعم لوجستي صناعي",
    descEn: "Staging, consolidation, and site delivery aligned to shutdown windows.",
    descAr: "تجميع وتسليم للموقع متوافق مع نوافذ الإيقاف.",
  },
  // Services — Heavy Machinery Rental
  {
    path: "services/heavy-machinery-rental/excavator-rental",
    comp: "ExcavatorRentalPage",
    ns: "pages.services.heavyMachineryRental.excavatorRental",
    titleEn: "Excavator Rental",
    titleAr: "تأجير حفارات",
    descEn: "Tracked and wheeled excavators for earthworks and plant projects.",
    descAr: "حفارات مجنزرة وعجلات لأعمال الحفر ومشاريع المصانع.",
  },
  {
    path: "services/heavy-machinery-rental/crane-rental",
    comp: "CraneRentalPage",
    ns: "pages.services.heavyMachineryRental.craneRental",
    titleEn: "Crane Rental",
    titleAr: "تأجير رافعات",
    descEn: "Lift planning with certified operators and rigging supervision.",
    descAr: "تخطيط الرفع مع مشغلين معتمدين وإشراف على التجهيز.",
  },
  {
    path: "services/heavy-machinery-rental/wheel-loader-rental",
    comp: "WheelLoaderRentalPage",
    ns: "pages.services.heavyMachineryRental.wheelLoaderRental",
    titleEn: "Wheel Loader Rental",
    titleAr: "تأجير شيول",
    descEn: "Material handling and stockpile support for industrial yards.",
    descAr: "مناولة مواد ودعم تكديس للساحات الصناعية.",
  },
  {
    path: "services/heavy-machinery-rental/forklift-rental",
    comp: "ForkliftRentalPage",
    ns: "pages.services.heavyMachineryRental.forkliftRental",
    titleEn: "Forklift Rental",
    titleAr: "تأجير رافعات شوكية",
    descEn: "Industrial forklifts for ports, fabrication shops, and warehouses.",
    descAr: "رافعات شوكية صناعية للموانئ وورش التصنيع والمستودعات.",
  },
  {
    path: "services/heavy-machinery-rental/earthmoving-equipment",
    comp: "EarthmovingEquipmentPage",
    ns: "pages.services.heavyMachineryRental.earthmovingEquipment",
    titleEn: "Earthmoving Equipment",
    titleAr: "معدات حفر وتحريك تربة",
    descEn: "Bulldozers, graders, and complementary fleet for mass earthworks.",
    descAr: "بلدوزرات ومهيّجات وأسطول مكمل لأعمال الحفر الكبرى.",
  },
  // Services — Hiab / Boom Truck
  {
    path: "services/hiab-boom-truck/material-handling",
    comp: "HiabMaterialHandlingPage",
    ns: "pages.services.hiabBoomTruck.materialHandling",
    titleEn: "Material Handling",
    titleAr: "مناولة المواد",
    descEn: "Knuckle-boom precision for congested sites and tight lifts.",
    descAr: "دقة ذراع مفصلي للمواقع المزدحمة والرفع في مساحات ضيقة.",
  },
  {
    path: "services/hiab-boom-truck/loading-unloading",
    comp: "HiabLoadingUnloadingPage",
    ns: "pages.services.hiabBoomTruck.loadingUnloading",
    titleEn: "Loading & Unloading",
    titleAr: "التحميل والتفريغ",
    descEn: "Rapid turnarounds for convoys, laydown yards, and port hand-offs.",
    descAr: "تدوير سريع للقوافل وساحات التخزين المؤقت وتسليم الموانئ.",
  },
  {
    path: "services/hiab-boom-truck/site-installation-support",
    comp: "HiabSiteInstallationSupportPage",
    ns: "pages.services.hiabBoomTruck.siteInstallationSupport",
    titleEn: "Site Installation Support",
    titleAr: "دعم التركيب في الموقع",
    descEn: "Positioning skids, modules, and packaged equipment with millimetre control.",
    descAr: "وضع الوحدات والمعدات المعبأة بدقة عالية.",
  },
  {
    path: "services/hiab-boom-truck/industrial-lifting-services",
    comp: "HiabIndustrialLiftingServicesPage",
    ns: "pages.services.hiabBoomTruck.industrialLiftingServices",
    titleEn: "Industrial Lifting Services",
    titleAr: "خدمات الرفع الصناعي",
    descEn: "Supervised lifts aligned to your method statements and PTW process.",
    descAr: "عمليات رفع بإشراف متوافقة مع بيانات الأسلوب وإجراءات تصريح العمل.",
  },
  // Services — Project Logistics
  {
    path: "services/project-logistics/port-cargo-handling",
    comp: "PortCargoHandlingPage",
    ns: "pages.services.projectLogistics.portCargoHandling",
    titleEn: "Port Cargo Handling",
    titleAr: "مناولة البضائع في الموانئ",
    descEn: "Marshalling, lifting, and hand-off coordination inside port limits.",
    descAr: "تنسيق التجميع والرفع والتسليم داخل حدود الميناء.",
  },
  {
    path: "services/project-logistics/barge-loading-support",
    comp: "BargeLoadingSupportPage",
    ns: "pages.services.projectLogistics.bargeLoadingSupport",
    titleEn: "Barge Loading Support",
    titleAr: "دعم تحميل البارجات",
    descEn: "Deck loading plans and marine interface logistics.",
    descAr: "خطط تحميل السطح ولوجستيات الواجهة البحرية.",
  },
  {
    path: "services/project-logistics/shutdown-logistics",
    comp: "ShutdownLogisticsPage",
    ns: "pages.services.projectLogistics.shutdownLogistics",
    titleEn: "Shutdown Logistics",
    titleAr: "لوجستيات الإيقاف",
    descEn: "Time-critical flows for turnarounds and maintenance events.",
    descAr: "تدفقات حساسة للوقت لأعمال الإيقاف والصيانة.",
  },
  {
    path: "services/project-logistics/equipment-mobilization",
    comp: "EquipmentMobilizationPage",
    ns: "pages.services.projectLogistics.equipmentMobilization",
    titleEn: "Equipment Mobilization",
    titleAr: "تحريك المعدات",
    descEn: "Route studies, permits, and convoy management for heavy rolls.",
    descAr: "دراسات المسارات والتصاريح وإدارة القوافل للتحريك الثقيل.",
  },
  {
    path: "services/project-logistics/route-survey-planning",
    comp: "RouteSurveyPlanningPage",
    ns: "pages.services.projectLogistics.routeSurveyPlanning",
    titleEn: "Route Survey & Planning",
    titleAr: "مسح المسار والتخطيط",
    descEn: "LiDAR, swept-path analysis, and civil interface recommendations.",
    descAr: "تحليل المسار الممسوح وتوصيات الواجهة المدنية.",
  },
  // Fleet & Equipment
  {
    path: "fleet-equipment/flatbed-trailers",
    comp: "FleetFlatbedTrailersPage",
    ns: "pages.fleetEquipment.flatbedTrailers",
    titleEn: "Flatbed Trailers",
    titleAr: "مقطورات مسطحة",
    descEn: "Payload envelopes, tie-down patterns, and regional availability.",
    descAr: "أوزان حمولة وأنماط تثبيت وتوافر إقليمي.",
  },
  {
    path: "fleet-equipment/lowbed-trailers",
    comp: "FleetLowbedTrailersPage",
    ns: "pages.fleetEquipment.lowbedTrailers",
    titleEn: "Lowbed Trailers",
    titleAr: "مقطورات لووبيد",
    descEn: "Multi-axle configurations for ultra-heavy industrial rolls.",
    descAr: "تكوينات متعددة المحاور للتحريك فائق الثقل.",
  },
  {
    path: "fleet-equipment/hiab-trucks",
    comp: "FleetHiabTrucksPage",
    ns: "pages.fleetEquipment.hiabTrucks",
    titleEn: "Hiab Trucks",
    titleAr: "شاحنات هايب",
    descEn: "Boom reach classes and operator certifications on file.",
    descAr: "فئات بلوغ الذراع وشهادات المشغلين.",
  },
  {
    path: "fleet-equipment/excavators",
    comp: "FleetExcavatorsPage",
    ns: "pages.fleetEquipment.excavators",
    titleEn: "Excavators",
    titleAr: "حفارات",
    descEn: "OEM mix, attachment packages, and maintenance windows.",
    descAr: "مزيج الشركات المصنعة وحزم المرفقات ونوافذ الصيانة.",
  },
  {
    path: "fleet-equipment/cranes",
    comp: "FleetCranesPage",
    ns: "pages.fleetEquipment.cranes",
    titleEn: "Cranes",
    titleAr: "رافعات",
    descEn: "Chart capacities, counterweight strategies, and lift envelopes.",
    descAr: "قدرات الجداول واستراتيجيات الأوزان المضادة وأغلفة الرفع.",
  },
  {
    path: "fleet-equipment/wheel-loaders",
    comp: "FleetWheelLoadersPage",
    ns: "pages.fleetEquipment.wheelLoaders",
    titleEn: "Wheel Loaders",
    titleAr: "شيول",
    descEn: "Bucket families, payload match, and fuel telemetry options.",
    descAr: "عائلات الجرافات ومطابقة الحمولة وخيارات القياس عن بُعد.",
  },
  {
    path: "fleet-equipment/forklifts",
    comp: "FleetForkliftsPage",
    ns: "pages.fleetEquipment.forklifts",
    titleEn: "Forklifts",
    titleAr: "رافعات شوكية",
    descEn: "Industrial ratings, attachment stacks, and service contracts.",
    descAr: "تصنيفات صناعية وحزم مرفقات وعقود خدمة.",
  },
  // Industries
  {
    path: "industries/oil-gas",
    comp: "IndustryOilGasPage",
    ns: "pages.industries.oilGas",
    titleEn: "Oil & Gas",
    titleAr: "النفط والغاز",
    descEn: "Turnaround transport, module skids, and remote site access.",
    descAr: "نقل الإيقاف والهياكل الوحداتية والوصول للمواقع النائية.",
  },
  {
    path: "industries/construction",
    comp: "IndustryConstructionPage",
    ns: "pages.industries.construction",
    titleEn: "Construction",
    titleAr: "البناء",
    descEn: "Infrastructure and vertical build logistics across KSA.",
    descAr: "لوجستيات البنية التحتية والبناء العمودي في أنحاء المملكة.",
  },
  {
    path: "industries/steel-fabrication",
    comp: "IndustrySteelFabricationPage",
    ns: "pages.industries.steelFabrication",
    titleEn: "Steel & Fabrication",
    titleAr: "الصلب والتصنيع",
    descEn: "Long product, plate, and abnormal indivisible loads.",
    descAr: "منتجات طويلة وألواح وأحمال غير قابلة للتجزئة.",
  },
  {
    path: "industries/ports-marine",
    comp: "IndustryPortsMarinePage",
    ns: "pages.industries.portsMarine",
    titleEn: "Ports & Marine",
    titleAr: "الموانئ والبحري",
    descEn: "Quayside mobilizations and coastal project support.",
    descAr: "تحريك الرصيف ودعم المشاريع الساحلية.",
  },
  {
    path: "industries/industrial-manufacturing",
    comp: "IndustryIndustrialManufacturingPage",
    ns: "pages.industries.industrialManufacturing",
    titleEn: "Industrial Manufacturing",
    titleAr: "التصنيع الصناعي",
    descEn: "Press lines, turbines, and packaged plant relocations.",
    descAr: "خطوط الضغ وتوربينات ونقل المصانع المعبأة.",
  },
  {
    path: "industries/infrastructure-projects",
    comp: "IndustryInfrastructureProjectsPage",
    ns: "pages.industries.infrastructureProjects",
    titleEn: "Infrastructure Projects",
    titleAr: "مشاريع البنية التحتية",
    descEn: "Girders, bridge segments, and metro equipment convoys.",
    descAr: "عوارض وأجزاء جسور وقوافل معدات المترو.",
  },
  // Projects
  {
    path: "projects/heavy-equipment-transport",
    comp: "ProjectHeavyEquipmentTransportPage",
    ns: "pages.projects.heavyEquipmentTransport",
    titleEn: "Heavy Equipment Transport",
    titleAr: "نقل المعدات الثقيلة",
    descEn: "Selected moves showcasing engineering controls and schedule fidelity.",
    descAr: "عمليات مختارة تُظهر الضوابط الهندسية والالتزام بالجدول.",
  },
  {
    path: "projects/cross-border-logistics",
    comp: "ProjectCrossBorderLogisticsPage",
    ns: "pages.projects.crossBorderLogistics",
    titleEn: "Cross-Border Logistics",
    titleAr: "اللوجستيات عبر الحدود",
    descEn: "GCC corridor deliveries with documentation transparency.",
    descAr: "تسليمات ممر مجلس التعاون مع شفافية الوثائق.",
  },
  {
    path: "projects/industrial-cargo-movement",
    comp: "ProjectIndustrialCargoMovementPage",
    ns: "pages.projects.industrialCargoMovement",
    titleEn: "Industrial Cargo Movement",
    titleAr: "نقل البضائع الصناعية",
    descEn: "Factory-to-foundation flows for critical components.",
    descAr: "تدفقات من المصنع إلى الأساس للمكونات الحرجة.",
  },
  {
    path: "projects/port-handling-projects",
    comp: "ProjectPortHandlingProjectsPage",
    ns: "pages.projects.portHandlingProjects",
    titleEn: "Port Handling Projects",
    titleAr: "مشاريع المناولة في الموانئ",
    descEn: "Berth-side lifts and marshalling discipline under marine survey.",
    descAr: "رفع على الرصيف وانضباط التجميع تحت إشراف بحري.",
  },
  {
    path: "projects/machinery-mobilization",
    comp: "ProjectMachineryMobilizationPage",
    ns: "pages.projects.machineryMobilization",
    titleEn: "Machinery Mobilization",
    titleAr: "تحريك الآليات",
    descEn: "Shutdown and greenfield equipment positioning programs.",
    descAr: "برامج وضع المعدات للإيقاف والمواقع الجديدة.",
  },
  // Blog
  {
    path: "blog/heavy-transport-news",
    comp: "BlogHeavyTransportNewsPage",
    ns: "pages.blog.heavyTransportNews",
    titleEn: "Heavy Transport News",
    titleAr: "أخبار النقل الثقيل",
    descEn: "Regulatory updates, corridor notices, and fleet innovations.",
    descAr: "تحديثات تنظيمية وتنويهات ممرات وابتكارات الأسطول.",
  },
  {
    path: "blog/machinery-rental-tips",
    comp: "BlogMachineryRentalTipsPage",
    ns: "pages.blog.machineryRentalTips",
    titleEn: "Machinery Rental Tips",
    titleAr: "نصائح تأجير المعدات",
    descEn: "Practical guidance for sizing attachments and shift planning.",
    descAr: "إرشادات عملية لاختيار المرفقات وتخطيط الورديات.",
  },
  {
    path: "blog/logistics-industry-updates",
    comp: "BlogLogisticsIndustryUpdatesPage",
    ns: "pages.blog.logisticsIndustryUpdates",
    titleEn: "Logistics Industry Updates",
    titleAr: "تحديثات قطاع اللوجستيات",
    descEn: "Macro trends affecting heavy lift and transport procurement.",
    descAr: "اتجاهات كبرى تؤثر على شراء الرفع الثقيل والنقل.",
  },
  {
    path: "blog/project-logistics-articles",
    comp: "BlogProjectLogisticsArticlesPage",
    ns: "pages.blog.projectLogisticsArticles",
    titleEn: "Project Logistics Articles",
    titleAr: "مقالات لوجستيات المشاريع",
    descEn: "Deep dives on surveys, marine interfaces, and critical path.",
    descAr: "تحليلات للمسح والواجهات البحرية والمسار الحرج.",
  },
  {
    path: "blog/safety-operations",
    comp: "BlogSafetyOperationsPage",
    ns: "pages.blog.safetyOperations",
    titleEn: "Safety & Operations",
    titleAr: "السلامة والعمليات",
    descEn: "Field lessons, PTW reminders, and incident prevention patterns.",
    descAr: "دروس ميدانية وتذكيرات تصاريح العمل وأنماط الوقاية من الحوادث.",
  },
  // Careers
  {
    path: "careers/drivers",
    comp: "CareersDriversPage",
    ns: "pages.careers.drivers",
    titleEn: "Drivers",
    titleAr: "السائقون",
    descEn: "Articulated, modular, and escort-qualified driving careers.",
    descAr: "مسارات مهنية للسائقين المؤهلين للمقطورات والمرافقة.",
  },
  {
    path: "careers/operators",
    comp: "CareersOperatorsPage",
    ns: "pages.careers.operators",
    titleEn: "Operators",
    titleAr: "المشغّلون",
    descEn: "Crane, Hiab, and heavy equipment operator opportunities.",
    descAr: "فرص لمشغلي الرافعات والهايب والمعدات الثقيلة.",
  },
  {
    path: "careers/logistics-coordinators",
    comp: "CareersLogisticsCoordinatorsPage",
    ns: "pages.careers.logisticsCoordinators",
    titleEn: "Logistics Coordinators",
    titleAr: "منسقو اللوجستيات",
    descEn: "Schedulers and customer liaisons for complex mobilizations.",
    descAr: "مخططو جداول ومسؤولو تواصل للتحريك المعقد.",
  },
  {
    path: "careers/sales-executives",
    comp: "CareersSalesExecutivesPage",
    ns: "pages.careers.salesExecutives",
    titleEn: "Sales Executives",
    titleAr: "تنفيذيو المبيعات",
    descEn: "Account growth for transport, rental, and project logistics.",
    descAr: "نمو الحسابات في النقل والتأجير ولوجستيات المشاريع.",
  },
  {
    path: "careers/apply-online",
    comp: "CareersApplyOnlinePage",
    ns: "pages.careers.applyOnline",
    titleEn: "Apply Online",
    titleAr: "التقديم عبر الإنترنت",
    descEn: "Submit credentials and fleet certifications securely.",
    descAr: "أرسل المؤهلات وشهادات الأسطول بأمان.",
  },
  // Contact
  {
    path: "contact-us/inquiry-form",
    comp: "ContactInquiryFormPage",
    ns: "pages.contactUs.inquiryForm",
    titleEn: "Inquiry Form",
    titleAr: "نموذج الاستفسار",
    descEn: "Structured questions so we can respond with an executable plan.",
    descAr: "أسئلة منظمة لنرد بخطة قابلة للتنفيذ.",
  },
  {
    path: "contact-us/office-location",
    comp: "ContactOfficeLocationPage",
    ns: "pages.contactUs.officeLocation",
    titleEn: "Office Location",
    titleAr: "موقع المكتب",
    descEn: "Visit coordination and parking guidance for guests.",
    descAr: "تنسيق الزيارة وإرشادات المواقف للزوار.",
  },
  {
    path: "contact-us/whatsapp-contact",
    comp: "ContactWhatsappPage",
    ns: "pages.contactUs.whatsappContact",
    titleEn: "WhatsApp Contact",
    titleAr: "تواصل واتساب",
    descEn: "Rapid messaging for operational updates and media sharing.",
    descAr: "مراسلة سريعة للتحديثات التشغيلية ومشاركة الوسائط.",
  },
  {
    path: "contact-us/google-map",
    comp: "ContactGoogleMapPage",
    ns: "pages.contactUs.googleMap",
    titleEn: "Google Map",
    titleAr: "خريطة جوجل",
    descEn: "Directions to our offices and primary marshalling yards.",
    descAr: "الاتجاهات إلى مكاتبنا وساحات التجميع الرئيسية.",
  },
  // Request a quote
  {
    path: "request-a-quote/transport-inquiry",
    comp: "QuoteTransportInquiryPage",
    ns: "pages.requestAQuote.transportInquiry",
    titleEn: "Transport Inquiry",
    titleAr: "استفسار النقل",
    descEn: "Share routes, dimensions, and schedule to receive pricing.",
    descAr: "شارك المسارات والأبعاد والجدول لاستلام التسعير.",
  },
  {
    path: "request-a-quote/machinery-rental-inquiry",
    comp: "QuoteMachineryRentalInquiryPage",
    ns: "pages.requestAQuote.machineryRentalInquiry",
    titleEn: "Machinery Rental Inquiry",
    titleAr: "استفسار تأجير المعدات",
    descEn: "Machine class, hours, and mobilization preferences.",
    descAr: "فئة المعدة والساعات وتفضيلات التحريك.",
  },
  {
    path: "request-a-quote/hiab-service-inquiry",
    comp: "QuoteHiabServiceInquiryPage",
    ns: "pages.requestAQuote.hiabServiceInquiry",
    titleEn: "Hiab Service Inquiry",
    titleAr: "استفسار خدمة الهايب",
    descEn: "Lift radius, rigging, and site access constraints.",
    descAr: "نصف قطر الرفع والتجهيز وقيود الوصول للموقع.",
  },
  {
    path: "request-a-quote/project-logistics-inquiry",
    comp: "QuoteProjectLogisticsInquiryPage",
    ns: "pages.requestAQuote.projectLogisticsInquiry",
    titleEn: "Project Logistics Inquiry",
    titleAr: "استفسار لوجستيات المشاريع",
    descEn: "Marine, port, and multi-modal scopes welcome.",
    descAr: "نطاقات بحرية ومينائية ومتعددة الوسائط مرحب بها.",
  },
];

/** @type {{ path: string; comp: string; ns: string; titleEn: string; titleAr: string; descEn: string; descAr: string }[]} */
const sectionRoutes = [
  {
    path: "about-us",
    comp: "AboutUsPage",
    ns: "pages.aboutUs.index",
    titleEn: "About Us",
    titleAr: "من نحن",
    descEn: "Corporate profile, governance, and the teams behind GQS deliveries.",
    descAr: "الملف التعريفي والحوكمة والفرق وراء تسليمات جي كيو إس.",
  },
  {
    path: "services",
    comp: "ServicesPage",
    ns: "pages.services.index",
    titleEn: "Services",
    titleAr: "الخدمات",
    descEn: "Heavy transport, machinery rental, Hiab, and project logistics under one program office.",
    descAr: "النقل الثقيل وتأجير المعدات والهايب ولوجستيات المشاريع تحت مكتب برنامج واحد.",
  },
  {
    path: "services/heavy-transport",
    comp: "HeavyTransportServicesPage",
    ns: "pages.services.heavyTransport.index",
    titleEn: "Heavy Transport Services",
    titleAr: "خدمات النقل الثقيل",
    descEn: "Lowbed, flatbed, and escorted convoys engineered for KSA corridors.",
    descAr: "قوافل لووبيد ومسطحة وبمرافقة مهندسة لممرات المملكة.",
  },
  {
    path: "services/heavy-machinery-rental",
    comp: "HeavyMachineryRentalServicesPage",
    ns: "pages.services.heavyMachineryRental.index",
    titleEn: "Heavy Machinery Rental",
    titleAr: "تأجير المعدات الثقيلة",
    descEn: "Rental fleet with maintenance transparency and standby plans.",
    descAr: "أسطول تأجير مع شفافية الصيانة وخطط الاستعداد.",
  },
  {
    path: "services/hiab-boom-truck",
    comp: "HiabBoomTruckServicesPage",
    ns: "pages.services.hiabBoomTruck.index",
    titleEn: "Hiab / Boom Truck Services",
    titleAr: "خدمات الهايب / الشاحنات الذراعية",
    descEn: "Knuckle boom lifts, loading teams, and engineered rigging.",
    descAr: "رفع الذراع المفصلي وفرق التحميل والتجهيز الهندسي.",
  },
  {
    path: "services/project-logistics",
    comp: "ProjectLogisticsServicesPage",
    ns: "pages.services.projectLogistics.index",
    titleEn: "Project Logistics",
    titleAr: "لوجستيات المشاريع",
    descEn: "Port, marine, and shutdown logistics orchestrated end-to-end.",
    descAr: "لوجستيات الموانئ والبحري والإيقاف من طرف لطرف.",
  },
  {
    path: "fleet-equipment",
    comp: "FleetEquipmentPage",
    ns: "pages.fleetEquipment.index",
    titleEn: "Fleet & Equipment",
    titleAr: "الأسطول والمعدات",
    descEn: "Trailers, trucks, and yellow-iron availability for immediate mobilization.",
    descAr: "توافر المقطورات والشاحنات والمعدات للتحريك الفوري.",
  },
  {
    path: "industries",
    comp: "IndustriesPage",
    ns: "pages.industries.index",
    titleEn: "Industries",
    titleAr: "القطاعات",
    descEn: "Sector playbooks aligning compliance, fleet, and supervision models.",
    descAr: "أدلة قطاعية توافق الامتثال والأسطول ونماذج الإشراف.",
  },
  {
    path: "projects",
    comp: "ProjectsPage",
    ns: "pages.projects.index",
    titleEn: "Projects",
    titleAr: "المشاريع",
    descEn: "Representative deliveries demonstrating controls and transparency.",
    descAr: "تسليمات تمثيلية تُظهر الضوابط والشفافية.",
  },
  {
    path: "blog",
    comp: "BlogPage",
    ns: "pages.blog.index",
    titleEn: "Blog / Insights",
    titleAr: "المدونة / الرؤى",
    descEn: "Articles for operators, procurement teams, and project controls.",
    descAr: "مقالات للمشغلين وفرق المشتريات وضبط المشاريع.",
  },
  {
    path: "careers",
    comp: "CareersPage",
    ns: "pages.careers.index",
    titleEn: "Careers",
    titleAr: "الوظائف",
    descEn: "Join drivers, operators, coordinators, and commercial leaders.",
    descAr: "انضم إلى السائقين والمشغلين والمنسقين وقادة المبيعات.",
  },
  {
    path: "contact-us",
    comp: "ContactUsPage",
    ns: "pages.contactUs.index",
    titleEn: "Contact Us",
    titleAr: "اتصل بنا",
    descEn: "Forms, maps, and messaging channels routed to the right desk.",
    descAr: "نماذج وخرائط وقنوات مراسلة توجه للقسم المناسب.",
  },
  {
    path: "request-a-quote",
    comp: "RequestAQuotePage",
    ns: "pages.requestAQuote.index",
    titleEn: "Request a Quote",
    titleAr: "اطلب عرض سعر",
    descEn: "Choose the desk that matches your scope for a faster response.",
    descAr: "اختر المكتب المناسب لنطاقك لاستجابة أسرع.",
  },
];

function setDeep(obj, keyPath, value) {
  const parts = keyPath.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    cur[p] ??= {};
    cur = cur[p];
  }
  cur[parts[parts.length - 1]] = value;
}

function applyRouteMessages(targetEn, targetAr, row) {
  const rel = row.ns.replace(/^pages\./, "");
  setDeep(targetEn.pages, rel, { title: row.titleEn, description: row.descEn });
  setDeep(targetAr.pages, rel, { title: row.titleAr, description: row.descAr });
}

const baseEn = { nav: {}, pages: { home: {} } };
const baseAr = { nav: {}, pages: { home: {} } };

const nav = [
  ["home", "Home", "الرئيسية"],
  ["aboutUs", "About Us", "من نحن"],
  ["services", "Services", "الخدمات"],
  ["fleetEquipment", "Fleet & Equipment", "الأسطول والمعدات"],
  ["industries", "Industries", "القطاعات"],
  ["projects", "Projects", "المشاريع"],
  ["resources", "Resources", "الموارد"],
  ["contactUs", "Contact Us", "اتصل بنا"],
  ["requestAQuote", "Request a Quote", "اطلب عرض سعر"],
];
for (const [key, enLabel, arLabel] of nav) {
  baseEn.nav[key] = enLabel;
  baseAr.nav[key] = arLabel;
}

baseEn.pages.home = {
  hero: {
    kicker: "Integrated solutions for your heavy operations",
    titleLead: "Reliable heavy transport & machinery rental",
    titleHighlight: "solutions in KSA",
    description:
      "Gulf Quality Structures Establishment supports complex mobilizations with audited fleets, certified crews, and transparent project controls.",
    primaryCta: "Request a quote",
    secondaryCta: "Contact us",
  },
  servicesStrip: {
    flatbed: "Flatbed trailer rental",
    lowbed: "Lowbed trailer rental",
    heavyCargo: "Heavy cargo transport",
    crossBorder: "Cross-border transport",
    industrial: "Industrial logistics support",
    machinery: "Heavy machinery rental",
  },
  stats: {
    clients: "Happy clients",
    projects: "Projects completed",
    fleet: "Fleet assets",
    experience: "Years of experience",
  },
};

baseAr.pages.home = {
  hero: {
    kicker: "حلول متكاملة لعملياتك الثقيلة",
    titleLead: "نقل ثقيل وتأجير معدات بموثوقية",
    titleHighlight: "في المملكة العربية السعودية",
    description:
      "تدعم مؤسسة جلف كواليتي ستروكتشرز عمليات التحريك المعقدة بأساطيل خاضعة للتدقيق وطواقم معتمدة وضوابط مشروع شفافة.",
    primaryCta: "اطلب عرض سعر",
    secondaryCta: "تواصل معنا",
  },
  servicesStrip: {
    flatbed: "تأجير مقطورات مسطحة",
    lowbed: "تأجير مقطورات لووبيد",
    heavyCargo: "نقل البضائع الثقيلة",
    crossBorder: "نقل عبر الحدود",
    industrial: "دعم لوجستي صناعي",
    machinery: "تأجير معدات ثقيلة",
  },
  stats: {
    clients: "عملاء سعداء",
    projects: "مشاريع مكتملة",
    fleet: "أصول الأسطول",
    experience: "سنوات الخبرة",
  },
};

baseEn.common = { languageLabel: "Language", languageEnglish: "English", languageArabic: "Arabic" };
baseAr.common = { languageLabel: "اللغة", languageEnglish: "الإنجليزية", languageArabic: "العربية" };

baseEn.metadata = {
  title: "Gulf Quality Structures Establishment",
  description: "Heavy transport, machinery rental, and project logistics across KSA.",
};
baseAr.metadata = {
  title: "مؤسسة جلف كواليتي ستروكتشرز",
  description: "نقل ثقيل وتأجير معدات ولوجستيات مشاريع في أنحاء المملكة.",
};

baseEn.header = {
  companyShort: "GQS",
  companyName: "Gulf Quality Structures Est.",
  tagline: "Heavy transport & machinery rental",
  phone: "+966 55 123 4567",
  email: "info@gqsksa.com",
  location: "Dammam, Saudi Arabia",
  openMenu: "Open menu",
  closeMenu: "Close menu",
};
baseAr.header = {
  companyShort: "GQS",
  companyName: "مؤسسة جلف كواليتي ستروكتشرز",
  tagline: "النقل الثقيل وتأجير المعدات",
  phone: "+966 55 123 4567",
  email: "info@gqsksa.com",
  location: "الدمام، المملكة العربية السعودية",
  openMenu: "فتح القائمة",
  closeMenu: "إغلاق القائمة",
};

baseEn.navMenu = {
  about: {
    companyOverview: "Company overview",
    visionMission: "Vision & mission",
    coreValues: "Core values",
    operationalAreas: "Operational areas",
    whyChooseUs: "Why choose us",
  },
  services: {
    heavyTransport: "Heavy transport services",
    heavyMachineryRental: "Heavy machinery rental",
    hiabBoomTruck: "Hiab / boom truck",
    projectLogistics: "Project logistics",
  },
  fleet: {
    flatbedTrailers: "Flatbed trailers",
    lowbedTrailers: "Lowbed trailers",
    hiabTrucks: "Hiab trucks",
    excavators: "Excavators",
    cranes: "Cranes",
    wheelLoaders: "Wheel loaders",
    forklifts: "Forklifts",
  },
  industries: {
    oilGas: "Oil & gas",
    construction: "Construction",
    steelFabrication: "Steel & fabrication",
    portsMarine: "Ports & marine",
    industrialManufacturing: "Industrial manufacturing",
    infrastructureProjects: "Infrastructure projects",
  },
  projects: {
    heavyEquipmentTransport: "Heavy equipment transport",
    crossBorderLogistics: "Cross-border logistics",
    industrialCargoMovement: "Industrial cargo movement",
    portHandlingProjects: "Port handling projects",
    machineryMobilization: "Machinery mobilization",
  },
  resources: {
    blogHome: "Blog & insights",
    blogTransportNews: "Heavy transport news",
    blogRentalTips: "Machinery rental tips",
    blogIndustryUpdates: "Industry updates",
    blogProjectLogistics: "Project logistics articles",
    blogSafety: "Safety & operations",
    careers: "Careers",
    applyOnline: "Apply online",
  },
  viewAll: "View all",
};
baseAr.navMenu = {
  about: {
    companyOverview: "نبذة عن الشركة",
    visionMission: "الرؤية والرسالة",
    coreValues: "القيم الأساسية",
    operationalAreas: "المناطق التشغيلية",
    whyChooseUs: "لماذا نحن",
  },
  services: {
    heavyTransport: "خدمات النقل الثقيل",
    heavyMachineryRental: "تأجير المعدات الثقيلة",
    hiabBoomTruck: "الهايب / الشاحنات الذراعية",
    projectLogistics: "لوجستيات المشاريع",
  },
  fleet: {
    flatbedTrailers: "مقطورات مسطحة",
    lowbedTrailers: "مقطورات لووبيد",
    hiabTrucks: "شاحنات هايب",
    excavators: "حفارات",
    cranes: "رافعات",
    wheelLoaders: "شيول",
    forklifts: "رافعات شوكية",
  },
  industries: {
    oilGas: "النفط والغاز",
    construction: "البناء",
    steelFabrication: "الصلب والتصنيع",
    portsMarine: "الموانئ والبحري",
    industrialManufacturing: "التصنيع الصناعي",
    infrastructureProjects: "مشاريع البنية التحتية",
  },
  projects: {
    heavyEquipmentTransport: "نقل المعدات الثقيلة",
    crossBorderLogistics: "اللوجستيات عبر الحدود",
    industrialCargoMovement: "نقل البضائع الصناعية",
    portHandlingProjects: "مشاريع المناولة في الموانئ",
    machineryMobilization: "تحريك الآليات",
  },
  resources: {
    blogHome: "المدونة والرؤى",
    blogTransportNews: "أخبار النقل الثقيل",
    blogRentalTips: "نصائح تأجير المعدات",
    blogIndustryUpdates: "تحديثات القطاع",
    blogProjectLogistics: "مقالات لوجستيات المشاريع",
    blogSafety: "السلامة والعمليات",
    careers: "الوظائف",
    applyOnline: "التقديم عبر الإنترنت",
  },
  viewAll: "عرض الكل",
};

baseEn.notFound = {
  title: "We could not find that page",
  description: "The link may be outdated or the page may have moved.",
  cta: "Back to home",
};
baseAr.notFound = {
  title: "تعذر العثور على هذه الصفحة",
  description: "قد يكون الرابط قديماً أو تم نقل الصفحة.",
  cta: "العودة إلى الرئيسية",
};

for (const row of [...sectionRoutes, ...routes]) {
  applyRouteMessages(baseEn, baseAr, row);
}

fs.mkdirSync(path.join(root, "messages"), { recursive: true });
fs.writeFileSync(path.join(root, "messages", "en.json"), JSON.stringify(baseEn, null, 2), "utf8");
fs.writeFileSync(path.join(root, "messages", "ar.json"), JSON.stringify(baseAr, null, 2), "utf8");

function writeIfChanged(filePath, contents) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, "utf8") === contents) return;
  fs.writeFileSync(filePath, contents, "utf8");
}

function pageFile(importPath, exportName) {
  return `import { setRequestLocale } from "next-intl/server";\nimport { ${exportName} } from "${importPath}";\n\ntype Props = {\n  params: Promise<{ locale: string }>;\n};\n\nexport default async function Page({ params }: Props) {\n  const { locale } = await params;\n  setRequestLocale(locale);\n  return <${exportName} />;\n}\n`;
}

function componentFile(ns, comp) {
  return `import { SitePage } from "@/components/common/SitePage";\n\nexport async function ${comp}() {\n  return <SitePage namespace="${ns}" />;\n}\n`;
}

for (const row of [...sectionRoutes, ...routes]) {
  const importPath = `@/components/pages/${row.path}/${row.comp}`;
  const appRel = path.join("app", "[locale]", row.path, "page.tsx");
  writeIfChanged(path.join(root, appRel), pageFile(importPath, row.comp));
  writeIfChanged(
    path.join(root, "components", "pages", row.path, `${row.comp}.tsx`),
    componentFile(row.ns, row.comp),
  );
}

// Home page component (hand-authored path)
writeIfChanged(
  path.join(root, "app", "[locale]", "page.tsx"),
  `import { setRequestLocale } from "next-intl/server";\nimport { HomePage } from "@/components/pages/home/HomePage";\n\ntype Props = {\n  params: Promise<{ locale: string }>;\n};\n\nexport default async function Page({ params }: Props) {\n  const { locale } = await params;\n  setRequestLocale(locale);\n  return <HomePage />;\n}\n`,
);

console.log(`Generated ${sectionRoutes.length + routes.length} routes + messages.`);
