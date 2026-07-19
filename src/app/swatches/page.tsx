"use client";

import React from "react";
import { SwatchViewer } from "@/components/interactive/SwatchViewer";
import { Sun, Moon, ZoomIn, Sparkles } from "lucide-react";

export default function SwatchesPage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold" /> Dual-Spectrum Digital Draping Room
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Digital Swatch Library
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Examine our high-density weaves under both <strong>Coastal Daylight (5500K)</strong> and <strong>Warm Chandelier Glow (2700K)</strong> to see how luster changes. Hover and click any swatch to launch the 150% magnification weave inspector.
          </p>
        </div>
      </section>

      {/* Swatch Viewer Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SwatchViewer />
      </section>
    </div>
  );
}
