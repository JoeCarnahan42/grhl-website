import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Roster } from "@/app/components/Roster";
import { TeamPageHeader } from "@/app/components/TeamPageHeader";

export default function Outlaws() {
  return (
    <main>
      <Header />
      <TeamPageHeader />
      <br />
      <h1 className="text-center">2024-2025 Outlaws Roster</h1>
      <Roster team="outlaws" />
      <Footer />
    </main>
  );
}
