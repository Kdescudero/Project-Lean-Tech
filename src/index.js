import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ButtonAdd from "./commons/Buttons/ButtonAdd";

const Root = ( ) => {
   return(
      <>
         <App />
         <ButtonAdd />
      </>
   )
};

ReactDOM.render(<Root />, document.getElementById('root'));
