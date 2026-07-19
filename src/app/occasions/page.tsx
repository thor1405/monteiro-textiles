"use client";

import React from "react";
import Link from "next/link";
import { OccasionFinder } from "@/components/interactive/OccasionFinder";
import { Sparkles, CalendarCheck, MapPin } from "lucide-react";
import { useShowroom } from "@/context/ShowroomContext";

export default function OccasionsPage() {
  const { openContactModalWithFabric } = useShowroom();

  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold" /> Architectural Styling Engine
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Occasion Finder
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Every occasion demands its own structural weight, luster, and weave behavior. Filter below to discover our curated Hampankatta vault recommendations for royal weddings, C-suite authority, coastal leisure, and evening galas.
          </p>
        </div>
      </section>

      {/* Interactive Finder Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OccasionFinder />
      </section>

      {/* Deep-Dive Guide Section */}
      <section className="bg-obsidian text-white py-24 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono tracking-widest text-gold uppercase font-bold">
              The Protocol of Cloth
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Occasion Dressing Standards
            </h2>
            <p className="text-sm text-gray-300 font-sans">
              Master the distinction between afternoon natural light and evening indoor chandelier lighting across South Indian celebrations and corporate summits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 hover:border-gold/40 transition-colors">
              <span className="text-xs font-mono text-gold uppercase tracking-widest">Ceremonial Protocol</span>
              <h3 className="font-serif text-2xl font-bold text-white uppercase">The Royal Wedding Sherwani</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                South Indian weddings often transition from warm morning sunlight to air-conditioned evening reception halls. For grooms and families, we recommend high-twist wool-silk blends from Scabal and Zegna that resist wrinkling during long ceremonies while casting an aristocratic sheen under evening lighting.
              </p>
              <div className="pt-2 text-xs font-mono text-gold-light">
                Recommended Weight: 230g – 280g/m² • Silk/Zari Weaves
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 hover:border-gold/40 transition-colors">
              <span className="text-xs font-mono text-gold uppercase tracking-widest">Executive Protocol</span>
              <h3 className="font-serif text-2xl font-bold text-white uppercase">The Coastal C-Suite Wardrobe</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                Traveling between humid Mangalore outdoor conditions and crisp 18°C boardrooms or international flights requires high-twist worsted wools with natural spring and thermal regulation. Super 150s and 180s recover their crease overnight without dry-cleaning stress.
              </p>
              <div className="pt-2 text-xs font-mono text-gold-light">
                Recommended Weight: 210g – 250g/m² • High-Twist Fresco / Sharkskin
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-obsidian via-[#14231b] to-obsidian border border-gold/40 rounded-3xl p-10 md:p-14 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-gold uppercase">
              Personalized Occasion Consultation
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wide">
              Have an Upcoming Milestone?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              Bring your invitation, venue lighting details, or wedding palette to our Hampankatta showroom. We will curate swatches specifically matching the groom, father, and executive party.
            </p>
          </div>
          <button
            onClick={() => openContactModalWithFabric()}
            className="bg-gold hover:bg-gold-light text-obsidian px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-xl shrink-0 flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" /> Book VIP Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
