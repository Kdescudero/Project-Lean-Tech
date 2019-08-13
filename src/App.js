import React from 'react';
import MainContainer from "./Components/MainContainer";
import HeaderNavigation from "./Components/Header";
import DrawerNavigator from "./Components/DrawerNavigator";
import { Grid } from '@material-ui/core'

const App=()=> {
   return (
      <div style={{ flexGrow : 1, padding : 12 }}>
         <Grid container spacing={0} style={{ overflow : 'hidden' }}>

            <Grid item xs={12} style={{ display : 'flex', justifyContent : 'flex-end' }}>
               <HeaderNavigation />
            </Grid>

            <Grid container spacing={4}>
               <Grid item xs={2}>
                  <DrawerNavigator />
               </Grid>
               <Grid item xs={10}>
                  <MainContainer />
               </Grid>
            </Grid>

         </Grid>
      </div>
   );
};

export default App;
