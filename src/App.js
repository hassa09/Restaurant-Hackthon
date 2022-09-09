<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Player from "./Components/MainCarousel/Player";
import Navbar from "./Component/NavBar/Navbar";
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> ff10bbb72ac2f8329c1fe4112581ddff11fd597c

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={< Navbar />} /> */}
          

        </Routes>


      </Router>
     
    </div>
  );
}

export default App;
