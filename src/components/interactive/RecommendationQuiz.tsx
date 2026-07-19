"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FABRIC_CATALOG, Fabric } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { Sparkles, Check, ArrowRight, ArrowLeft, RotateCcw, Heart, Layers, CalendarCheck } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Select Your Primary Occasion",
    subtitle: "How will this garment command its environment?",
    options: [
      { label: "Royal Wedding or Grand Ceremony", value: "wedding", desc: "For grooms, fathers, and guests under evening chandeliers." },
      { label: "Executive Boardroom & Corporate Authority", value: "suitings", desc: "For C-suite presence and daily high-stakes negotiations." },
      { label: "Coastal Summer & Resort Elegance", value: "linen", desc: "Breathable comfort for weekend leisure or yachting in Mangalore." },
      { label: "Bespoke Daily Shirting Foundation", value: "shirtings", desc: "Silky crisp cottons for French cuffs and mandarin collars." },
    ],
  },
  {
    id: 2,
    title: "Climate & Environmental Factor",
    subtitle: "Where will you primarily wear this piece?",
    options: [
      { label: "High Humidity & Coastal Sunshine (Mangalore Outdoors)", value: "humid", desc: "Requires maximum thermal conductivity and open weaves." },
      { label: "Climate-Controlled Boardrooms & International Travel", value: "ac", desc: "Requires wrinkle resilience and four-season comfort." },
      { label: "Evening Gala & Chandelier Lighting", value: "evening", desc: "Requires subtle metallic zari or silk luminous reflection." },
    ],
  },
  {
    id: 3,
    title: "Desired Tactile Hand-Feel",
    subtitle: "What sensory experience should the fabric impart?",
    options: [
      { label: "Ultra-Smooth & Luminous (Super 180s Wool / Silk)", value: "smooth", desc: "Velvety softness against the skin with effortless drape." },
      { label: "Crisp, Dry & Razor-Sharp (Sea Island Poplin / High Twist)", value: "crisp", desc: "Clean lines that hold their crease throughout long days." },
      { label: "Aristocratic Textured Slubs (Pure Flax Linen / Tweed)", value: "textured", desc: "Organic character that softens and personalizes with age." },
    ],
  },
  {
    id: 4,
    title: "Color Palette & Aesthetic Shade",
    subtitle: "Which tonal family matches your personal distinction?",
    options: [
      { label: "Obsidian Night & Royal Navy", value: "navy", desc: "Deep, commanding authority suitable for any formal setting." },
      { label: "Antique Gold Zari & Royal Bronze", value: "gold", desc: "Regal ceremonial warmth that catches the light." },
      { label: "Warm Cashmere, Cream & Crisp White", value: "cream", desc: "Timeless sophistication for daywear and formal shirting." },
      { label: "Slate Gray & Textured Earthy Olives", value: "slate", desc: "Modern executive versatility and casual elegance." },
    ],
  },
  {
    id: 5,
    title: "Preferred Tailoring Cut",
    subtitle: "How will our master tailoring partners shape your cloth?",
    options: [
      { label: "Bespoke 2-Button or 3-Piece Business Suit", value: "suit", desc: "Immaculate structure with hand-canvassed chest pieces." },
      { label: "Imperial South Indian Sherwani or Bandhgala", value: "sherwani", desc: "Regal high-collar silhouette for milestones." },
      { label: "Unlined Safari Jacket or Neapolitan Soft Sports Coat", value: "safari", desc: "Relaxed shoulder construction for effortless movement." },
      { label: "Custom French-Cuff or Cutaway Collar Dress Shirt", value: "shirt", desc: "Precise collar roll and mother-of-pearl buttons." },
    ],
  },
];

