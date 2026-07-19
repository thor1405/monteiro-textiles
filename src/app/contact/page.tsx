"use client";

import React, { useState } from "react";
import { SHOWROOM_INFO } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, CalendarCheck } from "lucide-react";

export default function ContactPage() {
  const { openContactModalWithFabric } = useShowroom();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold" /> #14 Falnir Road, Hampankatta, Mangalore
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Connect With Our Vault
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Have a question regarding specific Zegna mill certifications, wedding group orders, or store hours? Reach our Hampankatta masters directly.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-gold-dark uppercase font-bold">
                Flagship Showroom
              </span>
              <h2 className="font-serif text-3xl font-bold uppercase text-obsidian">
                Monteiro Textiles
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                Step into our 5,000-square-foot climate-controlled textile showroom in the heart of Hampankatta.
              </p>
            </div>

            <div className="space-y-6 font-sans text-xs">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-obsidian/10 shadow-sm">
                <div className="p-3 bg-gold/20 text-gold-dark rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-obsidian uppercase">Showroom Address</h4>
                  <p className="text-gray-600 mt-1">
                    {SHOWROOM_INFO.addressLine1},<br />
                    {SHOWROOM_INFO.city}, {SHOWROOM_INFO.state} - {SHOWROOM_INFO.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-obsidian/10 shadow-sm">
                <div className="p-3 bg-gold/20 text-gold-dark rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-obsidian uppercase">Telephone & WhatsApp</h4>
                  <p className="text-gray-600 mt-1 font-mono">
                    Mobile: {SHOWROOM_INFO.phone}<br />
                    Landline: {SHOWROOM_INFO.landline}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-obsidian/10 shadow-sm">
                <div className="p-3 bg-gold/20 text-gold-dark rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-obsidian uppercase">Electronic Mail</h4>
                  <p className="text-gray-600 mt-1 font-mono">{SHOWROOM_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-obsidian/10 shadow-sm">
                <div className="p-3 bg-gold/20 text-gold-dark rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-obsidian uppercase">Showroom Hours</h4>
                  <p className="text-gray-600 mt-1 font-mono">
                    Mon–Sat: 10:30 AM – 8:30 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form / Map Side */}
          <div className="lg:col-span-7 bg-white border border-obsidian/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans text-xs">
                <div className="border-b border-obsidian/10 pb-4">
                  <span className="text-[10px] font-mono tracking-widest text-gold-dark uppercase">
                    Quick Inquiry
                  </span>
                  <h3 className="font-serif text-2xl font-bold uppercase text-obsidian mt-1">
                    Send Us a Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Adv. Rajeshwar Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-cashmere/50 border border-obsidian/20 rounded-xl p-3 text-sm focus:outline-none focus:border-gold-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98xxx xxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-cashmere/50 border border-obsidian/20 rounded-xl p-3 text-sm focus:outline-none focus:border-gold-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-cashmere/50 border border-obsidian/20 rounded-xl p-3 text-sm focus:outline-none focus:border-gold-dark"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">Message / Bolt Inquiry *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="I would like to know if you have Zegna Trofeo in dark navy sharkskin available for tailoring this week..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-cashmere/50 border border-obsidian/20 rounded-xl p-3 text-sm focus:outline-none focus:border-gold-dark"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-obsidian hover:bg-gold hover:text-obsidian text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Transmit Inquiry to Showroom Masters
                </button>
              </form>
            ) : (
              <div className="py-16 text-center space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-3xl font-bold uppercase text-obsidian">Inquiry Transmitted</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our Senior Concierge in Hampankatta has received your message and will respond via WhatsApp or phone shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="bg-obsidian text-gold px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Embed Simulation / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian rounded-3xl p-8 md:p-14 text-white border border-gold/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-gold">Schedule a Visit</span>
            <h3 className="font-serif text-3xl font-bold uppercase">Ready to Explore Our Showroom?</h3>
            <p className="text-xs text-gray-300">
              Skip wait times by reserving a time to visit our Dual-Spectrum Lighting Room.
            </p>
          </div>
          <button
            onClick={() => openContactModalWithFabric()}
            className="bg-gold hover:bg-gold-light text-obsidian px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest shadow-xl transition-colors flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" /> Book a Visit
          </button>
        </div>
      </section>
    </div>
  );
}
