import React from "react";
import style from "./styles/SoundButton.module.css";
import COLORS from "../globalStyles/colors.js"
//import { ROUTES } from "../../consts";

const SoundButton = (props) => {

  const play = () =>  {
    new Audio(`/assets/sounds/voiceOver/${props.play}.mp3`).play();
  }

  return (
    <div onClick={() => {play()}} className={style.wrapper}
    style={{
        width: props.size ? props.size : "6.8rem",
        height: props.size ? props.size : "6.8rem",
        fill: props.fillColor ? props.fillColor : COLORS.blueDark,
        backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.green,
    }}
    >
        <svg className={style.icon}
          style={{
            transform: props.reScale ? `scale(${props.reScale})` : "scale(1)"
          }}
          >
          <path d="M1.70996 8.61495C1.15768 8.61495 0.709961 9.06267 0.709961 9.61495V16.8421C0.709961 17.3944 1.15768 17.8421 1.70996 17.8421H6.4472C6.71241 17.8421 6.96677 17.9475 7.1543 18.135L12.8436 23.8243C13.4736 24.4543 14.5507 24.0081 14.5507 23.1172V3.33986C14.5507 2.44895 13.4736 2.00278 12.8436 2.63275L7.1543 8.32206C6.96677 8.5096 6.71241 8.61495 6.4472 8.61495H1.70996ZM21.4711 13.2285C21.4708 11.94 21.1107 10.6771 20.4315 9.58218C20.0372 8.94664 19.5445 8.38232 18.9748 7.90866C18.4042 7.4343 17.6264 7.90137 17.6264 8.64341V17.8048C17.6264 18.5452 18.4014 19.0127 18.9723 18.5411C19.5439 18.069 20.0382 17.5053 20.4334 16.8698C21.113 15.777 21.4726 14.5155 21.4711 13.2285ZM18.8341 0.0743121C18.2237 -0.124056 17.6264 0.35269 17.6264 0.994482V2.16343C17.6264 2.606 17.9192 2.99147 18.3337 3.14661C20.2631 3.86876 21.9502 5.13173 23.1883 6.79132C24.5756 8.65077 25.325 10.9086 25.325 13.2285C25.325 15.5485 24.5756 17.8063 23.1883 19.6658C21.9502 21.3253 20.2631 22.5883 18.3337 23.3105C17.9192 23.4656 17.6264 23.8511 17.6264 24.2937V25.4626C17.6264 26.1044 18.2237 26.5811 18.8341 26.3828C21.3998 25.5489 23.6752 23.9793 25.3695 21.8564C27.3251 19.4059 28.3903 16.3638 28.3903 13.2285C28.3903 10.0933 27.3251 7.05114 25.3695 4.60067C23.6752 2.47782 21.3998 0.908167 18.8341 0.0743121Z"/>
       </svg>
    </div>
  );
};

export default SoundButton;
