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
import AuthenticationModal from './components/auth';
import MemberService from './services/Member.service';
import { sweetErrorHandling, sweetTopSuccessAlert } from '../libs/sweetAlert';
import { Messages } from '../libs/config';


function App() {
  const location = useLocation();
  const { setAuthMember } = useGlobals();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  /** HANDLRES **/
  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);

  const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }
  
  const handleCloseLogout = () => setAnchorEl(null);

  const handleLogOutRequest = async () => {
    try{
      const member = new MemberService();
      await member.logout();
      await sweetTopSuccessAlert("success", 1000);
      setAuthMember(null);
    }catch(err){
      console.log(err);
      sweetErrorHandling(Messages.error1);
    }
  }


  return (
    <>
      { location.pathname === "/" 
        ? (<HomeNavbar 
            cartItems={cartItems} 
            onAdd={onAdd}
            onRemove={onRemove} 
            onDelete={onDelete} 
            onDeleteAll={onDeleteAll}
            setSignupOpen={setSignupOpen}
            setLoginOpen={setLoginOpen}
            anchorEl={anchorEl}
            handleLogoutClick={handleLogoutClick}
            handleCloseLogout={handleCloseLogout}
            handleLogOutRequest={handleLogOutRequest}
          />) 
        : (<OtherNavbar
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove} 
            onDelete={onDelete} 
            onDeleteAll={onDeleteAll}
            setSignupOpen={setSignupOpen}
            setLoginOpen={setLoginOpen}
            anchorEl={anchorEl}
            handleLogoutClick={handleLogoutClick}
            handleCloseLogout={handleCloseLogout}
            handleLogOutRequest={handleLogOutRequest}
          />) }

      <Routes>
        <Route path="/products" element={<ProductsPage onAdd={onAdd}/>} />
        <Route path="/orders" element={<OrdersPage/>} />
        <Route path="/my-page" element={<UserPage/>} />
        <Route path="/help" element={<HelpPage/>} />
        <Route path="/" element={<HomePage setSignupOpen={setSignupOpen}/>} />
      </Routes>
      
      <Footer/>

      <AuthenticationModal 
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignupClose}
      />
    </>
  );
}

export default App;
