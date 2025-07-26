import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import "../../../css/otherNavbar.css"
import { CartItem } from "../../../libs/types/search";
import Basket from "./Basket";

interface OtherNavbarProps{
    cartItems: CartItem[];
    onAdd: (item: CartItem) => void;
    onRemove: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    onDeleteAll: () => void;
    // setSignupOpen: (isOpen: boolean) => void;
    // setLoginOpen: (isOpen: boolean) => void;
    // handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
    // anchorEl: HTMLElement | null;
    // handleCloseLogout: () => void;
    // handleLogOutRequest: () => void;
}


export default function OtherNavbar(props: OtherNavbarProps){
  const { 
        cartItems, 
        onAdd, 
        onRemove, 
        onDelete, 
        onDeleteAll
    
    } = props;
  return (
  <>
      <div className="other-navbar-section">
      <Container className="navbar-container">
        <Stack className="navbar-links">
        
          <Box className="logo-box">
            <NavLink to={"/"}>
              <h3 className="logo">T-Shop</h3>
            </NavLink>
          </Box>

          <Stack className="links">    
            <Box className={"link-item"}>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Home
                </NavLink>
            </Box>

            <Box className={"link-item"}>
                <NavLink 
                  to="/products"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Products
                </NavLink>
            </Box>

            {/* member   */}
            <Box className={"link-item"}>
                <NavLink 
                  to="/orders"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Orders
                </NavLink>
            </Box>
            
            {/* member   */}
            <Box className={"link-item"}>
                <NavLink 
                  to="/my-page"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  My-Page
                </NavLink>
            </Box>

            {/* <Box className={"link-item"}>
                <NavLink 
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  About us
                </NavLink>
            </Box> */}
            
            <Box className={"link-item"}>
                <NavLink 
                  to="/help"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Help
                </NavLink>
            </Box>
          </Stack>

        </Stack>
        
        <Stack className={"navbar-login"}>
          <Basket 
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete} 
            onDeleteAll={onDeleteAll} 
          />
          <Button className="login-btn shining" variant="contained">
            <i className="fa-solid fa-right-to-bracket" style={{marginRight:"5px"}}></i>
            Login
          </Button>
          {/* <img 
            src={"/img/default-user.png"} 
            className={"navbar-user-avatar"}
          /> */}
        </Stack>
      </Container> 
    </div>

    <div className="img-frame">
      {/* <Box className="title-box">
        <Typography className="title">"Your phone, your way"</Typography>
      </Box> */}
    </div>
  </>
  )

}