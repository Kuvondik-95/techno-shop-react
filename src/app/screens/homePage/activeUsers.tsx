import React from "react";
import { Container, Stack, Box, Typography, Button, Link } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Rating from '@mui/material/Rating';
import "../../../css/home.css"
import Card from '@mui/joy/Card';
import Avatar from '@mui/joy/Avatar';

import { retrieveTopUsers } from "./selector";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";
import { Member } from "../../../libs/types/member";

/** REDUX SLICE & SELECTOR **/
const topUsersRetriever = createSelector(
  retrieveTopUsers,
  (topUsers) => ({ topUsers })
);

const feedbacks = [
  "The product quality is consistently outstanding, exceeding my expectations every time",
  "I was completely impressed with their professionalism and customer service",
  "Pricing is fair and transparent - definitely value for money. Their staff is not only friendly but also highly skilled",
  "Efficiency and punctuality are hallmarks of their service. I recommend them to anyone tho is looking for some great phones!"
]


export default function ActiveUsers(){
  const { topUsers } = useSelector(topUsersRetriever);
  console.log("topUsers", topUsers);

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
            {topUsers.length !== 0 ? (topUsers.map((member:Member, index) => {
              const imagePath = `${serverApi}/${member.memberImage}`
              return (
                <div className="card" key={member._id}>
                  <div className="card-img">
                    <img 
                      className="user-img"
                      src={imagePath} 
                      alt="" 
                    />
                  </div>
                  <div className="card-body">
                    <Rating defaultValue={5} readOnly></Rating>
                  </div>
                  <div className="card-content">
                    <h4>{member.memberNick}</h4>
                    <p>
                      “{feedbacks[index]}”
                    </p>
                  </div>
                  
                </div>
              )})): (
                  <Box className="no-data">Users are not available!</Box>
              )
            }           
        </Stack>
      </Stack>
    </Container>
  </div>
}