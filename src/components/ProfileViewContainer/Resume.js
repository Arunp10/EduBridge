import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const ResumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const ProgrammingSkillsDetails = [
    { skills: "JavaScript", ratingPercentage: 85 },
    { skills: "React js", ratingPercentage: 89 },
    { skills: "React Native", ratingPercentage: 80 },
    { skills: "Node js", ratingPercentage: 95 },
    { skills: "Express js", ratingPercentage: 75 },
    { skills: "HTML", ratingPercentage: 65 },
  ];

  const ProjectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal portfolio website to show my all skills and work",
      subHeading: "Technologies Used: React js, Bootstrap ",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal portfolio website to show my all skills and work",
      subHeading: "Technologies Used: React js, Bootstrap ",
    },
  ];

  const ResumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Dha Suffa University, Karachi"}
        subHeading={"Bacholers of science computer science"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Boys Degree Collage Mirpur mathello"}
        subHeading={"1st year Pre-Engineering"}
        fromDate={"2016"}
        toDate={"2018"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Limited Techgnologies"}
        subHeading={"Mern Stack Developer"}
        fromDate={"2020"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          An e-commerce based website for sellers to link ourselves and sell
          products online
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {ProgrammingSkillsDetails.map((skills, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skills.skills}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skills.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {ProjectDetails.map((ProjectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={ProjectDetails.title}
            subHeading={ProjectDetails.subHeading}
            description={ProjectDetails.description}
            fromDate={ProjectDetails.duration.fromDate}
            toDate={ProjectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interest">
        <ResumeHeading
          heading="Teaching"
          description="A Teacher is a professional who teaches students based on national curriculum guidelines within their specialist subject areas. Their duties include assigning homework, grading tests, documenting progress and keeping up with parent communication."
        />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetheight = 360;
    let newCarousalOffSet = {
      style: { transform: "translateY(" + index * offsetheight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return ResumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../../src/components/Assets/Resume/${bullet.logoSrc}`)}
          alt="oops"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {ResumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} SubHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
