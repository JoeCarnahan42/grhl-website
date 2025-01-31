import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Roster } from "@/app/components/Roster";

export default function Barracudas() {
  return (
    <main className="text-center">
      <Header />
      <h1 className="text-center">page content here</h1>
      <h1>Roster</h1>
      <Roster props={"Barracudas"} />
      <Footer />
    </main>
  );
}
