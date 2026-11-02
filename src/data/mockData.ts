import { ProjectPlot, ConstructionPackage, ConstructionStage, GalleryImage, ServiceItem, ClientEnquiry } from '../types';

export const BRAND_INFO = {
  name: "KNS Construction & Real Estate",
  shortName: "KNS",
  tagline: "Building Dreams, Brick by Brick.",
  proprietor: "Kiran Gajbhare",
  role: "Proprietor & Principal Builder",
  officeAddress: "Raghavendra Colony, Kondapur, Hyderabad – 500084, Telangana, India",
  landmark: "Bajaj Showroom Line",
  primaryPhone: "+91 9100425645",
  secondaryPhone: "+91 9246563397",
  email: "knsconstructions@gmail.com",
  whatsapp: "919100425645",
  whatsappAlt: "919246563397",
  operatingHours: "Monday – Saturday: 9:00 AM – 7:30 PM",
  colors: {
    navy: "#101820",
    charcoal: "#17191D",
    gold: "#C6A46A",
    ivory: "#F5F1E9",
    white: "#FFFFFF",
    grey: "#A7A7A7"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    tagline: "Turnkey luxury villas, independent houses & duplexes",
    description: "Complete end-to-end turnkey residential construction. From excavation and soil stabilization to RCC framing, brickwork, waterproofing, and high-end architectural finishing.",
    image: "/assets/kns-exterior-villa-facade.png",
    icon: "Home",
    scope: [
      "Custom Villa & Duplex Construction",
      "RCC Framed Earthquake-Resistant Structure",
      "Branded Steel (Tata / JSW) & UltraTech Cement",
      "Comprehensive Waterproofing & Anti-Termite",
      "Turnkey Handover with Municipal Compliances"
    ]
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    tagline: "Retail showrooms, office complexes & mixed-use",
    description: "Robust commercial spaces built to withstand high footfalls and operational demands. Precision engineering with open-span structural framing, curtain walls, and safety protocols.",
    image: "/assets/kns-card-detail-1.png",
    icon: "Building2",
    scope: [
      "Showrooms, Office Spaces & Mixed Developments",
      "Post-Tensioned & High-Span Structural Slabs",
      "Fire Safety & Heavy-Load Utility Management",
      "Commercial Glazing & Contemporary Facades",
      "Time-Bound Milestone-Driven Execution"
    ]
  },
  {
    id: "architectural-planning",
    title: "Architectural Planning & 2D/3D Design",
    tagline: "100% Vastu-compliant layouts & 3D visualizations",
    description: "Detailed 2D floor plans, elevation concepts, structural working drawings, and photorealistic 3D renders before pouring a single drop of concrete.",
    image: "/assets/kns-brand-poster.png",
    icon: "Compass",
    scope: [
      "100% Vastu-Oriented Floor Plans",
      "Structural Engineering & Soil Test Calculations",
      "Photorealistic 3D Exterior & Interior Renders",
      "Sanction & Municipal Approval Documentation",
      "Electrical, Plumbing & HVAC Conduit Schematics"
    ]
  },
  {
    id: "interior-design",
    title: "Interior Design & Execution",
    tagline: "Bespoke ceilings, modular kitchens & woodwork",
    description: "Complete interior fitouts tailored to each homeowner's lifestyle. In-house carpentry, custom laminates, acrylic acrylics, CNC jalis, and integrated ambient cove lighting.",
    image: "/assets/kns-living-grand-tray-ceiling.png",
    icon: "Palette",
    scope: [
      "Multi-Layer Tray & Gypsum False Ceilings",
      "Modern Acrylic & High-Gloss Modular Kitchens",
      "Custom Bedroom Wardrobes & Dressing Units",
      "Italian Marble & Large Format Tile Flooring",
      "Concealed LED Warm Lighting & Automation"
    ]
  },
  {
    id: "property-development",
    title: "Property Development",
    tagline: "Gated villa plotted layouts & residential projects",
    description: "Strategic land acquisition and layout development across growth corridors of Hyderabad. Clear title, legally approved gated communities with premium lifestyle amenities.",
    image: "/assets/master-layout-plan-pocharam.png",
    icon: "MapPin",
    scope: [
      "Large-Acreage Plotted Gated Communities",
      "40-Ft & 30-Ft Blacktop Roads & Kerbing",
      "Clubhouse, Swimming Pool & Landscaped Parks",
      "Underground Drainage, STP & Water Storage",
      "100% Clear Titles & Bank Loan Pre-Approvals"
    ]
  },
  {
    id: "real-estate-consulting",
    title: "Real Estate Consulting",
    tagline: "Transparent advisory for land & home investments",
    description: "Advising investors, NRI buyers, and families on high-appreciation property assets in Hyderabad's IT corridors, Sangareddy, Patancheru, and Kondapur belts.",
    image: "/assets/kns-packages-flyer.png",
    icon: "ShieldCheck",
    scope: [
      "Legal Title Search & Encumbrance Verification",
      "Hyderabad West Growth Corridor Market Insights",
      "Plot Selection & Orientation Optimization",
      "End-to-End Registration & Documentation",
      "Long-Term Capital Appreciation Analysis"
    ]
  }
];

