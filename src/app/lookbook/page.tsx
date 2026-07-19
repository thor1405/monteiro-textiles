"use client";

import React, { useState } from "react";
import { LOOKBOOKS, FABRIC_CATALOG } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { Sparkles, CalendarCheck, MapPin, ArrowRight } from "lucide-react";

export default function LookbookPage() {
  const { openContactModalWithFabric } = useShowroom();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredLookbooks = selectedCategory === "all"
    ? LOOKBOOKS
    : LOOKBOOKS.filter((l) => l.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold" /> Bespoke Execution & Style Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Style Lookbooks
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Witness how our imported bolts are transformed into finished architectural silhouettes across South India’s most distinguished boardrooms, weddings, and coastal retreats.
          </p>
        </div>
      </section>

      {/* Lookbooks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredLookbooks.map((look) => {
            const matchedFabric = FABRIC_CATALOG.find((f) => f.id === look.featuredFabricIds[0]) || FABRIC_CATALOG[0];
            return (
              <div
                key={look.id}
                className="bg-white border border-obsidian/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group"
              >
                <div className="relative h-96 sm:h-[480px] overflow-hidden bg-obsidian">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 bg-obsidian/90 text-gold px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase border border-gold/40">
                    {look.category}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="text-xs font-mono text-gold-light uppercase">{look.subtitle}</span>
                    <h3 className="font-serif text-3xl font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                      {look.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between font-sans">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {look.description}
                  </p>

                  <div className="bg-cashmere p-4 rounded-xl border border-obsidian/10 space-y-2">
                    <span className="text-[10px] font-mono text-gold-dark uppercase font-bold block">
                      Featured Bolt Used in this Silhouette
                    </span>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-serif font-bold text-obsidian uppercase">{matchedFabric.name}</div>
                        <div className="text-xs text-gray-500 font-mono">{matchedFabric.brand} • {matchedFabric.weight}</div>
                      </div>
                      <button
                        onClick={() => openContactModalWithFabric(matchedFabric)}
                        className="text-xs font-bold uppercase tracking-wider text-gold-dark hover:underline flex items-center gap-1"
                      >
                        Book Bolt →
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => openContactModalWithFabric(matchedFabric)}
                    className="w-full bg-obsidian hover:bg-gold hover:text-obsidian text-white py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <CalendarCheck className="w-4 h-4" /> Recreate This Look Under Our Master Tailors
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
