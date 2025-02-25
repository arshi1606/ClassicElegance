import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from './components/Footer';
import About from "./pages/About";
import Shoes from "./pages/Shoes";
import contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/shoes" exact Component={Shoes} />
          <Route path="/about" exact Component={About} />
          <Route path="/contact" exact Component={contact} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
