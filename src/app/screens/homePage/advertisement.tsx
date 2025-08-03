import React from "react";
import { Container, Stack, Box, Typography, Button, Link } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "../../../css/home.css"


export default function Advertisement(){
  return <div className="adds-section">
    <Container className="adds-container">
      <Stack className="adds-frame">
        <Stack className="adds-left">
          <Stack className="adds-left-title">
            <Typography className="title">Cashback for any purchase!</Typography>
            <ArrowCircleRightIcon className="arrow-icon"/>
          </Stack>
          <Stack className="adds-left-icons">
            <div className="adds-polygon-1">
              <h1>15%</h1>
            </div>
            <div className="adds-polygon-2">
              <h1>10%</h1>
            </div>
            <div className="adds-polygon-3">
              <h1>5%</h1>
            </div>
          </Stack>
        </Stack>

        <Stack className="adds-right">
         <Stack className="adds-right-title">
            <Typography className="title">
              Express delivery <br /> 
              for <span className="hour">2 HOURS</span>
            </Typography>
            <ArrowCircleRightIcon className="arrow-icon"/>
          </Stack>
          
          <Stack className="adds-right-icons">
            <img className="delivery-icon" src="/icon/fastTruck.png" alt="Fast Truck Image" />
            <div className="dlv-polygon-3"></div>
          </Stack>
        </Stack>

      </Stack>
    </Container>
  </div>
}