import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Roster } from "../components/Roster";

export default function Waivers() {
  return (
    <main>
      <Header />
      <br />
      <h1 className="text-center">2024-2025 Waivers</h1>
      <Roster team="waivers" />
      <Footer />
    </main>
  );
}
