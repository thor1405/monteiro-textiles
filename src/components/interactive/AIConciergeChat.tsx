"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FABRIC_CATALOG, Fabric } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { Sparkles, Send, Bot, User, Heart, Layers, CalendarCheck, ArrowRight, RefreshCw } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  recommendedFabrics?: Fabric[];
}

export function AIConciergeChat() {
  const { toggleFavorite, isFavorite, toggleComparison, isCompared, openContactModalWithFabric } = useShowroom();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init-1",
      sender: "ai",
      text: "Greetings. I am your Master Fabric Concierge, trained on Monteiro Textiles' 48-year heritage in Hampankatta. Whether you require Super 180s Italian wool for boardroom authority or gold zari brocade for a royal Mangalore wedding, allow me to guide your selection.",
      recommendedFabrics: [FABRIC_CATALOG[0], FABRIC_CATALOG[2]],
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "Recommend breathable wedding sherwani fabric for December evening",
    "Best Italian wool for daily corporate meetings in AC & humidity",
    "What is the difference between Super 150s and Super 180s?",
    "Show me pure coastal Irish linen for an unlined summer jacket",
    "Do you have Thomas Mason white shirting in stock?",
  ];

  const handleSendPrompt = (promptText: string) => {
    const userMsg: ChatMessage = { id: Date.now().toString(), sender: "user", text: promptText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let responseText = "Based on your inquiry, I have curated the following bolts from our temperature-controlled Hampankatta vaults:";
      let matches: Fabric[] = [];

      const lower = promptText.toLowerCase();
      if (lower.includes("wedding") || lower.includes("sherwani") || lower.includes("brocade") || lower.includes("groom")) {
        responseText = "For South Indian ceremonial grandeur, weight and luster must respond beautifully to both natural afternoon sunlight and evening chandelier lighting. I recommend our royal zari jacquards and high-twist wool-silk blends:";
        matches = FABRIC_CATALOG.filter((f) => f.category === "wedding" || f.id === "fab-101" || f.id === "fab-108");
      } else if (lower.includes("wool") || lower.includes("corporate") || lower.includes("boardroom") || lower.includes("suit") || lower.includes("super")) {
        responseText = "For commanding C-suite presence with crease recovery during Mangalore's coastal humidity, our Italian Super 150s and Super 180s from Zegna and Loro Piana are undisputed:";
        matches = FABRIC_CATALOG.filter((f) => f.category === "suitings");
      } else if (lower.includes("linen") || lower.includes("summer") || lower.includes("coastal") || lower.includes("safari")) {
        responseText = "Nothing whispers effortless coastal aristocracy like Solbiati pure Irish and Normandy flax linen. Designed for maximum thermal conductivity and noble natural texture:";
        matches = FABRIC_CATALOG.filter((f) => f.category === "linen" || f.category === "cotton");
      } else if (lower.includes("shirt") || lower.includes("poplin") || lower.includes("thomas mason") || lower.includes("soktas")) {
        responseText = "Our Italian and Swiss double-twisted shirting poplins provide 100% opacity, feather-light breathability, and natural silk luster without synthetic coatings:";
        matches = FABRIC_CATALOG.filter((f) => f.category === "shirtings");
      } else {
        responseText = "I have filtered our master catalog to highlight our most celebrated Italian and British mill imports specifically suited for your requirement:";
        matches = FABRIC_CATALOG.slice(0, 3);
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: responseText,
        recommendedFabrics: matches,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-none shadow-none overflow-hidden flex flex-col h-[700px] text-white">
      {/* Top Banner */}
      <div className="bg-[#0a0a0a] p-5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-none bg-white border border-white flex items-center justify-center text-black shadow-none">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-white uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3 animate-spin" /> AI Architectural Styling Engine
            </span>
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Monteiro Master Fabric Concierge
            </h3>
          </div>
        </div>
        <button
          onClick={() => {
            setMessages([
              {
                id: "init-1",
                sender: "ai",
                text: "Session reset. I am ready to explore new fabrics, weave characteristics, or ceremonial styling requirements with you.",
                recommendedFabrics: [FABRIC_CATALOG[1], FABRIC_CATALOG[4]],
              },
            ]);
          }}
          className="text-xs font-mono text-gray-400 hover:text-gold transition-colors flex items-center gap-1"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Chat
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/30">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-4 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
                msg.sender === "user"
                  ? "bg-gold text-obsidian border border-gold-light"
                  : "bg-obsidian border border-gold/50 text-gold"
              }`}
            >
              {msg.sender === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>

            <div className={`max-w-2xl space-y-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <div
                className={`p-4 rounded-2xl text-xs sm:text-sm font-sans leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-gold/20 border border-gold/40 text-white rounded-tr-none"
                    : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-none shadow-xl"
                }`}
              >
                {msg.text}
              </div>

              {/* Recommended Fabric Cards */}
              {msg.recommendedFabrics && msg.recommendedFabrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {msg.recommendedFabrics.map((fabric) => (
                    <div
                      key={fabric.id}
                      className="bg-obsidian/90 border border-gold/30 hover:border-gold rounded-xl p-4 flex flex-col justify-between text-left space-y-3 transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={fabric.textureImage}
                          alt={fabric.name}
                          className="w-16 h-16 rounded-lg object-cover border border-gold/30 shrink-0 group-hover:scale-105 transition-transform"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="text-[9px] font-mono tracking-widest text-gold uppercase block truncate">
                            {fabric.brand}
                          </span>
                          <h5 className="font-serif text-sm font-bold text-white truncate mt-0.5">
                            {fabric.name}
                          </h5>
                          <span className="text-[11px] text-gray-400 font-sans block truncate">
                            {fabric.weight} • {fabric.weave}
                          </span>
                        </div>
                      </div>

                      <p className="text-[11px] text-gray-300 font-sans line-clamp-2 leading-relaxed">
                        {fabric.shortDescription}
                      </p>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-1">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleFavorite(fabric.id)}
                            className={`p-1.5 rounded transition-colors ${
                              isFavorite(fabric.id) ? "text-red-400 bg-red-500/10" : "text-gray-400 hover:text-white"
                            }`}
                            title="Save to Favorites"
                          >
                            <Heart className="w-4 h-4 fill-current" />
                          </button>
                          <button
                            onClick={() => toggleComparison(fabric.id)}
                            className={`p-1.5 rounded transition-colors ${
                              isCompared(fabric.id) ? "text-gold bg-gold/10 font-bold" : "text-gray-400 hover:text-white"
                            }`}
                            title="Add to Comparison"
                          >
                            <Layers className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => openContactModalWithFabric(fabric)}
                          className="text-[11px] font-sans font-bold uppercase tracking-wider text-gold hover:underline flex items-center gap-1"
                        >
                          Book Bolt <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex gap-4 items-center text-white font-mono text-xs animate-pulse">
            <div className="w-9 h-9 rounded-none bg-black border border-white/50 flex items-center justify-center text-white">
              <Bot className="w-5 h-5" />
            </div>
            <span>Consulting mill certificates and Hampankatta vault inventory...</span>
          </div>
        )}
      </div>

      {/* Quick Prompts Chips */}
      <div className="p-4 bg-[#0a0a0a] border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-mono text-white/50 uppercase shrink-0">
          Suggested Inquiries:
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendPrompt(prompt)}
            className="px-3 py-1 rounded-none bg-white/5 hover:bg-white hover:text-black border border-white/30 text-xs text-gray-200 transition-colors shrink-0 font-sans"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) handleSendPrompt(input.trim());
        }}
        className="p-4 bg-[#0a0a0a] border-t border-white/10 flex gap-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your occasion, Mangalore climate needs, or ask for Zegna/Scabal specs..."
          className="flex-1 bg-white/5 border border-white/30 rounded-none px-4 py-3 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white transition-colors font-sans"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="bg-white hover:bg-black hover:text-white border border-white disabled:opacity-50 text-black px-6 py-3 rounded-none font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0"
        >
          <span>Ask Concierge</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
