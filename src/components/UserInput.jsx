import { useState } from "react";

function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e)}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment" value={userInput.annualInvestment}>
            Annual Investment
          </label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn" value={userInput.expectedReturn}>
            Expected Return
          </label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e)}
          />
        </p>
        <p>
          <label htmlFor="duration" value={userInput.duration}>
            Duration
          </label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
