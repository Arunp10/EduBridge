import React from "react";

const DynamicTable = ({data}) => {

  return (
    <table className="dynamic-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Institute Name</th>
          <th>Degree</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.instituteName}</td>
            <td>{item.degree}</td>
            <td>{item.startDate}</td>
            <td>{item.endDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
