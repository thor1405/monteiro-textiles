"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SHOWROOM_INFO, BRAND_PARTNERS } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { Award, ShieldCheck, Sparkles, MapPin, CalendarCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const { openContactModalWithFabric } = useShowroom();

  return (
    <div className="space-y-24 md:space-y-36 pb-20">
      {/* Hero Header */}
      <section className="bg-obsidian text-white py-24 md:py-32 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-mono tracking-widest uppercase shadow-lg">
            <Award className="w-4 h-4 text-gold" /> Established 1978 • Hampankatta, Mangalore
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-tight">
            Our Heritage of <br />
            <span className="text-gold italic font-normal">
              Uncompromising Quality
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 font-sans leading-relaxed">
            For nearly five decades, Monteiro Textiles has served as South India’s premier custodian of world-class textiles. We believe that true luxury begins where the sheep are grazed and where the flax is spun.
          </p>
        </div>
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop"
            alt="Monteiro Textiles Luxury Showroom Hampankatta Mangalore"
            className="w-full h-full object-cover transform scale-105 animate-pulse duration-10000"
          />
        </div>
      </section>

      {/* The Founder's Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-[0.25em] text-gold-dark uppercase font-bold">
              The Hampankatta Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide text-obsidian leading-tight">
              A Sanctuary Built in Sharja Complex
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
              <p>
                Established in 2002 in Sharja Complex near Milagres Church in Hampankatta, Monteiro Textiles was founded with a clear and uncompromising vision: South India’s advocates, doctors, business leaders, and discerning families deserved a premier destination where the finest Indian textile houses and legendary European mills meet under one roof.
              </p>
              <p>
                Over the past 22+ years, Monteiro Textiles has evolved into Mangalore's most trusted multi-brand luxury showroom. Whether you are seeking India's finest worsted wools from Raymond, durable executive suitings from Siyaram's, pure European flax from Linen Club, or direct Italian and Savile Row imports from Ermenegildo Zegna, Loro Piana, and Scabal—our vault offers an unmatched spectrum of quality.
              </p>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-obsidian/10">
              <div>
                <div className="font-serif text-3xl font-bold text-gold-dark">22+</div>
                <div className="text-xs font-mono uppercase text-gray-500 mt-1">Years of Integrity</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-gold-dark">25,000+</div>
                <div className="text-xs font-mono uppercase text-gray-500 mt-1">Meters in Vault</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop"
                alt="Monteiro Textiles Heritage Showroom"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-obsidian text-white p-6 rounded-xl border border-gold shadow-2xl max-w-xs space-y-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <div className="font-serif text-lg font-bold uppercase text-gold">Genuine Brand Guarantee</div>
              <p className="text-xs font-sans text-gray-300">
                Every bolt carries authorized selvedge verification across domestic and international luxury mills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="bg-obsidian text-white py-24 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-gold uppercase font-bold">
              The Four Cornerstones
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-tight">
              Our Textile Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "100% Brand & Mill Authenticity",
                desc: "We curate exclusively from authorized mills including Raymond, Siyaram's, Linen Club, Ermenegildo Zegna, Loro Piana, and Scabal.",
              },
              {
                title: "Climate-Optimized Curation",
                desc: "Mangalore's coastal humidity demands intelligent weave selection. We prioritize high-twist fresco wools, tropical worsteds, and pure breathable Irish linens.",
              },
              {
                title: "Dual-Spectrum Inspection",
                desc: "Our Hampankatta showroom features specialized lighting chambers that allow you to inspect how your fabric looks under bright daylight and warm evening chandeliers.",
              },
              {
                title: "Master Tailoring Synergy",
                desc: "We do not merely sell cloth; we guarantee its final execution. We introduce our clients to South India's top master bespoke cutters and tailors.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 hover:border-gold/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold text-gold flex items-center justify-center font-serif font-bold text-lg">
                  0{idx + 1}
                </div>
                <h4 className="font-serif text-xl font-bold text-gold uppercase tracking-wide">{pillar.title}</h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mill Partners Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono tracking-widest text-gold-dark uppercase font-bold">
            Biella, Huddersfield & Switzerland
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-tight text-obsidian">
            Our Global Mill Partners
          </h2>
          <p className="text-sm text-gray-600 font-sans">
            We are proud to serve as authorized distributors and direct partners for the world's most revered weaving houses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border border-obsidian/10 hover:border-gold rounded-2xl p-6 shadow-lg flex flex-col justify-between space-y-4 transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-gold-dark uppercase font-bold">
                    {partner.origin}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-obsidian uppercase mt-1">
                    {partner.name}
                  </h3>
                </div>
                <span className="px-2.5 py-1 bg-cashmere text-obsidian text-[10px] font-mono uppercase rounded border border-obsidian/10 font-bold">
                  {partner.specialty}
                </span>
              </div>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                {partner.description}
              </p>
              <div className="pt-4 border-t border-obsidian/10 flex items-center justify-between">
                <span className="text-xs font-sans text-gray-400">Exclusive Stockist</span>
                <Link
                  href="/collections"
                  className="text-xs font-sans font-bold text-gold-dark hover:underline flex items-center gap-1"
                >
                  Explore Bolts <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-obsidian via-[#14231b] to-obsidian rounded-3xl p-10 md:p-16 text-white border border-gold/40 shadow-2xl text-center space-y-6">
          <span className="text-xs font-mono uppercase text-gold tracking-widest">
            Visit Our Flagship Store
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide">
            Step Into Our Hampankatta Showroom
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            We invite you to touch, feel, and compare our fabrics over complimentary South Indian filter coffee or Italian espresso in our private styling lounge.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => openContactModalWithFabric()}
              className="bg-gold hover:bg-gold-light text-obsidian px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-xl shadow-gold/20 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" /> Book Consultation Hour
            </button>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-gold" /> Store Map & Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
