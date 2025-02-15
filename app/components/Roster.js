import { rosterData } from "@/public/rosterData";
import Image from "next/image";

export const Roster = (prop) => {
  // TODO: complete roster function
  // parameter is a string team name. "Barracudas"
  const team = prop.team;
  const teamName = team.toLowerCase();
  const teamRoster = rosterData[teamName];

  return (
    <div className="container text-center">
      <Image
        height={350}
        width={350}
        alt={`${team} Logo`}
        src={`/media/team-logos/header-logos/${team}.avif`}
      />
      <br />
      <br />
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">
              <u>Player</u>
            </th>
            <th scope="col">
              <u>Picture</u>
            </th>
            <th scope="col">
              <u>Position</u>
            </th>
            <th scope="col">
              <u>Played</u>
            </th>
            <th scope="col">
              <u>Goals</u>
            </th>
            <th scope="col">
              <u>Assists</u>
            </th>
            <th scope="col">
              <u>Points</u>
            </th>
            <th scope="col">
              <u>G.A</u>
            </th>
            <th scope="col">
              <u>Wins</u>
            </th>
            <th scope="col">
              <u>Losses</u>
            </th>
            <th scope="col">
              <u>Ties</u>
            </th>
            <th scope="col">
              <u>OTL</u>
            </th>
          </tr>
        </thead>
        <tbody>
          {teamRoster.map((player) => (
            <tr key={player.name}>
              <th className="align-middle" scope="row">
                {player.name}
              </th>
              <th className="align-middle">
                <Image
                  width={75}
                  height={75}
                  alt={`${player.name}'s image.`}
                  src={player.image}
                />
              </th>
              <th className="align-middle">{player.position}</th>
              <th className="align-middle">{player.games_played}</th>
              <th className="align-middle">{player.goals}</th>
              <th className="align-middle">{player.assists}</th>
              <th className="align-middle">{player.points}</th>
              <th className="align-middle">{player.goals_against}</th>
              <th className="align-middle">{player.wins}</th>
              <th className="align-middle">{player.losses}</th>
              <th className="align-middle">{player.ties}</th>
              <th className="align-middle">{player.otl}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
