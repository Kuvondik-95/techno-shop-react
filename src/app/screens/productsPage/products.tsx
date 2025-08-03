import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import "../../../css/products.css";
import { Input, Button as ButtonJoy, Badge } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import { CssVarsProvider } from "@mui/joy/styles";

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Card from '@mui/joy/Card';
import { 
  AspectRatio, 
  CardContent, 
  CardOverflow, 
  Chip, 
  Link as LinkJoy, 
  Typography as TypographyJoy,
  SvgIcon,
  CardActions
 } from "@mui/joy";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircularProgress from '@mui/material/CircularProgress';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { KeyboardArrowRight } from "@mui/icons-material";

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { setProducts } from './slice';
import { Product, ProductInquiry } from '../../../libs/types/product';
import { retrieveProducts } from './selector';
import { createSelector } from "reselect";
import { ProductBrand, ProductCollection } from "../../../libs/enums/product.enum";
import { useNavigate } from "react-router-dom";
import ProductService from "../../services/Product.service";
import { serverApi } from "../../../libs/config";
import { CartItem } from "../../../libs/types/search";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(
  retrieveProducts,
  (products) => ({ products })
);

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}


export default function Products(props: ProductsProps){
  const { onAdd } = props;
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1, 
    limit: 8, 
    order: "createdAt", 
    productCollection: ProductCollection.SMARTPHONE,
    search: ""
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [searchText, setSearchText] = useState<string>("");
  const history = useNavigate()

  useEffect(() => {
    const product = new ProductService();
    setLoading(true);
    product
    .getProducts(productSearch)
    .then((data)=> {
      setProducts(data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
  }, [productSearch]);
  
  useEffect(() => {
    if(searchText === ""){
      productSearch.search = "";
      setProductSearch({...productSearch});  
    }
  }, [searchText]);

   /** HANDLERS **/

  const searchCollectionHandler =(collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({...productSearch});
  }
  
  const brandHandler = (brand: ProductBrand) => {
    productSearch.page = 1;
    if(brand === ProductBrand.ALL){
      delete productSearch['productBrand'];
    }else{
      productSearch.productBrand = brand;
    }
    
    setProductSearch({...productSearch});
  }

  const orderSearchHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({...productSearch});
  }
  const searchProductHandler = () => {
    console.log(searchText);
    productSearch.search = searchText;
    setProductSearch({...productSearch});
  }

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({...productSearch});
  }

  const chooseDishHandler = (id: string) => {
    return history(`/products/${id}`);
  }

  // <Link
	// 					href={{
	// 						pathname: '/property/detail',
	// 						query: { id: property?._id },
	// 					}}
	// 				></Link>

  // router.query.id shuni ichidan olinadi

  return  (
    <div className="products-section">
      <Container className="products-container">
        <Typography className="main-title">Products</Typography>  
        
        <Stack className="products-main-frame">
          
          <Stack className="search-frame">
            {/* BRANDS */}
            <Stack className="brands-frame">
              <button 
                className={`brand-btn ${productSearch.productBrand === "APPLE" ? "brand-chosen" : ""}`}
                onClick={() => brandHandler(ProductBrand.APPLE)}
              >
                Apple
              </button>
              
              <button 
                className={`brand-btn ${productSearch.productBrand === "SAMSUNG" ? "brand-chosen" : ""}`}
                onClick={() => brandHandler(ProductBrand.SAMSUNG)}
              >
                Samsung
              </button>
              
              <button 
                className={`brand-btn ${productSearch.productBrand === "HUAWEI" ? "brand-chosen" : ""}`} 
                onClick={() => brandHandler(ProductBrand.HUAWEI)}
              >
                Huawei
              </button>
              <button 
                className={`brand-btn ${productSearch.productBrand === "LG" ? "brand-chosen" : ""}`}
                onClick={() => brandHandler(ProductBrand.LG)}
              >
                LG
              </button>

              <button 
                className={`brand-btn ${!productSearch.productBrand ? "brand-chosen" : ""}`}
                onClick={() => brandHandler(ProductBrand.ALL)}
              >
                ALL
              </button>
            </Stack>
            {/* SEARCH, ORDER */}
            <Stack className="search-order">
              <CssVarsProvider>
              <Input
                className={"search-input"}
                variant="outlined"
                placeholder="Type here"
                sx={{"--Input-focusedThickness": "0px"}}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if(e.key === "Enter") searchProductHandler();
                }}
                endDecorator={
                  <ButtonJoy 
                    className="search-btn" 
                    endDecorator={<SearchIcon />} 
                    sx={{ mr: -1.5}}
                    onClick={searchProductHandler}
                  >
                    SEARCH
                  </ButtonJoy>
                }
              />
              </CssVarsProvider>

              <Box className="dropdown-box">
                <CssVarsProvider>
                  <Select
                    className="order-select"
                    defaultValue={"new"}
                    indicator={<KeyboardArrowDown />}
                    sx={{
                      width: 240,
                      [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                          transform: 'rotate(-180deg)',
                        },
                      },
                    }}
                  >
                    <Option 
                      value="new" 
                      onClick={() => {orderSearchHandler("createdAt")}}
                    >
                      New
                    </Option>
                    
                    <Option 
                      value="price"
                      onClick={() => {orderSearchHandler("productPrice")}}
                    >
                      Price
                    </Option>
                    
                    <Option 
                      value="views"
                      onClick={() => {orderSearchHandler("productViews")}}
                    >
                      Views
                    </Option>
                  </Select>
                </CssVarsProvider>
              </Box>
              
            </Stack>

          </Stack>
          
          {/* CATEGORY, PRODUCTS */}
          <Stack className="category-products-frame">
            <Stack className="category-frame">
              <CssVarsProvider>
                <ButtonJoy 
                  className="category-btn"
                  variant={productSearch?.productCollection === ProductCollection.SMARTPHONE ? "solid" : "outlined"} 
                  endDecorator={<KeyboardArrowRight />} color="success"
                  onClick={() => searchCollectionHandler(ProductCollection.SMARTPHONE)}
                >
                  SMARTPHONES
                </ButtonJoy>
                <ButtonJoy 
                  className="category-btn"
                  variant={productSearch?.productCollection === ProductCollection.FOLDABLE ? "solid" : "outlined"} 
                  endDecorator={<KeyboardArrowRight />} color="success"
                  onClick={() => searchCollectionHandler(ProductCollection.FOLDABLE)}
                >
                  FOLDABLE
                </ButtonJoy>
                <ButtonJoy 
                  className="category-btn"
                  variant={productSearch?.productCollection === ProductCollection.BASIC ? "solid" : "outlined"}
                  endDecorator={<KeyboardArrowRight />} color="success"
                  onClick={() => searchCollectionHandler(ProductCollection.BASIC)}
                >
                  BASIC
                </ButtonJoy>
                <ButtonJoy 
                  className="category-btn"
                  variant={productSearch?.productCollection === ProductCollection.RUGGED ? "solid" : "outlined"}
                  endDecorator={<KeyboardArrowRight />} color="success"
                  onClick={() => searchCollectionHandler(ProductCollection.RUGGED)}
                >
                  RUGGED
                </ButtonJoy>
                <ButtonJoy 
                  className="category-btn"
                  variant={productSearch?.productCollection === ProductCollection.OTHER ? "solid" : "outlined"}
                  endDecorator={<KeyboardArrowRight />} color="success"
                  onClick={() => searchCollectionHandler(ProductCollection.OTHER)}
                >
                  OTHER
                </ButtonJoy>
              </CssVarsProvider>
              
              
              {/* <button className="category-btn">SMARTPHONES</button>
              <button className="category-btn">FOLDABLE</button>
              <button className="category-btn">BASIC</button>
              <button className="category-btn">RUGGED</button>
              <button className="category-btn">OTHER</button> */}
            </Stack>
            { loading ? (
              <Box sx={{ 
                    width: '100%',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                    }}
              >
                <CircularProgress />
              </Box>
            ) : (
            <Stack className="products-frame">
              <CssVarsProvider>
                {products.length !== 0 ? (products.map((product: Product, index) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`
                  return(
                    <Card 
                    key={product._id}
                    // onClick={() => chooseDishHandler(product._id)}
                    sx={{ width: "215px", height: "370px", boxShadow: 'lg' }} className="card"
                    >
                      <CardOverflow className="card-img-frame">
                          <img
                            className="card-img"
                            style={{ width: "100%", height: "100%" }}
                            src={imagePath}
                            loading="lazy"
                            alt=""
                            onClick={() => chooseDishHandler(product._id)}
                          />
                      </CardOverflow>
                      <CardContent className="card-content">
                        <TypographyJoy level="body-xs" className="product-category">
                          {product.productCollection === 'OTHER' ? 'Accessory' : product.productCollection}
                        </TypographyJoy>
                        
                        <LinkJoy
                          className="product-name"
                          color="neutral"
                          textColor="text.primary"
                          // overlay
                          // endDecorator={<ArrowOutwardIcon />}
                          sx={{ fontWeight: 'md' }}
                          onClick={() => chooseDishHandler(product._id)}
                        >
                          {product.productName}
                        </LinkJoy>

                        <TypographyJoy
                          className="product-price"
                          level="title-lg"
                          sx={{ mt: 1, fontWeight: 'xl' }}
                        >
                          {product.productPrice}$
                        </TypographyJoy>
                        {product.productLeftCount < 10 
                        ? (<TypographyJoy className="product-left" level="body-sm">
                            (Only <b>{product.productLeftCount}</b> left in stock!)
                          </TypographyJoy>) 
                        : (<></>)
                        }
                        
                      </CardContent>
                      <ButtonJoy 
                        className="shopping-btn"
                        onClick={(e) => {
                          onAdd({
                            _id: product._id,
                            quantity: 1,
                            name: product.productName,
                            price: product.productPrice,
                            image: product.productImages[0]
                          })
                          e.stopPropagation();
                        }} 
                      >
                          Add to cart
                        <ShoppingCartIcon sx={{marginLeft: "6px"}}></ShoppingCartIcon>
                      </ButtonJoy>

                      {product.productViews > 0 && (
                        <TypographyJoy  
                          className={`views-title`} 
                          endDecorator={<RemoveRedEyeIcon sx={{color: "#bdbdbd"}}/>}
                        >
                          {product.productViews}
                          
                        </TypographyJoy>
                      )}  
                      

                    </Card>
                  )})): (
                    <Box className="no-data">Products are not available!</Box>
                  )
                }
              </CssVarsProvider>
            </Stack>
            )}

          </Stack>
          <Box className="pagination-box">
            <Pagination
              count={products.length !== 0 ? productSearch.page + 1 : productSearch.page}
              defaultPage={1}
              page={productSearch.page}
              color={"primary"}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
              onChange={paginationHandler}
            />
          </Box>
        </Stack>
      </Container>
    </div>
  )
}
