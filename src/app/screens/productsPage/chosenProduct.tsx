import React, { Component, createRef, useEffect, useState } from 'react';
import { Container, Stack, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CompareIcon from '@mui/icons-material/Compare';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

/* REDUX imports */
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { setChosenProduct, setOwner } from './slice';
import { Product } from '../../../libs/types/product';
import { createSelector } from "reselect";
import { retrieveChosenProduct, retrieveOwner } from './selector';
import { Member } from '../../../libs/types/member';
import ProductService from '../../services/Product.service';
import MemberService from '../../services/Member.service';
import { serverApi } from '../../../libs/config';
import { useParams } from 'react-router-dom';
import { CartItem } from '../../../libs/types/search';

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setOwner: (data: Member) => dispatch(setOwner(data)),
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
});

const ownerRetriever = createSelector(
  retrieveOwner,
  (owner) => ({owner})
);
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({chosenProduct})
);

interface ChosenProductProps {
  onAdd: (item: CartItem) => void;
}


export default function ChosenProduct(props: ChosenProductProps) {
  const { onAdd } = props;
  const myDivRef = createRef<HTMLDivElement>();
  const { id } = useParams();
  const productId = id as string;
  const [InfoBox, setInfoBox] = useState<string>("close");
  const {setOwner, setChosenProduct } = actionDispatch(useDispatch());
  const {chosenProduct} = useSelector(chosenProductRetriever);
  const {owner} = useSelector(ownerRetriever);
  const [imagePath, setImagePath] = useState<string>(``);
  console.log(imagePath);


  useEffect(() => {
  const product = new ProductService();
  product
    .getProduct(productId)
    .then(data => {
      setChosenProduct(data);
      setImagePath(`${serverApi}/${data?.productImages[0]}`);
    })
    .catch(err => console.log(err));
  

  // const member = new MemberService()
  // member
  //   .getRestaurant()
  //   .then(data => setOwner(data))
  //   .catch(err => console.log(err)) 
  }, []);

  //HANDLERS
  const handleDetailInfoBox = () => {
    if(InfoBox === "close"){
      if(myDivRef.current){
        myDivRef.current.style.display = "block";
        setInfoBox("open");
      }
    }
    if(InfoBox === "open"){
      if(myDivRef.current){
        myDivRef.current.style.display = "none";
        setInfoBox("close");
      }
    } 
  };

  const imageHandler = (num: number) => {
    const path = `${serverApi}/${chosenProduct?.productImages[num]}`
    setImagePath(path);

    return true;
  }

  console.log("chosenProduct:", chosenProduct);

  return (
    <div className="chosen-product-section">
      <Container className="chosen-product-container">
      <Typography className="main-title">
        Product Detail
      </Typography>
      <Stack className="chosen-product-frame">
        <Typography className="title">
          {chosenProduct?.productName} 
          <span className="collection-title"> &nbsp;({chosenProduct?.productCollection})</span>
        </Typography>

        <Stack className="details-frame">
          
          {/* LEFT IMAGES */}
          <Stack className="images">
            {/* MAIN IMAGE */}
            <Box className="main-img-box">
              <img 
                className="main-img" 
                src={imagePath}
                alt="" 
              />
            </Box>

            {/* SECONDARY IMAGES */}  
            <Stack className="basic-images">
              <Box 
                className="basic-box"
                onClick={() => imageHandler(0)}
              >
                <img 
                  className="basic-img basic-img-1" 
                  src={`${serverApi}/${chosenProduct?.productImages[0]}`}
                  alt="" 
                />
              </Box>
              
              <Box 
                className="basic-box"
                onClick={() => imageHandler(1)}
              >
                <img 
                  className="basic-img basic-img-2" 
                  src={`${serverApi}/${chosenProduct?.productImages[1]}`}
                  alt="" 
                />
              </Box>
              
              <Box 
                className="basic-box"
                onClick={() => imageHandler(2)}
              >
                <img 
                  className="basic-img basic-img-3"  
                  src={`${serverApi}/${chosenProduct?.productImages[2]}`}
                  alt="" 
                />
              </Box>
            </Stack>
          </Stack>
          
          {/* CENTER DETAILS */}
          <Stack className="details">
            <Box className="memory-box">
              <Typography className="title">Memory capacity</Typography>
              <Stack className="memory-buttons">
                <button className="memory-btn">{chosenProduct?.productMemory}</button>
              </Stack>
            </Box>

            <Box className="colors-box">
              <Typography className="title">Colors</Typography>
              <Stack className="colors">
                <div className="color" style={{background:"gray"}}></div>
                <div className="color" style={{background:"green"}}></div>
                <div className="color" style={{background:"black"}}></div>
                <div className="color" style={{background:"orange"}}></div>
              </Stack>
            </Box>

            <Box className="details-box">
              <Typography className="title">Characteristics</Typography>
              <Stack className="details-stack">
                <Typography className="details-info">
                  <span className="details-name">Diagonal:</span> {chosenProduct?.productScreenSize} inches
                </Typography>
                
                <Typography className="details-info">
                  <span className="details-name">Built-in memory:</span> {chosenProduct?.productMemory} GB
                </Typography>
                
                <Typography className="details-info">
                  <span className="details-name">Random access memory:</span> {chosenProduct?.productRam} GB
                </Typography>

                <a className="all-info" onClick={handleDetailInfoBox}>All informations</a>
              </Stack>
            </Box>
          </Stack>

          {/* RIGHT PRICES */}
          <Stack className="prices">
            <Box className="price-box">
              Price: <span className="price">{chosenProduct?.productPrice}</span>$
            </Box>
            
            <Box className="compare-box">
              Compare <CompareIcon className="icon"/>
            </Box>

            <Stack className="purchase-box">
              <button 
                className="buy-btn"
                onClick={(e) => {
                  if(chosenProduct){
                    onAdd({
                    _id: chosenProduct?._id,
                    quantity: 1,
                    name: chosenProduct?.productName,
                    price: chosenProduct?.productPrice,
                    image: chosenProduct?.productImages[0]
                  })
                  }
                  
                }}
              >
                Add to Card
              </button>
              <Button 
                className="delivery-btn"
                endIcon={<LocalShippingIcon/>}
                disabled
              >
                Delivery
              </Button>
            </Stack>
          </Stack>
        </Stack>
        
        {/* ALL-INFO */}
        <Stack className="all-info-frame" ref={myDivRef}>
          <Typography className="title">
            All informations
          </Typography>
          
          {/* INFOBOX */}
          <Box className="info-box">
            <Typography className="info-title">Main characteristics</Typography>
            <div className="infos">
              <div className="info-name">Memory</div>
              <div className="pro-info">{chosenProduct?.productMemory} GB</div>
            </div>

            <div className="infos">
              <div className="info-name">Color</div>
              <div className="pro-info">unknown</div>
            </div>
          </Box>

          {/* INFOBOX */}
          <Box className="info-box">
            <Typography className="info-title">Processor</Typography>
            <div className="infos">
              <div className="info-name">CPU Speed</div>
              <div className="pro-info">{chosenProduct?.productCpuSpeed} GHz</div>
            </div>
          </Box>

          {/* INFOBOX */}
          <Box className="info-box">
            <Typography className="info-title">Display</Typography>
            <div className="infos">
              <div className="info-name">Diagonal</div>
              <div className="pro-info">{chosenProduct?.productScreenSize}"</div>
            </div>
            <div className="infos">
              <div className="info-name">Display Resolution</div>
              <div className="pro-info">{chosenProduct?.productResolution}</div>
            </div>
            <div className="infos">
              <div className="info-name">Type of pixels</div>
              <div className="pro-info">OLED</div>
            </div>
            <div className="infos">
              <div className="info-name">460 pixel/dume</div>
              <div className="pro-info">True Tone</div>
            </div>
            <div className="infos">
              <div className="info-name">Contrast</div>
              <div className="pro-info">2000000:1</div>
            </div>
          </Box>

          {/* INFOBOX */}
          <Box className="info-box">
            <Typography className="info-title">Camera</Typography>
            <div className="infos">
              <div className="info-name">Pixels</div>
              <div className="pro-info">{chosenProduct?.productCamera} MP</div>
            </div>
          </Box>

        </Stack>

      </Stack>
        
      </Container>
    </div>
  );
}
