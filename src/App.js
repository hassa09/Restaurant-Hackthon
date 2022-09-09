import "./App.css";
import { useEffect } from "react";
import Footer from "./Component/Footer/Footer";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Player from "./Components/MainCarousel/Player";
import Navbar from "./Component/NavBar/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={< Navbar />} /> */}
          

        </Routes>


      </Router>
     
<Footer/>
    </div>
  );
}

export default App;
