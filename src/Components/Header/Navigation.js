import React from 'react'
import { withStyles, Icon, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';

const styles = () => ({
   root : {
      backgroundColor   : '#FFFFFF',
      justifyContent    : 'space-between',
      marginLeft        : 25,
      display           : 'flex',
      width             : '84%'
   },
   content_button : {
      flexDirection  : "column",
      alignItems     : 'center',
      display        : 'flex',
      padding        : '0px 60px 0px 60px',
   }
});

const Navigation = ({ classes, options }) => {

   return(
      <header className={classes.root}>
         {options.map((option, key) => (
            <div className={classes.content_button} key={`key_key_button_${key}`} style={{ backgroundColor : option.state ? '#03345f' : null }}>
               <Icon fontSize={"large"} style={{ color : option.state ? '#FFF' : null }}>{option.icon}</Icon>
               <Typography style={{ color : option.state ? '#FFF' : null }} variant={"subtitle2"}>{option.title}</Typography>
            </div>
         ))}
      </header>
   )
};

Navigation.propTypes = {
   classes : PropTypes.object,
   options : PropTypes.array,
};

export default  withStyles(styles)(Navigation);