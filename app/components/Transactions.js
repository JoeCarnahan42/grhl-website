// TODO: Style THIS component BETTER
import { transactionData } from "@/public/transactionData";
import Image from "next/image";

export const Transactions = (prop) => {
  const currentTeam = prop.team;
  const transactions = transactionData[currentTeam];

  const chooseImage = () => {
    if (currentTeam === "waivers") {
      return "/media/team-logos/header-logos/waivers.png";
    } else {
      return `/media/team-logos/header-logos/${currentTeam}.avif`;
    }
  };

  return (
    <>
      <div className="container text-center">
        <Image
          height={350}
          width={350}
          alt={`${currentTeam} Logo`}
          src={chooseImage()}
        />
        <br />
        <br />
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trade) => (
              <tr key={trade.transId}>
                <th className="align-middle" scope="row">
                  {trade.date}
                </th>
                <th className="align-middle">{trade.trade}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
