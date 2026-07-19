"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useShowroom } from "@/context/ShowroomContext";
import { SHOWROOM_INFO } from "@/data/monteiroData";
import { X, CalendarCheck, MapPin, Clock, CheckCircle2, Sparkles, User, Phone, Calendar, Scissors } from "lucide-react";

export function ContactModal() {
  const {
    isContactModalOpen,
    setIsContactModalOpen,
    selectedConsultationFabric,
  } = useShowroom();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    preferredTime: "Morning (11:00 AM - 1:00 PM)",
    consultationType: "Bespoke Suiting & Executive Wardrobe",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isContactModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setIsContactModalOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-[#0a0a0a] border border-white/10 rounded-none max-w-2xl w-full shadow-none text-white overflow-hidden relative"
        >
          {/* Close button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="bg-[#0a0a0a] p-6 md:p-8 border-b border-white/10">
                <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-white" /> Hampankatta Showroom
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
                  Contact Us
                </h3>
                <p className="text-xs text-gray-300 font-sans mt-2 max-w-lg leading-relaxed">
                  Get in touch with our showroom experts. Schedule a time to explore our fabric collections, request pricing details, or get tailoring recommendations.
                </p>
              </div>

              {/* Selected Fabric Banner if passed */}
              {selectedConsultationFabric && (
                <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center gap-4">
                  <img
                    src={selectedConsultationFabric.textureImage}
                    alt={selectedConsultationFabric.name}
                    className="w-12 h-12 rounded-none object-cover border border-white/20"
                  />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                      Target Inquiry Bolt
                    </span>
                    <h4 className="font-serif text-sm font-bold text-white truncate">
                      {selectedConsultationFabric.name} ({selectedConsultationFabric.brand})
                    </h4>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gold-light mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-gold" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adv. Rajeshwar Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-gold/30 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gold-light mb-1.5 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-gold" /> WhatsApp / Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98xxx xxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-gold/30 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gold-light mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" /> Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-white/5 border border-gold/30 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gold-light mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" /> Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-obsidian border border-gold/30 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (6:00 PM - 8:30 PM)">Evening (6:00 PM - 8:30 PM)</option>
                      <option value="Sunday (By Appointment)">Sunday (By Appointment)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono text-gold-light mb-1.5 flex items-center gap-1">
                    <Scissors className="w-3.5 h-3.5 text-gold" /> Primary Consultation Goal
                  </label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full bg-obsidian border border-gold/30 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Bespoke Suiting & Executive Wardrobe">Bespoke Suiting & Executive Wardrobe</option>
                    <option value="Royal Wedding & Ceremonial Wardrobe (Groom/Family)">Royal Wedding & Ceremonial Wardrobe (Groom/Family)</option>
                    <option value="Sea Island & Giza Cotton Bespoke Shirting">Sea Island & Giza Cotton Bespoke Shirting</option>
                    <option value="Pure Irish Coastal Linen Exploration">Pure Irish Coastal Linen Exploration</option>
                    <option value="General Luxury Fabric Discovery">General Luxury Fabric Discovery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono text-gold-light mb-1.5">
                    Special Requests or Tailoring Preferences (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Please prepare swatches of Zegna Trofeo and Loro Piana in dark navy and charcoal sharkskin..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white/5 border border-gold/30 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-black hover:text-white border border-white text-black font-bold py-4 rounded-none text-xs uppercase tracking-widest transition-all shadow-none flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4" /> Send Message
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-none bg-white text-black mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-3xl font-bold text-white uppercase tracking-wider">
                  Message Sent
                </h3>
                <p className="text-sm font-sans text-gray-200 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>. We have received your inquiry. Our team will contact you shortly to confirm your visit to our Hampankatta Store for <span className="text-white font-mono font-semibold">{formData.preferredDate || "your chosen date"}</span>.
                </p>
              </div>

              <div className="bg-[#0a0a0a] border border-white/10 rounded-none p-4 text-left space-y-2 text-xs font-sans max-w-md mx-auto">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" /> {SHOWROOM_INFO.addressLine1}, Mangalore
                </div>
                <div className="text-gray-300 pl-6">
                  • Our team will reach out to your WhatsApp/Phone shortly.<br />
                  • Showroom hours are 10:00 AM to 10:00 PM daily.
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="bg-gold text-obsidian px-8 py-3 rounded font-sans text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-colors"
              >
                Return to Digital Showroom
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
