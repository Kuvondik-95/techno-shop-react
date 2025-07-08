import React from 'react';
import '../css/app.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './screens/homePage';
import ProductsPage from './screens/productsPage';
import OrdersPage from './screens/ordersPage';
import UserPage from './screens/userPage';
import HelpPage from './screens/helpPage';
import HomeNavbar from './components/headers/HomeNavbar';
import OtherNavbar from './components/headers/OtherNavbar';
import Footer from './components/footer';


function App() {
  const location = useLocation();
  console.log("location:", location);
  
  return (
    <>
      { location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/> }

      <Routes>
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/orders" element={<OrdersPage/>} />
        <Route path="/my-page" element={<UserPage/>} />
        <Route path="/help" element={<HelpPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
