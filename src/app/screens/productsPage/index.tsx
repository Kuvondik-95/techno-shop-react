import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Routes, Route, RouteMatch, useMatch, useLocation, Outlet } from 'react-router-dom'
import "../../../css/products.css";
import { Input, Button as ButtonJoy } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import { CssVarsProvider } from "@mui/joy/styles";
import Products from "./products";
import ChosenProduct from "./chosenProduct";
import { CartItem } from "../../../libs/types/search";


interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export default function ProductsPage(props: ProductsPageProps){
  const { onAdd } = props;


  return(
    <>
      <Routes>
        <Route path={`:id`} element={<ChosenProduct onAdd={onAdd}/>} />
        <Route index element={<Products onAdd={onAdd} />}/>
      </Routes>
      <Outlet />
    </>
  )
  
}
