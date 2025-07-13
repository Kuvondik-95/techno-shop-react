import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import "../../../css/otherNavbar.css"

export default function OtherNavbar(){
  return (
  <>
      <div className="navbar-section">
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

            <Box className={"link-item"}>
                <NavLink 
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  About us
                </NavLink>
            </Box>
            
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
        
        <Box className={"navbar-login"}>
          <i className="fa-solid fa-right-to-bracket" style={{marginRight:"5px"}}></i>
          <a href="">Login </a>
          /
          <a href=""> Signup</a>
          
        </Box>
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