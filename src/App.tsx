import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;