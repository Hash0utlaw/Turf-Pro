/**
 * Central place to manage portfolio items.
 * This is the complete and final list of portfolio projects.
 */
export type CategorySlug =
  | "all"
  | "residential"
  | "commercial"
  | "putting-greens"
  | "recreational"
  | "pet-friendly-turf"

export interface PortfolioItem {
  id: string
  title: string
  category: CategorySlug
  categoryLabel: string
  description: string
  imageUrl: string
  gallery?: string[]
  details: { label: string; value: string }[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "commercial-brewery-patio-turf",
    title: "Commercial Brewery Patio Transformation",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Complete outdoor patio transformation for Two Canes Brewing featuring premium artificial turf installation with modern outdoor furniture and umbrellas, creating an inviting year-round entertainment space.",
    imageUrl: "/portfolio/commercial-turf-brewery.jpg",
    gallery: [
      "/portfolio/commercial-turf-brewery.jpg",
      "/portfolio/commercial-patio-turf.jpg",
      "/portfolio/patio-commercial-turf-2.jpg",
    ],
    details: [
      { label: "Project Type", value: "Commercial Brewery Patio" },
      { label: "Features", value: "Outdoor Seating Area, High-Traffic Turf" },
      { label: "Area", value: "2,200 sq ft" },
    ],
  },
  {
    id: "luxury-residential-pool-backyard",
    title: "Luxury Residential Pool & Backyard",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Stunning modern home backyard featuring pristine artificial turf installation alongside a beautiful pool area with professional landscaping and clean hardscape integration.",
    imageUrl: "/portfolio/residential-turf-backyard-pool.jpg",
    details: [
      { label: "Location", value: "Luxury Residential" },
      { label: "Features", value: "Pool Surround, Modern Landscaping" },
      { label: "Area", value: "3,800 sq ft" },
    ],
  },
  {
    id: "commercial-restaurant-patio-installation",
    title: "Commercial Restaurant Patio Installation",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Professional installation of commercial-grade artificial turf for restaurant outdoor dining area, featuring Turf Pro team members in action creating a beautiful, durable entertainment space.",
    imageUrl: "/portfolio/patio-commercial-turf-2.jpg",
    gallery: ["/portfolio/patio-commercial-turf-2.jpg", "/portfolio/commercial-patio-turf.jpg"],
    details: [
      { label: "Project Type", value: "Restaurant Patio" },
      { label: "Features", value: "Professional Installation, Outdoor Dining" },
      { label: "Area", value: "2,500 sq ft" },
    ],
  },
  {
    id: "commercial-brewery-before-installation",
    title: "Commercial Brewery Ground Preparation",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Behind-the-scenes look at professional ground preparation and base installation for commercial brewery patio project, showcasing Turf Pro's meticulous installation process.",
    imageUrl: "/portfolio/commercial-patio-turf.jpg",
    details: [
      { label: "Project Type", value: "Commercial Installation Process" },
      { label: "Features", value: "Ground Prep, Base Installation" },
      { label: "Area", value: "2,200 sq ft" },
    ],
  },
  {
    id: "turf-pro-commercial-pool-installation",
    title: "Professional Commercial Pool Installation",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Turf Pro team member in signature bright green uniform professionally installing premium artificial turf around commercial pool area with precision and expertise.",
    imageUrl: "/portfolio/turf-pro-worker-commercial-pool-installation.jpg",
    details: [
      { label: "Project Type", value: "Commercial Pool Installation" },
      { label: "Features", value: "Professional Team, Pool Surround" },
      { label: "Area", value: "3,500 sq ft" },
    ],
  },
  {
    id: "school-playground-safety-turf-surface",
    title: "School Playground Safety Turf Surface",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Educational facility playground featuring safe artificial turf surface with wooden play equipment, providing durable and child-friendly recreational space.",
    imageUrl: "/portfolio/school-playground-artificial-turf-safety-surface.jpg",
    details: [
      { label: "Application", value: "Educational Playground" },
      { label: "Features", value: "Child Safety, Impact Resistant" },
      { label: "Area", value: "2,800 sq ft" },
    ],
  },
  {
    id: "indoor-school-courtyard-play-area",
    title: "Indoor School Courtyard Play Area",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Covered school courtyard featuring artificial turf play area with wooden ship playground equipment and decorative stepping stones for enhanced learning environment.",
    imageUrl: "/portfolio/indoor-school-courtyard-artificial-turf-play-area.jpg",
    details: [
      { label: "Location", value: "Indoor Courtyard" },
      { label: "Features", value: "Covered Area, Play Equipment" },
      { label: "Area", value: "1,900 sq ft" },
    ],
  },
  {
    id: "residential-backyard-turf-landscaping",
    title: "Residential Backyard Turf Landscaping",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Turf Pro specialist showcasing completed residential artificial turf installation with professional landscaping, retaining walls, and mature tree integration.",
    imageUrl: "/portfolio/residential-backyard-artificial-turf-landscaping.jpg",
    details: [
      { label: "Location", value: "Residential Backyard" },
      { label: "Features", value: "Landscaping, Retaining Walls" },
      { label: "Area", value: "4,200 sq ft" },
    ],
  },
  {
    id: "backyard-tennis-court-putting-green",
    title: "Backyard Tennis Court & Putting Green Combo",
    category: "recreational",
    categoryLabel: "Recreational",
    description:
      "Ultimate backyard sports complex featuring professional tennis court and custom putting green with artificial turf landscaping for year-round recreation.",
    imageUrl: "/portfolio/backyard-tennis-court-putting-green-combo.jpg",
    details: [
      { label: "Features", value: "Tennis Court, Putting Green" },
      { label: "Location", value: "Luxury Residential" },
      { label: "Area", value: "8,500 sq ft" },
    ],
  },
  {
    id: "commercial-turf-installation-process",
    title: "Commercial Turf Installation Process",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Professional installation team carefully laying commercial-grade artificial turf with precision equipment and materials for optimal durability.",
    imageUrl: "/portfolio/commercial-turf-installation-process.jpg",
    gallery: [
      "/portfolio/commercial-turf-installation-process.jpg",
      "/portfolio/commercial-turf-installation-workers.jpg",
    ],
    details: [
      { label: "Project Type", value: "Commercial Installation" },
      { label: "Features", value: "Heavy-Duty, Professional Grade" },
      { label: "Area", value: "8,000+ sq ft" },
    ],
  },
  {
    id: "commercial-playground-safety-surface",
    title: "Commercial Playground Safety Surface",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Safe and durable artificial turf playground surface featuring integrated play equipment and decorative stepping stones for enhanced child safety.",
    imageUrl: "/portfolio/commercial-playground-turf-stepping-stones.jpg",
    gallery: [
      "/portfolio/commercial-playground-turf-stepping-stones.jpg",
      "/portfolio/commercial-playground-side-view-turf.jpg",
    ],
    details: [
      { label: "Application", value: "Playground Safety Surface" },
      { label: "Features", value: "Impact-Resistant, Child-Safe" },
      { label: "Area", value: "3,200 sq ft" },
    ],
  },
  {
    id: "luxury-pool-landscape-design",
    title: "Luxury Pool Landscape Design",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Stunning luxury pool surrounded by meticulously designed artificial turf landscaping, creating a resort-style backyard oasis.",
    imageUrl: "/portfolio/luxury-pool-backyard-artificial-turf.jpg",
    gallery: [
      "/portfolio/luxury-pool-backyard-artificial-turf.jpg",
      "/portfolio/luxury-pool-turf-residential-backyard.jpg",
    ],
    details: [
      { label: "Location", value: "Luxury Residential" },
      { label: "Features", value: "Pool Surround, Landscape Integration" },
      { label: "Area", value: "4,500 sq ft" },
    ],
  },
  {
    id: "residential-putting-green-patriotic",
    title: "Residential Putting Green with Patriotic Touch",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "Custom residential putting green featuring multiple holes and flag positions, perfect for backyard golf practice and entertainment.",
    imageUrl: "/portfolio/residential-backyard-putting-green-flags.jpg",
    details: [
      { label: "Location", value: "Residential Backyard" },
      { label: "Features", value: "Multiple Holes, Flag System" },
      { label: "Area", value: "1,400 sq ft" },
    ],
  },
  {
    id: "infill-application-process",
    title: "Putting Green Infill Application",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "A Turf Pros team member carefully applies sand infill to a new putting green, a crucial step for performance and durability.",
    imageUrl: "/portfolio/general-turf-installation.jpg",
    details: [
      { label: "Process", value: "Infill Application" },
      { label: "Location", value: "Residential Project" },
      { label: "Area", value: "800 sq ft" },
    ],
  },
  {
    id: "stadium-sports-field",
    title: "Professional Sports Field Turf",
    category: "recreational",
    categoryLabel: "Recreational",
    description:
      "A professional-grade sports field with durable, high-performance artificial turf, ready for action under the morning sun.",
    imageUrl: "/portfolio/sports-field-aritifical-turf-hero.jpg",
    details: [
      { label: "Application", value: "Sports & Athletics" },
      { label: "Features", value: "High-Traffic, All-Weather" },
      { label: "Area", value: "50,000+ sq ft" },
    ],
  },
  {
    id: "grace-covenant-academy",
    title: "Grace Covenant Academy Courtyard",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "A multi-purpose school courtyard featuring recreational turf, a basketball court, and modern landscaping for students.",
    imageUrl: "/portfolio/school-commerical-field-turf.jpg",
    gallery: ["/portfolio/school-commerical-field-turf.jpg", "/portfolio/school-playground-field-turf.jpg"],
    details: [
      { label: "Client", value: "Grace Covenant Academy" },
      { label: "Features", value: "Basketball Court, Common Area" },
      { label: "Area", value: "4,500 sq ft" },
    ],
  },
  {
    id: "rooftop-lounge-turf",
    title: "Rooftop Lounge Turf",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Transforming a commercial rooftop into a green oasis with low-maintenance artificial turf for a modern lounge area.",
    imageUrl: "/portfolio/rooftop-general-turf-low-maintenance.jpg",
    details: [
      { label: "Location", value: "Uptown Charlotte, NC" },
      { label: "Features", value: "Rooftop, High-Traffic" },
      { label: "Area", value: "1,800 sq ft" },
    ],
  },
  {
    id: "illuminated-night-putting",
    title: "Illuminated Night Putting Green",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "A stunning backyard putting green with integrated, light-up holes for practice and entertainment day or night.",
    imageUrl: "/portfolio/putting-green-night-lights.jpg",
    gallery: ["/portfolio/putting-green-hardscape-backyard.jpg", "/portfolio/putting-green-night-lights.jpg"],
    details: [
      { label: "Location", value: "Weddington, NC" },
      { label: "Features", value: "Light-Up Holes, Paver Patio" },
      { label: "Area", value: "1,200 sq ft" },
    ],
  },
  {
    id: "poolside-putting-with-waterfall",
    title: "Poolside Putting with Waterfall",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "A golfer's paradise featuring a custom putting green built alongside a pool with a beautiful stone waterfall feature.",
    imageUrl: "/portfolio/putting-green-waterfall-pool-hardscape.jpg",
    details: [
      { label: "Location", value: "Denver, NC" },
      { label: "Features", value: "Poolside, Waterfall, Hardscape" },
      { label: "Area", value: "1,000 sq ft" },
    ],
  },
  {
    id: "luxury-estate-putting-green",
    title: "Luxury Estate Putting Green",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "An expansive, multi-hole putting green with sand traps, designed as the centerpiece for a luxury residential estate.",
    imageUrl: "/portfolio/putting-green-pool-landscape-bighome.jpg",
    details: [
      { label: "Location", value: "Waxhaw, NC" },
      { label: "Features", value: "Multiple Sand Traps, Large Scale" },
      { label: "Area", value: "3,000 sq ft" },
    ],
  },
  {
    id: "wooded-putting-green-retreat",
    title: "Wooded Putting Green Retreat",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "A serene putting green set against a backdrop of beautiful woods, featuring sand traps and a natural river stone border.",
    imageUrl: "/portfolio/wooded-backyard-putting-green-turf.jpg",
    details: [
      { label: "Location", value: "Gastonia, NC" },
      { label: "Features", value: "Natural Setting, River Stone" },
      { label: "Area", value: "1,700 sq ft" },
    ],
  },
  {
    id: "resort-style-pool-deck",
    title: "Resort-Style Pool & Hardscape",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "An incredible resort-style backyard featuring a modern pool, hot tub, water features, and a putting green, all framed by pristine turf.",
    imageUrl: "/portfolio/pool-water-feature-general-turf-backyard.jpg",
    gallery: ["/portfolio/pool-water-feature-general-turf-backyard.jpg", "/portfolio/pool-turf.jpg"],
    details: [
      { label: "Location", value: "SouthPark, Charlotte, NC" },
      { label: "Features", value: "Poolside Turf, Putting Green, Hardscape" },
      { label: "Area", value: "2,800 sq ft" },
    ],
  },
  {
    id: "elevated-deck-pool-lawn",
    title: "Elevated Deck with Pool & Lawn",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "This project features a large elevated deck overlooking a beautiful pool and a lush, expansive artificial turf lawn.",
    imageUrl: "/portfolio/pool-hardscape-general-turf-bighome.jpg",
    details: [
      { label: "Location", value: "Fort Mill, SC" },
      { label: "Features", value: "Poolside Lawn, Hardscape Path" },
      { label: "Area", value: "3,500 sq ft" },
    ],
  },
  {
    id: "family-fun-zone",
    title: "Family Fun Zone: Playground & Putting",
    category: "recreational",
    categoryLabel: "Recreational",
    description:
      "The perfect family backyard, combining a safe and soft playground area with a custom putting green on a single, seamless turf surface.",
    imageUrl: "/portfolio/playground-putting-green-pet-friendly.jpg",
    details: [
      { label: "Location", value: "Matthews, NC" },
      { label: "Features", value: "Playground Surface, Putting Green" },
      { label: "Area", value: "2,000 sq ft" },
    ],
  },
  {
    id: "lakeside-stone-patio",
    title: "Lakeside Stone Patio & Turf",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "A beautiful stacked stone patio and steps lead from the pool down to a vibrant turf lawn that meets the sandy shore of the lake.",
    imageUrl: "/portfolio/pool-lake-hardscape-general-turf.jpg",
    details: [
      { label: "Location", value: "Lake Wylie, SC" },
      { label: "Features", value: "Lakeside, Poolside, Hardscape" },
      { label: "Area", value: "1,900 sq ft" },
    ],
  },
  {
    id: "checkerboard-patio-turf",
    title: "Checkerboard Patio Turf",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "A highly stylized poolside patio featuring a checkerboard pattern of large pavers and lush artificial turf for a modern, clean look.",
    imageUrl: "/portfolio/pool-turf.jpg",
    details: [
      { label: "Location", value: "Ballantyne, Charlotte, NC" },
      { label: "Features", value: "Geometric Hardscape, Poolside" },
      { label: "Area", value: "1,000 sq ft" },
    ],
  },
  {
    id: "terraced-backyard-lawn",
    title: "Terraced Backyard Lawn",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "This sloped yard was made fully functional with a retaining wall and a large, level turf area perfect for pets and recreation.",
    imageUrl: "/portfolio/privacy-fence-general-turf-backyard.jpg",
    details: [
      { label: "Location", value: "Belmont, NC" },
      { label: "Features", value: "Retaining Wall, Slope Correction" },
      { label: "Area", value: "1,400 sq ft" },
    ],
  },
  {
    id: "modern-grid-driveway",
    title: "Modern Grid Driveway",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "A stunning, high-end driveway combining large concrete pavers with strips of vibrant artificial turf for a unique geometric design.",
    imageUrl: "/portfolio/driveway-concrete-general-turf.jpg",
    details: [
      { label: "Location", value: "Myers Park, Charlotte, NC" },
      { label: "Features", value: "Driveway Turf Strips, Hardscape" },
      { label: "Area", value: "1,200 sq ft" },
    ],
  },
  {
    id: "pet-friendly-putting-green",
    title: "Pet-Friendly Putting Green & Lawn",
    category: "pet-friendly-turf",
    categoryLabel: "Pet-Friendly",
    description:
      "The ultimate backyard for the whole family, featuring a dedicated putting green that flows into a spacious, pet-friendly lawn.",
    imageUrl: "/portfolio/pet-friendly-putting-green-backyard-general-turf.jpg",
    details: [
      { label: "Location", value: "Huntersville, NC" },
      { label: "Features", value: "Putting Green, Pet-Safe Lawn" },
      { label: "Area", value: "2,400 sq ft" },
    ],
  },
  {
    id: "paver-patio-lawn",
    title: "Paver Patio & Lawn Integration",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "A beautiful paver patio seamlessly transitions to a lush artificial turf lawn, bordered by a clean river stone garden bed.",
    imageUrl: "/portfolio/hardscape-basic-turf-backyard.jpg",
    details: [
      { label: "Location", value: "Cornelius, NC" },
      { label: "Features", value: "Hardscape Integration, River Stone Border" },
      { label: "Area", value: "1,300 sq ft" },
    ],
  },
  {
    id: "elevated-patio-turf",
    title: "Elevated Patio Turf",
    category: "pet-friendly-turf",
    categoryLabel: "Pet-Friendly",
    description:
      "A clean and simple turf installation provides a perfect, low-maintenance green space for pets and family next to a raised concrete patio.",
    imageUrl: "/portfolio/deck-general-turf-pet-friendly.jpg",
    details: [
      { label: "Location", value: "Davidson, NC" },
      { label: "Features", value: "Pet Area, Fenced-In" },
      { label: "Area", value: "600 sq ft" },
    ],
  },
  {
    id: "manicured-garden-path",
    title: "Manicured Garden Path",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "A winding artificial turf path creates a beautiful, maintenance-free walkway through meticulously landscaped garden beds.",
    imageUrl: "/portfolio/landscape-backyard-pet-friendly-turf.jpg",
    details: [
      { label: "Location", value: "Pineville, NC" },
      { label: "Features", value: "Landscape Integration, Garden Path" },
      { label: "Area", value: "1,100 sq ft" },
    ],
  },
  {
    id: "luxury-lakeside-estate",
    title: "Luxury Lakeside Estate",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "An architectural masterpiece featuring geometric pools, pristine white hardscaping, and immaculate turf overlooking a serene lake.",
    imageUrl: "/portfolio/bighome-pool-lake-landscape-hardscape-turf.jpg",
    gallery: [
      "/portfolio/bighome-pool-lake-landscape-hardscape-turf.jpg",
      "/portfolio/backyard-pool-pet-friendly-general-turf.jpg",
    ],
    details: [
      { label: "Location", value: "Mooresville, NC" },
      { label: "Features", value: "Poolside Turf, Hardscape Integration" },
      { label: "Area", value: "2,500 sq ft" },
    ],
  },
  {
    id: "wooded-expanse-turf",
    title: "Wooded Expanse Lawn",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Perfectly green artificial turf provides a stunning, maintenance-free lawn that winds through a mature, wooded property.",
    imageUrl: "/portfolio/backyard-turf.jpg",
    details: [
      { label: "Location", value: "Chapel Hill, NC" },
      { label: "Features", value: "Natural Tree Integration" },
      { label: "Area", value: "3,000 sq ft" },
    ],
  },
  {
    id: "multi-hole-practice-green",
    title: "Multi-Hole Practice Green",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "A versatile backyard practice area featuring multiple holes, gentle undulations, and decorative boulders for a professional feel.",
    imageUrl: "/portfolio/backyard-putting-green-genaral-turf.jpg",
    details: [
      { label: "Location", value: "Apex, NC" },
      { label: "Features", value: "Multiple Holes, Landscape Boulders" },
      { label: "Area", value: "1,100 sq ft" },
    ],
  },
  {
    id: "rock-garden-putting-green",
    title: "Rock Garden Putting Green",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "This custom-shaped putting green is beautifully integrated into a natural rock garden, creating a challenging and scenic feature.",
    imageUrl: "/portfolio/backyard-putting-green-turf.jpg",
    details: [
      { label: "Location", value: "Cary, NC" },
      { label: "Features", value: "Rock Garden Border, Custom Shape" },
      { label: "Area", value: "700 sq ft" },
    ],
  },
  {
    id: "enclosed-courtyard-turf",
    title: "Enclosed Courtyard Turf",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "A clean, simple, and perfectly installed rectangular lawn provides a functional and beautiful green space in this enclosed backyard.",
    imageUrl: "/portfolio/basic-turf-installation-backyard.jpg",
    details: [
      { label: "Location", value: "Durham, NC" },
      { label: "Features", value: "Pet-Friendly, High-Traffic" },
      { label: "Area", value: "900 sq ft" },
    ],
  },
  {
    id: "lakeside-pool-turf",
    title: "Lakeside Poolside Paradise",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Vibrant green artificial turf provides a lush, maintenance-free border for this stunning lakeside pool area.",
    imageUrl: "/portfolio/backyard-pool-pet-friendly-general-turf.jpg",
    gallery: [
      "/portfolio/backyard-pool-pet-friendly-general-turf.jpg",
      "/portfolio/backyard-pet-friendly-lake-general-turf.jpg",
    ],
    details: [
      { label: "Location", value: "Lake Norman, NC" },
      { label: "Features", value: "Poolside & Lakeside Turf" },
      { label: "Area", value: "1,200 sq ft" },
    ],
  },
  {
    id: "modern-pool-putting-green",
    title: "Modern Pool with Putting Green",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "Sleek white pavers and clean turf lines complement this modern pool, which features a custom poolside putting green.",
    imageUrl: "/portfolio/backyard-pool-turf-pet-friendly.jpg",
    gallery: ["/portfolio/backyard-pool-turf-pet-friendly.jpg", "/portfolio/backyard-putting-green-basic-turf.jpg"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Poolside Turf, Putting Green" },
      { label: "Area", value: "950 sq ft" },
    ],
  },
  {
    id: "secluded-backyard-lawn",
    title: "Secluded Backyard Lawn",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "A beautiful, expansive artificial lawn creates a perfect, low-maintenance green space for this private, wooded backyard.",
    imageUrl: "/portfolio/backyard-pet-friendly-general-turf.jpg",
    details: [
      { label: "Location", value: "Raleigh, NC" },
      { label: "Features", value: "Pet-Friendly, Full Lawn" },
      { label: "Area", value: "1,800 sq ft" },
    ],
  },
  {
    id: "retaining-wall-putting-green",
    title: "Tiered Retaining Wall & Putting Green",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "This sloped yard was transformed with elegant retaining walls and a multi-level putting green, maximizing usable space.",
    imageUrl: "/portfolio/backyard-putting-green-basic-turf.jpg",
    details: [
      { label: "Location", value: "Asheville, NC" },
      { label: "Features", value: "Slope Stabilization, Putting Green" },
      { label: "Area", value: "1,500 sq ft" },
    ],
  },
  {
    id: "kids-playground-turf",
    title: "Safe & Clean Playground Turf",
    category: "recreational",
    categoryLabel: "Recreational",
    description:
      "Soft, durable, and clean artificial turf provides a safe surface for this backyard children's play area.",
    imageUrl: "/portfolio/backyard-playground-general-turf.jpg",
    details: [
      { label: "Location", value: "Greensboro, NC" },
      { label: "Features", value: "Playground Safety Surface" },
      { label: "Area", value: "800 sq ft" },
    ],
  },
  {
    id: "modern-pool-deck-turf-design",
    title: "Modern Pool Deck Turf Design",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Contemporary pool design featuring artificial turf sections integrated with premium hardscaping for a clean, modern aesthetic.",
    imageUrl: "/portfolio/pool-deck-artificial-turf-aerial-view.jpg",
    gallery: [
      "/portfolio/pool-deck-artificial-turf-aerial-view.jpg",
      "/portfolio/modern-pool-artificial-turf-hardscape.jpg",
    ],
    details: [
      { label: "Location", value: "Modern Residential" },
      { label: "Features", value: "Pool Deck Integration, Hardscape" },
      { label: "Area", value: "2,100 sq ft" },
    ],
  },
  {
    id: "contemporary-home-putting-green",
    title: "Contemporary Home Putting Green",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "Sleek putting green installation complementing modern home architecture with clean lines and professional-grade turf surface.",
    imageUrl: "/portfolio/residential-putting-green-modern-home.jpg",
    details: [
      { label: "Location", value: "Contemporary Home" },
      { label: "Features", value: "Modern Design, Clean Lines" },
      { label: "Area", value: "900 sq ft" },
    ],
  },
]
