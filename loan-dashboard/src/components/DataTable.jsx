import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const DataTable = () => {
  const [data, setData] = useState([
    {
      mobile: "9876543210",
      pan: "ABCDE1234F",
      aadhaar: "",
      dl: "DL-123456789",
      pin: "110001",
      city: "New Delhi",
      state: "Delhi"
    },
    {
      mobile: "9876543211",
      pan: "XYZAB1234C",
      aadhaar: "",
      dl: "DL-987654321",
      pin: "400001",
      city: "Mumbai",
      state: "Maharashtra"
    },
    {
      mobile: "9876543212",
      pan: "XYZAB5678C",
      aadhaar: "",
      dl: "DL-456789123",
      pin: "600001",
      city: "Chennai",
      state: "Tamil Nadu"
    },
    {
      mobile: "9876543213",
      pan: "LMNOP2345H",
      aadhaar: "",
      dl: "DL-654321987",
      pin: "700001",
      city: "Kolkata",
      state: "West Bengal"
    },
    {
      mobile: "9876543214",
      pan: "XYZXY1234K",
      aadhaar: "",
      dl: "DL-765432189",
      pin: "500001",
      city: "Hyderabad",
      state: "Telangana"
    },
    {
      mobile: "9876543215",
      pan: "LMNOP1234D",
      aadhaar: "",
      dl: "DL-345678987",
      pin: "800001",
      city: "Patna",
      state: "Bihar"
    },
    {
      mobile: "9876543216",
      pan: "ABCDE5678F",
      aadhaar: "",
      dl: "DL-678912345",
      pin: "300001",
      city: "Jaipur",
      state: "Rajasthan"
    },
    {
      mobile: "9876543217",
      pan: "PQRS5678D",
      aadhaar: "",
      dl: "DL-123456987",
      pin: "900001",
      city: "Ahmedabad",
      state: "Gujarat"
    },
    {
      mobile: "9876543218",
      pan: "ABCDE1234F",
      aadhaar: "",
      dl: "DL-123654789",
      pin: "100001",
      city: "Pune",
      state: "Maharashtra"
    },
    {
      mobile: "9876543219",
      pan: "XYLMN9876P",
      aadhaar: "1234 2345 3456",
      dl: "DL-543216789",
      pin: "200001",
      city: "Surat",
      state: "Gujarat"
    },
    {
      mobile: "9876543220",
      pan: "ABCXY1234F",
      aadhaar: "2345 6789 8765",
      dl: "DL-987654123",
      pin: "120001",
      city: "Chandigarh",
      state: "Chandigarh"
    },
    {
      mobile: "9876543221",
      pan: "XYLMN8765Q",
      aadhaar: "1234 5678 9876",
      dl: "DL-234567123",
      pin: "450001",
      city: "Bhopal",
      state: "Madhya Pradesh"
    },
    {
      mobile: "9876543222",
      pan: "LMNOP1234H",
      aadhaar: "2345 6789 5678",
      dl: "DL-987654098",
      pin: "750001",
      city: "Lucknow",
      state: "Uttar Pradesh"
    },
    {
      mobile: "9876543223",
      pan: "PQRST5678K",
      aadhaar: "5678 1234 2345",
      dl: "DL-234567654",
      pin: "800002",
      city: "Ranchi",
      state: "Jharkhand"
    },
    {
      mobile: "9876543224",
      pan: "ABCXY9876J",
      aadhaar: "6789 1234 2345",
      dl: "DL-765432987",
      pin: "550001",
      city: "Indore",
      state: "Madhya Pradesh"
    }
  ]);

  const [cityFilter, setCityFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // One page Three rows
  const pageCount = Math.ceil(data.length / itemsPerPage); // Total Page

  const filteredData = data.filter((item) =>
    item.city.toLowerCase().includes(cityFilter.toLowerCase()) &&
    item.state.toLowerCase().includes(stateFilter.toLowerCase())
  );

  
  const displayedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Excel download function for the current page only
  const handleDownloadExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(displayedData); // Only current page data

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const file = new Blob([wbout], { type: "application/octet-stream" });

    saveAs(file, `page_${currentPage + 1}_data.xlsx`); // File name includes current page
  };

  return (
    <div>
      <button onClick={handleDownloadExcel} className="download">
        Download Excel
      </button>
      <table>
        <thead>
          <tr>
            <th>Mobile No</th>
            <th>PAN Card</th>
            <th>Aadhaar No</th>
            <th>DL Number</th>
            <th>PIN No</th>
            <th>
              City Name
              <br />
              <input
                type="text"
                placeholder="Search City"
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                style={{ marginTop: "5px", padding: "5px", width: "90%" }}
              />
            </th>
            <th>
              State Name
              <br />
              <input
                type="text"
                placeholder="Search State"
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                style={{ marginTop: "5px", padding: "5px", width: "90%" }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedData.length > 0 ? (
            displayedData.map((item, index) => (
              <tr key={index}>
                <td>{item.mobile}</td>
                <td>{item.pan}</td>
                <td>{item.aadhaar}</td>
                <td>{item.dl}</td>
                <td>{item.pin}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No matching data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => handlePageClick({ selected: currentPage - 1 })}
          disabled={currentPage === 0}
        >
          {"<"}
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage + 1} of {pageCount}
        </span>
        <button
          onClick={() => handlePageClick({ selected: currentPage + 1 })}
          disabled={currentPage + 1 === pageCount}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default DataTable;
