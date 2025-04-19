"use client";
import Cookies from "js-cookie";
import { createContext, useState, useEffect } from "react";

export const TeamPageContext = createContext();

export function TeamPageProvider({ children }) {
  const [view, setView] = useState("roster");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedView = Cookies.get("teamView");
    if (savedView) setView(savedView);

    setHydrated(true);
  }, []);

  useEffect(() => {
    Cookies.set("teamView", view, { expires: 7 });
  }, [view, hydrated]);

  if (!hydrated) return null;

  return (
    <TeamPageContext.Provider value={{ view, setView }}>
      {children}
    </TeamPageContext.Provider>
  );
}
