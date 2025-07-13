import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TabPanel from '@material-ui/lab/TabPanel';


export function FinishedOrders(){ 

  return (
          <TabPanel value={"3"} className={"order-tab-panel"}>
            {[1,2].map((order, index) => {
              return(
                <Stack className="finished-orders-frame" key={index}>
                  {[1].map((item, itemIndex) => {
                    return (
                      <Stack className="finished-orders" key={itemIndex}>
                        <Stack className="finished-orders-info">
                          <img className={"product-img"} src={"/img/phoneImg/main.png"} alt="" />
                          <Box className="product-name">Samsung</Box>
                        </Stack>
                        
                        <Box className="finished-orders-count"> 
                          $600 &nbsp; x &nbsp; 2 &nbsp; = &nbsp; $1200
                        </Box>
                      </Stack>
                    )
                  })}
                  

                  <Stack className={"total-price"}>
                    <Box className={"summ"}>
                      Product price &nbsp; &nbsp; $1200 &nbsp; <AddIcon className={"count-icon"}/> &nbsp; 
                      Delivery cost &nbsp; &nbsp; $5 &nbsp; &nbsp; = &nbsp; &nbsp; 
                      Total &nbsp;&nbsp;&nbsp; $1205
                    </Box>
                  </Stack>
                </Stack>
              )
            })}

            {[1,2].length === 0 && (
              <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                <img 
                  src={"/icons/noimage-list.svg"} 
                  style={{ width: 300, height: 300 }} 
                />
              </Box>
            )}
                
          </TabPanel> 
  )
}