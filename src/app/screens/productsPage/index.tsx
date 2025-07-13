import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Routes, Route, useLocation, useMatch } from 'react-router-dom'
import "../../../css/products.css";
import { Input, Button as ButtonJoy } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import { CssVarsProvider } from "@mui/joy/styles";
import Products from "./products";
import ChosenProduct from "./chosenProduct";




export default function ProductsPage(){
  return(
    <>
      <Routes>
        <Route path={"/"} element={<ChosenProduct/>} />
        <Route path={"/chosen"} element={<Products/>} />
      </Routes>
    </>
  )
  
}
