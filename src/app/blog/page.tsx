"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BLOG_ARTICLES } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen, CalendarCheck } from "lucide-react";

export default function BlogPage() {
  const { openContactModalWithFabric } = useShowroom();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Fabric guides", "Wedding fashion", "Suit styling", "Linen care", "Cotton care", "Fabric trends", "Tailoring advice"];

  const filteredArticles = selectedCategory === "all"
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <BookOpen className="w-4 h-4 text-gold" /> Editorial Knowledge Compendium
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            The Monteiro Journal
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Explorations in bespoke tailoring, Italian wool micron counts, high-humidity preservation, and ceremonial protocol written by our Senior Textile Masters.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-serif text-xs uppercase font-bold tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-obsidian text-gold border border-gold shadow-lg scale-105"
                  : "bg-white text-obsidian border border-obsidian/20 hover:border-gold"
              }`}
            >
              {cat === "all" ? "All Articles" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-obsidian/10 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-gold transition-all"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-obsidian">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-obsidian/90 text-gold px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase border border-gold/40">
                  {article.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 text-obsidian px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1.5 shadow">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </div>
              </div>

              <div className="p-8 space-y-5 flex-1 flex flex-col justify-between font-sans">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <Calendar className="w-3.5 h-3.5" /> {article.publishDate}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian uppercase group-hover:text-gold-dark transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-obsidian/10 flex items-center justify-between">
                  <button
                    onClick={() => openContactModalWithFabric()}
                    className="text-xs font-sans font-bold uppercase tracking-wider text-obsidian hover:text-gold-dark flex items-center gap-1"
                  >
                    Discuss With Master <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian border border-gold/40 rounded-3xl p-10 md:p-16 text-white text-center space-y-6 shadow-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-gold">
            Private Textile Dispatch
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide">
            Subscribe to Our Editorial Notes
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Receive bi-monthly dispatches whenever new seasonal Loro Piana or Scabal bolt consignments arrive in our Hampankatta vault.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => openContactModalWithFabric()}
              className="bg-gold hover:bg-gold-light text-obsidian px-10 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest shadow-2xl shadow-gold/20 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" /> Book VIP Consultation Instead
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
