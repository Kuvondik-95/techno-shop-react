import React, { useState } from 'react';
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
import "../css/index.css"
import { useGlobals } from './hooks/useGlobals';
import useBasket from './hooks/useBasket';


function App() {
  const location = useLocation();
  const { setAuthMember } = useGlobals();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  // const [signupOpen, setSignupOpen] = useState<boolean>(false);
  // const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);



  return (
    <>
      { location.pathname === "/" 
        ? (<HomeNavbar 
            cartItems={cartItems} 
            onAdd={onAdd}
            onRemove={onRemove} 
            onDelete={onDelete} 
            onDeleteAll={onDeleteAll}
          />) 
        : (<OtherNavbar
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove} 
            onDelete={onDelete} 
            onDeleteAll={onDeleteAll}
          />) }

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
