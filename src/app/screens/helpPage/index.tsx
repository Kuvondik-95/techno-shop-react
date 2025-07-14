import React from "react";
import { Box, Container, Stack, Tabs } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import "../../../css/help.css";
import { faq } from "../../../libs/data/faq";
import { terms } from "../../../libs/data/terms";
import HomeIcon from '@mui/icons-material/Home';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';



export default function HelpPage() {
  const [value, setValue] = React.useState("1");

  /** HANDLERS **/
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"help-page"}>
      <Typography className="addr-title">Our Address</Typography>
      <Container className={"our-address-container"}>
        <Box className="address-box">
          <Typography>
            <HomeIcon className="icon"/><b>Ulsan, Mugodong, Samhoe, St.12</b>
          </Typography>
          <Typography>
            <QueryBuilderIcon className="icon"/>  
            <b>Mn.-Fr.:</b> from <b>10:00</b>am to <b>21:00</b>pm
          </Typography>
          <Typography>
            <QueryBuilderIcon className="icon"/>  
            <b>Saturday:</b> from <b>10:00</b>am to <b>14:00</b>pm
          </Typography>
          <Typography>
            <PhoneAndroidIcon className="icon"/>  
            010-7217-4114
          </Typography>
          <Typography>
            <LocalPhoneIcon className="icon"/>  
            052-7217-4114
          </Typography>
          <Typography>
            <EmailIcon className="icon"/>  
            <b>Email:</b> techno-shop@gmail.com
          </Typography>
        </Box>
        <Box className="location-box">
          <iframe 
            className="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626.1733686618442!2d129.26268564359393!3d35.54933445045533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35662d71568c3691%3A0x7914b89c9b7cdda4!2sDunkin&#39;!5e0!3m2!1sen!2skr!4v1752507945897!5m2!1sen!2skr"  
            height="450" 
            style={{border:0}} loading="lazy"
          >
          </iframe>
        </Box>
      </Container>
      
      <Typography className="help-title">Help</Typography>
      <Container className={"help-container"}>
        <TabContext value={value}>
          <Box className={"help-menu"}>
            <Box className={"tab-box"} sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                className={"table-list"}
                value={value}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="TERMS" value={"1"} />
                <Tab label="FAQ" value={"2"} />
                <Tab label="CONTACT" value={"3"} />
              </Tabs>
            </Box>
          </Box>
          <Stack>
            <Stack className={"help-main-content"}>
              <TabPanel value={"1"}>
                <Stack className={"rules-box"}>
                  <Box className={"rules-frame"}>
                    {terms.map((value, number) => {
                      return <p key={number}>{value}</p>;
                    })}
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel value={"2"}>
                <Stack className={"accordion-menu"}>
                  {faq.map((value, number) => {
                    return (
                      <Accordion key={number} className="accardion">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{value.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{value.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value={"3"}>
                <Stack className={"admin-letter-box"}>
                  <Stack className={"admin-letter-container"}>
                    <Box className={"admin-letter-frame"}>
                      <span>Contact us!</span>
                      <p>Fill out below form to send a message!</p>
                    </Box>
                    <form
                      action={"#"}
                      method={"POST"}
                      className={"admin-letter-frame"}
                    >
                      <div className={"admin-input-box"}>
                        <label>Your name</label>
                        <input
                          type={"text"}
                          name={"memberNick"}
                          placeholder={"Type your name here"}
                        />
                      </div>
                      <div className={"admin-input-box"}>
                        <label>Your email</label>
                        <input
                          type={"text"}
                          name={"memberEmail"}
                          placeholder={"Type your email here"}
                        />
                      </div>
                      <div className={"admin-input-box"}>
                        <label>Message</label>
                        <textarea
                          name={"memberMsg"}
                          placeholder={"Your message"}
                        ></textarea>
                      </div>
                      <Box
                        display={"flex"}
                        justifyContent={"flex-end"}
                        sx={{ mt: "30px" }}
                      >
                        <Button className="send-btn" type={"submit"} variant="contained">
                          Send
                        </Button>
                      </Box>
                    </form>
                  </Stack>
                </Stack>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
