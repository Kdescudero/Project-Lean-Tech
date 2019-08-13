import React from 'react'
import FilterAll from "./FilterAll";
import { Grid } from '@material-ui/core';
import CardDescription from "./CardDescription";

class MainContainer extends React.Component{
   render() {

      const descriptions = [
         {day : "Monday", hour : "10™2:28", departure : "Houston, TX, 33619", destination : "Atlanta, GA, 30123", pressure : "250.00", quantity : "1"},
         {day : "Monday", hour : "10™2:28", departure : "Houston, TX, 33619", destination : "Atlanta, GA, 30123", pressure : "250.00", quantity : "23"},
         {day : "Monday", hour : "10™2:28", departure : "Houston, TX, 33619", destination : "Atlanta, GA, 30123", pressure : "250.00", quantity : "12"},
         {day : "Monday", hour : "10™2:28", departure : "Houston, TX, 33619", destination : "Atlanta, GA, 30123", pressure : "250.00", quantity : "8"},
      ];

      return(
         <div style={{ padding : 12, marginTop : 20 }}>
            <Grid container spacing={0}>

               <Grid item xs={12}>
                  <FilterAll />
               </Grid>

               <Grid item xs={12}>
                  <CardDescription descriptions = {descriptions} />
               </Grid>

            </Grid>
         </div>
      )
   }
}

export default MainContainer