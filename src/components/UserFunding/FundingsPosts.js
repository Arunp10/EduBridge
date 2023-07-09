import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import {
  Avatar,
  Paper,
  Typography,
  Link,
  Grid,
  ListItem,
  ListItemText,
  ListItemAvatar,
  List,
  Box,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    width: "100%",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  listItem: {
    padding: theme.spacing(1, 0),
    marginLeft: theme.spacing(2),
    
  },
  listItemText: {
    color: "#222",
  },
  linkText: {
    color: "#1976d2",
  },
  documentText: {
    position: "relative",
    paddingLeft: "1.5rem",
    marginLeft:theme.spacing(-8),
   
    fontWeight: "bold",
    listStyleType: "none", // Add this line
  },
  teacherName: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  dueDate: {
    fontWeight: "bold",
  },
}));

const FundingDetailsView = ({ funding }) => {
  const classes = useStyles();

  const {
    teacherName,
    teacherPicture,
    fundingTitle,
    fundingDescription,
    fundingDueDate,
    fundingLink,
    fundingDocuments,
  } = funding;

  const formattedDate = new Date(fundingDueDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.card}>
            <List>
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar
                    alt={teacherName}
                    src={teacherPicture}
                    className={classes.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={teacherName}
                  secondary="Teacher"
                  classes={{
                    primary: `${classes.listItemText} ${classes.teacherName}`,
                  }}
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary="Funding Title"
                  secondary={fundingTitle}
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary="Funding Description"
                  secondary={fundingDescription}
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      className={classes.listItemText}
                    >
                      Funding Due Date
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="subtitle1"
                      className={`${classes.listItemText} ${classes.dueDate}`}
                    >
                      {formattedDate}
                    </Typography>
                  }
                />
              </ListItem>
              {fundingLink && (
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary="Link"
                    secondary={
                      <Link
                        href={fundingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${classes.listItemText} ${classes.linkText}`}
                      >
                        <LinkIcon />
                        {fundingLink}
                      </Link>
                    }
                  />
                </ListItem>
              )}
              {fundingDocuments.length > 0 && (
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary="Funding Documents"
                    secondary={
                      <ul>
                        {fundingDocuments.map((document, index) => (
                          <li key={index} className={classes.documentText}>
                            <IconButton
                              href={document.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={classes.listItemText}
                            >
                              <DescriptionIcon />
                            </IconButton>
                            {document.name}
                          </li>
                        ))}
                      </ul>
                    }
                  />
                </ListItem>
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FundingDetailsView;