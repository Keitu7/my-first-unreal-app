import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pagesComponents/Home';
import About from './pagesComponents/About';
import InternetArt from './pagesComponents/InternetArt';
import Contact from './pagesComponents/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/internetart' element={<InternetArt />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
