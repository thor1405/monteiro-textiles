export interface Fabric {
  id: string;
  name: string;
  slug: string;
  category: "suitings" | "shirtings" | "wedding" | "linen" | "cotton" | "blazers" | "ethnic" | "imported";
  brand: string;
  origin: "Italy" | "England" | "Egypt" | "India" | "Switzerland" | "Japan";
  weight: string; // e.g. "260 g/m²"
  threadCount: string; // e.g. "Super 180s" or "2/140s"
  weave: "Twill" | "Herringbone" | "Poplin" | "Basket" | "Jacquard" | "Sharkskin" | "Plain" | "Satin" | "Seersucker";
  composition: string;
  priceTier: "Bespoke Royal ($$$$)" | "Italian Master ($$$)" | "Heritage Luxury ($$)" | "Classic Bespoke ($$$)";
  shortDescription: string;
  fullDescription: string;
  idealOccasions: string[];
  recommendedTailoring: string[];
  careInstructions: string[];
  textureImage: string;
  swatchImage: string;
  daylightColor: string; // CSS color code
  eveningColor: string; // CSS color code under warm chandelier light
  isFeatured?: boolean;
  isNewArrival?: boolean;
}

export interface CategoryInfo {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  idealFor: string[];
  careTip: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: "Business" | "Wedding" | "Corporate" | "Festive" | "Summer Linen" | "Classic Formal" | "Modern Executive";
  subtitle: string;
  description: string;
  image: string;
  featuredFabricIds: string[];
}

export interface BrandPartner {
  id: string;
  name: string;
  origin: string;
  heritageSince: number;
  description: string;
  logoText: string;
  specialty: string;
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  location: string;
  review: string;
  rating: number;
  date: string;
  verifiedPurchase: string;
  fabricUsed: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: "Fabric guides" | "Wedding fashion" | "Suit styling" | "Linen care" | "Cotton care" | "Fabric trends" | "Tailoring advice";
  readTime: string;
  publishDate: string;
  excerpt: string;
  content: string[];
  heroImage: string;
  author: string;
  relatedFabricIds: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Showroom & Appointments" | "Fabric Selection & Care" | "Tailoring & Bespoke" | "Pricing & Authenticity";
}

