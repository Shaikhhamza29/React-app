
import './App.css'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenes from './components/IncomeExpenes';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
      </div>
      <Balance/>
      <IncomeExpenes/>
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
