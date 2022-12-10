import React from 'react';

function TableDetails({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th> from </th>
          <th> to  </th>
          <th> amount </th>
          <th> result </th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => (
          <tr>
            <td>{el?.query?.from}</td>
            <td>{el?.query?.to}</td>
            <td>{el?.query?.amount}</td>
            <td>{el?.result}</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}

export default TableDetails;
