"use client";

import React, { useState } from "react";
import { SHOWROOM_INFO } from "@/data/monteiroData";
import { useShowroom } from "@/context/ShowroomContext";
import { CalendarCheck, MapPin, Clock, CheckCircle2, ShieldCheck, Sun, Car, Coffee } from "lucide-react";

export default function VisitPage() {
  const { openContactModalWithFabric } = useShowroom();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    slot: "Morning (11:00 AM - 1:00 PM)",
    purpose: "Bespoke Suiting & Executive Wardrobe",
    notes: "",
  });
  const [reserved, setReserved] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setReserved(true);
  };

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero */}
      <section className="bg-obsidian text-white py-20 md:py-28 border-b border-gold/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <CalendarCheck className="w-4 h-4 text-gold" /> Exclusive Showroom Reservation
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
            Visit Hampankatta Showroom
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Reserve your dedicated consultation hour at Sharja Complex, Milagres Cross Road, Hampankatta. Our masters will prepare swatches under both daylight and chandelier lighting specifically for your arrival.
          </p>
        </div>
      </section>

      {/* Main Reservation Suite */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Booking Form */}
          <div className="lg:col-span-7 bg-white border border-obsidian/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {!reserved ? (
              <form onSubmit={handleBook} className="space-y-6 font-sans text-xs">
                <div className="border-b border-obsidian/10 pb-4">
                  <span className="text-[10px] font-mono tracking-widest text-gold-dark uppercase">
                    Showroom Visit Reservation
                  </span>
                  <h3 className="font-serif text-2xl font-bold uppercase text-obsidian mt-1">
                    Select Your Preferred Date & Time
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">Full Name *</label>
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
                    <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">WhatsApp / Phone *</label>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-cashmere/50 border border-obsidian/20 rounded-xl p-3 text-sm focus:outline-none focus:border-gold-dark font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">Time Slot *</label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full bg-cashmere/50 border border-obsidian/20 rounded-xl p-3 text-sm focus:outline-none focus:border-gold-dark font-medium"
                    >
                      <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (6:00 PM - 8:30 PM)">Evening (6:00 PM - 8:30 PM)</option>
                      <option value="Sunday (By Appointment)">Sunday (By Appointment)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">Primary Goal *</label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full bg-cashmere/50 border border-obsidian/20 rounded-xl p-3 text-sm focus:outline-none focus:border-gold-dark font-medium"
                  >
                    <option value="Bespoke Suiting & Executive Wardrobe">Bespoke Suiting & Executive Wardrobe</option>
                    <option value="Royal Wedding & Ceremonial Wardrobe">Royal Wedding & Ceremonial Wardrobe</option>
                    <option value="Sea Island & Giza Cotton Bespoke Shirting">Sea Island & Giza Cotton Bespoke Shirting</option>
                    <option value="Pure Irish Linen Summer Curation">Pure Irish Linen Summer Curation</option>
                    <option value="General Vault Discovery">General Vault Discovery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">Special Requests or Specific Bolts</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Please prepare swatches of Zegna Trofeo and Loro Piana in dark navy and charcoal sharkskin..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-cashmere/50 border border-obsidian/20 rounded-xl p-3 text-sm focus:outline-none focus:border-gold-dark"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-obsidian via-[#17201b] to-obsidian hover:brightness-110 text-gold font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" /> Confirm Showroom Reservation
                </button>
              </form>
            ) : (
              <div className="py-16 text-center space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-3xl font-bold uppercase text-obsidian">Consultation Confirmed</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  We look forward to welcoming you, <strong>{formData.name}</strong>, on <strong>{formData.date || "your chosen date"}</strong> during the <strong>{formData.slot}</strong> slot.
                </p>
                <div className="bg-cashmere p-5 rounded-2xl text-left text-xs font-sans space-y-2 border border-obsidian/10">
                  <div className="font-bold text-obsidian uppercase">Arrival Instructions:</div>
                  <p className="text-gray-700">
                    • Drive directly to Sharja Complex on Milagres Cross Road, Hampankatta.<br />
                    • Mention your phone number to our Valet attendant for complimentary curbside parking.<br />
                    • A confirmation WhatsApp has been transmitted to your mobile number.
                  </p>
                </div>
                <button
                  onClick={() => setReserved(false)}
                  className="bg-obsidian text-gold px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Book Another Appointment
                </button>
              </div>
            )}
          </div>

          {/* Amenities & Protocol Side */}
          <div className="lg:col-span-5 space-y-6 font-sans text-xs">
            <div className="bg-obsidian text-white rounded-3xl p-8 border border-gold/40 shadow-2xl space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-gold uppercase">
                What Is Included
              </span>
              <h3 className="font-serif text-2xl font-bold uppercase text-white">
                The VIP Showroom Protocol
              </h3>

              <div className="space-y-4 divide-y divide-white/10">
                <div className="pt-3 flex items-start gap-3">
                  <Car className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase font-mono">Complimentary Valet Parking</strong>
                    <p className="text-gray-300 mt-1">No parking stress in Hampankatta. Our staff takes your vehicle right in front of Sharja Complex.</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <Sun className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase font-mono">Dual-Spectrum Chamber Access</strong>
                    <p className="text-gray-300 mt-1">Examine your bolts under both 5500K daylight and 2700K warm chandelier lighting.</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase font-mono">Private Lounge & Espresso</strong>
                    <p className="text-gray-300 mt-1">Enjoy authentic South Indian filter coffee while evaluating thread density and drape.</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase font-mono">Direct Master Tailor Notes</strong>
                    <p className="text-gray-300 mt-1">We prepare formal cutting notes to introduce you directly to Mangalore and Bangalore's top master cutters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
