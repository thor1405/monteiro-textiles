"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { Star, CheckCircle2, CalendarCheck, ShieldCheck, Award } from "lucide-react";

export default function TestimonialsPage() {
  const { openContactModalWithFabric } = useShowroom();
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Reviews (1,240+)" },
    { id: "Wedding", label: "Weddings & Ceremonies" },
    { id: "Advocate", label: "High Court Advocates" },
    { id: "Founder", label: "Entrepreneurs & C-Suite" },
    { id: "Industrialist", label: "Industrial Families" },
  ];

  const filteredTestimonials = selectedTag === "all"
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.role.toLowerCase().includes(selectedTag.toLowerCase()) || t.review.toLowerCase().includes(selectedTag.toLowerCase()));

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.9 out of 5.0 Rating across 1,240+ Verified Reviews
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Distinguished Client Reviews
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Read first-hand accounts from South India’s most respected advocates, judges, entrepreneurs, and wedding families regarding their Hampankatta consultation experience.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedTag(opt.id)}
              className={`px-5 py-2.5 rounded-full font-serif text-xs uppercase font-bold tracking-wider transition-all ${
                selectedTag === opt.id
                  ? "bg-obsidian text-gold border border-gold shadow-lg scale-105"
                  : "bg-white text-obsidian border border-obsidian/20 hover:border-gold"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-obsidian/10 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-obsidian/10 pb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2 text-xs font-mono text-gray-400">Verified Client</span>
                  </div>
                  <span className="px-3 py-1 bg-cashmere text-obsidian text-[10px] font-mono uppercase rounded border border-obsidian/10 font-bold">
                    {test.verifiedPurchase}
                  </span>
                </div>

                <p className="text-sm md:text-base text-gray-800 font-sans italic leading-relaxed">
                  “{test.review}”
                </p>
              </div>

              <div className="pt-6 border-t border-obsidian/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-obsidian uppercase">{test.clientName}</h4>
                  <span className="text-xs text-gray-500 block font-sans">{test.role} • {test.location}</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-700 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Mill Authenticated
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian border border-gold/40 rounded-3xl p-10 md:p-16 text-white text-center space-y-6 shadow-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-gold">
            Join Our Distinguished Patronage
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide">
            Reserve Your Consultation Today
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Let our senior textile masters prepare physical swatches for your upcoming wedding or executive wardrobe refresh.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => openContactModalWithFabric()}
              className="bg-gold hover:bg-gold-light text-obsidian px-10 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest shadow-2xl shadow-gold/20 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" /> Book VIP Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
