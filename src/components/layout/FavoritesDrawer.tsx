"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useShowroom } from "@/context/ShowroomContext";
import { FABRIC_CATALOG } from "@/data/monteiroData";
import { X, Heart, Trash2, CalendarCheck, Layers, ArrowRight } from "lucide-react";

export function FavoritesDrawer() {
  const {
    favorites,
    toggleFavorite,
    isFavoritesDrawerOpen,
    setIsFavoritesDrawerOpen,
    toggleComparison,
    isCompared,
    openContactModalWithFabric,
  } = useShowroom();

  const favoriteFabrics = FABRIC_CATALOG.filter((f) => favorites.includes(f.id));

  return (
    <AnimatePresence>
      {isFavoritesDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFavoritesDrawerOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-obsidian text-white border-l border-gold/30 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-gold fill-gold" />
                <h3 className="font-serif text-2xl font-bold tracking-wider uppercase text-gold">
                  Your Vault Favorites
                </h3>
              </div>
              <button
                onClick={() => setIsFavoritesDrawerOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {favoriteFabrics.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 p-6 space-y-4">
                  <Heart className="w-12 h-12 text-gold/30" />
                  <p className="font-serif text-lg text-gray-300">Your fabric vault selection is currently empty.</p>
                  <p className="text-xs font-sans max-w-xs leading-relaxed">
                    Explore our digital collections and click the heart icon on any Italian wool, Sea Island cotton, or royal brocade to save them here.
                  </p>
                  <Link
                    href="/collections"
                    onClick={() => setIsFavoritesDrawerOpen(false)}
                    className="mt-4 inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 px-5 py-2.5 rounded-none font-sans text-xs uppercase font-bold tracking-wider hover:bg-gold hover:text-obsidian transition-colors"
                  >
                    Explore Collections <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                favoriteFabrics.map((fabric) => (
                  <div
                    key={fabric.id}
                    className="group bg-white/5 border border-white/10 hover:border-gold/40 rounded-xl p-4 flex gap-4 transition-all"
                  >
                    <img
                      src={fabric.textureImage}
                      alt={fabric.name}
                      className="w-20 h-20 rounded-lg object-cover border border-gold/30 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono tracking-widest text-gold uppercase">
                        {fabric.brand} • {fabric.origin}
                      </div>
                      <h4 className="font-serif text-base font-bold text-white truncate group-hover:text-gold transition-colors mt-0.5">
                        {fabric.name}
                      </h4>
                      <p className="text-xs text-gray-400 font-sans mt-1 line-clamp-1">
                        {fabric.composition}
                      </p>
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <button
                          onClick={() => toggleComparison(fabric.id)}
                          className={`text-[11px] font-sans flex items-center gap-1 transition-colors ${
                            isCompared(fabric.id) ? "text-gold font-bold" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          {isCompared(fabric.id) ? "Comparing" : "Compare"}
                        </button>
                        <button
                          onClick={() => openContactModalWithFabric(fabric)}
                          className="text-[11px] font-sans text-gold-light hover:underline uppercase font-bold flex items-center gap-1"
                        >
                          Inquire <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleFavorite(fabric.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors p-1 self-start"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Action */}
            {favoriteFabrics.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-obsidian/90 space-y-3">
                <button
                  onClick={() => {
                    setIsFavoritesDrawerOpen(false);
                    openContactModalWithFabric();
                  }}
                  className="w-full bg-white text-black py-3.5 font-sans text-xs font-bold uppercase tracking-widest hover:bg-gray-200 flex items-center justify-center gap-2 transition-all shadow-none rounded-none"
                >
                  <CalendarCheck className="w-4 h-4" /> Contact Us About These ({favoriteFabrics.length})
                </button>
                <button
                  onClick={() => {
                    setIsFavoritesDrawerOpen(false);
                  }}
                  className="w-full py-2 text-center text-xs text-gray-400 hover:text-white transition-colors uppercase font-mono tracking-wider"
                >
                  Continue Exploring Showroom
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
