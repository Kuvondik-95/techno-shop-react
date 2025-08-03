import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Settings } from "./Settings";
import "../../../css/userPage.css";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../libs/config";
import { MemberType } from "../../../libs/enums/member.enum";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export default function UserPage() {
  const { authMember } = useGlobals();
  const navigate = useNavigate();
  
  if(!authMember) {
     return <Navigate to="/" replace />;
  }
  return (
    <div className={"user-page"}>
      <Container>
        <Stack className={"my-page-frame"}>
          <Stack className={"my-page-left"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box className={"menu-name"}>Modify Member Details</Box>
              <Box className={"menu-content"}>
                <Settings />
              </Box>
            </Box>
          </Stack>

          <Stack className={"my-page-right"}>
            <Box className={"order-info-box"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
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
                <span className={"order-user-prof"}>
                  {
                    (authMember && authMember.memberAddress) 
                      ? authMember.memberAddress 
                      : "no address information" 
                  }
                </span>
              </Box>
              <Box className={"user-media-box"}>
                <FacebookIcon />
                <InstagramIcon />
                <TelegramIcon />
                <YouTubeIcon />
              </Box>
              <p className={"user-desc"}>
                {
                 (authMember && authMember.memberAddress) 
                    ? authMember.memberDesc 
                    : "no description" 
                }
              </p>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
