"use client";
import { createContext, useState } from "react";

export const TeamPageContext = createContext();

export function TeamPageProvider({ children }) {
  const [view, setView] = useState("roster");

  return (
    <TeamPageContext.Provider value={{ view, setView }}>
      {children}
    </TeamPageContext.Provider>
  );
}
