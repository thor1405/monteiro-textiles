"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORIES, FABRIC_CATALOG, BRAND_PARTNERS, TESTIMONIALS, SHOWROOM_INFO } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Layers, 
  MapPin, 
  Award, 
  ShieldCheck, 
  Scissors, 
  CalendarCheck, 
  CheckCircle2,
  ChevronRight,
  Star
} from "lucide-react";

export default function Home() {
  const { toggleFavorite, isFavorite, toggleComparison, isCompared, openContactModalWithFabric } = useShowroom();
  const [activeTabCategory, setActiveTabCategory] = useState<string>("suitings");

  const featuredFabrics = FABRIC_CATALOG.filter((f) => f.isFeatured);

  return (
    <div className="space-y-24 md:space-y-36 pb-20 overflow-hidden">
      {/* 1. FULLSCREEN HERO */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center bg-obsidian text-white overflow-hidden -mt-20 pt-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop"
            alt="Monteiro Textiles Luxury Showroom Hampankatta Mangalore"
            className="w-full h-full object-cover transform scale-105 animate-pulse duration-10000"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-mono tracking-widest uppercase shadow-lg"
            >
              <MapPin className="w-3.5 h-3.5 text-gold" /> #14 Falnir Road, Hampankatta, Mangalore
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.95] text-white"
            >
              The Pinnacle of <br />
              <span className="text-gold italic font-normal">
                Textile Aristocracy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-xl text-gray-300 font-sans max-w-2xl leading-relaxed font-light"
            >
              Step inside Mangalore’s premier multi-brand luxury showroom at Sharja Complex, Hampankatta. Discover genuine Raymond fine worsteds, Siyaram's executive blends, Linen Club pure flax, and European imports from Zegna, Loro Piana, and Scabal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-4"
            >
              <button
                onClick={() => openContactModalWithFabric()}
                className="w-full sm:w-auto bg-white hover:bg-black hover:text-white border border-white text-black px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 active:scale-95"
              >
                <CalendarCheck className="w-4 h-4" /> Contact Us
              </button>
              <Link
                href="/collections"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                Explore The 8 Vaults <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Quick Highlight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 bg-obsidian/90 border border-gold/40 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl space-y-6 text-left"
          >
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-widest uppercase text-gold">
                Brand Partner Showcase
              </span>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded text-[9px] font-mono uppercase">
                Authorized Dealer
              </span>
            </div>

            <div>
              <span className="text-xs text-gray-400 block font-mono">Featured Flagship Bolt</span>
              <h4 className="font-serif text-2xl font-bold text-white uppercase mt-1">
                Raymond Chairman's Gold
              </h4>
              <p className="text-xs text-gold-light mt-1 font-sans">
                Super 160s Merino & Cashmere • 245 g/m²
              </p>
            </div>

            <div className="relative h-36 rounded-xl overflow-hidden border border-gold/30">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop"
                alt="Raymond Chairman's Swatch"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
              <button
                onClick={() => openContactModalWithFabric(FABRIC_CATALOG[4])}
                className="absolute bottom-3 left-3 right-3 py-2 bg-white hover:bg-black hover:text-white border border-white text-black text-[11px] font-bold uppercase tracking-wider text-center rounded-none transition-colors shadow-none"
              >
                Inspect Bolt at Showroom
              </button>
            </div>

            <div className="pt-2 text-[11px] text-gray-300 font-sans flex items-center justify-between">
              <span>Authorized Mill Guarantee</span>
              <Link href="/brands" className="text-gold hover:underline font-bold">View All 16+ Brands →</Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-obsidian/95 border-t border-gold/30 backdrop-blur-md py-6 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4 gap-8 divide-x divide-white/10">
            {SHOWROOM_INFO.stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4 first:pl-0 last:pr-0">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-gold tracking-tight">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[11px] font-mono tracking-widest text-gray-400 uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL VAULTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-gold-dark uppercase font-bold">
            The Hampankatta Flagship Collection
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight uppercase text-obsidian">
            The Eight Fabric Vaults
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Each vault is curated with temperature and humidity control at our Sharja Complex store in Hampankatta, preserving the organic strength of Indian worsteds, pure linen, and fine cottons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.slice(0, 8).map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={`/collections/${cat.slug}`}
                className="group block bg-white border border-black/5 hover:border-black/20 rounded-none overflow-hidden shadow-none transition-all duration-700 card-luxury flex flex-col h-full"
              >
                <div className="relative h-60 overflow-hidden bg-obsidian">
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-obsidian/90 text-gold text-[10px] font-mono tracking-widest uppercase border border-gold/40 rounded">
                    Vault 0{idx + 1}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wide group-hover:text-gold transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-300 font-sans line-clamp-1">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 font-sans text-xs">
                  <p className="text-gray-600 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="pt-3 border-t border-obsidian/10 flex items-center justify-between text-gold-dark font-bold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                    <span>Explore Vault</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE CONCIERGE PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-none p-8 md:p-14 text-white shadow-none relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6 z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-gold text-gold text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Instant Architectural Pairing
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide leading-tight">
              Unsure Which Weight or Weave Suits Your Occasion?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-2xl">
              Consult our AI Fabric Concierge or take the 5-Step Recommendation Quiz right now. We analyze Mangalore climate conditions, occasion lighting, and tailoring preferences to reveal your signature bolt.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/concierge"
                className="bg-white hover:bg-black text-black hover:text-white border border-white px-8 py-4 rounded-none font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Launch AI Concierge Chat
              </Link>
              <Link
                href="/occasions"
                className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-none font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
              >
                Open Occasion Finder →
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 z-10 text-center lg:text-right">
            <div className="inline-block bg-obsidian/90 border border-gold/50 rounded-2xl p-6 text-left space-y-4 shadow-2xl max-w-xs mx-auto">
              <div className="text-[10px] font-mono text-gold uppercase tracking-widest border-b border-white/10 pb-2">
                Live Concierge Response
              </div>
              <p className="text-xs text-gray-200 italic leading-relaxed">
                “For your December reception at TMA Pai Hall, I recommend pairing Scabal Royal Diamond Gold Zari with Thomas Mason Sea Island cotton shirting.”
              </p>
              <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Verified Recommendation Engine
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-96 bg-gold/10 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* 4. FEATURED COLLECTIONS & TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-obsidian/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-gold-dark uppercase font-bold">
              Masterpiece Selection
            </span>
            <h2 className="font-serif text-4xl font-bold uppercase tracking-wide text-obsidian mt-1">
              Featured Showroom Bolts
            </h2>
          </div>
          <Link
            href="/collections"
            className="text-xs font-sans font-bold uppercase tracking-widest text-obsidian hover:text-gold-dark flex items-center gap-1 group"
          >
            Browse All 25,000+ Meters <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFabrics.map((fabric) => (
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
                    className="flex-1 bg-obsidian hover:bg-gold hover:text-obsidian text-white py-2.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" /> Reserve Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY MONTEIRO & HERITAGE */}
      <section className="bg-obsidian text-white py-24 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase">
                Why Discerning Executives Choose Monteiro
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-wide leading-tight">
                South India’s Standard for Authenticity & Craftsmanship
              </h2>
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                Founded in 1978 in Hampankatta, Mangalore, Monteiro Textiles has operated on a singular philosophy: never compromise on the raw fiber. Whether you are an industrialist in Bangalore or an advocate practicing in the Karnataka High Court, our fabric vault provides an aristocratic advantage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                  <div className="p-2.5 bg-gold/20 text-gold rounded-lg w-fit">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold uppercase text-gold">Direct Mill Import</h4>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    Zero middlemen. Sourced directly from Zegna and Scabal in Biella and Huddersfield with woven selvedge guarantee.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                  <div className="p-2.5 bg-gold/20 text-gold rounded-lg w-fit">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold uppercase text-gold">Master Tailor Network</h4>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    We pair your chosen fabric with the top 10 bespoke master tailoring houses across Mangalore and Bangalore.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop"
                alt="Showroom Shelf"
                className="rounded-2xl object-cover h-64 w-full border border-gold/30 transform translate-y-6 shadow-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop"
                alt="Fabric Draping"
                className="rounded-2xl object-cover h-64 w-full border border-gold/30 transform -translate-y-6 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS & GOOGLE REVIEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono tracking-widest text-gold-dark uppercase font-bold flex items-center justify-center gap-1.5">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Verified Google Reviews (4.9 / 5.0)
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-tight text-obsidian">
            Voice of Our Distinguished Clients
          </h2>
          <p className="text-sm text-gray-600 font-sans">
            From senior High Court judges to imperial grooms celebrating at TMA Pai Hall, read what leaders say about their Hampankatta showroom consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-obsidian/10 rounded-2xl p-8 shadow-xl flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-mono text-gray-400">Verified Purchase</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-sans italic leading-relaxed">
                  “{test.review}”
                </p>
              </div>

              <div className="pt-4 border-t border-obsidian/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-obsidian">{test.clientName}</h4>
                  <span className="text-[11px] text-gray-500 block font-sans">{test.role} • {test.location}</span>
                </div>
                <span className="px-2.5 py-1 bg-cashmere border border-obsidian/10 text-[10px] font-mono uppercase text-gold-dark rounded font-bold">
                  {test.verifiedPurchase.split(" ")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-obsidian hover:text-gold-dark border-b-2 border-obsidian pb-1"
          >
            Read All 1,240+ Verified Hampankatta Stories <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. SHOWROOM VISIT & VIP INVITATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-none p-8 sm:p-24 text-white shadow-none text-center space-y-10 relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto z-10 relative">
            <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase block">
              You Are Invited
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide leading-tight">
              Experience the Touch of Luxury in Person
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              Our master fabric consultants are waiting to welcome you at our flagship store on Falnir Road, Hampankatta. Get in touch with us to schedule a visit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10 relative">
            <button
              onClick={() => openContactModalWithFabric()}
              className="w-full sm:w-auto bg-white hover:bg-black hover:text-white border border-white text-black px-10 py-4 rounded-none font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" /> Contact Us
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/30 px-10 py-4 rounded-none font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-gold" /> Get Hampankatta Directions
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-gold-light font-mono z-10 relative">
            <span>✓ Mon–Sat: 10:30 AM – 8:30 PM</span>
            <span>•</span>
            <span>✓ Dedicated Store Staff</span>
            <span>•</span>
            <span>✓ Dual-Spectrum Draping Room</span>
          </div>

          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
