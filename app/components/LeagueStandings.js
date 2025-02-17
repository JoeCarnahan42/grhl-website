// TODO : Finish league standings component
'use client'
import { records } from "@/public/teamRecords";
import Image from "next/image";
import { useState } from "react";



export const LeagueStandings = () => {
  const leagueStandings = records[0].concat(records[1])
  const defaultSort = leagueStandings.sort((a, b) => b.points - a.points);
  const [standings, setStandings] = useState(defaultSort)
  let place = 1;

  const changeSort = (e) => {
    if(e.target.id === "wins") {
      const sort = [...leagueStandings].sort((a, b) => b.wins - a.wins);
      setStandings(sort)
    } else if (e.target.id === "goal-diff") {
      const sort = [...leagueStandings].sort((a, b) => b.goals.goalDiff - a.goals.goalDiff);
      setStandings(sort)
    } else if (e.target.id === "points") {
      setStandings([...defaultSort])
    }
  }

  return (
    <main>
      <div className="container">
        <Image width={600} height={327} alt="GRHL Logo" src={'/media/team-logos/grhl-home-logo.avif'} />
      </div>
      <br />
      <h1>League Standings</h1>
      <br />
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="row">
                <u>Placing</u>
              </th>
              <th scope="row">
                <u>Team</u>
              </th>
              <th scope="row">
                <button id="wins" onClick={changeSort} className="btn btn-link">
                  Wins
                </button>
              </th>
              <th id="losses" scope="row">
                <u>Losses</u>
              </th>
              <th id="otl" scope="row">
                <u>OTL</u>
              </th>
              <th scope="row">
                <button
                  id="points"
                  onClick={changeSort}
                  className="btn btn-link"
                >
                  PTS
                </button>
              </th>
              <th id="goals-for" scope="row">
                <u>GF</u>
              </th>
              <th id="goals-against" scope="row">
                <u>GA</u>
              </th>
              <th scope="row">
                <button
                  id="goal-diff"
                  onClick={changeSort}
                  className="btn btn-link"
                >
                  Goal Diff
                </button>
              </th>
              <th id="div-record" scope="row">
                <u>Div Record</u>
              </th>
              <th id="scratches" scope="row">
                <u>Scratches</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {standings.map((record) => (
              <tr key={record.name}>
                <th scope="row">{place++}</th>
                <th>
                  <Image
                    src={record.img}
                    width={55}
                    height={55}
                    alt="Team Logo"
                  />
                  {" " + record.name}
                </th>
                <th>{record.wins}</th>
                <th>{record.losses}</th>
                <th>{record.overtimeLoss}</th>
                <th>{record.points}</th>
                <th>{record.goals.goalsFor}</th>
                <th>{record.goals.goalsAgainst}</th>
                <th>{record.goals.goalDiff}</th>
                <th>{record.divRecord}</th>
                <th>{record.scratches}</th>
              </tr>
            ))}
          </tbody>
          </table>
      </div>
    </main>
  );
};
