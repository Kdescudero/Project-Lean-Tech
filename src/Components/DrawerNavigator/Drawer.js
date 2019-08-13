import React from 'react'
import { withStyles, Icon, Typography, Switch, Button } from '@material-ui/core';
import Logo from '../../img/lt-logo.png'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const styles = () => ({
   root : {
      flexDirection  : 'column',
      alignItems     : 'center',
      padding        : 5,
      display        : 'flex'
   },
   img : {
      backgroundSize : 'cover',
      marginTop      : 18,
      marginBottom   : 14,
      height         : 88
   },
   container_drawer : {
      borderRight    : '1px solid #bcbcbc',
      marginTop      :  23,
      height         : '100%',
      padding        : '0 18px 0 18px'
   },
   container_switch : {
      flexDirection  : 'column',
      borderBottom   : '1px solid #bcbcbc',
      marginBottom   :  23,
      borderTop      : '1px solid #bcbcbc',
      marginTop      : 23,
      display        : 'flex'
   },
   switch : {
      justifyContent : 'center',
      alignItems     : 'center',
      display        : 'flex',
      margin         : 12
   },
   input : {
      backgroundColor   : '#FFF',
      borderRadius      :  3,
      alignItems        : 'center',
      display           : 'flex',
      padding           : '12px 0px 12px 38px',
      margin            : '0px 0px 8px 3px',
   }
});

const Drawer=({ classes, iconsSwitch })=>{
   return(
      <nav className={classes.root}>
         <div>
            <img src={Logo} alt="Logo" className={classes.img}/>
         </div>

         <div className={classes.container_drawer}>
            <div style={{ display : 'flex', alignItems : 'center', justifyContent : 'center' }}>
               <FontAwesomeIcon style={{ marginRight : 4 }} icon={faLightbulb} />
               <Typography variant={'subtitle2'}>Smart Filters</Typography>
            </div>

            <div className={classes.container_switch}>
               {iconsSwitch.map((item, key)  => (
                  <div key={`key_key_switch_${key}`} className={classes.switch} >
                     <Icon fontSize={'large'}>{item.icon}</Icon>
                     <Switch value="checked" color="default" />
                  </div>
               ))}
            </div>

            <div style={{ display : 'flex', alignItems : 'center', flexDirection : 'column' }}>
               <Typography variant={'subtitle2'}>Status</Typography>
               <div className={classes.input} >
                  <Icon>search</Icon>
                  <input type="text" style={{ border : '0px', outline: 0, width : 100 }} placeholder={"Search"} />
               </div>
               <Button variant="outlined" style={{ padding : 11, width : '100%', backgroundColor : '#FFF' }}>delivered</Button>
            </div>

         </div>
      </nav>
   )
};

Drawer.propTypes = {
   iconsSwitch : PropTypes.array,
   classes     : PropTypes.object,
};

export default withStyles(styles)(Drawer);