export const CONSTRUCTION_PACKAGES: ConstructionPackage[] = [
  {
    id: "standard",
    name: "Standard Residential Package",
    tagline: "Uncompromised durability & reliable materials for modern homes",
    minRate: 1600,
    maxRate: 1800,
    badge: "Most Popular for Budget Homes",
    popular: false,
    features: [
      "Full Material + Civil Labor Included",
      "Tata / JSW / Jindal Fe 550D TMT Rebars",
      "UltraTech / Birla A1 Grade 53 Portland Cement",
      "Standard Red Bricks / Aerated AAC Blocks",
      "Standard Polished Vitrified Tiles (2x2 ft)",
      "Standard Teak Wood Frames with Flush Doors",
      "Anchor / Polycab FRLS Wiring & Modular Switches",
      "Ashirvad / Astral CPVC & PVC Plumbing Lines",
      "Asian Paints Premium Emulsion Interior / Apex Exterior"
    ],
    materialsIncluded: [
      "Steel: ISI Fe550D TMT",
      "Cement: UltraTech / Birla A1 53 Grade",
      "Sand: Clean River Sand / Certified Robo Sand",
      "Aggregates: 20mm & 40mm Blue Metal",
      "Flooring: 600x600mm Vitrified Tiles",
      "Plumbing: Astral CPVC / PVC pipes"
    ],
    suitableFor: "Standard independent houses, rental floors, and budget-conscious villa construction."
  },
  {
    id: "premium",
    name: "Premium Residential Package",
    tagline: "Architectural finishes, designer ceilings & luxury fittings",
    minRate: 1900,
    maxRate: 2200,
    badge: "Recommended for Luxury Living",
    popular: true,
    features: [
      "Turnkey Design + Civil + Complete Finishing",
      "Primary Tata Tiscon / JSW Neosteel TMT Bars",
      "UltraTech Super / ACC High-Early Strength Cement",
      "Fine Red Brick Masonry with Chicken Mesh at joints",
      "GVT Large Format 4x2 ft Glazed Vitrified Tiles",
      "First-Quality Teak Main Door with Carved Design & Brass Hardware",
      "Full Designer Gypsum False Ceiling with LED Cove Lights",
      "Finolex / Havells Fire-Retardant Wiring & Legrand Switches",
      "Grohe / Kohler / Jaquar Concealed Diverters & Wall-Hung WC",
      "Asian Paints Royale Luxury Interior Finish"
    ],
    materialsIncluded: [
      "Steel: Tata Tiscon / JSW Neosteel Fe 550D",
      "Cement: UltraTech Super / ACC Concrete Plus",
      "Flooring: 1200x600mm Glazed Vitrified Marble-Finish Tiles",
      "Sanitaryware: Kohler / Grohe / Jaquar CP fittings",
      "Joinery: Seasoned CP Teak main frame + Designer flush shutters",
      "Ceilings: Saint-Gobain Gyproc false ceiling with warm cove"
    ],
    suitableFor: "Luxury independent villas, high-end duplexes, and owner-occupied dream homes."
  },
  {
    id: "commercial",
    name: "Commercial Construction Package",
    tagline: "Engineered for high load-bearing capacity & aesthetic appeal",
    minRate: 2200,
    maxRate: 2500,
    badge: "Engineered for Commercial Longevity",
    popular: false,
    features: [
      "Heavy-Duty Structural RCC Framing & Higher Headroom",
      "JSW / Tata Heavy Section Structural Steel & Columns",
      "High-Grade M25 / M30 Ready Mix Concrete with Cube Testing",
      "Heavy-Traffic Industrial Vitrified / Polished Granite Flooring",
      "Full Structural Glazing & Powder-Coated Aluminium Louvers",
      "Dedicated Fire Hydrant Conduits & Smoke Detection Provision",
      "3-Phase Industrial Panel Wiring with High-Amp Distribution",
      "Commercial Grade Washrooms with Automatic Sensor Fixtures",
      "Weather-Shield Exterior Textured Texture Paints"
    ],
    materialsIncluded: [
      "Concrete: M25 / M30 Grade Certified Mix",
      "Steel: High Ductility Structural Rebars",
      "Flooring: Heavy-Duty Full-Body Vitrified / Polished Sadarahalli Granite",
      "Glass: Toughened 12mm Saint-Gobain Glazing",
      "Piping: Heavy Gauge Supreme / Prince Drainage System"
    ],
    suitableFor: "Commercial complexes, retail showrooms, corporate offices, and mixed-use buildings."
  }
];

