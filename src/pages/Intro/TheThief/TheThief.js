import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import style from "./TheThief.module.css";
import COLORS from "../../globalStyles/colors";

const TheThief = (props) => {

  const [shakeItem, setShakeItem] = useState([false, false])
  const setShake = (item) => {
    
    setTimeout(function () { setShakeItem(item) }, 200);
    setTimeout(function () { setShakeItem ([false, false]) }, 1000);
  }

  return useObserver(() => (
    <>
      <p className={style.text}>Wie was de dief?</p>
      <ul className={style.thievesList}>
        <li onClick={() => {setShake([true, false])}} className={`${style.thievesList__item} ${shakeItem[0] ? style.shake : ''}`}>
          <img
            alt={"Een foto van de uil"}
            className={style.thievesList__item__image}
            width="187"
            height="210"
            src={"/assets/illustraties/uiltjeTutorial.svg"}
          />
          <p
            className={style.thievesList__item__text}
            style={{ color: COLORS.redDark }}
          >
            Een uil
          </p>
        </li>

        <li  onClick={() => {setShake([false, true])}} className={`${style.thievesList__item} ${shakeItem[1] ? style.shake : ''}`}>
          <img
            alt={"Een foto van de vos"}
            className={style.thievesList__item__image}
            width="200"
            height="218"
            src={"/assets/illustraties/vosTutorial.svg"}
          />
          <p
            className={style.thievesList__item__text}
            style={{ color: COLORS.orangeDark }}
          >
            Een vos 
          </p>
        </li>

        <li onClick={props.nextFunction} className={style.thievesList__item}>
          <img
            alt={"Een foto van de wasbeer"}
            className={style.thievesList__item__image}
            width="277"
            height="196"
            src={"/assets/illustraties/wasbeerTutorial.svg"}
          />
          <p
            className={style.thievesList__item__text}
            style={{ color: COLORS.black }}
          >
            Een wasbeer
          </p>
        </li>
      </ul>
    </>
  ));
};

export default TheThief;
