import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginsignup from './Loginsignup';
import Loginpage from './Loginpage';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Loginpage />} />
        <Route path="/" element={<Loginpage />} />
        <Route path="/login" element={<Loginsignup />} />
      </Routes>
    </Router>
  );
}

export default App;
