import React from 'react';
import Drawer from "./Drawer";

class DrawerNavigator extends React.Component{
   render(){

      const iconsSwitch = [
         {icon : "wifi_tethering"    },
         {icon : "insert_invitation" },
         {icon : "favorite_border"   },
      ];

      return(
         <Drawer iconsSwitch  =  {iconsSwitch} />
      )
   }
}

export default DrawerNavigator;