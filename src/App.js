
import "./App.css";
import { useEffect } from "react";
import Footer from "./Component/Footer/Footer";
import Items2 from "./Component/Items/Items2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Player from "./Components/MainCarousel/Player";
import Navbar from "./Component/NavBar/Navbar";
import "./App.css";
import Basket from './Component/Basket';


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
    <div className="App">
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
