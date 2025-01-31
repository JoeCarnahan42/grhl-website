import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { gameData } from "@/public/gameData";
import Image from "next/image";

export default function LeagueSchedule() {
  return (
    <main>
      <Header />
      <h1
        className="text-center m-auto"
        style={{ backgroundColor: "gray", width: "555px" }}
      >
        <strong>
          <u>2024 - 2025 GRHL Schedule</u>
        </strong>
      </h1>
      <div className="container text-center">
        {/* WEEK 1 */}
        <h1>
          <strong>Week 1</strong> | September 14, 2024
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekOne.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th>
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th>
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 2 */}
        <h1>
          <strong>Week 2</strong> | September 28, 2024
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekTwo.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 3 */}
        <h1>
          <strong>Week 3</strong> | October 19, 2024
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekThree.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 4 */}
        <h1>
          <strong>Week 4</strong> | November 9, 2024
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekFour.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 5 */}
        <h1>
          <strong>Week 5</strong> | November 16, 2024
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekFive.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 7 */}
        <h1>
          <strong>Week 7</strong> | January 18, 2025
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekSeven.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 8 */}
        <h1>
          <strong>Week 8</strong> | January 25, 2025
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekEight.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 9 */}
        <h1>
          <strong>Week 9</strong> | February 8, 2025
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekNine.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 6 */}
        <h1>
          <strong>Week 6</strong> | February 16, 2025
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekSix.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 10 */}
        <h1>
          <strong>Week 10</strong> | February 22, 2025
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekTen.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 11 */}
        <h1>
          <strong>Week 11</strong> | March 8, 2025
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekEleven.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 12 */}
        <h1>
          <strong>Week 12</strong> | March 22, 2025
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekTwelve.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* WEEK 13 */}
        <h1>
          <strong>Week 13</strong> | April 5, 2025
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <u>Time</u>
              </th>
              <th scope="col">
                <u>Home</u>
              </th>
              <th scope="col">
                <u>Away</u>
              </th>
              <th scope="col">
                <u>Final Score</u>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameData.weekThirteen.map((game) => (
              <tr key={game.game}>
                <th scope="row">{game.time}</th>
                <th className="away">
                  <Image
                    src={game.awayImg}
                    width={55}
                    height={55}
                    alt="Away Team Logo"
                  />{" "}
                  {game.away}
                </th>
                <th className="home">
                  {game.home}{" "}
                  <Image
                    src={game.homeImg}
                    width={55}
                    height={55}
                    alt="Home Team Logo"
                  />
                </th>
                <th>{game.score}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Image
          alt="GRHL Playoff Bracket"
          src={"/media/schedule-images/grhl-playoff-bracket.avif"}
          width={1069}
          height={566}
        />
      </div>
      <Footer />
    </main>
  );
}
