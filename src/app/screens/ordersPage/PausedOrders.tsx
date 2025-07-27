import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack } from "@mui/material";
// import TabPanel from "@mui/lab/TabPanel";
import TabPanel from '@material-ui/lab/TabPanel';


import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { Product } from "../../../libs/types/product";
import { Messages, serverApi } from "../../../libs/config";
import { Order, OrderItem, OrderUpdateInput } from "../../../libs/types/order";
import { T } from "../../../libs/types/common";
import { sweetErrorHandling } from "../../../libs/sweetAlert";
import { OrderStatus } from "../../../libs/enums/order.enum";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/Order.Service";

/** REDUX SLICE & SELECTOR **/
const pausedOrderRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

interface PausedOrdersProps{
  setValue: (input:string) => void;
}

export function PausedOrders(props: PausedOrdersProps){
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { pausedOrders } = useSelector(pausedOrderRetriever);
  

  /** HANDLERS **/
  const deleteOrderHandler = async (e: T) => {
    try{
      if(!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.DELETE
      };

      const confirmation = window.confirm("Do you want to delete order?")
      if(confirmation){
        const order = new OrderService();
        await order.updateOrder(input);
        setOrderBuilder(new Date());
        // ORDER REBUILD

      }
    }catch(err){
      console.log(err)
      sweetErrorHandling(err).then();
    }
  }

  const processOrderHandler = async (e: T) => {
    try{
      if(!authMember) throw new Error(Messages.error2);
      // PAYMENT PROCESS 

      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.PROCESS
      };

      const confirmation = window.confirm("Do you want to proceed with payment?")
      if(confirmation){
        const order = new OrderService();
        await order.updateOrder(input);
        
        // moving from PAUSED => PROCESS ORDER TAB
        setValue("2");
        // ORDER REBUILD
        setOrderBuilder(new Date());

      }
    }catch(err){
      console.log(err)
      sweetErrorHandling(err).then();
    }
  }
  return (
          <TabPanel 
            value={"1"} 
            className={"order-tab-panel"}
          >
            {pausedOrders.map((order: Order, index) => {
              return(
                <Stack className="paused-orders-frame" key={order._id}>
                  {order?.orderItems?.map((item:OrderItem, itemIndex) => {
                    const product: Product = order.productData.filter(
                      (ele: Product) => {
                        return item.productId === ele._id;
                    })[0];
                    const imagePath = `${serverApi}/${product.productImages[0]}`;
                    return (
                      <Stack className="paused-orders" key={item._id}>
                        <Stack className="paused-orders-info">
                          <img className={"product-img"} src={imagePath} alt="" />
                          <Box className="product-name">{product.productName}</Box>
                        </Stack>
                        
                        <Box className="paused-orders-count"> 
                          ${item.itemPrice} &nbsp; x &nbsp; {item.itemQuantity} &nbsp; = &nbsp; ${item.itemQuantity * item.itemPrice}
                        </Box>
                      </Stack>
                    )
                  })
                  }
                  

                  <Stack className={"total-price"}>
                    <Box className={"summ"}>
                      Product price &nbsp; &nbsp; ${order.orderTotal - order.orderDelivery} &nbsp; <AddIcon className={"count-icon"}/> &nbsp; Delivery cost &nbsp; &nbsp; ${order.orderDelivery} &nbsp; &nbsp; = &nbsp; &nbsp; Total &nbsp;&nbsp;&nbsp; ${order.orderTotal}   
                    </Box>

                    <Stack className={"buttons-box"}>
                      <Button
                        value={order._id} 
                        className={"cancel-btn"} 
                        onClick={(e) => deleteOrderHandler(e)}
                      >
                        CANCEL
                      </Button>

                      <Button 
                        value={order._id} 
                        className={"payment-btn"}
                        onClick={processOrderHandler}
                      >
                        PAYMENT
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              )
            })}

            {!pausedOrders || (pausedOrders.length === 0) && (
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