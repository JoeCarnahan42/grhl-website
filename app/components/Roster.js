"use client";
import { rosterData } from "@/public/rosterData";
import Image from "next/image";
import Link from "next/link";

export const Roster = (prop) => {
  const team = prop.team;
  const teamName = team.toLowerCase();
  const teamRoster = rosterData[teamName];

  const chooseImage = () => {
    if (team === "waivers") {
      return "/media/team-logos/header-logos/waivers.png";
    } else {
      return `/media/team-logos/header-logos/${team}.avif`;
    }
  };
  // TODO: add sorting function

  return (
    <div className="container text-center">
      <Image
        height={350}
        width={350}
        alt={`${team} Logo`}
        src={chooseImage()}
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
                <Link href={"../player-page"}>{player.name}</Link>
              </th>
              <th className="align-middle">
                <Image
                  width={75}
                  height={75}
                  alt={"No Image"}
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
