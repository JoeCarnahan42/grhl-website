import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LincolnStandings } from "../components/LincolnStandings";
import { ShowMeSandings } from "../components/ShowMeStandings";
import { LeagueStandings } from "../components/LeagueStandings";

export default function Standings() {
  return (
    <main className="text-center">
      <Header />
      <h1 className="display-2">Current Standings</h1>
      <LincolnStandings />
      <ShowMeSandings />
      <LeagueStandings />
      <Footer />
    </main>
  );
}
