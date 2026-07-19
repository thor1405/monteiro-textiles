"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FABRIC_CATALOG, Fabric } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { Sun, Moon, ZoomIn, Heart, Layers, CalendarCheck, ArrowRight, Check, Sparkles } from "lucide-react";

export function SwatchViewer() {
  const { toggleFavorite, isFavorite, toggleComparison, isCompared, openContactModalWithFabric } = useShowroom();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightingMode, setLightingMode] = useState<"daylight" | "evening">("daylight");
  const [zoomedFabric, setZoomedFabric] = useState<Fabric | null>(null);

  const filteredFabrics = selectedCategory === "all"
    ? FABRIC_CATALOG
    : FABRIC_CATALOG.filter((f) => f.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Top Filter & Lighting Control Bar */}
      <div className="bg-obsidian border border-gold/30 rounded-2xl p-6 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 items-center w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          {[
            { id: "all", label: "All Swatches" },
            { id: "suitings", label: "Suitings" },
            { id: "shirtings", label: "Shirtings" },
            { id: "wedding", label: "Wedding" },
            { id: "linen", label: "Irish Linen" },
            { id: "cotton", label: "Giza Cotton" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs uppercase font-bold tracking-wider transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-gold text-obsidian shadow-lg shadow-gold/20"
                  : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Lighting Simulation Toggle */}
        <div className="flex items-center gap-3 bg-black/50 p-1.5 rounded-full border border-gold/40 shrink-0 w-full md:w-auto justify-center">
          <button
            onClick={() => setLightingMode("daylight")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans uppercase font-bold tracking-wide transition-all ${
              lightingMode === "daylight"
                ? "bg-white text-obsidian shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Sun className="w-4 h-4 text-amber-500" /> Coastal Daylight (5500K)
          </button>
          <button
            onClick={() => setLightingMode("evening")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans uppercase font-bold tracking-wide transition-all ${
              lightingMode === "evening"
                ? "bg-amber-500/20 text-gold border border-gold/50 shadow-md shadow-gold/10"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Moon className="w-4 h-4 text-gold" /> Chandelier Light (2700K)
          </button>
        </div>
      </div>

      {/* Swatches Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFabrics.map((fabric) => {
          const activeColor = lightingMode === "daylight" ? fabric.daylightColor : fabric.eveningColor;
          return (
            <motion.div
              key={fabric.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-obsidian border border-gold/20 hover:border-gold rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-all"
            >
              {/* Swatch Display Area */}
              <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center">
                {/* Simulated lighting color wash layer */}
                <div
                  className="absolute inset-0 transition-colors duration-700 ease-in-out mix-blend-color z-10 pointer-events-none"
                  style={{ backgroundColor: activeColor, opacity: lightingMode === "evening" ? 0.35 : 0.1 }}
                />
                <img
                  src={fabric.textureImage}
                  alt={fabric.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Lighting mode badge */}
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-obsidian/80 backdrop-blur-md border border-gold/40 text-[10px] font-mono text-gold uppercase tracking-wider flex items-center gap-1">
                  {lightingMode === "daylight" ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3 text-gold" />}
                  {lightingMode === "daylight" ? "Daylight Profile" : "Warm Chandelier Glow"}
                </div>

                {/* Zoom Trigger Button */}
                <button
                  onClick={() => setZoomedFabric(fabric)}
                  className="absolute inset-0 z-20 bg-obsidian/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2 text-white transition-opacity font-serif text-lg tracking-wider"
                >
                  <div className="p-3 bg-gold text-obsidian rounded-full shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span>Inspect Weave & Texture Zoom</span>
                </button>
              </div>

              {/* Specs & Actions */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-white">
                <div>
                  <div className="flex justify-between items-start text-[10px] font-mono uppercase tracking-widest text-gold mb-1">
                    <span>{fabric.brand}</span>
                    <span>{fabric.origin}</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold group-hover:text-gold transition-colors leading-tight">
                    {fabric.name}
                  </h4>
                  <div className="mt-2 flex items-center gap-2 text-xs font-sans text-gray-300">
                    <span className="px-2 py-0.5 bg-white/10 rounded">{fabric.weight}</span>
                    <span className="px-2 py-0.5 bg-white/10 rounded">{fabric.threadCount}</span>
                    <span className="px-2 py-0.5 bg-gold/20 text-gold rounded font-semibold">{fabric.weave}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 font-sans line-clamp-2 leading-relaxed">
                  {fabric.shortDescription}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => toggleFavorite(fabric.id)}
                      className={`p-2 rounded-lg border transition-colors ${
                        isFavorite(fabric.id)
                          ? "border-red-400 bg-red-500/20 text-red-300"
                          : "border-white/10 hover:border-gold text-gray-400"
                      }`}
                      title="Save to Favorites"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                    <button
                      onClick={() => toggleComparison(fabric.id)}
                      className={`p-2 rounded-lg border transition-colors ${
                        isCompared(fabric.id)
                          ? "border-gold bg-gold/20 text-gold"
                          : "border-white/10 hover:border-gold text-gray-400"
                      }`}
                      title="Compare Specs"
                    >
                      <Layers className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => openContactModalWithFabric(fabric)}
                    className="flex-1 bg-gold hover:bg-gold-light text-obsidian py-2.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" /> Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Texture Explorer Magnified Zoom Modal */}
      <AnimatePresence>
        {zoomedFabric && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedFabric(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-obsidian border border-gold/50 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl text-white"
            >
              {/* High-Res Magnified Image Area */}
              <div className="md:w-3/5 bg-black relative flex items-center justify-center overflow-hidden h-72 md:h-auto">
                <div
                  className="absolute inset-0 transition-colors duration-700 ease-in-out mix-blend-color z-10 pointer-events-none"
                  style={{ backgroundColor: lightingMode === "daylight" ? zoomedFabric.daylightColor : zoomedFabric.eveningColor, opacity: lightingMode === "evening" ? 0.35 : 0.1 }}
                />
                <img
                  src={zoomedFabric.textureImage}
                  alt={zoomedFabric.name}
                  className="w-full h-full object-cover transform scale-150 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4 z-20 bg-obsidian/90 border border-gold/40 px-3 py-1.5 rounded-full text-xs font-mono text-gold flex items-center gap-2 shadow">
                  <ZoomIn className="w-4 h-4 animate-bounce" /> Magnified 150% High-Density Weave View
                </div>
              </div>

              {/* Spec Details Panel */}
              <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-xs font-mono text-gold uppercase tracking-widest">
                      {zoomedFabric.brand} • {zoomedFabric.origin}
                    </span>
                    <button onClick={() => setZoomedFabric(null)} className="text-gray-400 hover:text-white text-xs uppercase font-mono">
                      Close [X]
                    </button>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                    {zoomedFabric.name}
                  </h3>

                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {zoomedFabric.fullDescription}
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2.5 text-xs font-sans">
                    <div className="flex justify-between"><span className="text-gray-400 font-mono">Weight:</span> <span className="font-bold">{zoomedFabric.weight}</span></div>
                    <div className="flex justify-between"><span className="text-gray-400 font-mono">Thread Count:</span> <span className="text-gold font-bold">{zoomedFabric.threadCount}</span></div>
                    <div className="flex justify-between"><span className="text-gray-400 font-mono">Weave Structure:</span> <span>{zoomedFabric.weave}</span></div>
                    <div className="flex justify-between"><span className="text-gray-400 font-mono">Composition:</span> <span className="text-right max-w-[180px]">{zoomedFabric.composition}</span></div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-gold block mb-2">Ideal Occasions</span>
                    <div className="flex flex-wrap gap-1.5">
                      {zoomedFabric.idealOccasions.map((occ, i) => (
                        <span key={i} className="px-2.5 py-1 bg-white/10 text-white rounded text-xs">
                          {occ}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      setZoomedFabric(null);
                      openContactModalWithFabric(zoomedFabric);
                    }}
                    className="w-full bg-white text-black py-3.5 rounded-none font-sans text-xs font-bold uppercase tracking-widest hover:bg-gray-200 flex items-center justify-center gap-2 shadow-none"
                  >
                    <CalendarCheck className="w-4 h-4" /> Book Consultation For This Bolt
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
