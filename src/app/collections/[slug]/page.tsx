"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, FABRIC_CATALOG, Fabric } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { 
  ArrowLeft, 
  Heart, 
  Layers, 
  CalendarCheck, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Scissors, 
  HelpCircle,
  ArrowRight
} from "lucide-react";

export default function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return notFound();

  const { toggleFavorite, isFavorite, toggleComparison, isCompared, openContactModalWithFabric } = useShowroom();

  const fabrics = FABRIC_CATALOG.filter((f) => f.category === category.id);

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Category Hero */}
      <section className="relative min-h-[60vh] bg-obsidian text-white flex items-center justify-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={category.heroImage}
            alt={category.name}
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-16 pb-12">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-gold hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to All 8 Vaults
          </Link>
          <span className="block text-xs font-mono tracking-[0.3em] text-gold-light uppercase font-bold">
            Hampankatta Temperature-Controlled Vault
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-tight">
            {category.name}
          </h1>
          <p className="text-base sm:text-xl text-gray-200 font-sans max-w-3xl mx-auto leading-relaxed font-light">
            {category.description}
          </p>
        </div>
      </section>

      {/* Educational Weave Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-obsidian/10 rounded-3xl p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono tracking-widest text-gold-dark uppercase font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-dark" /> Master Curator’s Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-obsidian tracking-wide">
              Why We Select These Specifically For Mangalore
            </h2>
            <p className="text-sm text-gray-700 font-sans leading-relaxed">
              When investing in {category.name.toLowerCase()}, the weight in grams per square meter (g/m²) and the density of the twist dictate how the garment performs in coastal humidity versus air-conditioned settings. Our bolts undergo dual-spectrum checks to ensure crease recovery and superior drape.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-sans text-obsidian font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Woven Selvedge Authenticity
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-obsidian font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Climate-Optimized Breathability
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-obsidian font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Direct VIP Tailoring Introductions
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-cashmere p-6 rounded-2xl border border-obsidian/10 space-y-4">
            <div className="font-serif text-xl font-bold text-obsidian uppercase border-b border-obsidian/10 pb-2">
              Quick Vault Facts
            </div>
            <div className="space-y-2 text-xs font-sans">
              <div className="flex justify-between"><span className="text-gray-500 font-mono">Available Bolts:</span> <strong className="text-obsidian font-bold">{fabrics.length > 0 ? fabrics.length : "8+ Core"} Imports</strong></div>
              <div className="flex justify-between"><span className="text-gray-500 font-mono">Primary Mills:</span> <strong className="text-obsidian font-bold">Zegna, Loro Piana, Scabal</strong></div>
              <div className="flex justify-between"><span className="text-gray-500 font-mono">Lighting Profile:</span> <strong className="text-obsidian font-bold">Daylight & Chandelier</strong></div>
            </div>
            <button
              onClick={() => openContactModalWithFabric()}
              className="w-full bg-obsidian text-gold py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all"
            >
              Book Consultation For {category.name}
            </button>
          </div>
        </div>
      </section>

      {/* Bolts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-obsidian/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-gold-dark uppercase font-bold">
              Available Bolts
            </span>
            <h3 className="font-serif text-3xl font-bold uppercase text-obsidian">
              Curated {category.name} Inventory ({fabrics.length})
            </h3>
          </div>
          <span className="text-xs font-mono text-gray-500 uppercase hidden sm:block">
            All prices on consultation • Woven certificates included
          </span>
        </div>

        {fabrics.length === 0 ? (
          <div className="bg-white rounded-2xl border border-obsidian/10 p-16 text-center space-y-4">
            <h4 className="font-serif text-2xl font-bold text-obsidian">Bolts Currently Being Digitized</h4>
            <p className="text-xs sm:text-sm text-gray-600 font-sans max-w-md mx-auto">
              Our {category.name} collection features physical inventory from Scabal and Zegna in our Hampankatta vault. Please connect with our Concierge for instant WhatsApp swatch pictures.
            </p>
            <Link
              href="/concierge"
              className="inline-block bg-obsidian text-gold px-8 py-3 rounded-lg font-sans text-xs font-bold uppercase tracking-wider"
            >
              Request WhatsApp Swatches
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabrics.map((fabric) => (
              <div
                key={fabric.id}
                className="bg-white border border-obsidian/10 hover:border-gold rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
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
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-obsidian">
                  <div>
                    <h4 className="font-serif text-xl font-bold uppercase tracking-wide group-hover:text-gold-dark transition-colors">
                      {fabric.name}
                    </h4>
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
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom Cross-Sell */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian border border-gold/40 rounded-3xl p-10 md:p-14 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-gold uppercase">
              Hampankatta Flagship Store
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wide">
              Ready to Feel {category.name}?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              Reserve your visit today. We prepare swatches of these exact bolts in our dual-spectrum draping room.
            </p>
          </div>
          <button
            onClick={() => openContactModalWithFabric()}
            className="bg-gold hover:bg-gold-light text-obsidian px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-xl shrink-0 flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" /> Book a Visit
          </button>
        </div>
      </section>
    </div>
  );
}
