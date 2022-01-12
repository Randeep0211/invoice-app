import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar
          flow="I-Flow"
          dashboard="Dashboard"
          invoices="Invoices"
          clients="Clients"
          settings="Settings"
        />
      </div>

      <div className='container'>
        <Sidebar className="sidebar" />
        <Main
          className="main"
          dashboard="Dashboard"
          paid="Paid"
          unpaid="Unpaid"
          due="Overdue"
          draft="Draft"
          price="64"
          Npaid="79"
          overdue="80"
          Draft="32"
          invoice="Recent Invoice"
        />
      </div>
    </div>
  );
}

export default App;
