import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Image from "next/image";

export default function LeagueSchedule() {
  const weekOne = [
    {
      game: 1,
      away: 'Wolves (1-0-0)',
      awayImg: '/media/team-logos/grhl-wolves-logo.avif',
      home: 'Outlaws (0-1-0)',
      homeImg: '/media/team-logos/grhl-outlaws-logo.avif',
      score: 'Wolves : 7 | 6 : Outlaws',
      time: '2:30pm'
    },
    {
      game: 2,
      away: 'Sting',
      awayImg: '/media/team-logos/grhl-sting-logo.avif',
      home: 'Thundercats',
      homeImg: '/media/team-logos/grhl-tcats-logo.avif',
      score: 'Sting : 8 | 4 : Thundercats',
      time: '4:00pm'
    },
    {
      game: 3,
      away: 'Raptors',
      awayImg: '/media/team-logos/grhl-raptors-logo.avif',
      home: 'Jets',
      homeImg: '/media/team-logos/grhl-jets-logo.avif',
      score: 'Raptors : 7 | 8 : Jets',
      time: '5:30pm'
    },
    {
      game: 4,
      away: 'Moose',
      awayImg: '/media/team-logos/grhl-moose-logo.avif',
      home: 'Venom',
      homeImg: '/media/team-logos/grhl-venom-logo.avif',
      score: 'Moose : 10 | 5 : Venom',
      time: '7:00pm'
    },
    {
      game: 5,
      away: 'Barracudas',
      awayImg: '/media/team-logos/grhl-cudas-logo.avif',
      home: 'Yetis',
      homeImg: '/media/team-logos/grhl-yetis-logo.avif',
      score: 'Barracudas : 10 | 9 : Yetis | O.T.',
      time: '8:30pm'
    }
  ]
  const weekTwo = [
    {
      game: 1,
      away: 'Outlaws (1-1-0)',
      awayImg: '/media/team-logos/grhl-outlaws-logo.avif',
      home: 'Moose (1-0-1)',
      homeImg: '/media/team-logos/grhl-moose-logo.avif',
      score: 'Outlaws : 10 | 9 : Moose | O.T.',
      time: '2:30pm'
    },
  ]
  return (
    <main>
      <Header />
      <h1 className="text-center m-auto" style={{backgroundColor:'gray', width:'555px'}}><strong><u>2024 - 2025 GRHL Schedule</u></strong></h1>
      <div className="container text-center">
        {/* WEEK 1 */}
        <h1><strong>Week 1</strong> | September 14, 2024</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col"><u>Time</u></th>
              <th scope="col"><u>Away</u></th>
              <th scope="col"><u>Home</u></th>
              <th scope="col"><u>Final Score</u></th>
            </tr>
          </thead>
          <tbody>
            {weekOne.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away"><Image src={game.awayImg} width={55} height={55} alt="Away Team Logo" /> {game.away}</th>
                <th className="home">{game.home} <Image src={game.homeImg} width={55} height={55} alt="Home Team Logo" /></th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 2 */}
        <h1><strong>Week 2</strong> | September 28, 2024</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col"><u>Time</u></th>
              <th scope="col"><u>Home</u></th>
              <th scope="col"><u>Away</u></th>
              <th scope="col"><u>Final Score</u></th>
            </tr>
          </thead>
          <tbody>
          {weekTwo.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away"><Image src={game.awayImg} width={55} height={55} alt="Away Team Logo" /> {game.away}</th>
                <th className="home">{game.home} <Image src={game.homeImg} width={55} height={55} alt="Home Team Logo" /></th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </main>
  )
}