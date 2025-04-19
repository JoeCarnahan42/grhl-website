"use client";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Roster } from "@/app/components/Roster";
import { Transactions } from "@/app/components/Transactions";
import { CapOutlook } from "@/app/components/CapOutlook";
import { TeamPageHeader } from "@/app/components/TeamPageHeader";
import { useContext } from "react";
import { TeamPageContext } from "@/app/context/TeamPageContext";

export default function Moose() {
  const { view } = useContext(TeamPageContext);

  if (view === "roster") {
    return (
      <main>
        <Header />
        <TeamPageHeader />
        <br />
        <h1 className="text-center">2024-2025 Moose Roster</h1>
        <Roster team="moose" />
        <Footer />
      </main>
    );
  }

  if (view === "transactions") {
    return (
      <main>
        <Header />
        <TeamPageHeader />
        <br />
        <h1 className="text-center">2024-2025 Moose Transaction History</h1>
        <Transactions team="moose" />
      </main>
    );
  }

  if (view === "cap-outlook") {
    return (
      <main>
        <Header />
        <TeamPageHeader />
        <br />
        <h1 className="text-center">2024-2025 Moose Transaction Cap Outlook</h1>
        <CapOutlook team="moose" />
      </main>
    );
  }
}
