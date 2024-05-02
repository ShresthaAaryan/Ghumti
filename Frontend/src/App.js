import React from 'react';
import Main from './main';
import OrderForm from './components/Reservation/reservation';
import FilterableTable from './components/Restaurant/restaurant';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact/contact';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<OrderForm />} />
        <Route path="/menu" element={<FilterableTable />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
