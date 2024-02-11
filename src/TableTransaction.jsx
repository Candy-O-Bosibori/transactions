

import React from "react";
import TableRowTransaction from "./TableRowTransaction";

//function to display the data from the db into a table
function TableTransaction({transactions, onDelete}) {
    return(
    <div className="transaction-table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TableRowTransaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </tbody>
    </table>  
   </div>     
    )
}
export default TableTransaction;