export const SHOWROOM_INFO = {
  name: "Monteiro Textiles Flagship Showroom",
  addressLine1: "Sharja Complex, Ground Floor, Milagres Cross Road, Near Milagres Church, Hampankatta",
  city: "Mangalore",
  state: "Karnataka",
  pincode: "575001",
  phone: "+91 98440 64435",
  landline: "(0824) 5255408 / 2441653",
  email: "concierge@monteirotextiles.com",
  whatsapp: "919844064435",
  hours: {
    weekdays: "Monday – Sunday: 10:00 AM – 10:00 PM (Daily)",
    sunday: "Open All 7 Days: 10:00 AM – 10:00 PM",
  },
  parking: "Complimentary parking available right in front of Sharja Complex, Hampankatta.",
  googleMapsLink: "https://maps.google.com",
  stats: [
    { label: "Years of Heritage in Mangalore", value: 22, suffix: "+" },
    { label: "Meters of Certified Fabrics in Vault", value: 25, suffix: "K+" },
    { label: "Domestic & Global Mill Partners", value: 16, suffix: "+" },
    { label: "Verified Customer Satisfaction", value: 4.9, suffix: " ★" },
  ],
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "cat-1",
    slug: "suitings",
    name: "Suitings",
    subtitle: "Italian Super 150s to Super 180s Wool & Cashmere Blends",
    description: "Our suiting vault houses the finest wool woven by legendary Italian and British mills. Engineered for immaculate drape, wrinkle resilience, and year-round breathability in South Indian climate.",
    heroImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
    idealFor: ["Boardroom Executive Suits", "Bespoke 3-Piece Formals", "Evening Tuxedos & Dinner Jackets"],
    careTip: "Always dry clean only twice a season. Rest the suit for 48 hours on wide cedar hangers after each wear.",
  },
  {
    id: "cat-2",
    slug: "shirtings",
    name: "Shirtings",
    subtitle: "Sea Island & Egyptian Giza 2/140s Cotton",
    description: "Spun from extra-long staple Egyptian Giza 87 and authentic Caribbean Sea Island cotton. Crisp, feather-light, and silky soft against the skin, offering unmatched moisture management during coastal humidity.",
    heroImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
    idealFor: ["Bespoke French Cuff Shirts", "Crisp Business Dress Shirts", "Ceremonial Mandarin Collar Shirts"],
    careTip: "Machine wash delicate in cold water using neutral liquid detergent. Iron while slightly damp for razor-sharp finish.",
  },
  {
    id: "cat-3",
    slug: "wedding",
    name: "Wedding & Ceremonial",
    subtitle: "Royal Brocades, Katan Silk, & Gold Zari Jacquards",
    description: "Designed for South Indian grooms who demand regal presence. Hand-woven brocades, Italian silk blends with pure metallic zari threads, and deep velvet suiting that catches crystal ballroom lighting with majestic luminescence.",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    idealFor: ["Royal Wedding Sherwanis", "Bandhgala & Jodhpuri Suits", "Reception Silk Tuxedos"],
    careTip: "Preserve in acid-free muslin garment bags away from direct humidity. Professional specialized dry clean strictly required.",
  },
  {
    id: "cat-4",
    slug: "linen",
    name: "Pure Irish & Belgian Linen",
    subtitle: "The Quintessential Coastal Luxury",
    description: "Nothing speaks effortless luxury in coastal Mangalore like pure European flax linen. Woven in Ireland and Belgium, our heavy and medium-weight linens offer superior thermal conductivity, softening into personal character with every wear.",
    heroImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200&auto=format&fit=crop",
    idealFor: ["Summer Safari Jackets", "Resort & Yachting Casuals", "Breathable Day Suits & Kurtas"],
    careTip: "Wash in cool water without bleach. Embrace the aristocratic natural wrinkles, or steam lightly from the inside.",
  },
  {
    id: "cat-5",
    slug: "cotton",
    name: "Fine Egyptian Cottons",
    subtitle: "Long-Staple Perfection for Everyday Elegance",
    description: "Our luxury cottons span fine poplins, double-twisted twills, and refined oxfords. Specially finished for natural luster without synthetic coatings, ensuring extreme comfort for Mangalore's warm afternoons.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    idealFor: ["Daily Executive Wear", "Smart Casual Button-Downs", "Festive Silk-Cotton Blends"],
    careTip: "Gentle wash at 30°C. Hang dry in shade to preserve cotton staple strength and natural sheen.",
  },
  {
    id: "cat-6",
    slug: "blazers",
    name: "Blazer & Sports Coat Fabrics",
    subtitle: "Textured Hopsack, Tweed, & Silk-Wool Blends",
    description: "Elevate smart-casual and weekend attire with our rich hopsacks, seasonal tweeds, and wool-silk-linen (WSL) three-fiber blends. Designed to drape effortlessly without heavy canvas stiffening.",
    heroImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1200&auto=format&fit=crop",
    idealFor: ["Club & Country Club Blazers", "Travel-Friendly Unstructured Jackets", "Weekend Smart-Casual Outerwear"],
    careTip: "Steam gently between wears to refresh wool fibers. Dry clean once or twice per year.",
  },
  {
    id: "cat-7",
    slug: "ethnic",
    name: "Ethnic & Festive Wear",
    subtitle: "Handloom Tussar, Matka Silk, & Kurta Linen",
    description: "Celebrating South Indian heritage with modern tailoring refinement. Our ethnic vault features pure handloom Tussar silk, refined raw silks, and breathable fine kurta cottons suitable for temple ceremonies and grand family gatherings.",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    idealFor: ["Bespoke Silk Kurtas", "Festive Bandhgalas", "Traditional Puja & Ceremony Ensembles"],
    careTip: "Dry clean raw silks and Tussars. Hand wash fine cotton kurtas separately using organic soap nut extract.",
  },
  {
    id: "cat-8",
    slug: "imported",
    name: "Imported Mill Exclusives",
    subtitle: "Zegna, Loro Piana, Scabal & Holland & Sherry",
    description: "Direct imports from Biella, Italy and Huddersfield, England. Each bolt comes with certificate of origin, woven selvedge authentic branding, and serial verification guaranteed by Monteiro Textiles.",
    heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
    idealFor: ["Heirloom Bespoke Wardrobes", "International C-Suite Attire", "Milestone Celebrations"],
    careTip: "Strictly specialist dry clean only. Store in humidity-controlled wardrobe with natural lavender sachets.",
  },
];

