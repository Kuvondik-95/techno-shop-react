import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TabPanel from '@material-ui/lab/TabPanel';

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFinishedOrders} from "./selector";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";
import { Order, OrderItem } from "../../../libs/types/order";

/** REDUX SLICE & SELECTOR **/
const finishedOrderRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({ finishedOrders })
);

export function FinishedOrders(){
  const { finishedOrders } = useSelector(finishedOrderRetriever); 

  return (
          <TabPanel value={"3"} className={"order-tab-panel"}>
            {finishedOrders.map((order: Order) => {
              return(
                <Stack className="finished-orders-frame" key={order._id}>
                  {order?.orderItems?.map((item: OrderItem) => {
                    const product: Product = order.productData.filter(
                      (ele: Product) => {
                        return item.productId === ele._id;
                    })[0];
                    const imagePath = `${serverApi}/${product.productImages[0]}`;
                    return (
                      <Stack className="finished-orders" key={item._id}>
                        <Stack className="finished-orders-info">
                          <img className={"product-img"} src={imagePath} alt="" />
                          <Box className="product-name">{product.productName}</Box>
                        </Stack>
                        
                        <Box className="finished-orders-count"> 
                          ${item.itemPrice} &nbsp; x &nbsp; {item.itemQuantity} &nbsp; = &nbsp; ${item.itemQuantity * item.itemPrice}
                        </Box>
                      </Stack>
                    )
                  })}
                  

                  <Stack className={"total-price"}>
                    <Box className={"summ"}>
                      Product price &nbsp; &nbsp; ${order.orderTotal - order.orderDelivery} &nbsp; <AddIcon className={"count-icon"}/> &nbsp; Delivery cost &nbsp; &nbsp; ${order.orderDelivery} &nbsp; &nbsp; = &nbsp; &nbsp; Total &nbsp;&nbsp;&nbsp; ${order.orderTotal} 
                    </Box>
                  </Stack>
                </Stack>
              )
            })}

            {!finishedOrders || (finishedOrders.length === 0) && (
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