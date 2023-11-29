import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Greeting } from './components/Greeting';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/" />
      </nav>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
