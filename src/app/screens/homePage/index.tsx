import { Container, Stack, Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import "../../../css/home.css"
import PopularProducts from "./popularProducts";
import NewProducts from "./newProducts";
import Advertisement from "./advertisement";
import News from "./news";
import Brands from "./Brands";
import Services from "./services";
import ActiveUsers from "./activeUsers";
import { setNewProducts, setPopularProducts, setTopUsers } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../libs/types/product";
import { Member } from "../../../libs/types/member";
import ProductService from "../../services/Product.service";
import { ProductCollection } from "../../../libs/enums/product.enum";
import { useDispatch } from "react-redux";
import MemberService from "../../services/Member.service";
import { useGlobals } from "../../hooks/useGlobals";
import { Link } from "react-router-dom";

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularProducts: (data: Product[]) => dispatch(setPopularProducts(data)),
  setNewProducts: (data: Product[]) => dispatch(setNewProducts(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

interface homePageProps{
  setSignupOpen: (isOpen: boolean) => void;
}

export default function HomePage(props: homePageProps){
  const { setSignupOpen } = props;
  const { setPopularProducts } = actionDispatch(useDispatch()); 
  const { setNewProducts } = actionDispatch(useDispatch()); 
  const { setTopUsers } = actionDispatch(useDispatch());
  const { authMember } = useGlobals();

  useEffect(() => {
    // Backend serverdan ma'lumotni olamiz
    const productService = new ProductService;
    const memberService = new MemberService
    
    productService.getProducts({
      page: 1, 
      limit: 5, 
      order: "productViews", 
      productCollection: ProductCollection.SMARTPHONE
    })
    .then(data => {
      console.log("PopularProducts: data passed here", data);
      setPopularProducts(data);
    })
    .catch(err => {
      console.log(err);
    });

    productService.getProducts({
      page: 1, 
      limit: 5, 
      order: "createdAt", 
      productCollection: ProductCollection.SMARTPHONE
    })
    .then(data => {
      console.log("NewProducts: data passed here", data);
      setNewProducts(data);
    })
    .catch(err => {
      console.log(err);
    });

    memberService.getTopUsers()
    .then(data => {
      console.log("NewDishes: data passed here", data);
      setTopUsers(data);
    }).catch(err => {
      console.log(err)
    })

    // Redux store ga joylaymiz
  }, [])
  
  return (
  <>
  <div className="header-section">
    <Container className="header-container">
      <Stack className="header-frame">
        
        <Stack className="header-frame-left">
          <Typography className="header-title">
            Discount From T-Shop <br /> For Samsung Smartphones
          </Typography>
          {!authMember 
          ? (
            <Button 
              className="header-btn shining"
              onClick={() => setSignupOpen(true)}
            >
              Sign Up
            </Button>
          ) 
          : (
            <Link 
              to={"/products"}
              className="link-to-products"
            >
              See All Products
            </Link>
          )}
          
        </Stack>
        
        <Box className="header-frame-right">
          <div className="polygon-1"></div>
          <div className="polygon-2"></div>
          <div className="polygon-3"></div>
          <div className="polygon-4"></div>
          <img src={"/img/image1.png"} alt="this is Phone" className="header-image-1" />
          <img src={"/img/image2.png"} alt="this is Phone" className="header-image-2" />
          <img src={"/img/image3.png"} alt="this is Phone" className="header-image-3" />
          <img src={"/img/image4.png"} alt="this is Phone" className="header-image-4" />
        </Box>
      </Stack>
    </Container>
  </div>

  <PopularProducts/>
  <NewProducts/>
  <News/>
  <Advertisement/>
  <ActiveUsers/>
  <Brands/>
  <Services/>
  </>
);

}