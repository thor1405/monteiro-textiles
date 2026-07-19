"use client";

import React, { useState } from "react";
import { AIConciergeChat } from "@/components/interactive/AIConciergeChat";
import { RecommendationQuiz } from "@/components/interactive/RecommendationQuiz";
import { Sparkles, Bot, SlidersHorizontal } from "lucide-react";

export default function ConciergePage() {
  const [activeTool, setActiveTool] = useState<"chat" | "quiz">("chat");

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold animate-spin" /> AI & Architectural Styling Tools
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Digital Fabric Concierge
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Experience the expertise of a senior textile master from wherever you are. Ask our conversational AI concierge for instant bolt recommendations or take our 5-step signature quiz.
          </p>

          <div className="flex justify-center gap-4 pt-6">
            <button
              onClick={() => setActiveTool("chat")}
              className={`px-8 py-3.5 rounded-full font-serif text-xs uppercase font-bold tracking-widest transition-all flex items-center gap-2 ${
                activeTool === "chat"
                  ? "bg-gold text-obsidian shadow-xl shadow-gold/30 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              }`}
            >
              <Bot className="w-4 h-4" /> Conversational AI Assistant
            </button>
            <button
              onClick={() => setActiveTool("quiz")}
              className={`px-8 py-3.5 rounded-full font-serif text-xs uppercase font-bold tracking-widest transition-all flex items-center gap-2 ${
                activeTool === "quiz"
                  ? "bg-gold text-obsidian shadow-xl shadow-gold/30 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" /> 5-Step Signature Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Main Tool Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTool === "chat" ? <AIConciergeChat /> : <RecommendationQuiz />}
      </section>
    </div>
  );
}
