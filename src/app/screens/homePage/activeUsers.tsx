import React from "react";
import { Container, Stack, Box, Typography, Button, Link } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Rating from '@mui/material/Rating';
import "../../../css/home.css"
import Card from '@mui/joy/Card';
import { 
  AspectRatio, 
  CardContent, 
  CardOverflow, 
  Chip, 
  Link as LinkJoy, 
  Typography as TypographyJoy,
  Button as ButtonJoy,
  CircularProgress,
  SvgIcon,
  CardActions,
  ButtonGroup
 } from "@mui/joy";
import Avatar from '@mui/joy/Avatar';


export default function ActiveUsers(){
  return <div className="users-section">
    <Container className="users-container">
      <Stack className="users-frame">
        
        <Stack className="users-titles">
          <Typography className="title" variant="h1">
            Active Users 
          </Typography>
          <Link className="view-all" href="#"></Link>
        </Stack>

        <Stack className="users-cards-frame">
            {[1,2,3,4].map(ele => {
              return (
                <div className="card">
                  <div className="card-img">
                    <img 
                      className="user-img"
                      src="/img/default-user.png" 
                      alt="" 
                    />
                  </div>
                  <div className="card-body">
                    <Rating defaultValue={5} readOnly></Rating>
                  </div>
                  <div className="card-content">
                    <h4>Harry</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloribus, sed molestiae nobis eos architecto voluptate. Pariatur commodi ab veritatis laborum
                    </p>
                  </div>
                  
                </div>
              )
            })}           
        </Stack>
      </Stack>
    </Container>
  </div>
}