export const FABRIC_CATALOG: Fabric[] = [
  {
    id: "fab-101",
    name: "Trofeo Super 180s Wool & Silk",
    slug: "trofeo-super-180s-wool-silk",
    category: "suitings",
    brand: "Ermenegildo Zegna",
    origin: "Italy",
    weight: "230 g/m²",
    threadCount: "Super 180s",
    weave: "Twill",
    composition: "85% Australian Merino Wool Super 180s, 15% Mulberry Silk",
    priceTier: "Bespoke Royal ($$$$)",
    shortDescription: "Ultra-lightweight Italian masterpiece with subtle natural sheen, engineered for tropical evening elegance.",
    fullDescription: "Sourced directly from the legendary Zegna mills in Biella, Italy, this Super 180s wool blend features 15% pure Mulberry silk. The silk fiber imparts a fluid, luminous drape that responds dynamically to ambient lighting while the high-twist merino wool ensures rapid crease recovery after long executive flights or ceremonies.",
    idealOccasions: ["Weddings & Ceremonies", "Boardroom Formal", "Evening Black Tie"],
    recommendedTailoring: ["Bespoke 2-Button Single Breasted", "Hand-Canvas Double Breasted", "Lined Tuxedo Jacket"],
    careInstructions: ["Specialist dry clean only", "Rest for 48 hours after wear", "Steam from inside out"],
    textureImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#1e293b", // Deep Royal Navy
    eveningColor: "#0f172a", // Obsidian Night
    isFeatured: true,
    isNewArrival: true,
  },
  {
    id: "fab-102",
    name: "Tasmanian Super 150s Merino",
    slug: "tasmanian-super-150s-merino",
    category: "suitings",
    brand: "Loro Piana",
    origin: "Italy",
    weight: "250 g/m²",
    threadCount: "Super 150s",
    weave: "Sharkskin",
    composition: "100% Super 150s Virgin Merino Wool",
    priceTier: "Bespoke Royal ($$$$)",
    shortDescription: "Loro Piana's iconic four-season suiting with unparalleled softness and breathability.",
    fullDescription: "Loro Piana's Tasmanian is legendary worldwide as the gold standard of year-round suiting. Woven from the finest Australian wool measuring just 16 microns in diameter, this sharkskin weave creates depth and subtle two-tone character. Perfectly suited for Mangalore executives who frequently transition between AC boardrooms and humid outdoors.",
    idealOccasions: ["Boardroom Formal", "International Business Travel", "Diplomatic Dinners"],
    recommendedTailoring: ["Half-Canvas Lightweight Suit", "Bespoke Business 3-Piece"],
    careInstructions: ["Dry clean twice per season max", "Use natural cedar hanger"],
    textureImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#334155", // Slate Gray
    eveningColor: "#1e293b",
    isFeatured: true,
  },
  {
    id: "fab-103",
    name: "Royal Diamond 24K Gold Zari Jacquard",
    slug: "royal-diamond-gold-zari-jacquard",
    category: "wedding",
    brand: "Scabal Flagship Mill",
    origin: "England",
    weight: "310 g/m²",
    threadCount: "Super 140s + Metallic Zari",
    weave: "Jacquard",
    composition: "70% Super 140s Wool, 20% Mulberry Silk, 10% Gold Metallic Zari Thread",
    priceTier: "Bespoke Royal ($$$$)",
    shortDescription: "Regal ceremonial fabric infused with real gold metallic threads for South Indian grooms of distinction.",
    fullDescription: "Commissioned exclusively for royal weddings and grand ceremonial entrances. Woven in Huddersfield, England by Scabal using delicate gold-plated metallic filaments intertwined with dark obsidian wool and pure silk. The fabric catches chandelier reflections with a quiet aristocracy never looking gaudy.",
    idealOccasions: ["Weddings & Ceremonies", "Royal Reception Gala"],
    recommendedTailoring: ["Bespoke Bandhgala", "Imperial Wedding Sherwani", "Ceremonial Tuxedo"],
    careInstructions: ["Strictly specialist dry clean only", "Do not steam directly on metallic threads", "Store in padded muslin bag"],
    textureImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#1f1d1a", // Bronze Obsidian
    eveningColor: "#c5a880", // Glows Antique Gold
    isFeatured: true,
    isNewArrival: true,
  },
  {
    id: "fab-104",
    name: "Giza 87 Sea Island 2/140s Poplin",
    slug: "giza-87-sea-island-poplin",
    category: "shirtings",
    brand: "Thomas Mason",
    origin: "Italy",
    weight: "115 g/m²",
    threadCount: "2/140s Double Twist",
    weave: "Poplin",
    composition: "100% Egyptian Giza 87 Extra Long Staple Cotton",
    priceTier: "Italian Master ($$$)",
    shortDescription: "Crisp white Italian poplin that feels like cool silk against the skin, engineered for 100% opacity and breathability.",
    fullDescription: "Thomas Mason has supplied the British royalty and Italian tailoring masters since 1796. This Giza 87 cotton poplin utilizes ultra-fine two-ply yarns to achieve razor-sharp crispness with exceptional thermal dissipation. A must-have white shirting foundation for any serious wardrobe.",
    idealOccasions: ["Boardroom Formal", "Weddings & Ceremonies", "Everyday Luxury"],
    recommendedTailoring: ["Cutaway Collar Bespoke Shirt", "French Cuff Dress Shirt", "Pleated Tuxedo Shirt"],
    careInstructions: ["Machine wash cold 30°C", "Iron damp on high cotton setting", "No synthetic starch"],
    textureImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#ffffff",
    eveningColor: "#f8fafc",
    isFeatured: true,
  },
  {
    id: "fab-105",
    name: "Solbiati Pure Irish Coastal Linen",
    slug: "solbiati-pure-irish-coastal-linen",
    category: "linen",
    brand: "Solbiati (by Loro Piana)",
    origin: "Italy",
    weight: "280 g/m²",
    threadCount: "Single Heavy Weight",
    weave: "Basket",
    composition: "100% Pure Normandy & Irish Flax Linen",
    priceTier: "Italian Master ($$$)",
    shortDescription: "The crown jewel of coastal luxury. Heavyweight drape with superior airflow for Mangalore summers.",
    fullDescription: "Solbiati is the world undisputed master of linen. This 280-gram coastal weave provides substantial body and structure without trapping heat. The natural slubs and organic texture soften with every wash, developing a personalized patina that defines old-world coastal elegance.",
    idealOccasions: ["Resort & Summer Casual", "Festive & Cultural", "Weekend Outdoor Events"],
    recommendedTailoring: ["Unlined Safari Jacket", "Bespoke Gurkha Trousers", "Neapolitan Soft-Shoulder Suit"],
    careInstructions: ["Hand wash or delicate cool cycle", "Hang dry in shade", "Steam or embrace aristocratic wrinkles"],
    textureImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#e2e8f0", // Natural Oat
    eveningColor: "#cbd5e1",
    isFeatured: true,
  },
  {
    id: "fab-106",
    name: "Soktas Gold Line 2/120s Satin Twill",
    slug: "soktas-gold-line-satin-twill",
    category: "shirtings",
    brand: "Soktas Luxury",
    origin: "Switzerland",
    weight: "130 g/m²",
    threadCount: "2/120s",
    weave: "Satin",
    composition: "100% Swiss Hand-Picked Supima Cotton",
    priceTier: "Heritage Luxury ($$)",
    shortDescription: "Silky sheen cotton shirting that transitions effortlessly from morning corporate meetings to evening celebrations.",
    fullDescription: "Soktas Gold Line represents the apex of modern shirting innovation. The subtle satin weave reflects light gently, offering an upscale silkiness that resists wrinkling throughout a full workday in Mangalore.",
    idealOccasions: ["Boardroom Formal", "Festive & Cultural", "Evening Cocktails"],
    recommendedTailoring: ["Semi-Spread Collar Shirt", "Mother-of-Pearl Button Placket Shirt"],
    careInstructions: ["Gentle wash 40°C", "Hang dry", "Easy iron finish"],
    textureImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#bfdbfe", // Soft Ice Blue
    eveningColor: "#93c5fd",
    isFeatured: false,
  },
  {
    id: "fab-107",
    name: "Sherwood Forest Silk-Wool Tweed",
    slug: "sherwood-forest-silk-wool-tweed",
    category: "blazers",
    brand: "Holland & Sherry",
    origin: "England",
    weight: "290 g/m²",
    threadCount: "Super 130s",
    weave: "Herringbone",
    composition: "65% Merino Wool, 25% Silk, 10% Normandy Linen",
    priceTier: "Italian Master ($$$)",
    shortDescription: "Three-fiber WSL blend offering textured depth with lightweight breathability for smart sports coats.",
    fullDescription: "Woven by Savile Row favorite Holland & Sherry. This three-way blend combines the memory of wool, the luster of silk, and the crisp structure of linen into a sophisticated herringbone sports coat fabric.",
    idealOccasions: ["Resort & Summer Casual", "Boardroom Formal", "Country Club Socials"],
    recommendedTailoring: ["Soft-Shoulder Patch Pocket Blazer", "Unconstructed Sports Coat"],
    careInstructions: ["Dry clean only", "Steam brush after wear"],
    textureImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#365314", // Deep Olive Green
    eveningColor: "#1a2e05",
    isFeatured: true,
  },
  {
    id: "fab-108",
    name: "Katan Silk Gold Brocade Heritage",
    slug: "katan-silk-gold-brocade-heritage",
    category: "ethnic",
    brand: "Monteiro Heritage Loom",
    origin: "India",
    weight: "220 g/m²",
    threadCount: "High-Density Handloom",
    weave: "Jacquard",
    composition: "100% Pure Mulberry Katan Silk with Antique Gold Zari",
    priceTier: "Bespoke Royal ($$$$)",
    shortDescription: "Authentic handloom Katan silk with rich traditional South Indian motif brocade.",
    fullDescription: "Handwoven by master weavers exclusively for Monteiro Textiles. This pure Katan silk features intricate geometric and floral motifs inspired by coastal temple architecture. Ideal for grooms seeking deep cultural roots combined with uncompromising luxury.",
    idealOccasions: ["Weddings & Ceremonies", "Festive & Cultural"],
    recommendedTailoring: ["Bespoke Royal Sherwani", "Silk Kurta with Churidar", "Formal Achkan"],
    careInstructions: ["Specialist dry clean only", "Wrap in unbleached cotton muslin"],
    textureImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#78350f", // Rich Amber Gold
    eveningColor: "#451a03",
    isFeatured: false,
    isNewArrival: true,
  },
  {
    id: "fab-109",
    name: "Chairman’s Gold Super 160s Cashmere Blend",
    slug: "chairmans-gold-super-160s-cashmere",
    category: "suitings",
    brand: "Raymond Chairman's Collection",
    origin: "India",
    weight: "245 g/m²",
    threadCount: "Super 160s",
    weave: "Twill",
    composition: "90% Super 160s Merino Wool, 10% Mongolian Cashmere",
    priceTier: "Italian Master ($$$)",
    shortDescription: "India's highest echelon suiting, engineered for ultra-smooth hand feel and effortless drape.",
    fullDescription: "The crown jewel of domestic luxury suiting. Raymond's Chairman's Collection blends Super 160s superfine wool with pure Mongolian cashmere. Offers a velvety touch with perfect breathability suitable for both South Indian climate and overseas executive travel.",
    idealOccasions: ["Boardroom Formal", "Weddings & Ceremonies", "Executive Dinners"],
    recommendedTailoring: ["Classic 2-Button Business Suit", "Bespoke Trousers with Side Adjusters"],
    careInstructions: ["Dry clean only", "Air out overnight after wear"],
    textureImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#0f172a", // Obsidian Navy
    eveningColor: "#020617",
    isFeatured: false,
  },
  {
    id: "fab-110",
    name: "Albini 1876 Linen-Cotton Breeze",
    slug: "albini-1876-linen-cotton-breeze",
    category: "cotton",
    brand: "Albini Group",
    origin: "Italy",
    weight: "120 g/m²",
    threadCount: "Single 60s",
    weave: "Plain",
    composition: "55% Normandy Linen, 45% Egyptian Giza Cotton",
    priceTier: "Heritage Luxury ($$)",
    shortDescription: "The ideal balance of linen breathability and cotton softness for daily coastal Mangalore shirting.",
    fullDescription: "Albini 1876 combines the natural airy freshness of pure linen with the soft hand and crease resistance of Egyptian Giza cotton. Perfect for relaxed summer business casual or weekend brunch in coastal South India.",
    idealOccasions: ["Resort & Summer Casual", "Boardroom Formal", "Weekend Socials"],
    recommendedTailoring: ["Button-Down Collar Shirt", "Short-Sleeve Safari Kurta Shirt"],
    careInstructions: ["Machine wash 30°C", "Hang dry", "Steam iron while damp"],
    textureImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#fef3c7", // Warm Cream
    eveningColor: "#fde68a",
    isFeatured: false,
  },
  {
    id: "fab-111",
    name: "Raymond Fine Worsted Super 130s",
    slug: "raymond-fine-worsted-super-130s",
    category: "suitings",
    brand: "Raymond Fine Suiting",
    origin: "India",
    weight: "230 g/m²",
    threadCount: "Super 130s",
    weave: "Twill",
    composition: "100% Australian Merino Worsted Wool",
    priceTier: "Classic Bespoke ($$$)",
    shortDescription: "Raymond's flagship all-climate worsted suiting offering exceptional drape and everyday crease recovery.",
    fullDescription: "Raymond has been the gold standard of Indian suiting for a century. This Super 130s all-wool worsted is specifically spun to endure high humidity and rigorous boardroom schedules while maintaining an immaculate trouser crease.",
    idealOccasions: ["Boardroom Formal", "Weddings & Ceremonies", "Daily Office Wear"],
    recommendedTailoring: ["Classic 2-Piece Single Breasted Suit", "Tailored Trousers"],
    careInstructions: ["Dry clean only", "Rest for 24 hours between wears"],
    textureImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#334155", // Charcoal Slate
    eveningColor: "#1e293b",
    isFeatured: true,
  },
  {
    id: "fab-112",
    name: "Siyaram’s Executive Poly-Viscose Sharkskin",
    slug: "siyarams-executive-sharkskin",
    category: "suitings",
    brand: "Siyaram's Executive",
    origin: "India",
    weight: "220 g/m²",
    threadCount: "High-Twist Blend",
    weave: "Sharkskin",
    composition: "65% Premium Polyester, 35% Viscose Worsted Blend",
    priceTier: "Heritage Luxury ($$)",
    shortDescription: "High-durability executive suiting designed for daily commute, zero wrinkling, and effortless maintenance.",
    fullDescription: "Siyaram's Executive series is engineered for professionals who need a suit or trousers that look razor-sharp from 9 AM to 9 PM without delicate wool care constraints. Offers a crisp two-tone sharkskin texture and superior wear resistance.",
    idealOccasions: ["Daily Office Wear", "Corporate Formal", "Travel Casual"],
    recommendedTailoring: ["Executive Office Suit", "Smart-Casual Bandhgala", "Pleated Trousers"],
    careInstructions: ["Gentle machine wash or dry clean", "Easy iron"],
    textureImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#475569", // Steel Gray
    eveningColor: "#334155",
    isFeatured: false,
  },
  {
    id: "fab-113",
    name: "Linen Club Pure European Flax 60s",
    slug: "linen-club-pure-european-flax-60s",
    category: "linen",
    brand: "Linen Club (Aditya Birla)",
    origin: "India",
    weight: "160 g/m²",
    threadCount: "60s/60s Pure Flax",
    weave: "Plain",
    composition: "100% Certified European Flax Linen",
    priceTier: "Classic Bespoke ($$$)",
    shortDescription: "The absolute benchmark of coastal breathable summer linen in natural whites, pastels, and earth tones.",
    fullDescription: "Linen Club imports certified long-staple flax from France and Belgium, weaving it into high-clarity 100% pure linen right here in India. This 160g/m² cloth is the ultimate choice for Mangalore's warm afternoons—allowing maximum airflow while aging into a butter-soft character.",
    idealOccasions: ["Resort & Summer Casual", "Festive & Cultural", "Weekend Casual"],
    recommendedTailoring: ["Summer Safari Jacket", "Bespoke Linen Kurta", "Relaxed Drawstring Trousers"],
    careInstructions: ["Gentle wash in cold water", "Dry in shade", "Embrace natural wrinkles or steam damp"],
    textureImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
    swatchImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
    daylightColor: "#f8fafc", // Crisp Natural White
    eveningColor: "#f1f5f9",
    isFeatured: true,
  },
];

