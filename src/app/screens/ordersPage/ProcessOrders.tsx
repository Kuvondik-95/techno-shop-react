import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TabPanel from '@material-ui/lab/TabPanel';

interface ProcessOrdersProps{
  setValue: (input:string) => void;
}
export function ProcessOrders( props: ProcessOrdersProps){
  const { setValue } = props;
  return (
          <TabPanel value={"2"} className={"order-tab-panel"}>
            {[1].map((order, index) => {
              return(
                <Stack className="process-orders-frame" key={index}>
                  {[1,2].map((item) => {
                    return (
                      <Stack className="process-orders">
                        <Stack className="process-orders-info">
                          <img className={"product-img"} src={"/img/phoneImg/main.png"} alt="" />
                          <Box className="product-name">Apple</Box>
                        </Stack>
                        
                        <Box className="process-orders-count"> 
                          $400 &nbsp; x &nbsp; 2 &nbsp; = &nbsp; $800
                        </Box>
                      </Stack>
                    )
                  })}
                  

                  <Stack className={"total-price"}>
                    <Box className={"summ"}>
                      Product price &nbsp; &nbsp; $800 &nbsp; <AddIcon className={"count-icon"}/> &nbsp; 
                      Delivery cost &nbsp; &nbsp; $10 &nbsp; &nbsp; = &nbsp; &nbsp; 
                      Total &nbsp;&nbsp;&nbsp;   
                    </Box>

                    <Stack className={"buttons-box"}>
                      <Typography className={"data-compl"}>
                        hour
                      </Typography>
                      <Button 
                        className={"payment-btn"}
                        >
                        VERIFY TO FULLFILL
                      </Button>
                    </Stack>
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