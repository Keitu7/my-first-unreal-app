import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pagesComponents/Home';
import About from './pagesComponents/About';
import InternetArt from './pagesComponents/InternetArt';
import HerLips from './pagesComponents/HerLips';
import HerHair from './pagesComponents/HerHair';
import HerEyes from './pagesComponents/HerEyes';
import Contact from './pagesComponents/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename="/my-first-unreal-app"> */}
      <Router>
        <Navbar />
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/home' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/internetart' element={<InternetArt />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/HerLips' element={<HerLips />} />
         <Route path='/HerHair' element={<HerHair />} />
         <Route path='/HerEyes' element={<HerEyes />} />
       </Routes>
       <Footer/>
      </Router>
     {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
