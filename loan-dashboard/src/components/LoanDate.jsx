import React, { useState } from "react";

// Sample data (You can replace this with real data from an API)
const loanData = [
  { id: 1, loanType: "home-loan", date: "2024-09-01", amount: 50000 },
  { id: 2, loanType: "personal-loan", date: "2024-09-05", amount: 15000 },
  { id: 3, loanType: "car-loan", date: "2024-09-10", amount: 30000 },
  { id: 4, loanType: "education-loan", date: "2024-09-12", amount: 20000 },
  // Add more sample entries if needed
];

const FilterComponent = () => {
  // State for form inputs
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [loanType, setLoanType] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterApply = () => {
    // Filter logic based on form inputs
    const filtered = loanData.filter((item) => {
      const itemDate = new Date(item.date);
      const from = new Date(fromDate);
      const to = new Date(toDate);

      // Date range filtering
      const isWithinDateRange =
        (!fromDate || itemDate >= from) && (!toDate || itemDate <= to);

      // Loan type filtering
      const isMatchingLoanType = loanType ? item.loanType === loanType : true;

      return isWithinDateRange && isMatchingLoanType;
    });

    setFilteredData(filtered); // Store filtered data
    console.log("Filtered Data:", filtered); // You can display this data in a table or list
  };

  return (
    <div className="filter-container">
      <label htmlFor="from-date">From Date:</label>
      <input
        type="date"
        id="from-date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />

      <label htmlFor="to-date">To Date:</label>
      <input
        type="date"
        id="to-date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      />

      <label htmlFor="loan-type">Select Loan Type:</label>
      <select
        id="loan-type"
        value={loanType}
        onChange={(e) => setLoanType(e.target.value)}
      >
        <option value="">-- Select Loan Type --</option>
        <option value="home-loan">Home Loan</option>
        <option value="personal-loan">Personal Loan</option>
        <option value="car-loan">Car Loan</option>
        <option value="education-loan">Education Loan</option>
      </select>

      <button type="button" onClick={handleFilterApply}>
        Apply Filter
      </button>

      {/* Displaying Filtered Results */}
      {filteredData.length > 0 ? (
        <div className="results">
          <h3>Filtered Results:</h3>
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>
                {item.loanType.replace("-", " ")} - Date: {item.date} - Amount:{" "}
                {item.amount}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No matching records found.</p>
      )}
    </div>
  );
};

export default FilterComponent;
