import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Routes, Route, RouteMatch, useMatch, useLocation } from 'react-router-dom'
import "../../../css/products.css";
import { Input, Button as ButtonJoy } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import { CssVarsProvider } from "@mui/joy/styles";
import Products from "./products";
import ChosenProduct from "./chosenProduct";




export default function ProductsPage(){
  const location = useLocation();
  console.log("++",location.pathname);


  return(
    <>
      <Routes>
        {/* <Route path={`/`} element={<ChosenProduct/>} /> */}
        <Route path={`/`} element={<Products/>}/>
      </Routes>
    </>
  )
  
}
