import React from 'react';
import './App.scss';
import Header from './component/Header/header';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound';


const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
