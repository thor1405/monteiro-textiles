"use client";

import React from "react";
import Link from "next/link";
import { SHOWROOM_INFO } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { Sparkles, MapPin, CalendarCheck, Clock, ShieldCheck, Sun, Moon, Coffee, Car } from "lucide-react";

export default function ShowroomPage() {
  const { openContactModalWithFabric } = useShowroom();

  return (
    <div className="space-y-24 md:space-y-36 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-24 md:py-32 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-mono tracking-widest uppercase shadow-lg">
            <MapPin className="w-4 h-4 text-gold" /> #14 Falnir Road, Hampankatta, Mangalore
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-tight">
            The Hampankatta <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark italic font-normal">
              Physical Experience
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 font-sans leading-relaxed">
            Our flagship showroom at Sharja Complex on Milagres Cross Road is engineered as a premier textile sanctuary. Every bolt is curated under ideal conditions to preserve the natural strength and luster of fine Indian and imported fibers.
          </p>
        </div>
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop"
            alt="Showroom Lounge"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* The 4 Experience Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-gold-dark uppercase font-bold">
            Tailored For Leaders
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-tight text-obsidian">
            The Consultation Suite
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              icon: <Sun className="w-8 h-8 text-gold" />,
              title: "Dual-Spectrum Draping Room",
              subtitle: "Simulate Coastal Sunlight vs. Chandelier Lighting",
              desc: "A fabric that glows in morning sunlight can appear entirely different under indoor evening lights. Our specialized draping chamber allows you to toggle lighting color temperatures between 5500K daylight and 2700K warm chandelier glow right over your shoulder.",
              image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
            },
            {
              icon: <Coffee className="w-8 h-8 text-gold" />,
              title: "Showroom Styling Lounge",
              subtitle: "Filter Coffee, Italian Espresso & Unhurried Curation",
              desc: "Selecting the foundation of a bespoke wardrobe should never feel rushed. Enjoy complimentary South Indian filter coffee while our textile experts bring select bolts to your table for tactile comparison.",
              image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
            },
            {
              icon: <Car className="w-8 h-8 text-gold" />,
              title: "Convenient Showroom Parking",
              subtitle: "Effortless Arrival at Sharja Complex",
              desc: "Hampankatta is the bustling commercial heart of Mangalore. Our showroom provides convenient parking right in front of Sharja Complex, ensuring a seamless and effortless entry into our store.",
              image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-gold" />,
              title: "Master Tailoring Introductions",
              subtitle: "The Bridge From Raw Bolt to Finished Garment",
              desc: "We maintain close collaborative relationships with South India’s top master bespoke cutters and tailors. Once you select your cloth, we provide formal introductions and specific cutting notes to ensure your suit or sherwani is executed without compromise.",
              image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-obsidian/10 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden bg-obsidian">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 p-3 bg-obsidian/90 rounded-2xl border border-gold/40 shadow-lg">
                  {item.icon}
                </div>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between font-sans">
                <div>
                  <span className="text-xs font-mono text-gold-dark uppercase font-bold block">{item.subtitle}</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-obsidian mt-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-obsidian/10">
                  <button
                    onClick={() => openContactModalWithFabric()}
                    className="text-xs font-bold uppercase tracking-wider text-obsidian hover:text-gold-dark flex items-center gap-1"
                  >
                    Contact Us About This →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian border border-gold/40 rounded-3xl p-10 md:p-16 text-white text-center space-y-6 shadow-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-gold">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide">
            Your Dedicated Showroom Appointment
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Whether preparing for a milestone wedding reception or refreshing an executive boardroom wardrobe, allow our textile family to guide your journey.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => openContactModalWithFabric()}
              className="bg-gold hover:bg-gold-light text-obsidian px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-xl shadow-gold/20 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" /> Contact Us
            </button>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-gold" /> View Map Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
