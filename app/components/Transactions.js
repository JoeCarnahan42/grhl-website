// TODO: Style THIS component BETTER
import { transactionData } from "@/public/transactionData";

export const Transactions = (prop) => {
  const currentTeam = prop.team;
  const transactions = transactionData[currentTeam];

  return (
    <>
      <div className="container text-center">
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
