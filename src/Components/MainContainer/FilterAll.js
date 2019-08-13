import React from 'react'
import { withStyles, Icon } from '@material-ui/core'
import ButtonCheck from "../../commons/Buttons/ButtonCheck";

const styles = () =>({
   root : {
      justifyContent : 'space-between',
      display        : 'flex',
      padding        : 23,
   },
   container_input : {
      backgroundColor   : '#FFF',
      justifyContent    : 'center',
      borderRadius      : 4,
      alignItems        : 'center',
      display           : 'flex',
      padding           : 12,
      height            : '48%',
      width             : '45%'
   }
});

const FilterAll=({ classes })=>{

   return(
      <div className={classes.root}>
         <ButtonCheck />
         <div className={classes.container_input}>
            <Icon>search</Icon>
            <input
               placeholder =  {"Search"}
               style       =  {{ outline: 0,  border : 0, width : '15%' }}
               type        =  "text"
            />
         </div>
      </div>
   )
};

export default withStyles(styles)(FilterAll);