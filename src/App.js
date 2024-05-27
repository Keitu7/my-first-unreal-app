import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pagesComponents/Home';
import About from './pagesComponents/About';
import Contact from './pagesComponents/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
