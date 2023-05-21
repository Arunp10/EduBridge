import React,{useContext,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import EducationContext from "../../context/Education/EducationContext";
import WorkContext from "../../context/WorkExperience/WorkContext";
import ProjectContext from "../../context/project/ProjectContext";
import SkillContext from "../../context/Skill/SkillContext";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    boxShadow:
      "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    color: "#ff5823",
  },
  listItemText: {
    fontWeight: "bold",
  },
  timelineItem: {
    minHeight: "130px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "10px",
    paddingBottom: "10px",
    position: "relative",
    "&:before": {
      position: "absolute",
    },
  },
  timeline: {
    marginLeft: -10,
    paddingInline: "10px",
    marginRight: "auto",
  },
  divider: {
    backgroundColor: "#1f2235",
    height: "1px",
    margin: theme.spacing(2),
  },
  dots: {
    color: "orange",
    fontSize: "20px",
    marginRight: "10px",
  },
}));

function ScreenHeading() {
  return (
    <div className="heading-container">
      <div className="screen-subheading">
        <span>{"My Formal Bio Details"}</span>
      </div>
      <div className="heading-seperator">
        <div className="seperator-line">
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function View(props) {

  //Calling Education Context
  const educontext = useContext(EducationContext);
  const {Education , getEducation } = educontext;

  //Calling Work Context
  const workcontext = useContext(WorkContext);
  const {Work,getWork} = workcontext;

  //Calling Project Context
  const projectcontext = useContext(ProjectContext)
  const {Project,getProject} = projectcontext;

   //Calling Skill Context
   const skillcontext = useContext(SkillContext)
   const {Skill,getSkill} = skillcontext;

function UserEducation() {
    useEffect(() => {
    getEducation();
  })

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Education
      </Typography>
      <Divider className={classes.divider} />
      <List>
        {Education.map((Education, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={Education.degree}
              secondary={`${Education.InstituteName}  (${Education.startDate}) - (${Education.endDate})`}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
function WorkHistory() {

  useEffect(() => {
    getWork();
  })

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Work Experience
      </Typography>
      <Divider className={classes.divider} />
            <List>
        {Work.map((Work, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={Work.title}
              secondary={`${Work.employee}  (${Work.startDate}) - (${Work.endDate})`}
             classes={{ primary: classes.listItemText }}
            />
         </ListItem>
         ))}
     </List>
    </Paper>
  );
}
function Projects() {
  useEffect(() => {
    getProject();
  })

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Projects
      </Typography>
      <Divider className={classes.divider} />
      <Timeline className={classes.timeline}>
        {Project.map((Project, index) => (
          <TimelineItem key={index} className={classes.timelineItem}>
            <TimelineSeparator>
              <TimelineDot color="inherit" variant="outlined" />
              {index < Project.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent
              style={{ marginTop: -8, fontWeight: "bold", marginLeft: 0 }}
            >
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                {Project.projectTitle}
              </Typography>
              <Typography>
                ({Project.startDate} - {Project.endDate})
              </Typography>
              <Typography style={{ marginTop: 3 }}>
                {Project.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
}

function ProgrammingSkills() {

  useEffect(() => {
    getSkill();
  })
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Programming Skills
      </Typography>
      <Divider className={classes.divider} />
      <List>
        {Skill.map((Skill, index) => (
          <ListItem key={index}>
            <Typography className={classes.dots}>{"\u2023"}</Typography>
            <ListItemText
              primary={Skill.skillName}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

  return (
    <div>
      <ScreenHeading />
      <UserEducation />
       <WorkHistory />
      <Projects /> 
      <ProgrammingSkills />
    </div>
  );
}

export default View;
