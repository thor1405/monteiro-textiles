"use client";

import React from "react";
import Link from "next/link";
import { SHOWROOM_INFO, CATEGORIES } from "@/data/monteiroData";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian text-white border-t border-gold/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust & Heritage Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 mb-12 border-b border-white/10">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gold/10 border border-gold/30 text-gold rounded-none">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-gold tracking-wide uppercase">
                48+ Years in Hampankatta
              </h4>
              <p className="text-xs text-gray-300 font-sans mt-1 leading-relaxed">
                South India's most trusted heritage name in certified Italian, British, and Swiss bespoke suiting and shirting textiles since 1978.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-gold/10 border border-gold/30 text-gold rounded-none">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-gold tracking-wide uppercase">
                100% Mill Authenticity
              </h4>
              <p className="text-xs text-gray-300 font-sans mt-1 leading-relaxed">
                Authorized dealer for Raymond, Siyaram's, Linen Club, Ermenegildo Zegna, Loro Piana, Scabal, and Thomas Mason with woven selvedge guarantee.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-gold/10 border border-gold/30 text-gold rounded-none">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-gold tracking-wide uppercase">
                Master Consultation
              </h4>
              <p className="text-xs text-gray-300 font-sans mt-1 leading-relaxed">
                Private styling, climate-optimized fabric pairing, and direct VIP introductions to Karnataka and Mumbai's top 10 master tailors.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info & Showroom */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl font-bold tracking-[0.18em] uppercase text-white group-hover:text-gold transition-colors">
                Monteiro
              </span>
              <span className="block font-sans text-[10px] tracking-[0.35em] uppercase text-gold font-semibold">
                Textiles • Mangalore
              </span>
            </Link>
            <p className="text-sm text-gray-300 font-sans leading-relaxed max-w-sm">
              Step into an exclusive world where high-twist Italian wools, Sea Island cottons, and royal wedding brocades await your touch. Designed for discerning South Indian leaders.
            </p>
            <div className="pt-2 space-y-2 text-xs font-sans text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{SHOWROOM_INFO.addressLine1}, {SHOWROOM_INFO.city} - {SHOWROOM_INFO.pincode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{SHOWROOM_INFO.phone} | {SHOWROOM_INFO.landline}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{SHOWROOM_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5 text-gold-light font-mono">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{SHOWROOM_INFO.hours.weekdays}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Fabric Categories */}
          <div>
            <h5 className="font-serif text-base font-bold text-gold uppercase tracking-wider mb-4 border-b border-gold/20 pb-2">
              The 8 Vaults
            </h5>
            <ul className="space-y-2 text-xs font-sans">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/collections/${cat.slug}`}
                    className="text-gray-300 hover:text-gold transition-colors capitalize"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Experiences & Guides */}
          <div>
            <h5 className="font-serif text-base font-bold text-gold uppercase tracking-wider mb-4 border-b border-gold/20 pb-2">
              Atelier & Services
            </h5>
            <ul className="space-y-2 text-xs font-sans text-gray-300">
              <li><Link href="/services" className="hover:text-gold transition-colors font-semibold text-gold">★ Atelier Services (All 5 Pillars)</Link></li>
              <li><Link href="/services#fabric-consultation" className="hover:text-gold transition-colors">Expert Fabric Consultation</Link></li>
              <li><Link href="/services#wedding-trousseau" className="hover:text-gold transition-colors">Wedding & Trousseau Curation</Link></li>
              <li><Link href="/services#master-tailor-collaboration" className="hover:text-gold transition-colors">Master Tailor Network</Link></li>
              <li><Link href="/services#bulk-institutional-orders" className="hover:text-gold transition-colors">Bulk & Institutional Sourcing</Link></li>
              <li><Link href="/concierge" className="hover:text-gold transition-colors flex items-center gap-1.5">AI Fabric Concierge</Link></li>
              <li><Link href="/swatches" className="hover:text-gold transition-colors">Digital Swatches</Link></li>
            </ul>
          </div>

          {/* Col 4: Knowledge & Contact */}
          <div>
            <h5 className="font-serif text-base font-bold text-gold uppercase tracking-wider mb-4 border-b border-gold/20 pb-2">
              Heritage & Stories
            </h5>
            <ul className="space-y-2 text-xs font-sans text-gray-300">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Monteiro Textiles</Link></li>
              <li><Link href="/brands" className="hover:text-gold transition-colors">Authorized Brand Partners</Link></li>
              <li><Link href="/reviews" className="hover:text-gold transition-colors">Customer Stories & Reviews (4.9★)</Link></li>
              <li><Link href="/visit" className="hover:text-gold transition-colors">Visit Us (Falnir Road, Hampankatta)</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact & Directions</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">Frequently Asked Questions</Link></li>
              <li>
                <a
                  href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Hello%20Monteiro%20Textiles,%20I%20would%20like%20to%20inquire%20about%20your%20fabrics.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1 mt-2 font-semibold"
                >
                  WhatsApp Direct Inquiry →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-sans gap-4">
          <div>
            &copy; {new Date().getFullYear()} Monteiro Textiles Flagship Store, Hampankatta, Mangalore. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/faq" className="hover:text-gold">Showroom Policies</Link>
            <span>•</span>
            <Link href="/visit" className="hover:text-gold text-gold">Showroom Parking Available</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-gold">South India Concierge</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
