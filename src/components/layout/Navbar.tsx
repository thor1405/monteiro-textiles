"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Heart, 
  Layers, 
  Search, 
  Sparkles, 
  MapPin, 
  Clock, 
  PhoneCall, 
  CalendarCheck,
  ChevronDown
} from "lucide-react";
import { useShowroom } from "@/context/ShowroomContext";
import { CATEGORIES, SHOWROOM_INFO } from "@/data/monteiroData";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdown, setCollectionsDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    favorites,
    comparisonList,
    setIsFavoritesDrawerOpen,
    setIsComparisonTrayOpen,
    openContactModalWithFabric,
  } = useShowroom();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled || 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none bg-obsidian/10">
        <div
          className="h-full bg-black transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Sticky Header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 top-0 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md text-black border-b border-black/10 py-3.5"
            : "bg-transparent text-black py-6"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 xl:gap-10">
          {/* Logo */}
          <Link href="/" className="flex flex-col group shrink-0">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-[0.18em] uppercase transition-colors group-hover:text-gold">
              Monteiro
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-gold font-semibold -mt-1">
              Textiles • Mangalore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-sans text-[10px] xl:text-[11px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap">
            <Link
              href="/"
              className={`hover:text-gold transition-colors ${
                pathname === "/" ? "text-gold font-bold" : ""
              }`}
            >
              Showroom
            </Link>

            {/* Collections Dropdown Trigger */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setCollectionsDropdown(true)}
              onMouseLeave={() => setCollectionsDropdown(false)}
            >
              <Link
                href="/collections"
                className={`flex items-center gap-1 hover:text-gold transition-colors ${
                  pathname.startsWith("/collections") ? "text-gold font-bold" : ""
                }`}
              >
                Collections <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </Link>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {collectionsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-obsidian text-white p-6 rounded-b-xl border border-gold/30 shadow-2xl grid grid-cols-2 gap-4 z-50"
                  >
                    <div className="col-span-2 pb-3 mb-2 border-b border-white/10 flex justify-between items-center">
                      <span className="text-[10px] font-mono tracking-widest text-gold uppercase">
                        The Hampankatta Vault
                      </span>
                      <Link
                        href="/collections"
                        className="text-xs text-gold-light hover:underline uppercase font-sans font-bold"
                      >
                        Explore All 8 Categories →
                      </Link>
                    </div>
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/collections/${cat.slug}`}
                        className="group/item flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-gold/20"
                      >
                        <img
                          src={cat.heroImage}
                          alt={cat.name}
                          className="w-12 h-12 rounded object-cover border border-gold/30 shrink-0"
                        />
                        <div>
                          <div className="font-serif text-base text-gold font-semibold group-hover/item:text-white transition-colors">
                            {cat.name}
                          </div>
                          <div className="text-[11px] text-gray-400 line-clamp-1 capitalize font-sans tracking-normal">
                            {cat.subtitle}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/occasions"
              className={`hover:text-gold transition-colors ${
                pathname === "/occasions" ? "text-gold font-bold" : ""
              }`}
            >
              Occasions
            </Link>

            <Link
              href="/fabric-guide"
              className={`hover:text-gold transition-colors ${
                pathname === "/fabric-guide" ? "text-gold font-bold" : ""
              }`}
            >
              Fabric Guide
            </Link>

            <Link
              href="/swatches"
              className={`hover:text-gold transition-colors ${
                pathname === "/swatches" ? "text-gold font-bold" : ""
              }`}
            >
              Swatches
            </Link>

            <Link
              href="/lookbook"
              className={`hover:text-gold transition-colors ${
                pathname === "/lookbook" ? "text-gold font-bold" : ""
              }`}
            >
              Lookbook
            </Link>

            <Link
              href="/showroom"
              className={`hover:text-gold transition-colors ${
                pathname === "/showroom" ? "text-gold font-bold" : ""
              }`}
            >
              Experience
            </Link>
          </nav>

          {/* Right Action Icons & Consultation CTA */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full hover:bg-gold/10 transition-colors relative group"
              aria-label="Search digital showroom"
            >
              <Search className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
            </button>

            {/* Comparison Tray Trigger */}
            <button
              onClick={() => setIsComparisonTrayOpen(true)}
              className="p-2 rounded-full hover:bg-gold/10 transition-colors relative group"
              aria-label="Compare Fabrics"
            >
              <Layers className="w-5 h-5 group-hover:text-gold transition-colors" />
              {comparisonList.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-obsidian rounded-full text-[10px] font-bold flex items-center justify-center shadow">
                  {comparisonList.length}
                </span>
              )}
            </button>

            {/* Favorites Drawer Trigger */}
            <button
              onClick={() => setIsFavoritesDrawerOpen(true)}
              className="p-2 rounded-full hover:bg-gold/10 transition-colors relative group"
              aria-label="Favorites"
            >
              <Heart className="w-5 h-5 group-hover:text-gold transition-colors" />
              {favorites.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-obsidian rounded-full text-[10px] font-bold flex items-center justify-center shadow">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Contact CTA */}
            <button
              onClick={() => openContactModalWithFabric()}
              className="hidden sm:flex items-center gap-2 bg-black hover:bg-white hover:text-black text-white border border-black px-5 py-2.5 rounded-none font-sans text-xs font-bold uppercase tracking-widest transition-all active:scale-95"
            >
              <CalendarCheck className="w-4 h-4" /> Contact Us
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gold hover:text-white transition-colors"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Quick Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-obsidian border border-gold/40 rounded-xl p-6 shadow-2xl text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="font-serif text-xl font-bold text-gold tracking-wider uppercase">
                  Search Showroom Vault
                </span>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                <input
                  type="text"
                  placeholder="Type 'Super 180s', 'Zegna', 'Sherwani Silk', or 'Linen'..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-white/5 border border-gold/30 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold font-sans text-sm"
                />
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-mono tracking-widest text-gold uppercase mb-2">
                  Popular Hampankatta Inquiries
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Italian Super 180s Wool",
                    "Thomas Mason Shirting",
                    "Royal Brocade Sherwani",
                    "Irish Linen Safari",
                    "Zegna Trofeo",
                    "Loro Piana Tasmanian",
                  ].map((tag) => (
                    <Link
                      key={tag}
                      href={`/collections?search=${encodeURIComponent(tag)}`}
                      onClick={() => setSearchOpen(false)}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-gold hover:text-obsidian border border-gold/20 text-xs transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-obsidian text-white flex flex-col p-6 lg:hidden"
          >
            <div className="flex items-center justify-between pb-6 border-b border-gold/20">
              <span className="font-serif text-2xl font-bold tracking-widest text-gold uppercase">
                Monteiro Textiles
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white">
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 space-y-5 font-serif text-2xl tracking-wider">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold"
              >
                Home Showroom
              </Link>
              <Link
                href="/collections"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold"
              >
                Collections (All 8 Vaults)
              </Link>
              <Link
                href="/occasions"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold"
              >
                Occasion Finder
              </Link>
              <Link
                href="/fabric-guide"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold"
              >
                Luxury Fabric Guide
              </Link>
              <Link
                href="/concierge"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gold flex items-center gap-2"
              >
                <Sparkles className="w-6 h-6" /> AI Fabric Concierge
              </Link>
              <Link
                href="/swatches"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold"
              >
                Digital Swatch Library
              </Link>
              <Link
                href="/brands"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold"
              >
                Mill Partners (Zegna, Loro Piana)
              </Link>
              <Link
                href="/lookbook"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold"
              >
                Curated Lookbooks
              </Link>
              <Link
                href="/showroom"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold"
              >
                Hampankatta Experience
              </Link>
              <Link
                href="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold font-sans text-lg tracking-normal"
              >
                Client Testimonials & Reviews
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold font-sans text-lg tracking-normal"
              >
                Knowledge Center & Blog
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold font-sans text-lg tracking-normal"
              >
                FAQ & Showroom Policies
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gold font-sans text-lg tracking-normal"
              >
                Contact & Store Location
              </Link>
            </div>

            <div className="pt-6 border-t border-gold/20 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactModalWithFabric();
                }}
                className="w-full bg-gold text-obsidian py-3 font-sans text-sm font-bold uppercase tracking-widest text-center"
              >
                Book Private Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
