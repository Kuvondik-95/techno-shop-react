import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TabPanel from '@material-ui/lab/TabPanel';

import moment from "moment";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "./selector";
import { Product } from "../../../libs/types/product";
import { Messages, serverApi } from "../../../libs/config";
import { Order, OrderItem, OrderUpdateInput } from "../../../libs/types/order";
import { useGlobals } from "../../hooks/useGlobals";
import { OrderStatus } from "../../../libs/enums/order.enum";
import OrderService from "../../services/Order.Service";
import { sweetErrorHandling } from "../../../libs/sweetAlert";
import { T } from "../../../libs/types/common";

/** REDUX SLICE & SELECTOR **/
const processOrderRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders })
);


interface ProcessOrdersProps{
  setValue: (input:string) => void;
}
export function ProcessOrders( props: ProcessOrdersProps){
  const { setValue } = props;
  const {authMember, setOrderBuilder} = useGlobals();
  const { processOrders } = useSelector(processOrderRetriever);

  /** HANDLERS **/
  const finishOrderHandler = async (e: T) => {
    try{
      if(!authMember) throw new Error(Messages.error2);
      // PAYMENT PROCESS 

      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.FINISH
      };

      const confirmation = window.confirm("Have you received your order?")
      if(confirmation){
        const order = new OrderService();
        await order.updateOrder(input);
        
        // moving from PAUSED => PROCESS ORDER TAB
        setValue("3");
        // ORDER REBUILD
        setOrderBuilder(new Date());
      }
    }catch(err){
      console.log(err)
      sweetErrorHandling(err).then();
    }
  }

  return (
          <TabPanel value={"2"} className={"order-tab-panel"}>
            {processOrders.map((order:Order) => {
              return(
                <Stack className="process-orders-frame" key={order._id}>
                  {order?.orderItems?.map((item) => {
                    const product: Product = order.productData.filter(
                      (ele: Product) => {
                        return item.productId === ele._id;
                    })[0];
                    const imagePath = `${serverApi}/${product.productImages[0]}`;
                    return (
                      <Stack className="process-orders">
                        <Stack className="process-orders-info">
                          <img className={"product-img"} src={imagePath} alt="" />
                          <Box className="product-name">{product.productName}</Box>
                        </Stack>
                        
                        <Box className="process-orders-count"> 
                          ${item.itemPrice} &nbsp; x &nbsp; {item.itemQuantity} &nbsp; = &nbsp; ${item.itemQuantity * item.itemPrice}
                        </Box>
                      </Stack>
                    )
                  })}
                  

                  <Stack className={"total-price"}>
                    <Box className={"summ"}>
                      Product price &nbsp; &nbsp; ${order.orderTotal - order.orderDelivery} &nbsp; <AddIcon className={"count-icon"}/> &nbsp; Delivery cost &nbsp; &nbsp; ${order.orderDelivery} &nbsp; &nbsp; = &nbsp; &nbsp; Total &nbsp;&nbsp;&nbsp; ${order.orderTotal}   
                    </Box>

                    <Stack className={"buttons-box"}>
                      <Typography className={"data-compl"}>
                        {moment().format("YY-MM-DD HH:mm")}
                      </Typography>
                      <Button 
                        className={"payment-btn"}
                        onClick={finishOrderHandler}
                        >
                        VERIFY TO FULLFILL
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              )
            })}
                
            {!processOrders || (processOrders.length === 0) && (
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