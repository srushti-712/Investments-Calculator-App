import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(field, event) {
    setUserInput((prevInput) => {
      const updatedUserInput = {
        ...prevInput,
        [field]: +event.target.value,
      };
      return updatedUserInput;
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {userInput.duration > 0 ? (
        <ResultsTable userInput={userInput} />
      ) : (
        <p className="center">Duration should be greater than 0 </p>
      )}
    </>
  );
}

export default App;
