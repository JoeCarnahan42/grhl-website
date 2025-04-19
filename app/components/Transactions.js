// TODO: Style THIS component
import { transactionData } from "@/public/transactionData";

export const Transactions = (prop) => {
  const currentTeam = prop.team
  const transactions = transactionData[currentTeam]

  return (
    <>
      <h1>Transactions</h1>
      {transactions.map((trade) => {
        return (
          <h2 key={trade.date}>{trade.date} - {trade.trade}</h2>
        )
      })}
    </>
  );
};
