import React from "react";
import style from "./styles/ErrorMessage.module.css";
//import { ROUTES } from "../../consts";

const ErrorMessage = (props) => {

  return (
    <div className={style.wrapper}>
        <p className={style.text} >{props.text}</p>
        <img onClick={props.closeFunction} src={"./assets/icons/close.svg"} alt={"close icon"}/>
    </div>
  );
};

export default ErrorMessage;
