import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Roster } from "../components/Roster";
import { TeamPageHeader } from "../components/TeamPageHeader";

export default function Waivers() {
  return (
    <main>
      <Header />
      <TeamPageHeader />
      <br />
      <h1 className="text-center">2024-2025 Waivers</h1>
      <Roster team="waivers" />
      <Footer />
    </main>
  );
}
