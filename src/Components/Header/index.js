import React from 'react'
import Navigation from "./Navigation";
import DrawerNavigator from "./DrawerNavigator";
import { Grid } from '@material-ui/core'

class NavBar extends React.Component{
   render(){

      return(
         <div>
            {/*<Grid container spacing={0}>*/}
            {/*   <Grid item xs={2}>*/}
            {/*      <DrawerNavigator iconsSwitch = {iconsSwitch} />*/}
            {/*   </Grid>*/}

            {/*   <Grid item xs={10}>*/}
            {/*      <Navigation options  =  {options} />*/}
            {/*   </Grid>*/}
            {/*</Grid>*/}
         </div>
      )
   }
}

export default NavBar;