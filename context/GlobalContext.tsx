"use client";
import { useState, createContext, useContext, ReactNode } from "react";

export interface ContextType {
  selectedGenre: string | null;
  setSelectedGenre: (genreSlug: string) => void;
  selectedPlatform: string | null;
  setSelectedPlatform: (platformSlug: string) => void;
}

const GlobalContext = createContext<ContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        selectedGenre,
        setSelectedGenre,
        selectedPlatform,
        setSelectedPlatform,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context; // TypeScript now knows context is ContextType, not undefined
}