export const CONSTRUCTION_STAGES: ConstructionStage[] = [
  {
    id: 1,
    title: "Site Preparation & Soil Profiling",
    shortDesc: "Marking boundaries, ground leveling, and soil bearing capacity test.",
    fullDesc: "The construction begins with digital perimeter marking, site clearance of all vegetation and debris, leveling the terrain, and conducting core soil testing to determine the safe bearing capacity (SBC) for foundation design.",
    timeline: "Week 1 - 2",
    keyMaterials: ["Total Station Survey", "Soil Testing Core", "Leveling Earthmovers"],
    inspectionMilestones: ["Boundary Peg Verification", "Soil SBC Report", "Temporary Water & Power Hookup"],
    visualLevel: 1
  },
  {
    id: 2,
    title: "Excavation & Anti-Termite Treatment",
    shortDesc: "Precise pit excavation and subterranean chemical termite barrier.",
    fullDesc: "Excavating column footings according to structural drawings down to hard strata. Laying 4-inch PCC (Plain Cement Concrete) bed and applying comprehensive subterranean anti-termite treatment across the foundation footprint.",
    timeline: "Week 2 - 4",
    keyMaterials: ["PCC 1:4:8 Bed", "Chlorpyrifos Anti-Termite Emulsion", "Vibratory Compactors"],
    inspectionMilestones: ["Trench Depth & Strata Inspection", "PCC Level Verification", "Termite Barrier Certificate"],
    visualLevel: 2
  },
  {
    id: 3,
    title: "Footings & Foundation Casting",
    shortDesc: "Trapezoidal RCC footings and reinforced concrete starter columns.",
    fullDesc: "Fabricating heavy-gauge TMT steel cages for isolated and combined footings. Pouring high-strength M25 concrete with mechanical needle vibrators, establishing the rigid base of the entire structure.",
    timeline: "Week 4 - 6",
    keyMaterials: ["Tata Fe550D TMT Footing Mesh", "M25 Certified Concrete", "Shuttering Ply & Staging"],
    inspectionMilestones: ["Rebar Spacing & Cover Block Check", "Concrete Cube Test Sampling", "Curing Period Monitoring (14 Days)"],
    visualLevel: 3
  },
  {
    id: 4,
    title: "RCC Columns & Plinth Beam Grid",
    shortDesc: "Interconnected plinth beams tie all columns together to prevent differential settlement.",
    fullDesc: "Erecting vertical RCC columns with stirrup ties. Casting a reinforced plinth beam grid tying all columns together, followed by gravel backfilling and mechanical compaction under the ground floor slab.",
    timeline: "Week 6 - 9",
    keyMaterials: ["High-Ductility Rebar Ties", "Waterproof Plinth Admixtures", "Graded Gravel Backfill"],
    inspectionMilestones: ["Plinth Grid Alignment Check", "Soil Compaction Protor Test", "Column Verticality Laser Plumb"],
    visualLevel: 4
  },
  {
    id: 5,
    title: "Brickwork & Masonry Enclosure",
    shortDesc: "Precision kiln-burnt red bricks or high-insulation AAC blocks.",
    fullDesc: "Constructing 9-inch exterior perimeter load-bearing/weather walls and 4.5-inch interior room dividers using cement-sand mortar 1:6. Chicken wire mesh embedded at all concrete-brick interfaces to prevent thermal shrinkage cracks.",
    timeline: "Week 9 - 13",
    keyMaterials: ["Table-Molded Red Bricks", "UltraTech Masonry Cement", "Galvanized GI Joint Mesh"],
    inspectionMilestones: ["Wall Plumb & Course Horizontal Level", "Window/Door Box Frames Embedded", "Continuous Mortar Curing"],
    visualLevel: 5
  },
  {
    id: 6,
    title: "Slabs, Lintels & Structural Roofing",
    shortDesc: "Shuttering, two-way reinforcement mesh, electrical conduit pipes, and slab casting.",
    fullDesc: "Setting up waterproof film-faced shuttering plywood. Laying continuous steel reinforcement mats with beam cages, laying PVC electrical drop boxes, and pouring monolithically with mechanized concrete pumps.",
    timeline: "Week 13 - 17",
    keyMaterials: ["12mm Film-Faced Shuttering", "PVC Fan & Light Concealed Boxes", "M25 Ready Mix Concrete"],
    inspectionMilestones: ["Slab Steel Binding & Chair Support Check", "Conduit Pressure Integrity Check", "Water Ponding Curing for 21 Days"],
    visualLevel: 6
  },
  {
    id: 7,
    title: "Concealed MEP (Plumbing & Electrical)",
    shortDesc: "Chiseling wall conduits, fitting CPVC/UPVC water lines and fire-retardant wiring.",
    fullDesc: "Precision wall groove cutting with dust-free wall chasers. Embedding heavy-duty CPVC water supply pipes, UPVC acoustic drainage stacks, and multi-core flame-retardant electrical conduits to all switchboard locations.",
    timeline: "Week 17 - 21",
    keyMaterials: ["Astral CPVC SDR 11", "Finolex FRLS Copper Wiring", "Modular Metal Gang Boxes"],
    inspectionMilestones: ["Hydrostatic Pressure Leak Test at 10 Bar", "Earthing & Megger Insulation Test", "Drainage Slope Gradient Check"],
    visualLevel: 7
  },
  {
    id: 8,
    title: "Plastering, False Ceilings & Tile Work",
    shortDesc: "Smooth river-sand wall plastering, designer gypsum false ceilings, and marble flooring.",
    fullDesc: "Applying 2-coat internal plastering with sponge float finish. Installing Saint-Gobain Gyproc false ceiling channels with warm LED cove lighting. Laying large-format marble-finish vitrified tiles with 2mm tile leveling spacers.",
    timeline: "Week 21 - 26",
    keyMaterials: ["Saint-Gobain Gyproc Sheets", "1200x600mm Vitrified Tiles", "Epoxy Stain-Proof Grout"],
    inspectionMilestones: ["Wall Flatness with Aluminum Straightedge", "Tile Hollow Spot Tapping Inspection", "Ceiling Drop Level Calibration"],
    visualLevel: 8
  },
  {
    id: 9,
    title: "Interior Woodwork & Turnkey Handover",
    shortDesc: "Teak main doors, modular kitchens, designer wardrobes, luxury paint, and keys delivery.",
    fullDesc: "Installing seasoned teak main door with digital smart lock, factory-finished modular kitchen cabinets with quartz countertops, custom master bedroom wardrobes with soft-close Blum hinges, Asian Paints Royale finish, and sparkling deep cleaning.",
    timeline: "Week 26 - 30",
    keyMaterials: ["CP Teak Wood", "Marine-Grade Boiling Waterproof Plywood", "Asian Paints Royale Luxury Emulsion"],
    inspectionMilestones: ["50-Point Final Quality Audit", "All Electrical & Fixture Commissioning", "Ceremonial Handover with All Guarantees"],
    visualLevel: 9
  }
];

