import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

const TransactionHistory = () => {
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    const retrievedObject = localStorage.getItem("transactionList");
    const stored = JSON.parse(retrievedObject);
    setTransactionList(stored)
  }, []);

  return (
    <div className='transaction-history-wrapper'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Transaction Date</th>
            <th>Order/s</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionList ? (
            transactionList.map(transaction => (
              <tr key={transaction.transactionId}>
                <td>{transaction.transactionId}</td>
                <td>{transaction.DateToday}</td>
                <td>{transaction.Products}</td>
                <td>₱ {transaction.NetTotal.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Transactions yet</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default TransactionHistory
