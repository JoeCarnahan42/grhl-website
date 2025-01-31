"use client";
import { records } from "@/public/teamRecords";
import Image from "next/image";
import { useState } from "react";

export const ShowMeSandings = () => {
  const defaultSort = records[1].sort((a, b) => b.points - a.points);
  const [showMeStandings, setShowMeStandings] = useState(defaultSort);
  let place = 1;

  const changeSort = (e) => {
    if (e.target.id === "wins") {
      const sort = [...records[1]].sort((a, b) => b.wins - a.wins);
      setShowMeStandings(sort);
    } else if (e.target.id === "goal-diff") {
      const sort = [...records[1]].sort(
        (a, b) => b.goals.goalDiff - a.goals.goalDiff
      );
      setShowMeStandings(sort);
    } else if (e.target.id === "points") {
      setShowMeStandings([...defaultSort]);
    }
  };
  return (
    <main>
      <div className="container">
        <div>
          <Image
            width={267}
            height={327}
            alt="Show-Me Division Logo"
            src={"/media/images/division-images/grhl-showme-div-logo.avif"}
          />
        </div>
        <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="row">
                <u>Placing</u>
              </th>
              <th>
                <u>Team</u>
              </th>
              <th scope="row">
                <button id="wins" onClick={changeSort} className="btn btn-link">
                  Wins
                </button>
              </th>
              <th scope="row">
                <u>Losses</u>
              </th>
              <th scope="row">
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
              <th scope="row">
                <u>GF</u>
              </th>
              <th scope="row">
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
              <th scope="row">
                <u>Div Record</u>
              </th>
              <th scope="row">
                <u>Scratches</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {showMeStandings.map((record) => (
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
