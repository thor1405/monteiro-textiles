"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SHOWROOM_INFO } from "@/data/monteiroData";
import { MessageCircle, X, Sparkles, Send } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim()
      ? encodeURIComponent(`Hello Monteiro Textiles, ${message}`)
      : encodeURIComponent("Hello Monteiro Textiles, I am browsing your digital showroom and would like to inquire about fabrics and showroom consultation.");
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Inquiry Chat Bubble Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 sm:w-96 bg-obsidian text-white rounded-2xl border border-gold/40 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0a0a0a] p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-gold tracking-wide">
                    Master Fabric Concierge
                  </h4>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Online • Hampankatta Showroom
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3 bg-obsidian/90 font-sans text-xs">
              <div className="bg-white/5 border border-gold/20 rounded-xl p-3 text-gray-200 leading-relaxed">
                <p className="font-semibold text-gold flex items-center gap-1 mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Welcome to Monteiro Textiles!
                </p>
                How may we assist your textile journey today? We can prepare physical swatches for your showroom visit or answer any questions regarding Zegna, Loro Piana, or ceremonial brocades.
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-gold-light mb-1.5">
                  Send Instant Inquiry to Showroom Staff:
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="E.g., I'm looking for Super 180s suiting for a December wedding in Mangalore..."
                  className="w-full bg-black/40 border border-gold/30 rounded-lg p-2.5 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <button
                onClick={handleSend}
                className="w-full py-2.5 bg-white hover:bg-black hover:text-white border border-white text-black font-bold rounded-none flex items-center justify-center gap-2 transition-all shadow-none text-xs uppercase tracking-wider"
              >
                <Send className="w-3.5 h-3.5" /> Start WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2.5 bg-black text-white px-5 py-3.5 rounded-none border border-white/20 shadow-none hover:border-white transition-all"
        aria-label="Connect with WhatsApp Concierge"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <span className="font-serif text-sm font-bold tracking-wider text-gold group-hover:text-white transition-colors">
          Concierge Chat
        </span>
        <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-all">
          <MessageCircle className="w-5 h-5" />
        </div>
      </motion.button>
    </div>
  );
}
