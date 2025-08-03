import React from "react";
import { Box, Button, Container, ListItemIcon, Menu, MenuItem, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

import "../../../css/navbar.css"
import Basket from "./Basket";
import { CartItem } from "../../../libs/types/search";
import { Logout } from "@mui/icons-material";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../libs/config";

interface HomeNavbarProps{
    cartItems: CartItem[];
    onAdd: (item: CartItem) => void;
    onRemove: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    onDeleteAll: () => void;
    setSignupOpen: (isOpen: boolean) => void;
    setLoginOpen: (isOpen: boolean) => void;
    handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
    anchorEl: HTMLElement | null;
    handleCloseLogout: () => void;
    handleLogOutRequest: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps){
  const { 
    cartItems, 
    onAdd, 
    onRemove, 
    onDelete, 
    onDeleteAll,
    setSignupOpen, 
    setLoginOpen,
    handleLogoutClick,
    anchorEl,
    handleCloseLogout, 
    handleLogOutRequest
} = props;
const { authMember }= useGlobals();

  return <div className="navbar-section">
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
            {authMember 
              ? (
                <Box className={"link-item"}>
                    <NavLink 
                      to="/orders"
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                      Orders
                    </NavLink>
                </Box>
              ) : (<></>)
            }
           
           {/* member   */}
           {authMember 
              ? (
                <Box className={"link-item"}>
                  <NavLink 
                    to="/my-page"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                  >
                    My-Page
                  </NavLink>
                </Box>
                ) : (<></>)
            }
            

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
          {!authMember 
            ? (
              <Button 
                className="login-btn shining" 
                variant="contained"
                onClick={() => setLoginOpen(true)}
              >
                <i className="fa-solid fa-right-to-bracket" style={{marginRight:"5px"}}></i>
                Login
              </Button>
            ) 
            : (
              <img 
                src={
                  authMember.memberImage 
                    ? `${serverApi}/${authMember?.memberImage}` 
                    : "/icon/default-user.svg"
                } 
                className={"navbar-user-avatar"}
                aria-haspopup={"true"}
                onClick={handleLogoutClick}
              />
            )
          }
          
          <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleCloseLogout}
              onClick={handleCloseLogout}
              PaperProps={{
                  elevation: 0,
                  sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                      },
                      '&:before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                      },
                  },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
              <MenuItem onClick={handleLogOutRequest}>
                  <ListItemIcon>
                      <Logout fontSize="small" style={{ color: 'blue' }} />
                  </ListItemIcon>
                  Logout
              </MenuItem>
          </Menu>
        </Stack>
      </Container> 
    </div>
}