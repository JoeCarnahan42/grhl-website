import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Roster } from "@/app/components/Roster";

export default function Moose() {
  return (
    <main>
      <Header />
      <h1 className="text-center">2024-2025 Moose Roster</h1>
      <Roster team="moose" />
      <Footer />
    </main>
  );
}
