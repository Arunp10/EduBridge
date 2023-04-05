import React, { useState } from "react";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../../utilities/commonutiles";
import ScrollService from "../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import elogo from '../../images/elogo.png'
import index from "react-typical";

export default function Header() {
  const [SelectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setshowHeaderOptions] = useState(0);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView)
    return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
    if (screenIndex < 0) 
    return;
  };
  let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () =>{
    return(
      TOTAL_SCREENS.map((screen, i) =>(
        <div key={screen.screen_name} className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i , screen)}>
          <span>{screen.screen_name}</span>
        </div>
      ))
    )
  }

  const getHeaderOptionsClass = (index) =>{
    let classes = "header-option";
    if(index < TOTAL_SCREENS.length -1)
    classes += "header-option-seperator"; 

    if(SelectedScreen === index)
    classes += "selected-header-option";
    return
    }

    const switchScreen = (index , screen) =>{
      let screencomponent = document.getElementById(screen.screen_name);
      if(!screencomponent) return;

      screencomponent.scrollIntoView({behavior: "smooth"});
      setSelectedScreen(index);
      setshowHeaderOptions(false);
    };

  return(
    <div>
      <div className="header-container" onClick={() => setshowHeaderOptions(!showHeaderOptions)}>
        <div className="header-parent">
          <div className="header-hamburger" onClick={() => setshowHeaderOptions(!showHeaderOptions)}>
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars}/>
          </div>
          <div className="header-logo">
            <span>Laksh</span>
          </div>
          <div className={(showHeaderOptions? "header-options show-hamburger-options": "header-options")}>
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  )
}
