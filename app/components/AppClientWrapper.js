"use client";
import TeamPageWrapper from "./TeamPageWrapper";
import { useEffect } from "react";

export default function AppClientWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm.js");
    }
  }, []);
  return <TeamPageWrapper>{children}</TeamPageWrapper>;
}
