"use client";
import { records } from "@/public/teamRecords";
import Image from "next/image";
import { useState } from "react";

export const LincolnStandings = () => {
  const defaultSort = records[0].sort((a, b) => b.points - a.points);
  const [lincStandings, setLincStandings] = useState(defaultSort);
  let place = 1;

  const changeSort = (e) => {
    if (e.target.id === "wins") {
      const sort = [...records[0]].sort((a, b) => b.wins - a.wins);
      setLincStandings(sort);
    } else if (e.target.id === "goal-diff") {
      const sort = [...records[0]].sort(
        (a, b) => b.goals.goalDiff - a.goals.goalDiff
      );
      setLincStandings(sort);
    } else if (e.target.id === "points") {
      setLincStandings([...defaultSort]);
    }
  };

  return (
    <main>
      <div className="container">
        <div>
          <Image
            width={267}
            height={327}
            alt="Lincoln Division Logo"
            src={"/media/images/division-images/grhl-linc-div-logo.avif"}
          />
        </div>
        <br />
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
            {lincStandings.map((record) => (
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
