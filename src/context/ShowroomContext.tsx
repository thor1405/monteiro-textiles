"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Fabric, FABRIC_CATALOG } from "@/data/monteiroData";

interface ShowroomContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  recentlyViewed: string[];
  addToRecentlyViewed: (id: string) => void;
  comparisonList: string[];
  toggleComparison: (id: string) => void;
  isCompared: (id: string) => boolean;
  clearComparison: () => void;
  isFavoritesDrawerOpen: boolean;
  setIsFavoritesDrawerOpen: (open: boolean) => void;
  isComparisonTrayOpen: boolean;
  setIsComparisonTrayOpen: (open: boolean) => void;
  isContactModalOpen: boolean;
  setIsContactModalOpen: (open: boolean) => void;
  selectedConsultationFabric: Fabric | null;
  openContactModalWithFabric: (fabric?: Fabric) => void;
  conciergeShortlist: string[];
  setConciergeShortlist: React.Dispatch<React.SetStateAction<string[]>>;
}

const ShowroomContext = createContext<ShowroomContextType | undefined>(undefined);

export function ShowroomProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);
  const [isComparisonTrayOpen, setIsComparisonTrayOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedConsultationFabric, setSelectedConsultationFabric] = useState<Fabric | null>(null);
  const [conciergeShortlist, setConciergeShortlist] = useState<string[]>([]);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem("monteiro_favorites");
      if (savedFavs) setFavorites(JSON.parse(savedFavs));

      const savedRecent = localStorage.getItem("monteiro_recently_viewed");
      if (savedRecent) setRecentlyViewed(JSON.parse(savedRecent));

      const savedComp = localStorage.getItem("monteiro_comparison");
      if (savedComp) setComparisonList(JSON.parse(savedComp));
    } catch (e) {
      console.error("Failed to load state from localStorage", e);
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    try {
      localStorage.setItem("monteiro_favorites", JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem("monteiro_recently_viewed", JSON.stringify(recentlyViewed));
    } catch (e) {
      console.error(e);
    }
  }, [recentlyViewed]);

  useEffect(() => {
    try {
      localStorage.setItem("monteiro_comparison", JSON.stringify(comparisonList));
    } catch (e) {
      console.error(e);
    }
  }, [comparisonList]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const addToRecentlyViewed = (id: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((item) => item !== id);
      return [id, ...filtered].slice(0, 8);
    });
  };

  const toggleComparison = (id: string) => {
    setComparisonList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 3) {
          alert("You can compare up to 3 luxury fabrics simultaneously.");
          return prev;
        }
        setIsComparisonTrayOpen(true);
        return [...prev, id];
      }
    });
  };

  const isCompared = (id: string) => comparisonList.includes(id);

  const clearComparison = () => setComparisonList([]);

  const openContactModalWithFabric = (fabric?: Fabric) => {
    if (fabric) {
      setSelectedConsultationFabric(fabric);
    } else {
      setSelectedConsultationFabric(null);
    }
    setIsContactModalOpen(true);
  };

  return (
    <ShowroomContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        recentlyViewed,
        addToRecentlyViewed,
        comparisonList,
        toggleComparison,
        isCompared,
        clearComparison,
        isFavoritesDrawerOpen,
        setIsFavoritesDrawerOpen,
        isComparisonTrayOpen,
        setIsComparisonTrayOpen,
        isContactModalOpen,
        setIsContactModalOpen,
        selectedConsultationFabric,
        openContactModalWithFabric,
        conciergeShortlist,
        setConciergeShortlist,
      }}
    >
      {children}
    </ShowroomContext.Provider>
  );
}

export function useShowroom() {
  const context = useContext(ShowroomContext);
  if (!context) {
    throw new Error("useShowroom must be used within a ShowroomProvider");
  }
  return context;
}
