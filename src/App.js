import './App.css';
// import { useEffect } from 'react';
import Footer from './Component/Footer/Footer';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Player from "./Components/MainCarousel/Player";
import Navbar from './Component/NavBar/Navbar';
import './App.css';
import Basket from './Component/Basket';

// const food = [
//   {
//     id: 1,
//     name: 'burger',
//     price: 9.0,
//   },
//   {
//     id: 2,
//     name: 'burger',
//     price: 9.0,
//   },
//   {
//     id: 3,
//     name: 'burger',
//     price: 9.0,
//   },
// ];

function App() {
  const [basketOpen, setBasketOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'burger',
      price: 9.0,
    },
    {
      id: 2,
      title: 'burger',
      price: 9.0,
    },
    {
      id: 3,
      title: 'burger',
      price: 9.0,
    },
  ]);
  return (
    <div className='App'>
      <Router>
        <Navbar basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
        <Routes>{/* <Route path='/' element={< Navbar />} /> */}</Routes>
      </Router>

      <Basket items={items} setItems={setItems} open={basketOpen} />
      <Footer />
    </div>
  );
}

export default App;
