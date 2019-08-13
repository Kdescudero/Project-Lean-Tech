import React from "react";
import {Fab, Icon, withStyles} from "@material-ui/core";

const styles =()=>({
   root : {
      position : "fixed",
      bottom   : 20,
      right    : 20,
   }
});

const ButtonAdd=({ classes })=>{
   return(
      <Fab style={{ backgroundColor : "#EF8632", color : "#FFF" }} className={classes.root} >
         <Icon>add</Icon>
      </Fab>
   )
};

export default withStyles(styles)(ButtonAdd);