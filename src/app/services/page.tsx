"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_LIST, SHOWROOM_INFO, ServiceItem } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { 
  Sparkles, 
  Scissors, 
  CalendarCheck, 
  Crown, 
  Clock, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Award
} from "lucide-react";

export default function ServicesPage() {
  const { openContactModalWithFabric } = useShowroom();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const SERVICE_FAQS = [
    {
      q: "How does an in-store fabric consultation work at Monteiro Textiles?",
      a: "During your 45–60 minute session, our Master Fabric Curator sits with you in our private Hampankatta salon. We discuss your silhouette goals, intended events, climate preferences, and personal style. We then present curated bolts under dual-spectrum lighting, explaining drape memory, GSM weight, and yarn counts to help you select the ideal cloth."
    },
    {
      q: "Can you help with full wedding trousseaus for the bride, groom, and entire family?",
      a: "Yes, royal wedding and bridal styling is our signature heritage specialty. We coordinate color palettes across multiple ceremonial days (Mehendi, Sangeet, Wedding, Reception), ensuring the couple, parents, and bridal entourage have complementary hues, authentic Banarasi silks, and structured European wools."
    },
    {
      q: "Do you provide tailoring or stitching services directly?",
      a: "While we specialize purely in master fabric curation, we work hand-in-hand with South India's top 10 vetted master bespoke tailors and achkan couturiers. We provide complete cutting blueprints, pattern alignment instructions, and direct introductions with your fabric purchase."
    },
    {
      q: "Can I order fabric swatches or arrange a virtual consultation before visiting?",
      a: "Absolutely. You can schedule a high-definition video consultation with our senior fabric masters, and we can dispatch physical swatch cards or video drape simulations directly to your residence anywhere in India."
    },
    {
      q: "What is the process for bulk, corporate, or designer studio sourcing?",
      a: "For corporate uniforms, luxury hospitality, and designer collections, we provide direct mill allocation starting from 25 meters per bolt with custom color lab dipping, Pantone matching, and batch test certificates."
    }
  ];

  return (
    <div className="space-y-20 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-sans font-medium tracking-widest uppercase shadow-lg">
            <Sparkles className="w-4 h-4 text-gold" /> Bespoke Sartorial Solutions
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-tight">
            Our Atelier Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-sans leading-relaxed">
            From precision micron matching in our private Hampankatta salon to full wedding trousseaus and master tailor blueprints, experience white-glove textile advisory.
          </p>
        </div>
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop"
            alt="Monteiro Textiles Atelier Services"
            className="w-full h-full object-cover transform scale-105 animate-pulse duration-10000"
          />
        </div>
      </section>

      {/* 2. FIVE CORE SERVICE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-sans font-bold tracking-widest text-gold-dark uppercase">
            Signature Curation Pillars
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide text-obsidian">
            Tailored to Your Exact Ambition
          </h2>
          <p className="text-sm text-gray-600 font-sans leading-relaxed">
            Every service is led by master fabric consultants with decades of experience handling the world's most delicate fibers.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES_LIST.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-obsidian/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative h-72 lg:h-[420px] overflow-hidden bg-black ${isEven ? "" : "lg:order-2"}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-obsidian/90 backdrop-blur-md text-gold px-3.5 py-1.5 rounded-full border border-gold/40 text-xs font-bold uppercase tracking-wider">
                      Pillar 0{index + 1}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <div className="flex items-center gap-2 text-xs text-gold-light">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{service.duration}</span>
                        <span>•</span>
                        <MapPin className="w-3.5 h-3.5 text-gold" />
                        <span>{service.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-8 sm:p-12 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="space-y-2">
                      <span className="text-xs font-sans font-bold tracking-widest text-gold-dark uppercase block">
                        {service.tagline}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-4xl font-bold uppercase text-obsidian tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
                      {service.detailedDescription}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-obsidian">
                        Included in this service:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 font-sans">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For Tags */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase text-gray-500 mr-1">Recommended for:</span>
                      {service.idealFor.map((item, iIdx) => (
                        <span
                          key={iIdx}
                          className="px-2.5 py-1 bg-cashmere border border-obsidian/10 rounded text-[11px] font-sans font-medium text-obsidian"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-4 border-t border-obsidian/10 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => openContactModalWithFabric()}
                        className="bg-obsidian hover:bg-gold hover:text-obsidian text-white px-7 py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all shadow flex items-center gap-2"
                      >
                        <CalendarCheck className="w-4 h-4" /> Book This Service
                      </button>

                      <a
                        href={`https://wa.me/919820019780?text=${encodeURIComponent(`Hello Monteiro Textiles, I am interested in inquiring about your "${service.title}" service.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-obsidian/20 hover:border-gold text-obsidian px-6 py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600" /> WhatsApp Concierge
                      </a>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. MASTER TAILOR NETWORK BLUEPRINT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0a0a] border border-gold/30 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-sans font-semibold tracking-widest uppercase">
                <Scissors className="w-3.5 h-3.5" /> The Master Tailor Guild
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide leading-tight">
                Flawless Cloth Demands Flawless Cutting.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-2xl">
                We bridge the gap between world-class raw yardage and bespoke construction. Every cloth purchase includes complimentary cutting blueprints, seam allowances, and introductions to verified bespoke tailors across Mangalore and Bangalore.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openContactModalWithFabric()}
                  className="bg-gold hover:bg-gold-light text-obsidian px-8 py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg"
                >
                  Schedule Tailoring Consultation <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/visit"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  Visit Showroom Desk
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-3 text-gold">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="font-serif font-bold text-lg text-white">The Monteiro Guarantee</span>
                </div>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Every bolt is checked for grain alignment, pre-conditioned for shrinkage, and tagged with precise pattern-matching yardage buffers before cutting.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-sans font-bold tracking-widest text-gold-dark uppercase">
            Clarity & Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wide text-obsidian">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600 font-sans">
            Everything you need to know about our fabric consultations, appointments, and tailoring advisory.
          </p>
        </div>

        <div className="space-y-4">
          {SERVICE_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-obsidian/10 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-obsidian hover:text-gold-dark transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-gold-dark transition-transform duration-300 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-gray-600 font-sans leading-relaxed border-t border-obsidian/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 5. APPOINTMENT RESERVATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian text-white rounded-3xl p-8 sm:p-16 text-center space-y-6 border border-gold/30 relative overflow-hidden">
          <span className="text-xs font-sans font-bold tracking-widest text-gold uppercase block">
            Private VIP Appointments
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide leading-tight">
            Reserve Your Dedicated Hour in Hampankatta
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Meet directly with our master fabric curators. We prepare personalized fabric drapes under dual-spectrum daylight and chandelier chambers tailored to your occasion.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => openContactModalWithFabric()}
              className="bg-gold hover:bg-gold-light text-obsidian px-10 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-xl font-bold flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" /> Book VIP Appointment
            </button>
            <Link
              href="/visit"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-gold" /> View Store Map & Valet Details
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
