import React from "react";
import { Container, Stack, Box, Typography, Button, Link } from "@mui/material";
import Card from '@mui/joy/Card';
import { CssVarsProvider } from "@mui/joy/styles";

import "../../../css/home.css"


export default function Brands(){
  return <div className="brands-section">
    <Container className="brands-container">
      <Stack className="brands-frame">
        
        <Stack className="brands-titles">
          <Typography className="title" variant="h1">Our Brands</Typography>
          <Link className="view-all" href="#">View all</Link>
        </Stack>

        <Stack className="brands-cards-frame">
          <CssVarsProvider>
            <Card className="card">
              <img 
                className="card-img" 
                style={{width: "40px", height: "50px"}} 
                src="/img/apple.png" alt="" 
              />
            </Card>
            <Card className="card">
              <Typography className="samsung">SAMSUNG</Typography>
            </Card>
            <Card className="card">
              <img 
                className="card-img" 
                style={{width: "57px", height: "40px"}} 
                src="/img/mi.png" alt="" 
              />
            </Card>
            <Card className="card">
              <img 
                className="card-img" 
                style={{width: "123px", height: "30px"}} 
                src="/img/honor.png" alt="" 
              />
            </Card>
            <Card className="card">
              <Typography className="samsung">SONY</Typography>
            </Card>
            <Card className="card">
              <img 
                className="card-img" 
                style={{width: "115px", height: "25px"}} 
                src="/img/tefal.png" alt="" 
              />
            </Card>
          </CssVarsProvider>
        </Stack>
      </Stack>
    </Container>
  </div>
}