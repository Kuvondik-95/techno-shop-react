// import TabContext  from "@mui/lab/TabContext";
import TabContext from '@material-ui/lab/TabContext';
import { Box, Button, Container, Grid, Input, Stack, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { PausedOrders } from "./PausedOrders";
import { ProcessOrders } from "./ProcessOrders";
import { FinishedOrders } from "./FinishedOrders";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import "../../../css/orders.css"
import { Order, OrderInquiry } from '../../../libs/types/order';
import { setPausedOrders, setProcessOrders, setFinishedOrders } from './slice';
import { useDispatch } from "react-redux";
import OrderService from "../../services/Order.Service";
import { OrderStatus } from "../../../libs/enums/order.enum";
import { useGlobals } from "../../hooks/useGlobals";
import { Navigate, useNavigate } from 'react-router-dom';
import { serverApi } from '../../../libs/config';
import { MemberType } from '../../../libs/enums/member.enum';


/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export default function OrdersPage() {
  const {
    setPausedOrders, 
    setProcessOrders, 
    setFinishedOrders
  } = actionDispatch(useDispatch());
  const { orderBuilder, authMember } = useGlobals();
  const navigate = useNavigate();
  const [value, setValue] = useState("1");
  const [orderInquriy, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE
  });

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

   useEffect(()  => {
    //ComponentDidMount
    const order = new OrderService();

    order.getMyOrders({...orderInquriy, orderStatus: OrderStatus.PAUSE})
    .then((data) => setPausedOrders(data))
    .catch((err) => console.log(err));
    
    order.getMyOrders({...orderInquriy, orderStatus: OrderStatus.PROCESS})
    .then((data) => setProcessOrders(data))
    .catch((err) => console.log(err));

    order.getMyOrders({...orderInquriy, orderStatus: OrderStatus.FINISH})
    .then((data) => setFinishedOrders(data))
    .catch((err) => console.log(err));

  }, [orderInquriy, orderBuilder]);

  if(!authMember) {
    return <Navigate to="/" replace />;
  }
  return (
      <div className={"order-page"}>
        <Container className={"order-container"}>  
          <Stack className={"order-left"}>
            <TabContext value={value}>
              <Box className={"order-nav-frame"}>
                <Box sx={{borderBottom: 1, borderColor: "divider"}}>  
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    className={"table-list"}
                  >
                      <Tab label="PAUSED ORDERS" value={"1"}/>
                      <Tab label="PROCESS ORDERS" value={"2"}/>
                      <Tab label="FINISHED ORDERS" value={"3"}/>
                  </Tabs>
                </Box>
              </Box>
              <Stack className={"order-main-content"}>
                <PausedOrders setValue={setValue} />
                <ProcessOrders setValue={setValue} />
                <FinishedOrders />
              </Stack>
            </TabContext>
          </Stack>

          <Stack className={"order-right"}>

            {/* USER INFO BOX */}
            <Box className={"order-info-box"}>
              <Box className={"member-box"}>
                <div className={"order-user-img"}>
                  
                  <img 
                    src={authMember?.memberImage 
                          ? `${serverApi}/${authMember?.memberImage} `
                          : "/icon/default-user.svg"
                          } 
                    className={"order-user-avatar"}
                  />
                  
                  <div className={"order-user-icon-box"}>
                    <img
                        className="order-user-prof-img" 
                        src={
                          authMember?.memberType === MemberType.OWNER 
                            ? "/icon/ownerBadge.svg"
                            : "/icon/avatar.svg" }  
                    />
                  </div>
                </div>
                <span className={"order-user-name"}>{authMember?.memberNick}</span>
                <span className={"order-user-prof"}>{authMember?.memberType}</span>
              </Box>
              <Box className={"liner"}></Box>
              <Box className={"order-user-address"}>
                <div style={{display: "flex"}}>
                  <LocationOnIcon sx={{width:"24px", height:"24px"}}/>
                  <Typography className={"order-user-address-text"}>
                    {authMember?.memberAddress 
                      ? authMember.memberAddress 
                      : "no address information"}
                  </Typography>
                </div>
              </Box>
            </Box>

            {/* CARD INFO BOX */}      
            <Stack className={"order-user-card-box"}>
              <Box>
                <Input 
                  className="order-right-inputs" 
                  autoFocus={false} 
                  disableUnderline={true} 
                  placeholder="Card number: 1234 5678 0000 0000" 
                />
              </Box>
              <Grid container spacing={2}>
                  <Grid size={6}>
                    <Input 
                      className="order-right-inputs" 
                      autoFocus={false} 
                      disableUnderline={true}
                      placeholder="07/24" 
                    />
                  </Grid>
                  
                  <Grid size={6}>
                    <Input 
                      className="order-right-inputs" 
                      autoFocus={false} 
                      disableUnderline={true}
                      placeholder="CVV: 010" 
                    />
                  </Grid>
              </Grid>

              <Box>
                <Input 
                  className="order-right-inputs" 
                  autoFocus={false} 
                  disableUnderline={true}
                  placeholder="Justin Robertson" 
                />
              </Box>

              <Grid className={"card-icons-frame"} container spacing={2}>
                  <Grid size={2}></Grid>
                  <Grid size={2}>
                    <img src="/icon/western-card.svg" alt="" />
                  </Grid>
                  
                  <Grid size={2}>
                    <img src="/icon/master-card.svg" alt="" />
                  </Grid>
                  
                  <Grid size={2}>
                    <img src="/icon/paypal-card.svg" alt="" />
                  </Grid>
                  
                  <Grid size={2}>
                    <img src="/icon/visa-card.svg" alt="" />
                  </Grid>
                  <Grid size={2}></Grid>
              </Grid>
            </Stack>


          </Stack>
        </Container>
      </div>
  );
}