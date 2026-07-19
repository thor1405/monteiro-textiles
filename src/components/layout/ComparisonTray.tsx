"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useShowroom } from "@/context/ShowroomContext";
import { FABRIC_CATALOG, Fabric } from "@/data/monteiroData";
import { X, Layers, Trash2, CheckCircle2, ArrowUpRight, Scale, Wind, Sparkles, Scissors } from "lucide-react";

export function ComparisonTray() {
  const {
    comparisonList,
    toggleComparison,
    clearComparison,
    isComparisonTrayOpen,
    setIsComparisonTrayOpen,
    openContactModalWithFabric,
  } = useShowroom();

  const [fullModalOpen, setFullModalOpen] = useState(false);

  const comparedFabrics = FABRIC_CATALOG.filter((f) => comparisonList.includes(f.id));

  if (comparisonList.length === 0 && !isComparisonTrayOpen) return null;

  return (
    <>
      {/* Bottom Sticky Floating Tray Indicator */}
      <AnimatePresence>
        {comparisonList.length > 0 && !fullModalOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 z-40 bg-obsidian text-white border border-gold/50 rounded-2xl shadow-2xl p-4 max-w-xl w-full mx-4 sm:mx-0 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-gold/20 text-gold rounded-xl shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="font-serif text-base font-bold text-gold tracking-wide uppercase flex items-center gap-2">
                  Fabric Comparison ({comparedFabrics.length}/3)
                </div>
                <div className="text-xs text-gray-400 truncate font-sans">
                  {comparedFabrics.map((f) => f.name).join(" vs ")}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setFullModalOpen(true)}
                className="bg-gold text-obsidian px-4 py-2 font-sans text-xs font-bold uppercase tracking-wider rounded-lg hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md shadow-gold/20"
              >
                Compare Specs <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={clearComparison}
                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                title="Clear all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Comparison Modal */}
      <AnimatePresence>
        {fullModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-obsidian border border-gold/40 rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl text-white overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold tracking-wider uppercase flex items-center gap-2">
                    <Layers className="w-7 h-7" /> Side-by-Side Spec Comparison
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Evaluate weight, thread count, weave structure, and tailoring recommendations side by side.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={clearComparison}
                    className="text-xs font-mono text-red-400 hover:underline uppercase flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                  <button
                    onClick={() => setFullModalOpen(false)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Matrix Content */}
              <div className="flex-1 overflow-auto p-6">
                {comparedFabrics.length === 0 ? (
                  <div className="text-center py-20 text-gray-400 font-serif text-xl">
                    No fabrics selected for comparison yet.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Row headers col (desktop) */}
                    <div className="hidden md:flex flex-col justify-between py-6 pr-4 border-r border-white/10 font-mono text-xs uppercase text-gold-light space-y-6">
                      <div className="h-44 flex items-center font-serif text-lg font-bold text-gold">
                        Fabric Profile
                      </div>
                      <div className="flex items-center gap-2"><Scale className="w-4 h-4 text-gold" /> Weight</div>
                      <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-gold" /> Thread Count</div>
                      <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-gold" /> Weave Structure</div>
                      <div>Origin & Mill</div>
                      <div>Composition</div>
                      <div className="flex items-center gap-2"><Scissors className="w-4 h-4 text-gold" /> Recommended Cut</div>
                      <div>Action</div>
                    </div>

                    {/* Fabric Columns */}
                    {comparedFabrics.map((fabric) => (
                      <div
                        key={fabric.id}
                        className="bg-white/5 border border-white/10 hover:border-gold/30 rounded-xl p-4 flex flex-col justify-between space-y-6 relative"
                      >
                        <button
                          onClick={() => toggleComparison(fabric.id)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-red-400 p-1"
                          title="Remove"
                        >
                          <X className="w-4 h-4" />
                        </button>

                        <div className="space-y-3">
                          <img
                            src={fabric.textureImage}
                            alt={fabric.name}
                            className="w-full h-32 rounded-lg object-cover border border-gold/30"
                          />
                          <div className="text-[10px] font-mono tracking-widest text-gold uppercase">
                            {fabric.brand}
                          </div>
                          <h4 className="font-serif text-lg font-bold text-white leading-tight">
                            {fabric.name}
                          </h4>
                          <span className="inline-block px-2 py-0.5 bg-gold/20 text-gold text-[10px] rounded font-semibold uppercase">
                            {fabric.priceTier}
                          </span>
                        </div>

                        <div className="space-y-4 text-xs font-sans text-gray-200 divide-y divide-white/10">
                          <div className="pt-2 flex justify-between md:block">
                            <span className="md:hidden text-gray-400 text-[10px] uppercase block">Weight:</span>
                            <span className="font-bold text-white">{fabric.weight}</span>
                          </div>
                          <div className="pt-2 flex justify-between md:block">
                            <span className="md:hidden text-gray-400 text-[10px] uppercase block">Thread Count:</span>
                            <span className="font-semibold text-gold-light">{fabric.threadCount}</span>
                          </div>
                          <div className="pt-2 flex justify-between md:block">
                            <span className="md:hidden text-gray-400 text-[10px] uppercase block">Weave:</span>
                            <span>{fabric.weave}</span>
                          </div>
                          <div className="pt-2 flex justify-between md:block">
                            <span className="md:hidden text-gray-400 text-[10px] uppercase block">Origin:</span>
                            <span>{fabric.origin}</span>
                          </div>
                          <div className="pt-2">
                            <span className="md:hidden text-gray-400 text-[10px] uppercase block">Composition:</span>
                            <span className="text-gray-300 block mt-1">{fabric.composition}</span>
                          </div>
                          <div className="pt-2">
                            <span className="md:hidden text-gray-400 text-[10px] uppercase block">Recommended Tailoring:</span>
                            <ul className="list-disc list-inside mt-1 space-y-1 text-gray-300">
                              {fabric.recommendedTailoring.map((cut, idx) => (
                                <li key={idx} className="truncate">{cut}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setFullModalOpen(false);
                            openContactModalWithFabric(fabric);
                          }}
                          className="w-full bg-gold hover:bg-gold-light text-obsidian py-2.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow"
                        >
                          Book Consultation
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
