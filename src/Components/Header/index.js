import React from 'react'
import Navigation from "./Navigation";

class NavBar extends React.Component{
   render(){

      const options = [
         {icon : "home",      title : "Home",      state : true  },
         {icon : "email",     title : "Message"    },
         {icon : "star_rate", title : "Wishilist"  },
         {icon : "settings",  title : "Settings"   },
         {icon : "person",    title : "My Account" },
      ];

      return(
         <Navigation options  =  {options} />
      )
   }
}

export default NavBar;