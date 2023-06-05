import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Search = () => {
  const [zip, setZip] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const jsonData = require("./postcode.json");
    setData(jsonData);
  }, []);

  const handleChange = (event) => {
    setZip(event.target.value);
  };

  const renderTable = () => {
    if (!zip) {
      return null;
    }
    const filteredData = data.filter((row) => row.Zip5 === zip);
    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>City</th>
            <th>Area</th>
            <th>Road</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.Road}>
              <td>{row.City}</td>
              <td>{row.Area}</td>
              <td>{row.Road}</td>
              <td>{row.scope}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter zip"
        value={zip}
        onChange={handleChange}
      />
      {renderTable()}
    </div>
  );
};

export default Search;
