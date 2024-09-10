import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import AddEditContact from './containers/contact/AddEditContact';

function App() {
  return (
    <Router>
      <Header title="Contact Page" />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-300">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-edit/:id?" element={<AddEditContact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
