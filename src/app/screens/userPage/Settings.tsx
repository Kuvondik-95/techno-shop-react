import { Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";
import { useState } from "react";

export function Settings() {

  return (
    <Box className={"settings"}>
      <Box className={"member-media-frame"}>
        <img src={"/img/default-user.png"} className={"mb-image"} />
        <div className={"media-change-box"}>
          <span>Upload image</span>
          <p>JPG, JPEG, PNG formats only!</p>
          <div className={"up-del-box"}>
            <Button component="label">
              <CloudDownloadIcon sx={{color: "black"}}/>
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Username</label>
          <input
            className={"spec-input mb-nick"}
            type="text"
            placeholder={"username"}
            name="memberNick"
            value={"Khalid"}
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"short-input"}>
          <label className={"spec-label"}>Phone</label>
          <input
            className={"spec-input mb-phone"}
            type="text"
            placeholder={"no phone"}
            name="memberPhone"
          />
        </div>
        <div className={"short-input"}>
          <label className={"spec-label"}>Address</label>
          <input
            className={"spec-input  mb-address"}
            type="text"
            placeholder={"no address"}
            name="memberAddress"
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Description</label>
          <textarea
            className={"spec-textarea mb-description"}
            placeholder={"no description"}
            name="memberDesc"
          />
        </div>
      </Box>
      <Box className={"save-box"}>
        <Button className="save-btn" variant={"contained"}>Save</Button>
      </Box>
    </Box>
  );
}
