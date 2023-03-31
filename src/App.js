
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={Dashboard} />
      </Routes>
    </div>
  );
}

export default App;
