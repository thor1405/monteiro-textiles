"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FABRIC_CATALOG } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { Heart, Layers, CalendarCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const OCCASION_TABS = [
  {
    id: "all",
    label: "All Occasions",
    desc: "Explore our complete high-end vault curated for South Indian nobility and modern executives.",
  },
  {
    id: "Weddings & Ceremonies",
    label: "Weddings & Ceremonies",
    desc: "Designed to capture afternoon sunlight and evening chandeliers with majestic regal presence.",
  },
  {
    id: "Boardroom Formal",
    label: "Boardroom & Executive",
    desc: "High-twist Super 150s+ Italian wools and Sea Island shirting engineered for AC boardrooms & humidity.",
  },
  {
    id: "Resort & Summer Casual",
    label: "Coastal Summer & Leisure",
    desc: "Pure Solbiati Irish linen and unconstructed hopsacks that breathe effortlessly.",
  },
  {
    id: "Evening Black Tie",
    label: "Evening & Gala Tuxedos",
    desc: "Deep obsidian baratheas and silk-blended wools with crisp black-tie structure.",
  },
];

export function OccasionFinder() {
  const { toggleFavorite, isFavorite, toggleComparison, isCompared, openContactModalWithFabric } = useShowroom();
  const [activeTab, setActiveTab] = useState("Weddings & Ceremonies");

  const activeTabInfo = OCCASION_TABS.find((t) => t.id === activeTab) || OCCASION_TABS[0];

  const matchedFabrics = activeTab === "all"
    ? FABRIC_CATALOG
    : FABRIC_CATALOG.filter((f) => f.idealOccasions.includes(activeTab) || (activeTab === "Weddings & Ceremonies" && f.category === "wedding"));

  return (
    <div className="space-y-10">
      {/* Occasion Tabs */}
      <div className="flex flex-wrap gap-3 justify-center">
        {OCCASION_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3.5 rounded-full font-serif text-base font-bold tracking-wider uppercase transition-all ${
              activeTab === tab.id
                ? "bg-obsidian text-gold border border-gold shadow-xl scale-105"
                : "bg-white/70 hover:bg-white text-obsidian border border-obsidian/20 shadow-sm"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Occasion Header Banner */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-obsidian border border-gold/40 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-2 max-w-2xl z-10">
          <span className="text-[10px] font-mono tracking-widest text-gold uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Curated Occasion Profile
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-wide text-gold">
            {activeTabInfo.label}
          </h3>
          <p className="text-sm text-gray-300 font-sans leading-relaxed">
            {activeTabInfo.desc}
          </p>
        </div>
        <div className="z-10 shrink-0">
          <button
            onClick={() => openContactModalWithFabric()}
            className="bg-gold hover:bg-gold-light text-obsidian px-6 py-3.5 rounded-none font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-lg flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" /> Book Styling Consultation
          </button>
        </div>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* Grid of Matched Fabrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {matchedFabrics.map((fabric) => (
          <motion.div
            key={fabric.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl border border-obsidian/10 hover:border-gold overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
          >
            <div className="relative h-64 overflow-hidden bg-black">
              <img
                src={fabric.textureImage}
                alt={fabric.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-obsidian/90 text-gold px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border border-gold/40">
                {fabric.brand} • {fabric.origin}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-obsidian">
              <div>
                <h4 className="font-serif text-xl font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                  {fabric.name}
                </h4>
                <div className="mt-1 flex items-center gap-2 text-xs font-sans text-gray-500">
                  <span>{fabric.weight}</span>
                  <span>•</span>
                  <span>{fabric.weave}</span>
                  <span>•</span>
                  <span className="text-obsidian font-semibold">{fabric.threadCount}</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 font-sans line-clamp-2 leading-relaxed">
                {fabric.shortDescription}
              </p>

              <div className="bg-cashmere p-3 rounded-lg border border-obsidian/5 space-y-1 text-xs">
                <span className="text-[10px] font-mono uppercase text-gold-dark font-bold block">
                  Recommended Cut
                </span>
                <span className="text-obsidian font-medium block truncate">
                  {fabric.recommendedTailoring[0]}
                </span>
              </div>

              <div className="pt-4 border-t border-obsidian/10 flex items-center justify-between gap-2">
                <div className="flex gap-1.5">
                  <button
                    onClick={() => toggleFavorite(fabric.id)}
                    className={`p-2 rounded-lg border transition-colors ${
                      isFavorite(fabric.id)
                        ? "border-red-500 bg-red-50 text-red-500"
                        : "border-obsidian/10 hover:border-gold text-gray-500"
                    }`}
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
                  >
                    <Layers className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => openContactModalWithFabric(fabric)}
                  className="flex-1 bg-obsidian hover:bg-gold hover:text-obsidian text-white py-2.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 shadow"
                >
                  <CalendarCheck className="w-3.5 h-3.5" /> Book Bolt
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
