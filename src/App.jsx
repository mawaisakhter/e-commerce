import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Register from './Forms/Register';
import ContactUs from './Pages/ContactUs';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<About/>} />
        {/* <Route path="/account/register" element={<Register/>} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
