import React, { useState } from "react";
import style from "./Tutorial.module.css";
import StepOne from "./TutorialSteps/StepOne.js";
import Header from "../Authentication/LoginSequence/Header/Header.js";
import { useObserver } from "mobx-react-lite";

const Tutorial = () => {


  const SCREEN = {
    STAP1: "STAP1",
    STAP2: "STAP2",
    STAP3: "STAP3",
    STAP4: "STAP4",
    STAP5: "STAP5",
    STAP6: "STAP6",
    STAP7: "STAP7",
    STAP8: "STAP8",
    STAP9: "STAP9",
    STAP10: "STAP10",
    STAP11: "STAP11",
    STAP12: "STAP12"
  }
  const [currentScreen, setCurrentScreen] = useState("");

  const returnScreen = () => {
    switch(currentScreen) {
      case SCREEN.STAP1:
        return <StepOne nextFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>

      case SCREEN.STAP2:
        // return <PermissionDetail nextFunction={() => {setCurrentScreen(SCREEN.CAPTCHA)}} returnFunction={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        
      
      case SCREEN.STAP3:
        // return <Captcha nextFunction={() => {setCurrentScreen(SCREEN.CAMERAREQUEST)}} returnFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>
        

      case SCREEN.STAP4:
        // return <CameraRequest nextFunction={() => {setCurrentScreen(SCREEN.CAMERAGRANTED)}} returnFunction={() => {setCurrentScreen(SCREEN.CAPTCHA)}}/>
        

      case SCREEN.STAP5:
        // return <Header Title={"Return to CAMERAREQUEST"} Return={true} function={() => {setCurrentScreen(SCREEN.CAMERAREQUEST)}}/>
        

      case SCREEN.STAP6:
        return <Header Title={"Return to CAMERAGRANTED"} Return={true} function={() => {setCurrentScreen(SCREEN.CAMERAGRANTED)}}/>
        

      case SCREEN.STAP7:
        return <Header Title={"Return to MAILSENT"} Return={true} function={() => {setCurrentScreen(SCREEN.EMAILSCREEN)}}/>
        

      case SCREEN.STAP8:
        return <Header Title={"Return to EMAILSCREEN"} Return={true} function={() => {setCurrentScreen(SCREEN.MAILSENT)}}/>
        

      case SCREEN.STAP9:
        return <Header Title={"Return to MAILSENT"} Return={true} function={() => {setCurrentScreen(SCREEN.FIRSTLOGIN)}}/>
        

      case SCREEN.STAP10:
        return <Header Title={"Return to FIRSTLOGIN"} Return={true} function={() => {setCurrentScreen(SCREEN.NAMEREQUEST)}}/>
      
      case SCREEN.STAP11:
        return <Header Title={"Return to FIRSTLOGIN"} Return={true} function={() => {setCurrentScreen(SCREEN.NAMEREQUEST)}}/>

      case SCREEN.STAP12:
        return <Header Title={"Return to FIRSTLOGIN"} Return={true} function={() => {setCurrentScreen(SCREEN.NAMEREQUEST)}}/>
        
      default:
        return <StepOne nextFunction={() => {setCurrentScreen(SCREEN.CAMERAGRANTED)}} returnFunction={() => {setCurrentScreen(SCREEN.CAPTCHA)}}/>//<Welcome nextFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>
    }
  }

  console.log(currentScreen);

  return useObserver (() => (
    <div className={style.container}>
      {returnScreen()}
    </div>
  ));
};

export default Tutorial;

/*
BACKUP OF OLD PAGE

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const { uiStore } = useStores();

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await uiStore.loginWithEmail(email);
    console.log(result);
  };

  if (window.location.href.indexOf("apiKey") > -1) {
    localStorage.setItem("emailForSignIn", email)
    uiStore.verifyLogin();
  }

  const logOut = () => {
    const fb = uiStore.firebase;
    fb.auth().signOut().then(function() {
      console.log('Logged out')
      localStorage.clear()
    }).catch(function(error) {
      console.log("error occured: ".error.code)
    });
  }
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor={"email"} className="visually-hidden ">
        E-mail
      </label>
      <input
        className={style.input}
        type={email}
        name={"email"}
        placeholder={"Fill in your email."}
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
        required="required"
        autoComplete="off"
      />
        <input type="submit" value="Register" className={style.button} />
      </form>

      <button onClick={e => logOut()} value="" className={style.button}> Sign Out</button>
    </div>
  );
};

*/