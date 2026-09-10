"use client";

import React from "react";
import Link from "next/link";
import { BRAND_PARTNERS } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { ShieldCheck, Award, MapPin, ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";

export default function BrandsPage() {
  const { openContactModalWithFabric } = useShowroom();

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold" /> Authorized Stockist & Direct Mill Import
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Partner Mills & Weavers
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Monteiro Textiles partners strictly with weaving dynasties whose history spans over a century across Biella, Huddersfield, and St. Gallen. Every bolt comes accompanied by its woven selvedge certificate.
          </p>
        </div>
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop"
            alt="Monteiro Textiles Mill Partners"
            className="w-full h-full object-cover transform scale-105 animate-pulse duration-10000"
          />
        </div>
      </section>

      {/* Grid of Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND_PARTNERS.map((partner, idx) => (
            <div
              key={partner.id}
              className="bg-white border border-obsidian/10 hover:border-gold rounded-2xl p-8 shadow-xl flex flex-col justify-between space-y-6 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-obsidian/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-gold-dark uppercase font-bold">
                      {partner.origin}
                    </span>
                    <h3 className="font-serif text-2xl font-bold uppercase text-obsidian mt-0.5 group-hover:text-gold-dark transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-cashmere border border-obsidian/10 text-obsidian font-serif font-bold flex items-center justify-center text-sm">
                    0{idx + 1}
                  </span>
                </div>

                <div className="bg-cashmere p-3 rounded-lg text-xs font-mono uppercase text-obsidian font-semibold">
                  Primary Specialty: {partner.specialty}
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="pt-4 border-t border-obsidian/10 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Selvedge Guaranteed
                </div>
                <Link
                  href="/collections"
                  className="text-xs font-sans font-bold uppercase tracking-wider text-obsidian hover:text-gold-dark flex items-center gap-1"
                >
                  View Bolts <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Authenticity Guarantee Banner */}
      <section className="bg-obsidian text-white py-20 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono text-gold uppercase tracking-widest">Woven Guarantee</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide">
              How to Verify Your Woven Selvedge
            </h2>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              Every authentic Italian or British fabric bolt features a woven border strip—known as the selvedge—along the edge of the cloth. This selvedge spells out the mill’s exact trade name, origin, super number, and gold quality stamp (e.g. <em>“Ermenegildo Zegna - Trofeo - Made in Italy”</em>). When consulting at our Hampankatta showroom, our masters invite you to run your fingers directly over this woven seal.
            </p>
          </div>
          <div className="lg:col-span-4 text-center sm:text-right">
            <button
              onClick={() => openContactModalWithFabric()}
              className="bg-gold hover:bg-gold-light text-obsidian px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest shadow-2xl shadow-gold/20 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <CalendarCheck className="w-4 h-4" /> Book VIP Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
