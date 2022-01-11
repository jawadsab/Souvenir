import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import App from './App.jsx';
import Auth from './components/Auth/Auth.jsx';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/app" element={<App />} />
        <Route exact path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
