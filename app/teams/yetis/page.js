import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Roster } from "@/app/components/Roster";
import { TeamPageHeader } from "@/app/components/TeamPageHeader";

export default function Yetis() {
  return (
    <main>
      <Header />
      <TeamPageHeader />
      <br />
      <h1 className="text-center">2024-2025 Yetis Roster</h1>
      <Roster team="yetis" />
      <Footer />
    </main>
  );
}
