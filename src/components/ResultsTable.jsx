import { calculateInvestmentResults, formatter } from "../util/investment";
function ResultsTable({ userInput }) {
  console.log("userInput in Resss", userInput);

  const res = calculateInvestmentResults(userInput);
  console.log("res, ", res);
  let interestCumm = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {res.map((row) => {
          interestCumm += row.interest;
          return (
            <tr>
              <td>{formatter.format(row.year)}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(interestCumm)}</td>
              <td>{formatter.format(row.valueEndOfYear - interestCumm)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultsTable;
