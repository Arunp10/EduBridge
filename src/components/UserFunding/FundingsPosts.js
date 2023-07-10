import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Grid,
  Paper,
  Box,
  Divider,
} from "@material-ui/core";
import {
  Link as LinkIcon,
  Description as DescriptionIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  post: {
    width: "100%",
    backgroundColor: "#f8f9fa",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(1),
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  content: {
    marginBottom: theme.spacing(2),
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkIcon: {
    marginRight: theme.spacing(1),
  },
  nameContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginBottom: theme.spacing(1),
  },
  name: {
    marginRight: theme.spacing(1),
  },
  occupation: {
    fontStyle: "italic",
  },
  listItemText: {
    color: "#222",
  },
  documentText: {
    display: "flex",
    alignItems: "center",
    color: "#222",
    fontWeight: "bold",
  },
  documentContainer: {
    display: "flex",
    marginTop: theme.spacing(2),
  },
  postedOn: {
    marginTop: theme.spacing(1),
    display: "block",
    marginBottom: theme.spacing(2),
  },
}));

const FundingDetailsView = ({ funding }) => {
  const classes = useStyles();

  const {
    teacherName,
    teacherOccupation,
    teacherPicture,
    fundingDescription,
    fundingLink,
    fundingDocuments,
  } = funding;

  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.post}>
        <div className={classes.header}>
          <Avatar
            alt={teacherName}
            src={teacherPicture}
            className={classes.avatar}
          />
          <div className={classes.nameContainer}>
            <Typography variant="subtitle1" className={classes.name}>
              {teacherName}
            </Typography>
            <Typography variant="caption" className={classes.occupation}>
              {teacherOccupation}
            </Typography>
          </div>
        </div>
        <div className={classes.content}>
          <Typography variant="caption" className={classes.postedOn}>
            Posted on {currentDate}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {fundingDescription}
          </Typography>
          <Divider />
          {fundingDocuments.length > 0 && (
            <Box className={classes.documentContainer}>
              <List>
                <Typography variant="subtitle1">
                  Supporting Material:
                </Typography>
                {fundingDocuments.map((document, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <IconButton
                        href={document.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <DescriptionIcon />
                      </IconButton>
                    </ListItemAvatar>
                    <ListItemText
                      primary={document.name}
                      className={classes.documentText}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
          <div className={classes.linkContainer}>
            <div>
              <LinkIcon className={classes.linkIcon} />
              <Link
                href={fundingLink}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="body2"
              >
                {fundingLink}
              </Link>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default FundingDetailsView;
