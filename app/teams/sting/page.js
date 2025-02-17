import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Roster } from "@/app/components/Roster";

export default function Sting() {
  // : complete team pages.
  return (
    <main>
      <Header />
      <h1 className="text-center">2024-2025 Sting Roster</h1>
      <Roster team="sting" />
      <Footer />
    </main>
  );
}