export function RecommendationQuiz() {
  const { toggleFavorite, isFavorite, toggleComparison, isCompared, openContactModalWithFabric } = useShowroom();

  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (stepId: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [stepId]: val }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(1);
    setIsFinished(false);
  };

  // Determine recommendation match based on answers
  const getRecommendation = (): Fabric => {
    const occ = answers[1];
    if (occ === "wedding") return FABRIC_CATALOG[2]; // Scabal Gold Zari
    if (occ === "suitings") return FABRIC_CATALOG[0]; // Zegna Trofeo
    if (occ === "linen") return FABRIC_CATALOG[4]; // Solbiati Linen
    if (occ === "shirtings") return FABRIC_CATALOG[3]; // Thomas Mason Poplin
    return FABRIC_CATALOG[0];
  };

  const recommendedFabric = getRecommendation();

  return (
    <div className="bg-obsidian border border-gold/40 rounded-2xl shadow-2xl p-6 md:p-10 text-white max-w-4xl mx-auto">
      {!isFinished ? (
        <div>
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-mono tracking-widest uppercase text-gold mb-2">
              <span>Step {currentStep} of {STEPS.length}</span>
              <span>{Math.round((currentStep / STEPS.length) * 100)}% Complete</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Step Question */}
          {STEPS.map(
            (step) =>
              step.id === currentStep && (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">{step.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.options.map((opt) => {
                      const isSelected = answers[step.id] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleSelectOption(step.id, opt.value)}
                          className={`p-5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                            isSelected
                              ? "bg-gold/15 border-gold shadow-lg shadow-gold/10"
                              : "bg-white/5 border-white/10 hover:border-gold/50"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className={`font-serif text-lg font-bold leading-tight ${isSelected ? "text-gold" : "text-white"}`}>
                              {opt.label}
                            </span>
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                                isSelected ? "border-gold bg-gold text-obsidian" : "border-gray-500"
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                          <p className="text-xs text-gray-400 font-sans leading-relaxed">{opt.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )
          )}

          {/* Navigation Controls */}
          <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-5 py-2.5 text-xs font-mono uppercase text-gray-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Previous Step
            </button>
            <button
              onClick={handleNext}
              disabled={!answers[currentStep]}
              className="bg-gold hover:bg-gold-light disabled:opacity-40 disabled:pointer-events-none text-obsidian px-8 py-3 rounded-none font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <span>{currentStep === STEPS.length ? "Reveal Signature Fabric" : "Continue"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Result Screen */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-8 text-center"
        >
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Your Curated Signature Bolt
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
              {recommendedFabric.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-xl mx-auto">
              Based on your preferences for <span className="text-gold font-semibold">{recommendedFabric.idealOccasions[0]}</span> and climate optimization, our Senior Textile Concierge recommends this masterpiece from <span className="text-white font-bold">{recommendedFabric.brand} ({recommendedFabric.origin})</span>.
            </p>
          </div>

          <div className="bg-white/5 border border-gold/40 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left items-center">
            <div className="space-y-4">
              <img
                src={recommendedFabric.textureImage}
                alt={recommendedFabric.name}
                className="w-full h-64 rounded-xl object-cover border border-gold/30 shadow-xl"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => toggleFavorite(recommendedFabric.id)}
                  className={`flex-1 py-2.5 rounded-lg border text-xs font-sans uppercase font-bold flex items-center justify-center gap-2 transition-all ${
                    isFavorite(recommendedFabric.id)
                      ? "border-red-400 bg-red-500/20 text-red-300"
                      : "border-gold/40 hover:border-gold text-gold"
                  }`}
                >
                  <Heart className="w-4 h-4 fill-current" /> Save to Favorites
                </button>
                <button
                  onClick={() => toggleComparison(recommendedFabric.id)}
                  className={`flex-1 py-2.5 rounded-lg border text-xs font-sans uppercase font-bold flex items-center justify-center gap-2 transition-all ${
                    isCompared(recommendedFabric.id)
                      ? "border-gold bg-gold/20 text-gold"
                      : "border-gold/40 hover:border-gold text-gray-300"
                  }`}
                >
                  <Layers className="w-4 h-4" /> Compare Spec
                </button>
              </div>
            </div>

            <div className="space-y-5 font-sans">
              <div className="pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">
                  Mill Sourced & Authenticated
                </span>
                <div className="font-serif text-2xl font-bold text-white mt-1">
                  {recommendedFabric.brand} • {recommendedFabric.origin}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-mono">Weight & Weave:</span>
                  <span className="font-semibold text-white">{recommendedFabric.weight} ({recommendedFabric.weave})</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-mono">Thread Quality:</span>
                  <span className="font-semibold text-gold-light">{recommendedFabric.threadCount}</span>
                </div>
              </div>

              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-mono mb-1">Composition:</span>
                <p className="text-xs text-gray-200 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/10">
                  {recommendedFabric.composition}
                </p>
              </div>

              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-mono mb-1">Recommended Tailoring:</span>
                <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                  {recommendedFabric.recommendedTailoring.map((cut, idx) => (
                    <li key={idx}>{cut}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => openContactModalWithFabric(recommendedFabric)}
                className="w-full bg-white text-black py-4 rounded-none font-sans text-xs font-bold uppercase tracking-widest hover:bg-gray-200 flex items-center justify-center gap-2 shadow-none"
              >
                <CalendarCheck className="w-4 h-4" /> Reserve This Bolt for Consultation
              </button>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleRestart}
              className="text-xs font-mono text-gray-400 hover:text-gold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Fabric Signature Quiz
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
