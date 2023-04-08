import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";
import { retry } from "rxjs";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "A web developer makes and maintains websites. They are in charge of a site overall look and feel. Web developers also handle the technical aspects of a website, including its performance (website speed) and capacity (the maximum amount of traffic the site could handle at a given time). A web developer is usually knowledgeable in both graphic design and programming.",
    highlights: {
      bullets: [
        "Technology Improves Efficiency",
        "Technology Enhances Communication",
        "Easy Information Access",
        "Technology Helps In A New Business",
      ],
      heading: "Here are a Few Highlights",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="aboutme-container screen-container" id={props.id || ""}>
      <div className="aboutme-parent">
        <ScreenHeading title={"About Me"} SubHeading={"Why Choose Me"} />
        <div className="aboutme-card">
          <div className="aboutme-profile"></div>
          <div className="aboutme-details">
            <span className="aboutme-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="aboutme-highlight">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="aboutme-options">
              <button className="primary-btn">Hire Me</button>
              <a
                href="Laksh's Resume.pdf"
                download="EDUBRIDGE Laksh's Resume.pdf">
                <button className="highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
