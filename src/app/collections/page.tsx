"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FABRIC_CATALOG, CATEGORIES, Fabric } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { 
  Search, 
  Filter, 
  Heart, 
  Layers, 
  CalendarCheck, 
  ArrowRight, 
  Sparkles, 
  X, 
  SlidersHorizontal,
  ChevronDown
} from "lucide-react";

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const { toggleFavorite, isFavorite, toggleComparison, isCompared, openContactModalWithFabric } = useShowroom();

  // Filter States
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedWeave, setSelectedWeave] = useState<string>("all");

  // Extract unique origins and weaves dynamically
  const origins = useMemo(() => Array.from(new Set(FABRIC_CATALOG.map((f) => f.origin))), []);
  const weaves = useMemo(() => Array.from(new Set(FABRIC_CATALOG.map((f) => f.weave))), []);

  // Filtered list
  const filteredFabrics = useMemo(() => {
    return FABRIC_CATALOG.filter((fabric) => {
      const matchSearch =
        searchQuery === "" ||
        fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fabric.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fabric.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fabric.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory = selectedCategory === "all" || fabric.category === selectedCategory;
      const matchOrigin = selectedOrigin === "all" || fabric.origin === selectedOrigin;
      const matchPrice = selectedPrice === "all" || fabric.priceTier === selectedPrice;
      const matchWeave = selectedWeave === "all" || fabric.weave === selectedWeave;

      return matchSearch && matchCategory && matchOrigin && matchPrice && matchWeave;
    });
  }, [searchQuery, selectedCategory, selectedOrigin, selectedPrice, selectedWeave]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedOrigin("all");
    setSelectedPrice("all");
    setSelectedWeave("all");
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* Hero Header */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold">
            The Hampankatta Flagship Vault
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            The Eight Master Vaults
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Explore over 25,000+ meters of authenticated imported textiles. Filter below across category, country of origin, weave structure, and price tier.
          </p>
        </div>
      </section>

      {/* Category Quick Selector Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2.5 rounded-full font-serif text-xs uppercase font-bold tracking-wider transition-all ${
              selectedCategory === "all"
                ? "bg-obsidian text-gold border border-gold shadow-lg scale-105"
                : "bg-white text-obsidian border border-obsidian/20 hover:border-gold"
            }`}
          >
            All Vaults ({FABRIC_CATALOG.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = FABRIC_CATALOG.filter((f) => f.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-serif text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "bg-obsidian text-gold border border-gold shadow-lg scale-105"
                    : "bg-white text-obsidian border border-obsidian/20 hover:border-gold"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-60 font-mono">({count})</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Filter Bar & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-obsidian/10 rounded-2xl p-6 shadow-xl space-y-6">
          {/* Top Search Input & Count */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-obsidian/10">
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-dark" />
              <input
                type="text"
                placeholder="Search 'Super 180s', 'Zegna', 'Sherwani Gold Zari', or 'Irish Linen'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-cashmere/50 border border-obsidian/20 rounded-xl font-sans text-xs sm:text-sm focus:outline-none focus:border-gold-dark transition-colors"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-obsidian">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto font-sans text-xs">
              <span className="font-mono text-gray-500 uppercase">
                Showing <strong className="text-obsidian">{filteredFabrics.length}</strong> of {FABRIC_CATALOG.length} Bolts
              </span>
              {(selectedCategory !== "all" || selectedOrigin !== "all" || selectedPrice !== "all" || selectedWeave !== "all" || searchQuery !== "") && (
                <button
                  onClick={clearFilters}
                  className="text-red-600 hover:underline font-mono uppercase flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" /> Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Secondary Dropdown Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs">
            {/* Origin Filter */}
            <div>
              <label className="block text-[10px] font-mono uppercase text-gray-500 mb-1.5">Country of Origin / Mill</label>
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="w-full bg-white border border-obsidian/20 rounded-lg p-2.5 text-obsidian focus:outline-none focus:border-gold-dark font-medium"
              >
                <option value="all">All Origins (Italy, UK, Switzerland...)</option>
                {origins.map((orig) => (
                  <option key={orig} value={orig}>{orig}</option>
                ))}
              </select>
            </div>

            {/* Weave Structure Filter */}
            <div>
              <label className="block text-[10px] font-mono uppercase text-gray-500 mb-1.5">Weave Architecture</label>
              <select
                value={selectedWeave}
                onChange={(e) => setSelectedWeave(e.target.value)}
                className="w-full bg-white border border-obsidian/20 rounded-lg p-2.5 text-obsidian focus:outline-none focus:border-gold-dark font-medium"
              >
                <option value="all">All Weaves (Twill, Poplin, Jacquard...)</option>
                {weaves.map((wv) => (
                  <option key={wv} value={wv}>{wv}</option>
                ))}
              </select>
            </div>

            {/* Price Tier Filter */}
            <div>
              <label className="block text-[10px] font-mono uppercase text-gray-500 mb-1.5">Investment Tier</label>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full bg-white border border-obsidian/20 rounded-lg p-2.5 text-obsidian focus:outline-none focus:border-gold-dark font-medium"
              >
                <option value="all">All Tiers ($$ to $$$$)</option>
                <option value="Bespoke Royal ($$$$)">Bespoke Royal ($$$$)</option>
                <option value="Italian Master ($$$)">Italian Master ($$$)</option>
                <option value="Classic Bespoke ($$$)">Classic Bespoke ($$$)</option>
                <option value="Heritage Luxury ($$)">Heritage Luxury ($$)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFabrics.length === 0 ? (
          <div className="bg-white rounded-2xl border border-obsidian/10 p-16 text-center space-y-4">
            <SlidersHorizontal className="w-12 h-12 text-gold-dark mx-auto opacity-40" />
            <h3 className="font-serif text-2xl font-bold text-obsidian">No Bolts Match Your Criteria</h3>
            <p className="text-xs sm:text-sm text-gray-600 font-sans max-w-md mx-auto">
              We have over 25,000 meters in our vault that may not be fully digitized. Contact our Master Concierge via WhatsApp or reset your search criteria above.
            </p>
            <button
              onClick={clearFilters}
              className="bg-obsidian text-gold px-6 py-2.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider hover:brightness-110"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFabrics.map((fabric) => (
              <motion.div
                key={fabric.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white border border-obsidian/10 hover:border-gold rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={fabric.textureImage}
                    alt={fabric.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-obsidian/90 text-gold px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border border-gold/40">
                    {fabric.brand} • {fabric.origin}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-obsidian px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    {fabric.priceTier}
                  </div>
                  {fabric.isFeatured && (
                    <div className="absolute bottom-3 left-3 bg-gold text-obsidian px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">
                      ★ Vault Highlight
                    </div>
                  )}
                </div>

                {/* Specs */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-obsidian">
                  <div>
                    <Link href={`/collections/${fabric.category}`} className="hover:underline">
                      <h4 className="font-serif text-xl font-bold uppercase tracking-wide group-hover:text-gold-dark transition-colors">
                        {fabric.name}
                      </h4>
                    </Link>
                    <div className="mt-1 flex items-center gap-2 text-xs font-sans text-gray-500">
                      <span className="font-semibold text-obsidian">{fabric.weight}</span>
                      <span>•</span>
                      <span>{fabric.weave}</span>
                      <span>•</span>
                      <span className="text-gold-dark font-bold">{fabric.threadCount}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 font-sans line-clamp-2 leading-relaxed">
                    {fabric.shortDescription}
                  </p>

                  <div className="bg-cashmere p-3 rounded-lg border border-obsidian/5 space-y-1 text-xs">
                    <span className="text-[10px] font-mono uppercase text-gold-dark font-bold block">
                      Recommended Tailoring Pairings
                    </span>
                    <ul className="text-obsidian font-medium truncate list-disc list-inside">
                      {fabric.recommendedTailoring.slice(0, 2).map((cut, idx) => (
                        <li key={idx} className="truncate">{cut}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-obsidian/10 flex items-center justify-between gap-2">
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => toggleFavorite(fabric.id)}
                        className={`p-2 rounded-lg border transition-colors ${
                          isFavorite(fabric.id)
                            ? "border-red-500 bg-red-50 text-red-500"
                            : "border-obsidian/10 hover:border-gold text-gray-500"
                        }`}
                        title="Save to Favorites"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                      <button
                        onClick={() => toggleComparison(fabric.id)}
                        className={`p-2 rounded-lg border transition-colors ${
                          isCompared(fabric.id)
                            ? "border-gold bg-gold/10 text-gold"
                            : "border-obsidian/10 hover:border-gold text-gray-500"
                        }`}
                        title="Compare Specs"
                      >
                        <Layers className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => openContactModalWithFabric(fabric)}
                      className="flex-1 bg-obsidian hover:bg-gold hover:text-obsidian text-white py-2.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" /> Book Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* AI Concierge Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian border border-gold/40 rounded-3xl p-10 md:p-14 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-gold uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> Cannot Find Your Exact Mill Specification?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wide">
              We Sourced Over 10,000 Custom Bolts
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              If you require a specific Zegna high-twist colorway, Thomas Mason stripe, or pure cashmere overcoating for winter travel, our Senior Concierge will query our European mill stock immediately.
            </p>
          </div>
          <Link
            href="/concierge"
            className="bg-gold hover:bg-gold-light text-obsidian px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-xl shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Talk to AI Concierge
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center font-serif text-obsidian text-lg">Accessing Hampankatta Vault Inventory...</div>}>
      <CollectionsContent />
    </Suspense>
  );
}
