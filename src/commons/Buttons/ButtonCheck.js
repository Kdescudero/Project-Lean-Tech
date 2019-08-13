import React from "react";
import {Icon, IconButton} from "@material-ui/core";

const ButtonCheck=()=>{
   const [ check, setCheck ] = React.useState(false);
   return(
      <IconButton onClick={()=>setCheck(!check)}>
         <Icon style={{ color : "#EF8632", fontSize : 45 }}>
            {!check ? "radio_button_unchecked" : "check_circle"}
         </Icon>
      </IconButton>
   )
};

export default ButtonCheck