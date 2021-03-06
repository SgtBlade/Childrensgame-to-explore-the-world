import React, { useState } from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import progress from "./styles/ProgressBarAnimation.module.css";
import Header from "../../TutorialHeader/Header.js";
import PlayButton from "../../../globalComponents/PlayButton.js";
import StepBack from "../../TutorialComponents/ButtonStepBack/StepBack.js";
import StepForward from "../../TutorialComponents/ButtonStepForward/StepForward.js";
import MaterialenNeeded from "../../TutorialComponents/MaterialenNeeded/MaterialenNeeded.js";

const MaterialenOne = (props) => {

  const [tutorial, setTutorial] = useState(false);


  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        Bar={true}
        procent="16"
        progress={progress.stapTwee}
        function={props.startFunction}
        Title={`Stap 2`}
        fontSize={"5rem"}
      />
      <StepBack onClick={props.returnFunction} />
      <StepForward onClick={props.nextFunction} />
      <div className={`${style.boekje} ${style.boekje__two}`}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__stepCenter}`}
        >
          <div className={style.stepOne__soundbutton}>
          <PlayButton DifferentFunction={()=> {setTutorial(true)}} />
          </div>

            {tutorial ?
          <video
          style={{ maxWidth: "90%" }}
          className={style.video} autoPlay onEnded={() => {setTutorial(false)}}>
            <source src={`/assets/videos/tutorial/stepTwo.mp4`} type="video/mp4" />
          <p>Je internet browser ondersteund geen video</p>
          </video>
          :
          <img src="/assets/illustraties/stappen/stap2.svg" alt="Stap 2" />
          }
          
        </div>
      </div>
      <MaterialenNeeded materialen="materialen-stapTwee" />
    </section>
  );
};

export default MaterialenOne;
