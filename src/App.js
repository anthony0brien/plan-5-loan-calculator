import './App.css';
import React, { useState }  from 'react';

function CalculateYearsForm(props) {
  // Input hooks
  const [loanAmount, setLoanAmount] = useState("42000");
  const [startingSalary, setStartingSalary] = useState("25000");
  const [salaryGrowth, setSalaryGrowth] = useState("4");
  const [salaryIncrease, setSalaryIncrease] = useState("2000");

  // Output hooks
  const [loanClass, setLoanClass] = useState("");
  const [salaryClass, setSalaryClass] = useState("");
  const [increaseClass, setIncreaseClass] = useState("");
  const [growthClass, setGrowthClass] = useState("");
  const [resultsDisplay, setResultsDisplay] = useState("none");
  const [yearsResult, setYearsResult] = useState("");

  // Calculate number of years, set states of results component to display results
  function handleSubmit(submitEvent) {
    // Hide old results and prevent refreshing
    submitEvent.preventDefault();
    setResultsDisplay("none");

    // Check for empty or invalid amounts and cast inputs
    let loanRemaining = Number(loanAmount)
    if (loanAmount === "" || Number.isNaN(loanRemaining) || loanRemaining < 0) {
      setLoanClass("invalid");
      return;
    }
    let salary = Number(startingSalary)
    if (startingSalary === "" || Number.isNaN(salary) || salary < 0) {
      setSalaryClass("invalid");
      return;
    }
    let increase = Number(salaryIncrease)
    if (salaryIncrease === "" || Number.isNaN(increase) || increase < 0) {
      setIncreaseClass("invalid");
      return;
    }
    let growth = Number(salaryGrowth)
    if (salaryGrowth === "" || Number.isNaN(growth) || growth < 0) {
      setGrowthClass("invalid");
      return;
    }

    // Set textboxes to valid
    setLoanClass("");

    // Calculate result
    let numYears = 0;


    // Display results
    setYearsResult(numYears);
    setResultsDisplay("block");
  }

  const resultsStyle = {
    display: resultsDisplay,
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Total loan to pay</h3>
      <p>The total outstanding amount you need to pay, including maintenance and tuition.</p>
      <input type="number" className={loanClass} value={loanAmount} onChange={event => {setLoanAmount(event.target.value)}} />

      <h3>Salary modelling</h3>
      <p>This is a simple model of your projected salary. It assumes your salary will increase by a fixed amount and then increase by a fixed percent each year.</p>
      <p>Starting salary (£):</p>
      <input type="number" className={salaryClass} value={startingSalary} onChange={event => {setStartingSalary(event.target.value)}} />
      <p>Salary growth (%) per year: </p>
      <input type="number" className={growthClass} value={salaryGrowth} onChange={event => {setSalaryGrowth(event.target.value)}} />
      <p>Salary increase (£) per year: </p>
      <input type="number" className={increaseClass} value={salaryIncrease} onChange={event => {setSalaryIncrease(event.target.value)}} />
      <br></br>
      <br></br>
      <button type="submit">Calculate</button>
      <br></br>
      <br></br>
      <div className="results" style={resultsStyle}>
        <h1>Results</h1>
        <p>It will take roughly {yearsResult} to pay off your plan 5 student loan. Note that after 40 years, your debt will be wiped.</p>
      </div>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Plan 5 Student Loan Calculator
        </p>
      </header>
      <body className="App-body">
        <h1>Number of Years Calculator</h1>
       <p>Currently, this app only calculates the number of years it will take to repay a loan, ignoring the write-off after 40 years. It will also output your final salary, to help you adjust the salary model. Calculators for other missing variables will be added later.</p>
        <CalculateYearsForm></CalculateYearsForm>
      </body>
      <footer className="App-footer">
        <p>
          Created by Anthony O'Brien with React.js.
          <br></br>
          Results are only valid for <b>UK Plan 5</b> undergraduate student loans.
          <br></br>
          Assumptions such as rate of RPI, CPI and future government policy (e.g. threshold is linked to CPI and not frozen, interest is always RPI) have been made. Due to British politics, these assumptions may become invalid.
          <br></br>
          Licensed under GNU GPL-3.0. Last update April 2023.
        </p>
        <a href="https://github.com/anthony0br/plan-5-loan-calculator">View Github repository</a>
      </footer>
    </div>
  );
}

export default App;
