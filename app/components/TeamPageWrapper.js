"use client";
import { TeamPageProvider } from "@/app/context/TeamPageContext";

export default function TeamPageWrapper({ children }) {
  return <TeamPageProvider>{children}</TeamPageProvider>;
}