export const LOOKBOOKS: LookbookItem[] = [
  {
    id: "lb-1",
    title: "The South Indian Corporate Leader",
    category: "Business",
    subtitle: "Immaculate Super 150s & Sea Island Shirting",
    description: "Tailored specifically for humid coastal climates without sacrificing an inch of executive authority. Lightweight Italian wool paired with razor-sharp double-twist cotton.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    featuredFabricIds: ["fab-102", "fab-104", "fab-109"],
  },
  {
    id: "lb-2",
    title: "The Imperial Coastal Groom",
    category: "Wedding",
    subtitle: "Gold Zari Brocades & Loro Piana Ceremonial Wool",
    description: "Where old-world South Indian heritage meets Savile Row tailoring. Designed for evening receptions and cathedral ceremonies under crystal chandelier lights.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
    featuredFabricIds: ["fab-101", "fab-103", "fab-108"],
  },
  {
    id: "lb-3",
    title: "Coastal Summer Riviera",
    category: "Summer Linen",
    subtitle: "Pure Solbiati Linen & Unlined Safari Jackets",
    description: "Embrace coastal breezes with aristocratic unconstructed linen jackets and Gurkha trousers in earthy oats, olives, and ocean blues.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop",
    featuredFabricIds: ["fab-105", "fab-107", "fab-110"],
  },
  {
    id: "lb-4",
    title: "Festive Silk & Kurta Elegance",
    category: "Festive",
    subtitle: "Handloom Tussars & Swiss Satin Shirting",
    description: "Refined luxury for festive evenings, temple ceremonies, and family milestones. Lightweight breathability with regal tactile depth.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
    featuredFabricIds: ["fab-106", "fab-108", "fab-110"],
  },
];

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    id: "br-1",
    name: "Ermenegildo Zegna",
    origin: "Trivero, Biella, Italy",
    heritageSince: 1910,
    description: "World-renowned for sourcing the finest Australian wools and pioneering high-twist luxury weaves like Trofeo and 15 MILMIL 15.",
    logoText: "ZEGNA",
    specialty: "Superfine Italian Merino Wool & Silk Suitings",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "br-2",
    name: "Loro Piana",
    origin: "Quarona, Italy",
    heritageSince: 1924,
    description: "The absolute pinnacle of luxury cashmere, Vicuña, and extra-fine Merino wool. Creators of the legendary Tasmanian and Record Bale series.",
    logoText: "LORO PIANA",
    specialty: "Ultra-Fine Merino, Cashmere & Solbiati Linens",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "br-3",
    name: "Scabal",
    origin: "Brussels / Huddersfield England",
    heritageSince: 1938,
    description: "The cloth choice of royalty, Hollywood elites, and master tailors on Savile Row. Famous for Diamond Chip and gold zari weaves.",
    logoText: "SCABAL",
    specialty: "English Bespoke Suiting & Diamond Zari Jacquards",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "br-4",
    name: "Holland & Sherry",
    origin: "Savile Row, London, England",
    heritageSince: 1836,
    description: "Supplying the finest cloths to bespoke tailors for nearly two centuries. Master of English tweeds, hopsacks, and three-ply blazers.",
    logoText: "HOLLAND & SHERRY",
    specialty: "Savile Row Sports Coat Tweeds & Wool-Silk-Linen",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "br-5",
    name: "Thomas Mason",
    origin: "Albini Group, Italy",
    heritageSince: 1796,
    description: "The legendary English shirting mill now crafted in Italy. Supplying British monarchs with crisp double-twisted Egyptian cotton poplins.",
    logoText: "THOMAS MASON",
    specialty: "Sea Island & Giza 87 Double-Twist Shirting",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "br-6",
    name: "Soktas Luxury",
    origin: "Switzerland & Turkey",
    heritageSince: 1971,
    description: "Innovators in high-count organic cotton and satin finishes. Trusted by international designers for wrinkle-resistant executive wear.",
    logoText: "SOKTAS",
    specialty: "High-Count Swiss Satin Shirting",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "br-7",
    name: "Raymond Fine Suiting",
    origin: "Thane, India",
    heritageSince: 1925,
    description: "India's undisputed textile sovereign. Famous for tropical worsted wools, Chairman's Collection cashmere blends, and all-season ceremonial suitings.",
    logoText: "RAYMOND",
    specialty: "Fine Worsted Wool, Poly-Wool & Chairman's Cashmere",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "br-8",
    name: "Siyaram's Executive",
    origin: "Mumbai, India",
    heritageSince: 1978,
    description: "The preferred choice of India's business leaders and professionals. Known for high-durability sharkskin, textured weaves, and smart office suiting.",
    logoText: "SIYARAM'S",
    specialty: "High-Durability Executive & Formal Office Suiting",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "br-9",
    name: "Linen Club (Aditya Birla)",
    origin: "Jaya Shree Textiles, India",
    heritageSince: 1949,
    description: "Spun from 100% pure French and Belgian flax. The ultimate breathable choice for coastal South India, offering effortless summer drape and cooling comfort.",
    logoText: "LINEN CLUB",
    specialty: "100% Pure European Flax & Breathable Summer Suitings",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Adv. Rajeshwar Rao",
    role: "Senior High Court Counsel & Corporate Advisor",
    location: "Falnir, Mangalore",
    review: "I have been sourcing my courtroom and boardroom suitings from Monteiro Textiles for over two decades. Their collection of Siyaram's and English worsteds is unmatched in South India. The new Sharja Complex showroom provides exceptional privacy and comfort during selection.",
    rating: 5,
    date: "June 2026",
    verifiedPurchase: "Ermenegildo Zegna Trofeo Suiting",
    fabricUsed: "fab-101",
  },
  {
    id: "test-2",
    clientName: "Dr. Vikram Kamath",
    role: "Medical Director & Groom",
    location: "Kadri Hills, Mangalore",
    review: "For my wedding reception, I wanted something royal yet comfortable in Mangalore's evening climate. The Master Fabric Concierge recommended Scabal's gold zari jacquard paired with Thomas Mason Sea Island cotton. My bespoke tailor said it was the finest cloth he has ever cut.",
    rating: 5,
    date: "May 2026",
    verifiedPurchase: "Scabal Royal Diamond Gold Zari",
    fabricUsed: "fab-103",
  },
  {
    id: "test-3",
    clientName: "Nikhil & Ananya Hegde",
    role: "Industrialists & Art Collectors",
    location: "Bejai, Mangalore",
    review: "Walking into Monteiro Textiles in Hampankatta feels like entering a boutique in Milan. The lighting, the fabric presentation on teakwood shelves, and the staff's encyclopedic knowledge of weave counts and mill heritage make it our family's only stop for luxury textiles.",
    rating: 5,
    date: "July 2026",
    verifiedPurchase: "Solbiati Pure Irish Coastal Linen",
    fabricUsed: "fab-105",
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "art-1",
    slug: "suit-styling-south-indian-corporate-leaders",
    title: "Suit Styling for South Indian Corporate Leaders: Mastering Lightweight Luxury",
    category: "Suit styling",
    readTime: "6 min read",
    publishDate: "July 12, 2026",
    author: "Anthony Monteiro, Managing Director",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    excerpt: "How to maintain razor-sharp boardroom presence in Mangalore's coastal climate using high-twist Italian Super 150s wool and half-canvas tailoring techniques.",
    content: [
      "For corporate executives and business leaders across South India, dressing for the boardroom presents a unique geographical challenge: balancing authority and structure with intense coastal humidity.",
      "The secret lies not in abandoning wool, but in elevating to high-twist open-weave Italian wools measuring between Super 130s and Super 160s. Mills like Ermenegildo Zegna and Loro Piana engineer cloths where the yarn is spun with extra turns per centimeter. This high twist creates a microscopic natural spring, allowing the fabric to breathe while instantly shaking off wrinkles after a 4-hour meeting.",
      "At Monteiro Textiles in Hampankatta, we always recommend pairing these lightweight cloths with half-canvas or unlined Neapolitan construction. When paired with a Thomas Mason Sea Island cotton shirt, you achieve an effortless, regal silhouette that keeps you cool from morning conferences to evening gala dinners."
    ],
    relatedFabricIds: ["fab-101", "fab-102", "fab-104"],
  },
  {
    id: "art-2",
    slug: "art-of-choosing-wedding-sherwani-fabric",
    title: "The Art of Choosing Your Wedding Sherwani & Brocade: A Groom’s Handbook",
    category: "Wedding fashion",
    readTime: "8 min read",
    publishDate: "June 28, 2026",
    author: "Priya Monteiro, Head of Ceremonial Textiles",
    heroImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Navigating pure Katan silk, metallic gold zari jacquards, and velvet accents to craft an imperial South Indian wedding wardrobe.",
    content: [
      "Your wedding day wardrobe is an heirloom that will be photographed, admired, and cherished for generations. In South Indian ceremonial traditions, tactile richness and regal luster take center stage.",
      "When selecting sherwani or bandhgala fabrics, weight and drape must be perfectly harmonized with the lighting of your venue. For daytime cathedral or temple rituals, pure handloom Katan silk with antique gold zari catches natural sunlight with quiet grace. For evening luxury ballroom receptions, Italian wool-silk-zari blends from mills like Scabal offer deep obsidian contrast that radiates under crystal chandeliers.",
      "During your consultation at our Hampankatta showroom, we drape full 3-meter lengths over your shoulder under dual-spectrum lighting so you can see exactly how your bespoke ensemble will command the room."
    ],
    relatedFabricIds: ["fab-103", "fab-108", "fab-101"],
  },
  {
    id: "art-3",
    slug: "coastal-linen-care-guide-mangalore",
    title: "The Connoisseur’s Guide to Coastal Linen Care & Aristocratic Wrinkles",
    category: "Linen care",
    readTime: "5 min read",
    publishDate: "June 14, 2026",
    author: "Anthony Monteiro, Managing Director",
    heroImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Why authentic Normandy and Irish flax linen improves with age, and how to launder and store your summer wardrobe for decades of wear.",
    content: [
      "There is an old Italian saying that true luxury whispers through the lived-in wrinkles of pure linen. In coastal cities like Mangalore, Solbiati Irish and Belgian linen is not merely a seasonal fabric; it is a lifestyle necessity.",
      "Unlike synthetic fibers that degrade with each wash, pure long-staple flax fiber increases in softness and tensile strength over time. To care for your linen shirting and safari jackets, always wash in cool water using pH-neutral liquid cleansers without optical brighteners.",
      "Never tumble dry high-grade linen. Hang dry in shaded breeze, and if you prefer a crisp finish, iron the fabric while it is still 15% damp from the inside out. Over the years, your linen will develop a distinct character that fits your shoulders like a second skin."
    ],
    relatedFabricIds: ["fab-105", "fab-110", "fab-107"],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Showroom & Appointments",
    question: "Where is Monteiro Textiles located in Mangalore, and is parking available?",
    answer: "Our flagship luxury showroom is located at Sharja Complex, Ground Floor, Milagres Cross Road, near Milagres Church in Hampankatta, Mangalore (575001). We provide convenient parking right at our store entrance for all our guests.",
  },
  {
    category: "Showroom & Appointments",
    question: "Do I need an appointment to visit the showroom or explore the fabric vaults?",
    answer: "You are welcome to walk into our Hampankatta showroom anytime from Monday to Saturday between 10:00 AM and 10:00 PM. However, for bespoke wedding wardrobe planning or dedicated C-suite suiting consultations, we strongly recommend booking a consultation online or via WhatsApp so our senior fabric masters can prepare custom swatch selections for you.",
  },
  {
    category: "Tailoring & Bespoke",
    question: "Does Monteiro Textiles provide tailoring services directly or recommend master tailors?",
    answer: "We are pure textile specialists and curators of world-class fabrics. To ensure your fabric is transformed into a masterpiece, we have established exclusive partnerships with the top 10 bespoke master tailoring houses across Mangalore, Bangalore, and Mumbai. During your consultation, we provide personalized tailoring cut recommendations and direct introductions to the ideal master tailor for your garment style.",
  },
  {
    category: "Fabric Selection & Care",
    question: "Are your Italian and British fabrics certified authentic directly from the mills?",
    answer: "Yes, 100% guaranteed. Every meter of imported fabric from Ermenegildo Zegna, Loro Piana, Scabal, Thomas Mason, and Holland & Sherry is sourced directly from the mills in Italy and England. Each purchase includes the mill's woven selvedge branding along the fabric edge and an official certificate of authenticity.",
  },
  {
    category: "Fabric Selection & Care",
    question: "How does the AI Fabric Concierge assist me before my showroom visit?",
    answer: "Our digital AI Fabric Concierge analyzes your specific occasion, Mangalore climate factors, style preference, and desired tactile feel to curate a tailored shortlist of fabrics. You can save these recommendations to your digital Favorites or send them directly to our Hampankatta staff via WhatsApp so your chosen swatches are waiting on the consultation table when you arrive.",
  },
  {
    category: "Pricing & Authenticity",
    question: "What is the price range for suiting and ceremonial shirting fabrics at Monteiro Textiles?",
    answer: "Our curated selection spans three distinct luxury tiers: Heritage Luxury ($$) starting from premium Egyptian cottons and fine Indian wool blends; Italian Master ($$$) featuring Thomas Mason shirting and Super 130s–150s European wools; and Bespoke Royal ($$$$) featuring Zegna Super 180s, Loro Piana cashmere blends, and Scabal 24K gold zari jacquards.",
  },
];
