import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Roster } from "@/app/components/Roster";

export default function Thundercats() {
  return (
    <main>
      <Header />
      <h1 className="text-center">2024-2025 Thundercats Roster</h1>
      <Roster team="thundercats" />
      <Footer />
    </main>
  );
}
