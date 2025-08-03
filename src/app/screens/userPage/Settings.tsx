import { Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useGlobals } from "../../hooks/useGlobals";
import { MemberUpdateInput } from "../../../libs/types/member";
import { T } from "../../../libs/types/common";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../libs/sweetAlert";
import { Messages, serverApi } from "../../../libs/config";
import MemberService from "../../services/Member.service";

export function Settings() {
  const { authMember, setAuthMember} = useGlobals();
  const [ memberImage, setMemberImage] = useState<string>(
    authMember?.memberImage 
    ? `${serverApi}/${authMember.memberImage}`
    : "/icon/default-user.svg"
  );
  const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>({
    memberNick: authMember?.memberNick,
    memberPhone: authMember?.memberPhone,
    memberAddress: authMember?.memberAddress,
    memberDesc: authMember?.memberDesc,
    memberImage: authMember?.memberImage,
  })
  
  /** HANDLERS **/
  const memberNickHandler = (e: T) =>{
    memberUpdateInput.memberNick = e.target.value;
    setMemberUpdateInput({...memberUpdateInput});
  }
  const memberPhoneHandler = (e: T) =>{
    memberUpdateInput.memberPhone = e.target.value;
    setMemberUpdateInput({...memberUpdateInput});
  }
  const memberAddressHandler = (e: T) =>{
    memberUpdateInput.memberAddress = e.target.value;
    setMemberUpdateInput({...memberUpdateInput});
  }
  const memberDescriptionHandler = (e: T) =>{
    memberUpdateInput.memberDesc = e.target.value;
    setMemberUpdateInput({...memberUpdateInput});
  }
  const memberImageHandler = (e: T) =>{
    memberUpdateInput.memberImage = e.target.value;
    setMemberUpdateInput({...memberUpdateInput});
  }
  const handleSubmitButton = async() => {
    try{
      if(!authMember) throw new Error(Messages.error2)
      if(
        memberUpdateInput.memberNick === "" || 
        memberUpdateInput.memberPhone === "" ||
        memberUpdateInput.memberAddress === "" || 
        memberUpdateInput.memberDesc === ""
      ){
        throw new Error(Messages.error3);
      }

      const member = new MemberService();
      const result = await member.updateMember(memberUpdateInput);
      setAuthMember(result);

      await sweetTopSmallSuccessAlert("Modified successfully!", 1500);
    }catch(err){
      console.log(err);
      sweetErrorHandling(err).then();
    }
  }

  const handleImageViewer = (e: T) => {
    const file = e.target.files[0];
    const fileType = file.type,
          validateImageTypes = ["image/jpg", "image/png", "image/jpeg"];
    
    if(!validateImageTypes.includes(fileType)){
      sweetErrorHandling(Messages.error5);
    }else{
      if(file){
        memberUpdateInput.memberImage = file;
        setMemberUpdateInput({...memberUpdateInput});
        setMemberImage(URL.createObjectURL(file));
      }
    } 

  }


  return (
    <Box className={"settings"}>
      <Box className={"member-media-frame"}>
        <img src={memberImage} className={"mb-image"} />
        <div className={"media-change-box"}>
          <span>Upload image</span>
          <p>JPG, JPEG, PNG formats only!</p>
          <div className={"up-del-box"}>
            <Button component="label" onChange={handleImageViewer}>
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
            value={memberUpdateInput.memberNick}
            onChange={memberNickHandler}
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"short-input"}>
          <label className={"spec-label"}>Phone</label>
          <input
            className={"spec-input mb-phone"}
            type="text"
            placeholder={"phone"}
            value={memberUpdateInput.memberPhone}
            name="memberPhone"
            onChange={memberPhoneHandler}
          />
        </div>
        <div className={"short-input"}>
          <label className={"spec-label"}>Address</label>
          <input
            className={"spec-input  mb-address"}
            type="text"
            placeholder={"address"}
            value={memberUpdateInput.memberAddress}
            name="memberAddress"
            onChange={memberAddressHandler}
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Description</label>
          <textarea
            className={"spec-textarea mb-description"}
            placeholder={"no description"}
            value={memberUpdateInput.memberDesc}
            name="memberDesc"
            onChange={memberDescriptionHandler}
          />
        </div>
      </Box>
      <Box className={"save-box"}>
        <Button 
          className="save-btn" 
          variant={"contained"} 
          onClick={handleSubmitButton}
      >
        Save
      </Button>
      </Box>
    </Box>
  );
}
