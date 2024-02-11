
import './App.css';
import {useState, useEffect} from 'react';
import FormTransaction from './FormTransaction';
import Header from './Header';
import SearchBar from './SearchBar';
import TableTransaction from './TableTransaction';

function App() {

  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Candy-O-Bosibori/transactions-API/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);
  

function addTransaction(newTransaction) {
  setTransactions([...transactions, newTransaction]);
}

const filteredTransactions = transactions
? transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
: [];

function deleteTransaction(id) {
const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
setTransactions(updatedTransactions);
}

  return (
    <div className="App">
      <Header />
      <FormTransaction  onSubmit={addTransaction} />
      <SearchBar onSearch={setSearchTerm} />
      <TableTransaction transactions={filteredTransactions} onDelete={deleteTransaction} />
      
      
    </div>
  );
}

export default App;