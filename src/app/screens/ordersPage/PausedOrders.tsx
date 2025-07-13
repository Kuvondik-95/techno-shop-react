import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack } from "@mui/material";
// import TabPanel from "@mui/lab/TabPanel";
import TabPanel from '@material-ui/lab/TabPanel';



interface PausedOrdersProps{
  setValue: (input:string) => void;
}

export function PausedOrders(props: PausedOrdersProps){
  const { setValue } = props;
  
  return (
          <TabPanel 
            value={"1"} 
            className={"order-tab-panel"}
          >
            {[1,2].map((order, index) => {
              return(
                <Stack className="paused-orders-frame" key={index}>
                  {[1,2].map((item, itemIndex) => {
                    return (
                      <Stack className="paused-orders" key={itemIndex}>
                        <Stack className="paused-orders-info">
                          <img className={"product-img"} src={"/img/phoneImg/main.png"} alt="" />
                          <Box className="product-name">Samsung</Box>
                        </Stack>
                        
                        <Box className="paused-orders-count"> 
                          $300 &nbsp; x &nbsp; 2 &nbsp; = &nbsp; $600
                        </Box>
                      </Stack>
                    )
                  })
                  }
                  

                  <Stack className={"total-price"}>
                    <Box className={"summ"}>
                      Product price &nbsp; &nbsp; $600 &nbsp; <AddIcon className={"count-icon"}/> &nbsp; Delivery cost &nbsp; &nbsp; $10 &nbsp; &nbsp; = &nbsp; &nbsp; Total &nbsp;&nbsp;&nbsp; $610   
                    </Box>

                    <Stack className={"buttons-box"}>
                      <Button
                        value={""} 
                        className={"cancel-btn"} 
                        >
                        CANCEL
                      </Button>
                      <Button 
                        className={"payment-btn"}
                        >
                        PAYMENT
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              )
            })}

            {[1.2].length === 0 && (
              <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                <img 
                  src={"/icon/noimage-list.svg"} 
                  style={{ width: 300, height: 300 }} 
                />
              </Box>
            )}
            
          </TabPanel> 
          
        )
}