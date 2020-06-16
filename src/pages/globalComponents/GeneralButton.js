import React from "react";
import style from './styles/GeneralButton.module.css';
import COLORS from '../globalStyles/colors.js';

const GeneralButton = (props) => {

  if(!props.icon) throw new Error("An icon is required");
  if(!props.type) throw new Error("A filetype is required");

  return (
    <div onClick={props.onClick} className={`${style.buttonYellow}`} style={{
      backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.yellow,
      shadowColor: props.shadowColor ? props.shadowColor : COLORS.blue
      }}>
        <div>
            <img className={`${style.buttonYellowIcon}`} src={`./assets/icons/${props.icon}.${props.type}`}  alt="icon" 
             style={{
              iconBackgroundColor: props.iconBackgroundColor ? props.iconBackgroundColor : COLORS.yellowLight}}/>
        </div>
      {
        props.text ? 
            <p className={`${style.buttonYellowTekst}`}> {props.text} </p>
      :
     ''
      }
    </div>
  );
};

export default GeneralButton;