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
  // --- Newest work (displayed first) ---
  {
    id: "putting-green-pool-deck-farmhouse-09",
    title: "Putting Green & Pool Deck — Farmhouse Backyard",
    category: "putting-greens",
    categoryLabel: "Putting Greens",
    description:
      "Two-hole putting green with flag sticks installed beside a resort-style pool and paver deck, viewed from a grey composite deck overlooking an open countryside property with equestrian fencing.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-09.webp",
    gallery: ["/portfolio/artificial-turf-pool-surround-install-09.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Putting Green, Pool Surround, Paver Deck, Composite Deck" },
    ],
  },
  {
    id: "pool-surround-diamond-pattern-install-11",
    title: "Pool Surround — Diamond Turf & Travertine Pattern",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Geometric diamond-pattern turf strips woven between large travertine pavers surrounding an infinity-edge pool under construction, with a stone retaining wall backdrop and lush tree line.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-11.webp",
    gallery: ["/portfolio/artificial-turf-pool-surround-install-11.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Diamond Pattern, Travertine Pavers, Infinity Pool" },
    ],
  },
  {
    id: "pool-surround-white-farmhouse-12",
    title: "Pool Surround — White Farmhouse New Construction",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Fresh artificial turf lawn laid beside an in-ground pool under construction at a modern white and grey farmhouse, with a cedar-clad garage and gravel surrounds on a new-build property.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-12.webp",
    gallery: ["/portfolio/artificial-turf-pool-surround-install-12.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Pool Surround, New Construction, Farmhouse Style" },
    ],
  },
  {
    id: "putting-green-palm-tree-courtyard-02",
    title: "Multi-Hole Putting Green — Palm Tree Courtyard",
    category: "putting-greens",
    categoryLabel: "Putting Greens",
    description:
      "Long multi-hole putting green with a sand bunker feature running alongside a river-rock border through a tropical palm tree courtyard, with an outdoor dining area and covered pavilion in the background.",
    imageUrl: "/portfolio/artificial-turf-putting-green-install-02.webp",
    gallery: ["/portfolio/artificial-turf-putting-green-install-02.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Multi-Hole Putting Green, Sand Bunker, River Rock Border" },
    ],
  },
  {
    id: "pool-surround-diamond-new-build-14",
    title: "Pool Surround — Diamond Pattern New Build",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Diamond-cut turf between cream square pavers wrapping an empty in-ground pool shell at a new construction site, with a skid-steer in the background and edging grid materials on site.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-14.webp",
    gallery: ["/portfolio/artificial-turf-pool-surround-install-14.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Diamond Pattern, Square Pavers, New Construction" },
    ],
  },
  {
    id: "pool-surround-diamond-finished-13",
    title: "Pool Surround — Diamond Turf Completed Install",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Completed diamond-pattern turf and white marble paver installation beside a crystal-clear rectangular pool, with manicured boxwood plantings, landscape lighting, and a mulch garden border.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-13.webp",
    gallery: ["/portfolio/artificial-turf-pool-surround-install-13.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Diamond Pattern, Marble Pavers, Landscape Lighting, Boxwood Borders" },
    ],
  },
  {
    id: "pool-surround-large-lawn-08",
    title: "Large Backyard Lawn & Pool Surround",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Expansive vibrant green artificial lawn wrapping a rectangular pool with white travertine coping, black iron fencing, and a wooded backdrop — a lush full-backyard transformation.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-08.webp",
    gallery: ["/portfolio/artificial-turf-pool-surround-install-08.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Full Backyard Lawn, Pool Surround, Iron Fencing" },
    ],
  },
  {
    id: "pool-surround-modern-farmhouse-07",
    title: "Modern Farmhouse Pool Surround",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Lush artificial turf flanking both sides of a sleek rectangular pool with large travertine coping at a modern black-and-white farmhouse, with a privacy fence and screened porch.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-07.webp",
    gallery: ["/portfolio/artificial-turf-pool-surround-install-07.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Pool Surround, Travertine Coping, Modern Farmhouse" },
    ],
  },
  {
    id: "pool-surround-install-10",
    title: "Pool Surround — Travertine Paver Install",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Artificial turf bordering a travertine-paved pool surround during active installation, with clean straight edges and a wooded lot backdrop — a precision fit around a complex paver layout.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-10.webp",
    gallery: ["/portfolio/artificial-turf-pool-surround-install-10.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Pool Surround, Travertine Pavers" },
    ],
  },
  {
    id: "putting-green-tropical-courtyard-01",
    title: "Putting Green — Tropical Walled Courtyard",
    category: "putting-greens",
    categoryLabel: "Putting Greens",
    description:
      "Full backyard transformation with a large artificial lawn, putting green, and travertine patio inside a grand walled brick courtyard surrounded by tall palm trees, landscape beds, and a basketball goal.",
    imageUrl: "/portfolio/artificial-turf-putting-green-install-01.webp",
    gallery: ["/portfolio/artificial-turf-putting-green-install-01.webp"],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Putting Green, Full Lawn, Travertine Patio, Walled Courtyard" },
    ],
  },
  {
    id: "luxury-pool-surround-marble-pavers-04",
    title: "Luxury Pool Surround — Turf & Marble Pavers",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Precision-cut artificial turf strips installed between large marble travertine pavers along a luxury poolside deck beside a white brick home. Crew finishing up with a blower, showcasing the clean integration of premium turf with high-end hardscape.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-04.webp",
    gallery: [
      "/portfolio/artificial-turf-pool-surround-install-04.webp",
      "/portfolio/artificial-turf-pool-surround-install-05.webp",
      "/portfolio/artificial-turf-pool-surround-install-06.webp",
    ],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Marble Paver Integration, Poolside, White Brick Home" },
      { label: "Area", value: "2,200 sq ft" },
    ],
  },
  {
    id: "pool-surround-turf-pavilion-02",
    title: "Backyard Pool Turf with Outdoor Kitchen Pavilion",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Full artificial lawn beside a rectangular pool with a covered outdoor kitchen pavilion, basketball hoop, and stepping stone path — crew installing the final edges of a complete backyard outdoor living transformation.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-02.webp",
    gallery: [
      "/portfolio/artificial-turf-pool-surround-install-02.webp",
      "/portfolio/artificial-turf-pool-surround-install-01.webp",
      "/portfolio/artificial-turf-pool-surround-install-03.webp",
    ],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Pool Surround, Outdoor Kitchen, Stepping Stone Path" },
      { label: "Area", value: "2,800 sq ft" },
    ],
  },
  {
    id: "large-estate-turf-fall-foliage-01",
    title: "Large Estate Lawn — Fall Installation",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Wide open estate-scale artificial turf installation photographed during fall foliage, crew power-brushing the blades on a massive freshly laid lawn beside a concrete walkway — a striking contrast of vivid green turf against autumn colors.",
    imageUrl: "/portfolio/artificial-turf-installation-in-progress-01.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Large-Scale Lawn, Fall Install, Concrete Path" },
      { label: "Area", value: "5,000+ sq ft" },
    ],
  },
  {
    id: "white-farmhouse-diamond-stepper-turf-01",
    title: "White Farmhouse — Turf with Diamond Steppers",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Artificial turf installed around a classic white farmhouse with a dramatic diagonal diamond-pattern of concrete steppers cutting through the lawn. Crew still on site with construction around the perimeter — a standout design that blends modern landscaping with traditional architecture.",
    imageUrl: "/portfolio/artificial-turf-luxury-estate-install-01.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Diamond Stepper Pattern, New Construction, Covered Porch" },
      { label: "Area", value: "3,400 sq ft" },
    ],
  },
  {
    id: "pool-surround-turf-pavilion-01",
    title: "Pool Lawn & Outdoor Living — Wide Angle",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Wide-angle view of the full artificial turf run alongside a rectangular pool, with an outdoor kitchen pavilion with covered seating, river rock border, and mulch garden beds completing the outdoor living space.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-01.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Pool Surround, Outdoor Pavilion, River Rock Border" },
      { label: "Area", value: "2,800 sq ft" },
    ],
  },
  {
    id: "modern-new-construction-courtyard-turf-02",
    title: "Modern New Construction — Courtyard Turf Panels",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Multi-panel artificial turf installation in a geometric courtyard layout at a modern cream multi-story new construction home, with turf squares set precisely between white concrete pavers — a sophisticated hardscape integration.",
    imageUrl: "/portfolio/artificial-turf-installation-in-progress-02.webp",
    gallery: [
      "/portfolio/artificial-turf-installation-in-progress-02.webp",
      "/portfolio/artificial-turf-pool-surround-install-05.webp",
      "/portfolio/artificial-turf-pool-surround-install-06.webp",
    ],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Geometric Panel Layout, New Construction, Concrete Paver Grid" },
      { label: "Area", value: "1,800 sq ft" },
    ],
  },
  {
    id: "pool-surround-turf-river-rock-03",
    title: "Pool Surround Turf — Pergola & River Rock View",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Angle from beneath the pergola showing freshly installed artificial turf running the full length beside a rectangular pool, with a river rock border and lush mulch garden beds framing the lawn.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-03.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Pool Surround, Pergola View, River Rock Border" },
      { label: "Area", value: "2,800 sq ft" },
    ],
  },
  {
    id: "cottage-courtyard-iron-gate-turf-01",
    title: "Cottage Courtyard Turf with Iron Gate",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Charming white cottage-style home inner courtyard with artificial turf and a 3x3 grid of large square marble pavers set into the lawn. Framed by a classic ornate black iron arched gate and natural stone retaining walls — a stunning detail-oriented installation.",
    imageUrl: "/portfolio/artificial-turf-courtyard-install-01.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Courtyard Install, Marble Paver Grid, Iron Gate, Stone Wall" },
      { label: "Area", value: "900 sq ft" },
    ],
  },
  {
    id: "luxury-pool-geometric-turf-overhead-06",
    title: "Luxury Pool — Geometric Turf Grid Overhead View",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Elevated overhead angle of a luxury pool with travertine surround, showing geometric turf panels integrated into the pool deck in a precise grid pattern. Fall tree foliage surrounds the property, making the green turf pop against the autumn landscape.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-06.webp",
    gallery: [
      "/portfolio/artificial-turf-pool-surround-install-06.webp",
      "/portfolio/artificial-turf-pool-surround-install-05.webp",
    ],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Geometric Grid, Luxury Pool, Travertine Surround, Overhead View" },
      { label: "Area", value: "2,500 sq ft" },
    ],
  },
  {
    id: "luxury-pool-geometric-turf-ground-05",
    title: "Luxury Pool — Geometric Turf Grid Ground View",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Ground-level view of the luxury pool geometric turf grid installation beside a modern white and tan siding home with covered patio. Turf panels are precisely framed by travertine tiles creating a high-end resort-style backyard.",
    imageUrl: "/portfolio/artificial-turf-pool-surround-install-05.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Geometric Grid, Luxury Pool, Travertine, Covered Patio" },
      { label: "Area", value: "2,500 sq ft" },
    ],
  },
  {
    id: "commercial-brewery-patio-turf-01",
    title: "Cowart Brewing Co. — Outdoor Patio Turf",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Artificial turf installed throughout the outdoor patio of Cowart Brewing Co., running on both sides of a concrete walkway beneath a sleek modern louvered pergola. A white picket fence and the brewery's branded wall make this a standout commercial transformation.",
    imageUrl: "/portfolio/artificial-turf-commercial-install-01.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Type", value: "Commercial Patio / Brewery" },
      { label: "Features", value: "Louvered Pergola, Concrete Path, Branded Space" },
    ],
  },
  {
    id: "modern-farmhouse-backyard-turf-07",
    title: "Modern Black Farmhouse Backyard Turf",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Artificial lawn wrapping around the screened porch and back patio of a striking modern black farmhouse, bordered by river rock and fresh mulch beds. Clean installation that perfectly complements the home's contemporary architecture.",
    imageUrl: "/portfolio/artificial-turf-backyard-install-07.webp",
    gallery: [
      "/portfolio/artificial-turf-backyard-install-07.webp",
      "/portfolio/artificial-turf-backyard-install-08.webp",
    ],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Screened Porch Surround, River Rock Border, Mulch Beds" },
      { label: "Area", value: "2,600 sq ft" },
    ],
  },
  {
    id: "before-after-backyard-putting-green-01",
    title: "Before & After: Backyard Putting Green Transformation",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "A compelling before-and-after showing a patchy, drought-stressed natural grass yard transformed into a lush multi-hole putting green, artificial lawn, river rock borders, and a full palm tree landscape — a complete backyard reinvention.",
    imageUrl: "/portfolio/artificial-turf-before-after-backyard-01.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Before & After, Multi-Hole Putting Green, Full Landscape Renovation" },
      { label: "Area", value: "3,800 sq ft" },
    ],
  },
  {
    id: "residential-backyard-turf-playhouse-05",
    title: "Residential Backyard Turf with Playhouse",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Large residential backyard artificial turf installation at dusk, featuring a charming playhouse, detached garage, and clean red mulch borders. A great example of a full-yard family lawn transformation.",
    imageUrl: "/portfolio/artificial-turf-backyard-install-05.webp",
    gallery: [
      "/portfolio/artificial-turf-backyard-install-05.webp",
      "/portfolio/artificial-turf-backyard-install-04.webp",
    ],
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Full Backyard Lawn, Playhouse, Red Mulch Border" },
      { label: "Area", value: "2,800 sq ft" },
    ],
  },
  {
    id: "curved-turf-new-construction-06",
    title: "Curved Turf Install — New Construction Home",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Organic curved artificial turf installation beside a modern white new-construction home, with a river rock border and palm trees adding to the landscaping. Installed while surrounding construction was still underway, showing the turf's immediate visual impact.",
    imageUrl: "/portfolio/artificial-turf-backyard-install-06.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Curved Edge, River Rock Border, New Construction" },
      { label: "Area", value: "1,900 sq ft" },
    ],
  },
  {
    id: "commercial-strip-turf-curb-appeal-03",
    title: "Commercial Building Curb Appeal Turf",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Artificial turf installed in a small commercial courtyard space beside a brick strip-mall building, replacing a bare concrete area beside the parking lot. A cost-effective way to add green space and curb appeal to any commercial property.",
    imageUrl: "/portfolio/artificial-turf-commercial-install-03.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Type", value: "Commercial Curb Appeal" },
      { label: "Features", value: "Parking Lot Adjacent, Concrete Surround" },
    ],
  },
  {
    id: "modern-farmhouse-turf-wider-angle-08",
    title: "Modern Farmhouse Turf — Full Scope View",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Wider-angle view of the modern black farmhouse project showing the full scope of artificial turf wrapping around the home, integrated with river rock drainage channels and fresh black mulch garden beds.",
    imageUrl: "/portfolio/artificial-turf-backyard-install-08.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "River Rock Drainage, Mulch Beds, Modern Home" },
      { label: "Area", value: "2,600 sq ft" },
    ],
  },
  {
    id: "backyard-turf-pergola-putting-09",
    title: "Backyard Lawn with Pergola & Putting Cup",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Artificial lawn installed between two homes featuring a wood-beam pergola, outdoor deck, gravel patio area, and a putting cup — a versatile backyard space designed for year-round outdoor living.",
    imageUrl: "/portfolio/artificial-turf-backyard-install-09.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Wood Pergola, Deck Integration, Putting Cup, Gravel Patio" },
      { label: "Area", value: "1,600 sq ft" },
    ],
  },
  {
    id: "east-lincoln-animal-hospital-turf",
    title: "East Lincoln Animal Hospital — Pet Turf",
    category: "commercial",
    categoryLabel: "Commercial",
    description:
      "Large-scale commercial pet-friendly turf installation at East Lincoln Animal Hospital, covering the full exercise and relief area along the back of the facility. Crew installing high-durability synthetic grass designed for heavy animal use with proper drainage.",
    imageUrl: "/portfolio/artificial-turf-commercial-install-02.webp",
    details: [
      { label: "Client", value: "East Lincoln Animal Hospital" },
      { label: "Location", value: "Lincoln County, NC" },
      { label: "Type", value: "Commercial Pet / Veterinary Facility" },
      { label: "Features", value: "High-Durability Pet Turf, Chain-Link Enclosure, Full Facility Coverage" },
    ],
  },
  {
    id: "residential-backyard-dusk-turf-04",
    title: "Wide Residential Backyard at Dusk",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Wide freshly installed residential artificial lawn photographed at dusk, showing the vivid green color against a traditional brick home and detached garage. Red mulch border frames the full yard cleanly.",
    imageUrl: "/portfolio/artificial-turf-backyard-install-04.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Full Backyard Lawn, Brick Home, Red Mulch Border" },
      { label: "Area", value: "2,400 sq ft" },
    ],
  },
  // --- Previous work ---
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
      "An Atlantic Turf Specialists team member carefully applies sand infill to a new putting green, a crucial step for performance and durability.",
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
  {
    id: "luxury-estate-putting-green-pool-drone-04",
    title: "Luxury Estate: Turf, Putting Green & Pool",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "Stunning side-angle view of a luxury estate backyard featuring a custom multi-hole putting green, lush artificial lawn, resort-style pool with hot tub, and palm tree landscaping.",
    imageUrl: "/portfolio/artificial-turf-aerial-backyard-drone-04.webp",
    gallery: [
      "/portfolio/artificial-turf-aerial-backyard-drone-04.webp",
      "/portfolio/artificial-turf-aerial-putting-green-drone-03.webp",
      "/portfolio/artificial-turf-aerial-putting-green-drone-02.webp",
    ],
    details: [
      { label: "Location", value: "Luxury Residential, Charlotte NC" },
      { label: "Features", value: "Putting Green, Pool Surround, Palm Landscaping" },
      { label: "Area", value: "5,000+ sq ft" },
    ],
  },
  {
    id: "drone-overhead-putting-green-palm-shadows",
    title: "Overhead Drone View: Multi-Hole Putting Green",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "Stunning straight-down drone perspective of a custom multi-hole backyard putting green surrounded by white river rock, with dramatic palm tree shadows across the turf surface.",
    imageUrl: "/portfolio/artificial-turf-aerial-putting-green-drone-02.webp",
    details: [
      { label: "Location", value: "Luxury Residential, Charlotte NC" },
      { label: "Features", value: "Multiple Holes, River Rock Border, Sand Bunker" },
      { label: "Area", value: "2,800 sq ft" },
    ],
  },
  {
    id: "residential-backyard-turf-trampoline-02",
    title: "Residential Backyard Turf with Trampoline Area",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Beautifully installed residential artificial lawn enclosed by a stone wall with palm trees, accommodating a backyard trampoline and white rock garden border — a perfect family space.",
    imageUrl: "/portfolio/artificial-turf-backyard-install-02.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Family Backyard, River Rock Border, Stone Wall" },
      { label: "Area", value: "2,200 sq ft" },
    ],
  },
  {
    id: "aerial-estate-turf-pool-putting-drone-06",
    title: "Aerial Estate View: Turf, Pool & Putting Green",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "High drone overview of a full luxury estate showing the interplay of artificial lawn, a custom multi-hole putting green, resort pool, and mature landscaping from above.",
    imageUrl: "/portfolio/artificial-turf-aerial-backyard-drone-06.webp",
    gallery: [
      "/portfolio/artificial-turf-aerial-backyard-drone-06.webp",
      "/portfolio/artificial-turf-aerial-estate-drone-05.webp",
      "/portfolio/artificial-turf-aerial-backyard-drone-01.webp",
    ],
    details: [
      { label: "Location", value: "Luxury Estate, Charlotte NC" },
      { label: "Features", value: "Drone Photography, Full Backyard, Pool & Putting Green" },
      { label: "Area", value: "6,000+ sq ft" },
    ],
  },
  {
    id: "wide-aerial-estate-turf-drone-05",
    title: "Wide Aerial Estate: Acreage Turf & Pool",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Wide-angle drone photo of a sprawling estate showcasing the full scope of the artificial turf installation alongside a freeform pool, putting green, and manicured grounds.",
    imageUrl: "/portfolio/artificial-turf-aerial-estate-drone-05.webp",
    details: [
      { label: "Location", value: "Estate Property, Charlotte NC" },
      { label: "Features", value: "Large-Scale Lawn, Pool, Putting Green" },
      { label: "Area", value: "8,000+ sq ft" },
    ],
  },
  {
    id: "ground-level-backyard-turf-palms-01",
    title: "Ground-Level Backyard Turf with Palm Trees",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Eye-level close-up of freshly installed artificial turf with rich green blade detail, framed by tall palm trees along a stone privacy wall — showcasing the natural look and feel of premium synthetic grass.",
    imageUrl: "/portfolio/artificial-turf-backyard-install-01.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Premium Turf Quality, Palm Landscaping, Stone Wall" },
      { label: "Area", value: "2,400 sq ft" },
    ],
  },
  {
    id: "residential-backyard-turf-new-home-03",
    title: "New Construction Residential Backyard Turf",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Freshly installed artificial lawn at a new construction home in Charlotte NC — crew still on site, showcasing the clean, vibrant result of a professional turf installation at a modern two-story residence.",
    imageUrl: "/portfolio/artificial-turf-backyard-install-03.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "New Construction, Full Backyard Lawn" },
      { label: "Area", value: "1,800 sq ft" },
    ],
  },
  {
    id: "luxury-backyard-putting-green-patio-drone-03",
    title: "Luxury Backyard Putting Green & Patio",
    category: "putting-greens",
    categoryLabel: "Putting Green",
    description:
      "Elevated angle of a premium multi-hole backyard putting green with flag cups, surrounded by white river rock, mature palms, and a full outdoor patio and seating area — the ultimate backyard golf experience.",
    imageUrl: "/portfolio/artificial-turf-aerial-putting-green-drone-03.webp",
    details: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Features", value: "Multi-Hole Putting Green, River Rock, Outdoor Patio" },
      { label: "Area", value: "3,200 sq ft" },
    ],
  },
  {
    id: "aerial-luxury-estate-pool-putting-green-01",
    title: "Aerial Luxury Estate: Pool, Turf & Putting Green",
    category: "residential",
    categoryLabel: "Residential",
    description:
      "Bird's-eye drone view of a stunning luxury estate featuring a freeform pool with spa, terraced stone landscaping, artificial lawn, and a tucked-away putting green — a complete outdoor living masterpiece.",
    imageUrl: "/portfolio/artificial-turf-aerial-backyard-drone-01.webp",
    gallery: [
      "/portfolio/artificial-turf-aerial-backyard-drone-01.webp",
      "/portfolio/artificial-turf-aerial-backyard-drone-06.webp",
    ],
    details: [
      { label: "Location", value: "Luxury Estate, Charlotte NC" },
      { label: "Features", value: "Freeform Pool, Terraced Landscaping, Putting Green" },
      { label: "Area", value: "5,500+ sq ft" },
    ],
  },
]
