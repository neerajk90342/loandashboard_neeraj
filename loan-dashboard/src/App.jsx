import React from 'react';
import Sidebar from './components/Sidebar';
import LoanDatePicker from './components/LoanDate';
import DataTable from './components/DataTable';
const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <LoanDatePicker />
      <DataTable />
      
      <div style={{ padding: '20px', flex: 1 }}>
        {/* Main content goes here */}
        <div className='head'>
             <h1>Neeraj soni</h1>
             <div className='picture'>

             </div>
        </div>
      </div>
    </div>
  );
};

export default App;
