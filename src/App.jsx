import React from 'react';
import './App.scss';
import Header from './component/Header/header';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound';
import { useState } from 'react';


const App = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">

        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
