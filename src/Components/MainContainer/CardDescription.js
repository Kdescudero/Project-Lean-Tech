import React from 'react';
import ButtonCheck from "../../commons/Buttons/ButtonCheck";
import { withStyles, Typography, Icon, Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const styles = () =>({
   root : {
      justifyContent : 'space-between',
      alignItems     : 'center',
      flexWrap       : 'wrap',
      display        : 'flex',
      padding        : 23,
   },
   card : {
      backgroundColor   : '#FFF',
      flexDirection     : 'row',
      borderRadius      : 28,
      display           : 'flex',
      padding           : '11px 26px 11px 26px',
      margin            : '8px 0 8px 0',
      width             : '85%'
   },
   content_card : {
      flexDirection  : 'row',
      borderRight    : '1px solid #d8d8d8',
      borderLeft     : '1px solid #d8d8d8',
      alignItems     : 'center',
      margin         : '0 38px 0 38px',
      padding        : '0 30px 0 30px',
      display        : 'flex'
   },
   submit : {
      justifyContent : 'space-between',
      flexDirection  : 'row',
      alignItems     : 'center',
      marginLeft     : '5%',
      display        : "flex",
      width          : '50%'
   }
});

const CardDescription=({ classes, descriptions })=>{
   const [anchorEl, setAnchorEl] = React.useState(null);

   const open=(event)=> {
      setAnchorEl(event.currentTarget);
   };

   return(
      <div className={classes.root}>
         {descriptions.map((description, key) => {
            return (
               <React.Fragment key={`key_key_description_${key}`}>
                  <ButtonCheck />
                  <div className={classes.card}>

                     <div style={{ display : "flex", flexDirection : "column", alignItems : "center", padding : 12 }}>
                        <Typography variant={"subtitle2"}>{description.day}</Typography>
                        <Typography variant={"subtitle2"}>{description.hour}</Typography>
                        <Typography variant={"subtitle2"}>PM</Typography>
                     </div>

                     <div className={classes.content_card}>
                        <div>
                           <Icon style={{ fontSize : 38, marginRight : 12 }}>near_me</Icon>
                        </div>
                        <div style={{ flexDirection : "column", alignItems : 'center', display : "flex" }}>
                           <Typography variant={"subtitle2"}>{description.departure}</Typography>
                           <Icon style={{ color : "#EF8632", fontSize : 50 }}>expand_more</Icon>
                           <Typography variant={"subtitle2"}>{description.destination}</Typography>
                        </div>
                     </div>

                     <div className={classes.submit}>
                        <FontAwesomeIcon style={{ transform : 'rotateY(150deg)', fontSize : 50, }} icon={faTruck} />
                        <Typography variant={"h4"}>${description.pressure}</Typography>
                        <Button variant="outlined" style={{ backgroundColor : "red", alignSelf : 'center',}}>{description.quantity}</Button>
                        <IconButton aria-controls="simple-menu" onClick={open}><Icon fontSize={"large"}>more_vert</Icon></IconButton>
                     </div>

                  </div>
               </React.Fragment>
            )
         })}
         <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={()=>setAnchorEl(null)}
         >
            <MenuItem onClick={()=>setAnchorEl(null)}>Modificar</MenuItem>
            <MenuItem onClick={()=>setAnchorEl(null)}>Eliminar</MenuItem>
         </Menu>
      </div>
   )
};

CardDescription.propTypes = {
   classes : PropTypes.object,
};

export default withStyles(styles)(CardDescription);