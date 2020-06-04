import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

import './App.css';

function App() {
  return (
    <div>
    <GlobalProvider>

    
     <Header/>
     <div className="container">
     <Balance/>
    
     </div>
     <div className="inc-exp-container">
     <IncomeExpenses/>
     </div>
     <TransactionList/>
     <AddTransaction/>

     
     </GlobalProvider>
    </div>
  );
}

export default App;