export const VILLA_PLOTS_PROJECT = {
  title: "KNS Premium Villa Plotted Community",
  subtitle: "Gated Luxury Plotted Enclave with Resort-Style Amenities",
  location: "Ganapatiguda, Pocharam Village, Patancheru Mandal, Sangareddy District",
  district: "Sangareddy District, Greater Hyderabad",
  totalLandArea: "8.25 Acres (3,59,370 Sq.Ft.)",
  portions: {
    upper: "6.25 Acres (Upper Portion)",
    lower: "2.00 Acres (Lower Portion)"
  },
  totalPlots: 100,
  plotSize: "250 Sq.Yards (2,250 Sq.Ft.)",
  dimensions: "30' x 75' (9.14m x 22.86m)",
  roadWidths: "40 Feet Main Arterial Roads & 30 Feet Internal Cross Roads",
  areaStatement: {
    villaPlots: { sqft: "2,25,000", acres: "5.17", percentage: "62.53%" },
    roadsArea: { sqft: "97,000", acres: "2.23", percentage: "26.97%" },
    openSpaceParks: { sqft: "49,900", acres: "1.15", percentage: "13.87%" },
    clubhouseAmenities: { sqft: "21,500", acres: "0.50", percentage: "6.00%" },
    utilitiesSTP: { sqft: "15,970", acres: "0.36", percentage: "4.43%" },
    total: { sqft: "3,59,370", acres: "8.25", percentage: "100%" }
  },
  amenities: [
    { title: "Grand Entrance Arch & Security Cabin", desc: "Boom barrier access with 24/7 CCTV surveillance station", icon: "Shield" },
    { title: "Clubhouse with Modern Amenities", desc: "Multi-purpose community hall, indoor games & gym facility", icon: "Building" },
    { title: "Swimming Pool & Kids Splash Pool", desc: "Tiled swimming pool with poolside deck and changing rooms", icon: "Waves" },
    { title: "Landscaped Central Park & Walking Track", desc: "Manicured lawns, gazebo sit-outs, and elderly walking trail", icon: "Trees" },
    { title: "Children's Adventure Play Area", desc: "Safe play equipment, sand pit, and soft grass lawn", icon: "Smile" },
    { title: "Wide 40' & 30' Internal Roads", desc: "Heavy-duty blacktop macadam roads with avenue tree plantations", icon: "Navigation" },
    { title: "Underground Utilities & Drainage", desc: "Concealed electric cables, street lights, and rainwater harvesting", icon: "Zap" },
    { title: "STP & Water Treatment Plant", desc: "Centralized sewage treatment plant and dedicated overhead reservoir", icon: "Droplets" }
  ]
};

