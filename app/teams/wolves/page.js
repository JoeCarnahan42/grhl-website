import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Roster } from "@/app/components/Roster";

export default function Wolves() {
  // TODO: complete team pages.
  return (
    <main>
      <Header />
      <h1 className="text-center">2024-2025 Wolves Roster</h1>
      <Roster team="wolves" />
      <Footer />
    </main>
  );
}
