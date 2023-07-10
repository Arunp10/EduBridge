import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import DescriptionIcon from "@material-ui/icons/Description";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "#f0f2f5",
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
  },
  listItem: {
    marginBottom: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },
  documentIcon: {
    marginRight: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(1),
  },
  descriptionHeading: {
    fontWeight: "bold",
  },
  descriptionText: {
    marginTop: theme.spacing(1),
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
    uploadDate,
  } = funding;

  const formattedDueDate = new Date(fundingDueDate).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }
  );

  const formattedUploadDate = uploadDate
    ? new Date(uploadDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
    : null;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.listItem}>
          <Avatar
            alt={teacherName}
            src={teacherPicture}
            className={classes.avatar}
          />
          <Typography variant="body1" component="span">
           <strong>{teacherName}</strong>
          </Typography>
        </div>
        <div className={classes.descriptionContainer}>
          <Typography variant="h5" className={classes.title}>
            {fundingTitle}
          </Typography>
          <Typography variant="body1" className={classes.descriptionText}>
            <strong>Description:</strong> {fundingDescription}
          </Typography>
        </div>
        <Typography variant="body1" className={classes.listItem}>
          <strong>Due Date:</strong> {formattedDueDate}
        </Typography>
        {fundingLink && (
          <Typography variant="body1" className={classes.listItem}>
            <strong>Link:</strong>{" "}
            <Link href={fundingLink} target="_blank" rel="noopener noreferrer">
              {fundingLink}
            </Link>
          </Typography>
        )}
        {fundingDocuments.length > 0 && (
          <div>
            {fundingDocuments.map((document, index) => (
              <Typography
                key={index}
                variant="body1"
                className={classes.listItem}
              >
                <DescriptionIcon className={classes.documentIcon} />
                <Link href={document.url} target="_blank" rel="noopener noreferrer">
                  {document.name}
                </Link>
              </Typography>
            ))}
          </div>
        )}
      </Paper>
    </div>
  );
};

export default FundingDetailsView;





