"use client";

import React from "react";
import Link from "next/link";
import { useShowroom } from "@/context/ShowroomContext";
import { Sparkles, Award, ShieldCheck, Scale, Wind, Scissors, CalendarCheck } from "lucide-react";

export default function FabricGuidePage() {
  const { openContactModalWithFabric } = useShowroom();

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-gold" /> Master Curator’s Educational Compendium
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            The Luxury Fabric Guide
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Understanding the vocabulary of superfine wools, double-twisted Sea Island shirting, and pure Irish linens separates true connoisseurs from ordinary consumers. Master the fundamentals of bespoke textiles.
          </p>
        </div>
      </section>

      {/* Chapter 1: Super Numbers & Thread Count */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-widest text-gold-dark uppercase font-bold">Chapter I</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-obsidian tracking-tight leading-tight">
              The Truth About “Super” Numbers
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
              <p>
                When you see terms like <strong>Super 150s</strong>, <strong>Super 180s</strong>, or <strong>Super 200s</strong> on an Ermenegildo Zegna or Loro Piana bolt, what does it actually signify? In the textile industry, the "Super" designation refers precisely to the microscopic diameter of the individual wool fiber measured in microns (µm).
              </p>
              <p>
                For instance, a <strong>Super 180s</strong> wool means the raw merino fleece fiber measures just 14.5 microns across—finer than human hair. While higher numbers yield extraordinary silkiness, weightlessness, and natural luster, they also require greater delicacy.
              </p>
            </div>
            <div className="bg-cashmere p-5 rounded-xl border border-obsidian/10 space-y-2 text-xs font-sans">
              <div className="font-bold text-obsidian uppercase font-serif text-sm">Monteiro Curation Advice:</div>
              <p className="text-gray-600">
                • <strong>Super 130s–150s:</strong> Ideal for daily high-stakes boardroom suits; outstanding durability and wrinkle recovery.<br />
                • <strong>Super 180s–200s:</strong> The holy grail for royal weddings, ceremonial milestones, and executive luxury. Best reserved for 2–3 day rotation.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-obsidian text-white p-8 rounded-2xl border border-gold/40 shadow-2xl space-y-6">
              <h3 className="font-serif text-2xl font-bold uppercase text-gold border-b border-white/10 pb-3">
                Micron to Super Number Scale
              </h3>
              <div className="space-y-4 font-mono text-xs divide-y divide-white/10">
                <div className="pt-2 flex justify-between"><span>Super 120s / 130s</span> <span className="text-gray-300">17.5 – 17.0 Microns (Robust Executive)</span></div>
                <div className="pt-2 flex justify-between"><span>Super 150s</span> <span className="text-gold-light font-bold">16.0 Microns (The Golden Standard)</span></div>
                <div className="pt-2 flex justify-between"><span>Super 180s</span> <span className="text-gold font-bold">14.5 Microns (Aristocratic Luster)</span></div>
                <div className="pt-2 flex justify-between"><span>Super 200s & Vicuña</span> <span className="text-white font-bold">13.5 Microns (Ultra-Bespoke Rarities)</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Italian vs British Mills */}
      <section className="bg-obsidian text-white py-24 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono tracking-widest text-gold uppercase font-bold">Chapter II</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Biella (Italy) vs. Huddersfield (England)
            </h2>
            <p className="text-sm text-gray-300 font-sans">
              The two undisputed capitals of global luxury weaving produce fabrics with distinct philosophies, water chemistries, and tactile signatures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-gold/30 rounded-2xl p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-gold uppercase tracking-widest">Italian Weaving Houses</span>
                <span className="font-serif text-xl font-bold text-white">Ermenegildo Zegna • Loro Piana</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                Woven using the ultra-soft mineral waters of Biella in Northern Italy, Italian wools are celebrated for their sensual drape, high luster, feather-light weight, and silky hand-feel. Italian mills excel at spinning complex high-twist yarns that flow effortlessly around the body.
              </p>
              <div className="bg-black/40 p-4 rounded-xl text-xs font-mono text-gold-light space-y-1">
                <div>• Signature Feel: Velvety, fluid, luminous</div>
                <div>• Ideal For: South Indian warm evenings & weddings</div>
              </div>
            </div>

            <div className="bg-white/5 border border-gold/30 rounded-2xl p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-gold uppercase tracking-widest">British Weaving Houses</span>
                <span className="font-serif text-xl font-bold text-white">Scabal • Dormeuil • Holland & Sherry</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                Woven with the mineral-rich waters of Huddersfield, Yorkshire, British wools are engineered for structure, body, and tailoring memory. They feature a drier, crisper hand-feel that cuts with razor-sharp precision and holds an immaculate chest canvas and trouser crease forever.
              </p>
              <div className="bg-black/40 p-4 rounded-xl text-xs font-mono text-gold-light space-y-1">
                <div>• Signature Feel: Crisp, structured, resilient</div>
                <div>• Ideal For: Commanding 3-piece bespoke formal suits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Weight & Coastal Humidity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-white border border-obsidian/10 rounded-2xl p-8 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold uppercase text-obsidian">
                Recommended Weight by Climate (g/m²)
              </h3>
              <div className="space-y-4 text-xs font-sans divide-y divide-obsidian/10">
                <div className="pt-3">
                  <strong className="text-obsidian block uppercase font-mono text-gold-dark">210g – 230g/m² (Tropical Worsted & Fresco)</strong>
                  <p className="text-gray-600 mt-1">
                    The ultimate specification for Mangalore's outdoor coastal humidity. High-twist open weaves allow air to flow directly across the skin while preventing wrinkling.
                  </p>
                </div>
                <div className="pt-3">
                  <strong className="text-obsidian block uppercase font-mono text-gold-dark">240g – 270g/m² (Four-Season All-Rounder)</strong>
                  <p className="text-gray-600 mt-1">
                    Ideal for executives splitting time between AC offices, cars, and international flights. Provides substantial drape without overheating.
                  </p>
                </div>
                <div className="pt-3">
                  <strong className="text-obsidian block uppercase font-mono text-gold-dark">280g – 340g/m² (Ceremonial Brocade & Winter Suitings)</strong>
                  <p className="text-gray-600 mt-1">
                    Heavyweight luxury designed for grand royal wedding sherwanis and structured winter overcoats.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-mono tracking-widest text-gold-dark uppercase font-bold">Chapter III</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-obsidian tracking-tight leading-tight">
              Mastering Coastal Humidity in Mangalore
            </h2>
            <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
              Many first-time bespoke clients make the mistake of selecting dense, heavy wools suitable for London or Milan, only to find them uncomfortable in South India. At Monteiro Textiles, we specialize in high-twist "tropical" worsteds and open-weave Irish linens from Solbiati that breathe effortlessly.
            </p>
            <button
              onClick={() => openContactModalWithFabric()}
              className="bg-obsidian text-gold px-8 py-4 rounded-lg font-sans text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" /> Consult Our Fabric Masters in Person
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
