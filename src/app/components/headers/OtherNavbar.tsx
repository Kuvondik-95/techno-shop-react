import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function OtherNavbar(){
  return <div className="home-navbar">
    <Container className="navbar-container">
      <Stack>
        <Box>
          <NavLink to={"/"}>
            <h3>TechnoShop</h3>
          </NavLink>
        </Box>

        <Stack className="links">
          
          <Box className={"hover-line"}>
              <NavLink to="/">Home</NavLink>
          </Box>

          <Box className={"hover-line"}>
              <NavLink to="/">Home</NavLink>
          </Box>

          <Box className={"hover-line"}>
              <NavLink to="/">Home</NavLink>
          </Box>

          <Box className={"hover-line"}>
              <NavLink to="/">Home</NavLink>
          </Box>
        </Stack>
      </Stack>
    </Container> 
  </div>
}