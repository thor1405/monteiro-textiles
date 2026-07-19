"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { HelpCircle, ChevronDown, Sparkles, CalendarCheck, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const { openContactModalWithFabric } = useShowroom();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["all", "Sourcing & Authenticity", "Tailoring & Pairings", "Showroom Protocol", "Pricing & Orders"];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchCat = selectedCategory === "all" || item.category === selectedCategory;
    const matchSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-gold" /> Showroom Policies & Curation Protocol
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Everything you need to know about how we source European bolts, our pricing philosophy, our master tailor introductions, and showroom etiquette.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-dark" />
          <input
            type="text"
            placeholder="Search 'tailor', 'price', 'woven selvedge', or 'valet parking'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-obsidian/20 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-sans focus:outline-none focus:border-gold-dark shadow-md"
          />
        </div>

        <div className="flex flex-wrap gap-2.5 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-serif text-xs uppercase font-bold tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-obsidian text-gold border border-gold shadow-lg scale-105"
                  : "bg-white text-obsidian border border-obsidian/20 hover:border-gold"
              }`}
            >
              {cat === "all" ? "All Policies" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-obsidian/10 rounded-2xl overflow-hidden shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-obsidian uppercase">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? "bg-obsidian text-gold border-obsidian rotate-180" : "bg-cashmere text-obsidian border-obsidian/20"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm font-sans text-gray-700 leading-relaxed border-t border-obsidian/5 pt-4"
                    >
                      <p>{faq.answer}</p>
                      <div className="mt-4 pt-3 border-t border-obsidian/5 flex justify-between items-center text-[11px] font-mono text-gray-400">
                        <span>Category: {faq.category}</span>
                        <button
                          onClick={() => openContactModalWithFabric()}
                          className="text-gold-dark font-bold uppercase hover:underline"
                        >
                          Ask Showroom Master →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-obsidian via-[#14231b] to-obsidian border border-gold/40 rounded-3xl p-10 md:p-14 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-gold uppercase">
              Still Have Questions?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wide">
              Direct WhatsApp & Phone Consultation
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              Connect directly with our senior showroom staff at +91 98450 12345 or reserve a private hour.
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
