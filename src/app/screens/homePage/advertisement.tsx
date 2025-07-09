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
          <Box className="adds-left-icons">

          </Box>
        </Stack>

        <Stack className="adds-right">
         <Stack className="adds-right-title">
            <Typography className="title">
              Express delivery <br /> 
              for <span className="hour">2 HOURS</span>
            </Typography>
            <ArrowCircleRightIcon className="arrow-icon"/>
          </Stack>
          
          <Box className="adds-right-icons">

          </Box>
        </Stack>

      </Stack>
    </Container>
  </div>
}