// Generate the 100 actual plots from the supplied Master Layout Concept Plan
export const INITIAL_PLOTS: ProjectPlot[] = [
  // Upper North Row (Plots 01, 06, 07, 03, 08, 09, 10, 11, 12, 13, 14, 15)
  { id: 1, number: "01", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "sold", category: "Corner" },
  { id: 6, number: "06", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 7, number: "07", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 3, number: "03", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "sold", category: "Standard" },
  { id: 8, number: "08", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 9, number: "09", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 10, number: "10", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 11, number: "11", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 12, number: "12", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 13, number: "13", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 14, number: "14", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 15, number: "15", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "sold", category: "Corner" },

  // Plots 16-19 (Upper West block)
  { id: 16, number: "16", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },
  { id: 17, number: "17", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 18, number: "18", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 19, number: "19", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },

  // Plots 20-23 (Upper Mid block)
  { id: 20, number: "20", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 21, number: "21", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 22, number: "22", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 23, number: "23", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "sold", category: "Road Junction" },

  // Plots 24-28 (Upper East-Mid block)
  { id: 24, number: "24", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 25, number: "25", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 26, number: "26", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 27, number: "27", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 28, number: "28", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "sold", category: "Corner" },

  // Plots 29-34 (Far East Vertical Strip)
  { id: 29, number: "29", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "West", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },
  { id: 30, number: "30", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "West", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 31, number: "31", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "West", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 32, number: "32", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "West", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 33, number: "33", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "West", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 34, number: "34", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "West", portion: "Upper (6.25 Acres)", status: "sold", category: "Corner" },

  // Plots 35-38
  { id: 35, number: "35", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },
  { id: 36, number: "36", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 37, number: "37", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 38, number: "38", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },

  // Plots 39-42
  { id: 39, number: "39", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 40, number: "40", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "sold", category: "Standard" },
  { id: 41, number: "41", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 42, number: "42", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },

  // Plots 43-47
  { id: 43, number: "43", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },
  { id: 44, number: "44", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 45, number: "45", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 46, number: "46", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 47, number: "47", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Upper (6.25 Acres)", status: "sold", category: "Corner" },

  // Plots 48-50
  { id: 48, number: "48", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },
  { id: 49, number: "49", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 50, number: "50", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "sold", category: "Corner" },

  // Plots 52-55
  { id: 52, number: "52", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },
  { id: 53, number: "53", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 54, number: "54", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 55, number: "55", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },

  // Plots 56-60
  { id: 56, number: "56", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },
  { id: 57, number: "57", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 58, number: "58", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "sold", category: "Standard" },
  { id: 59, number: "59", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 60, number: "60", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },

  // Plots 61-62 & 65-72 (Next to Park & Clubhouse)
  { id: 61, number: "61", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "sold", category: "Park Facing" },
  { id: 62, number: "62", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Park Facing" },
  { id: 65, number: "65", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },
  { id: 66, number: "66", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "reserved", category: "Standard" },
  { id: 67, number: "67", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 68, number: "68", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "sold", category: "Standard" },
  { id: 69, number: "69", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 71, number: "71", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Standard" },
  { id: 72, number: "72", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Upper (6.25 Acres)", status: "available", category: "Corner" },

  // Lower Portion (2.00 Acres) - Plots 74-85
  { id: 74, number: "74", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Corner" },
  { id: 75, number: "75", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 76, number: "76", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "reserved", category: "Standard" },
  { id: 77, number: "77", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 78, number: "78", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "sold", category: "Standard" },
  { id: 79, number: "79", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 80, number: "80", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 81, number: "81", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "reserved", category: "Standard" },
  { id: 82, number: "82", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 83, number: "83", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 84, number: "84", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 85, number: "85", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "sold", category: "Corner" },

  // Lower Portion - Plots 86-88, 98, 100, 90-92, 94-97
  { id: 86, number: "86", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Corner" },
  { id: 87, number: "87", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "reserved", category: "Standard" },
  { id: 88, number: "88", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 98, number: "98", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 100, number: "100", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "South", portion: "Lower (2.00 Acres)", status: "sold", category: "Corner" },
  { id: 90, number: "90", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Corner" },
  { id: 91, number: "91", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 92, number: "92", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "reserved", category: "Standard" },
  { id: 94, number: "94", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Corner" },
  { id: 95, number: "95", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 96, number: "96", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "available", category: "Standard" },
  { id: 97, number: "97", size: "250 Sq.Yds", dimensions: "30' x 75'", areaSqFt: 2250, facing: "North", portion: "Lower (2.00 Acres)", status: "sold", category: "Corner" }
];

export const APARTMENT_PROJECT = {
  title: "Raghavendra Residency – Luxury 3BHK Homes",
  location: "Raghavendra Colony, Kondapur, Hyderabad – 500084",
  landmark: "Beside Bajaj Showroom Line, Kondapur",
  summary: "An exclusive boutique residential enclave featuring 10 premium 3BHK residences built on a prime 600 Sq. Yard site in the heart of Kondapur.",
  status: "Under Construction / Booking Open",
  completion: "Q4 2026",
  unitsTotal: 10,
  unitType: "Premium 3BHK Residences",
  unitArea: "1,650 Sq.Ft. Built-up Area",
  plotArea: "600 Sq. Yards Site Area",
  facing: "100% East-Facing Main Entrances (100% Vastu)",
  floors: "Stilt + 5 Residential Floors (Only 2 Units Per Floor for Maximum Privacy)",
  highlights: [
    "No Common Sharing Walls Between Units – 3-Sided Natural Ventilation",
    "Dedicated 2 Car Stilt Parkings Per Unit + EV Charging Point",
    "Automatic 8-Passenger High-Speed Elevator with ARD (Automatic Rescue)",
    "100% DG Power Backup for All Units (including ACs & Lights)",
    "Treated Water Supply with Dual Plumbing & Rainwater Recharge",
    "Spacious 10-Ft High Ceilings with Architectural Windows"
  ],
  specifications: {
    structure: "R.C.C. framed structure designed to withstand wind and seismic loads.",
    superstructure: "First-class red clay brick / high-insulation AAC masonry in cement mortar.",
    plastering: "Double-coat smooth sponge finish cement plastering for internal and external walls.",
    doors: "Main Door: Seasoned Teak wood frame with aesthetically designed flush shutter and digital biometric lock. Internal Doors: Teak wood frame with laminated flush shutters.",
    flooring: "Living, Dining & Bedrooms: 1200x600mm premium glazed vitrified tiles. Bathrooms & Balconies: Anti-skid ceramic tiles.",
    kitchen: "Granite platform with stainless steel sink, provision for chimney and RO water purifier.",
    electrical: "Concealed copper wiring with Finolex / Havells flame-retardant cables, Legrand modular switches, AC points in all rooms.",
    toilets: "Kohler / Jaquar wall-hung EWC with concealed flush tank and chrome diverters."
  }
};

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "g1",
    title: "Luxury Duplex Villa Facade",
    category: "exterior",
    categoryLabel: "Exterior Architecture",
    src: "/assets/kns-exterior-villa-facade.png",
    description: "Modern independent villa elevation featuring vertical wooden louvers, cantilevered glass balcony, architectural tree motif, and concealed spotlighting.",
    specs: ["Duplex Villa", "Louvre Facade", "Glass Balustrade", "Gated Compound"]
  },
  {
    id: "g2",
    title: "Grand Hall with Geometric Tray Ceiling",
    category: "living",
    categoryLabel: "Living & Ceilings",
    src: "/assets/kns-living-grand-tray-ceiling.png",
    description: "Expansive living hall with intricate geometric multi-tiered false ceiling, warm ambient cove lighting, marble floors, and integrated media console.",
    specs: ["Gyproc Tray Ceiling", "Warm Cove 3000K", "Full Marble Floor", "Internal Staircase"]
  },
  {
    id: "g3",
    title: "Contemporary TV Console & Ceiling Geometry",
    category: "living",
    categoryLabel: "Living & Ceilings",
    src: "/assets/kns-living-tv-unit-ceiling.png",
    description: "Living area with custom TV backdrop in bookmatched marble laminates, vertical fluted wood paneling, and concentric floating ceiling design.",
    specs: ["Fluted Wood Panel", "Marble Backsplash", "Modular TV Console", "Recessed LED"]
  },
  {
    id: "g4",
    title: "Architectural Ceiling Illumination",
    category: "living",
    categoryLabel: "Living & Ceilings",
    src: "/assets/kns-living-ceiling-lighting.png",
    description: "Detailed ceiling study showing continuous linear LED cove channels and recessed spot fixtures for a shadow-free ambient luxury atmosphere.",
    specs: ["Indirect Lighting", "Dual Level Tray", "Acoustic Gypsum", "Concealed Wiring"]
  },
  {
    id: "g5",
    title: "Designer Modular Kitchen – Gloss & Granite",
    category: "kitchen",
    categoryLabel: "Modular Kitchens",
    src: "/assets/kns-modular-kitchen-beige.png",
    description: "U-shaped modular kitchen with high-gloss warm beige cabinets, jet-black granite countertop, frosted glass overhead storage, and integrated pantry.",
    specs: ["U-Shaped Layout", "Black Granite Counter", "Gloss Laminate", "Tandem Drawers"]
  },
  {
    id: "g6",
    title: "Monochrome Modular Kitchen with Marble Cabinetry",
    category: "kitchen",
    categoryLabel: "Modular Kitchens",
    src: "/assets/kns-kitchen-black-granite-u.png",
    description: "Contemporary kitchen showcasing marble-patterned base cabinets, black granite backsplash, fluted glass upper shutters, and cross-ventilation.",
    specs: ["Marble Base Cabinets", "Deep Basin Sink", "Black Granite Dado", "Cross Ventilation"]
  },
  {
    id: "g7",
    title: "Walnut Geometric Inlay Master Wardrobe",
    category: "bedroom",
    categoryLabel: "Wardrobes & Bedrooms",
    src: "/assets/kns-master-geometric-walnut.png",
    description: "Floor-to-ceiling master bedroom wardrobe crafted in rich walnut wood with dramatic black quartz-textured diagonal geometric inlays and window study station.",
    specs: ["Full Height Wardrobe", "Walnut Veneer Finish", "Integrated Study Desk", "Slotted Ceiling"]
  },
  {
    id: "g8",
    title: "Chevron Modern Wardrobe & Vanity",
    category: "bedroom",
    categoryLabel: "Wardrobes & Bedrooms",
    src: "/assets/kns-bedroom-chevron-wardrobe.png",
    description: "Bedroom storage unit featuring contemporary chevron dual-tone wardrobes, overhead loft cupboards, and a backlit dressing mirror table.",
    specs: ["Chevron Pattern", "Dressing Mirror Unit", "Loft Storage", "Soft-Close Hinges"]
  },
  {
    id: "g9",
    title: "Integrated Study & Dual-Tone Wardrobe",
    category: "bedroom",
    categoryLabel: "Wardrobes & Bedrooms",
    src: "/assets/kns-bedroom-wardrobe-desk.png",
    description: "Optimized bedroom layout combining a 3-door wardrobe with overhead lofts, vanity mirror, and window-side study desk with filing drawers.",
    specs: ["Window Study Station", "3-Door Wardrobe", "Loft Maximization", "Marble Floor"]
  },
  {
    id: "g10",
    title: "Full-Height Dual Finish Wardrobe Suite",
    category: "bedroom",
    categoryLabel: "Wardrobes & Bedrooms",
    src: "/assets/kns-master-wardrobe-loft.png",
    description: "Six-door expansive master wardrobe suite with dual textured wood panels, overhead luggage storage, and full-length dressing mirror unit.",
    specs: ["6-Door Suite", "Dual Texture Finish", "Dressing Table", "Marble Tiles"]
  },
  {
    id: "g11",
    title: "Marble Wall Clad Veranda & Main Teak Entrance",
    category: "porch",
    categoryLabel: "Porches & Entrances",
    src: "/assets/kns-porch-marble-checkered.png",
    description: "Grand entrance porch featuring full-height marble tile wall cladding with horizontal black accent bands, checkered patio tiles, and solid teak door.",
    specs: ["Italian Tile Cladding", "Checkered Floor", "Teak Main Door", "Recessed Downlights"]
  },
  {
    id: "g12",
    title: "Portico with Brass Inlay Marble & Carved Door",
    category: "porch",
    categoryLabel: "Porches & Entrances",
    src: "/assets/kns-portico-brass-inlay-door.png",
    description: "Covered car porch and foyer featuring polished beige marble tile walls accented with solid brass inlays, granite entrance steps, and carved door.",
    specs: ["Brass Inlay Work", "Carved Teak Door", "Polished Granite Steps", "Weatherproof Porch"]
  },
  {
    id: "g13",
    title: "Staircase with Emerald Lotus Accent Wall",
    category: "staircase",
    categoryLabel: "Staircases & Details",
    src: "/assets/kns-staircase-lotus-wall.png",
    description: "Internal double-height staircase highlighted by a hand-crafted emerald green and gold lotus grid motif wall, stainless steel railings, and granite treads.",
    specs: ["Lotus Accent Grid", "SS Railing", "Double Height Void", "Granite Steps"]
  },
  {
    id: "g14",
    title: "Balcony Utility Corridor with CNC Jali",
    category: "staircase",
    categoryLabel: "Staircases & Details",
    src: "/assets/kns-balcony-jali-corridor.png",
    description: "Side corridor and ventilation breezeway featuring a custom circular laser-cut black metal floral jali screen for privacy and natural airflow.",
    specs: ["Circular CNC Jali", "Cross Breezeway", "Concealed Utility", "Durable Weather Coat"]
  },
  {
    id: "g15",
    title: "Upper Lounge TV Unit & Study Station",
    category: "living",
    categoryLabel: "Living & Ceilings",
    src: "/assets/kns-lounge-tv-console-study.png",
    description: "First floor family gathering lounge with wooden panel TV unit, floating display shelf, perimeter false ceiling, and study workstation.",
    specs: ["Family Lounge", "Floating Media Shelf", "Integrated Study", "Cove Lighting"]
  },
  {
    id: "g16",
    title: "Ultra-Luxury Architectural Living Room",
    category: "living",
    categoryLabel: "Living & Ceilings",
    src: "/assets/kns-luxury-hero-living.jpg",
    description: "Signature double-height luxury living hall with soaring glass curtain walls, floor-to-ceiling bookmatched marble fireplace, architectural lighting, and bespoke furniture.",
    specs: ["Double-Height Ceiling", "Curtain Glazing", "Bookmatched Marble", "Architectural Film"]
  }
];

export const INITIAL_ENQUIRIES: ClientEnquiry[] = [
  {
    id: "ENQ-101",
    name: "Rameshwar Rao",
    phone: "+91 98490 12345",
    email: "rameshwar.rao@gmail.com",
    service: "Villa Plotted Community - Plot #18",
    builtUpArea: 2250,
    budget: "₹65 Lakhs - ₹80 Lakhs",
    details: "Interested in visiting the Pocharam villa community layout this Saturday for a 250 sq.yd east-facing plot.",
    timestamp: "2026-10-31 11:20 AM",
    status: "Meeting Scheduled"
  },
  {
    id: "ENQ-102",
    name: "Dr. Sunitha Reddy",
    phone: "+91 99887 54321",
    email: "sunitha.reddy@apollo.org",
    service: "Residential Construction - Turnkey Villa",
    builtUpArea: 3800,
    budget: "₹75 Lakhs - ₹90 Lakhs",
    details: "Looking for turnkey construction on our plot in Patancheru. Need Premium Package with false ceiling and modular kitchen.",
    timestamp: "2026-11-01 03:45 PM",
    status: "New"
  },
  {
    id: "ENQ-103",
    name: "Karthik Varma",
    phone: "+91 94401 88990",
    email: "karthik.v@techhyderabad.com",
    service: "Raghavendra Residency 3BHK Apartment",
    builtUpArea: 1650,
    budget: "₹1.4 Cr - ₹1.6 Cr",
    details: "Want to book a 3BHK 1650 sft unit on the 3rd floor at Raghavendra Colony, Kondapur.",
    timestamp: "2026-11-02 09:15 AM",
    status: "Contacted"
  }
];
