import './assets/style.css';
import Header from './components/Header';
import Transact from './pages/Transact';
import { Routes, Route } from "react-router-dom";
import TransactionHistory from './pages/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" index element={<Transact />}></Route>
      <Route path="/transaction-history" element={<TransactionHistory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
