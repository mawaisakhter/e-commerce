import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Register from './Pages/Forms/Register';
import ContactUs from './Pages/Forms/ContactUs';
import WomenCategoryPage from './Home/Sidebar/Category/WomenCategoryPage';
import MenCategoryPage from './Home/Sidebar/Category/MenCategoryPage';
import CategoryPage from './Home/Sidebar/Category/CategoryPage';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';
import Login from './Pages/Forms/Login';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="contact" element={<ContactUs/>}/>
        <Route path="about" element={<About/>} />
        <Route path="account/register" element={<Register/>} />
        <Route path="account/login" element={<Login/>} />
        <Route path="account/cart" element={<Cart/>} />
        <Route path="account/wishlist" element={<Wishlist/>} />
        <Route path="category/women/:category" element={<CategoryPage/>} />
        <Route path="category/men/:category" element={<CategoryPage/>} />
        <Route path="category/:category" element={<CategoryPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
