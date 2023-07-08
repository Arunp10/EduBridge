import React from 'react';
import { Typography, TextField, Button, Link, Box , Grid} from '@mui/material';
import { Avatar } from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { styled } from '@mui/material/styles';

const FundingCardContainer = styled(Box)(({ theme }) => ({
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '16px',
}));

const FundingDetailsPage = ({ title, description, dueDate, link, photo }) => {
  const handlePhotoClick = () => {
    if (photo) {
      window.open(photo);
    }
  };

  const handleLinkClick = () => {
    if (link) {
      window.open(link);
    }
  };

  const formattedDate = new Date(dueDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <FundingCardContainer>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
      <Typography variant="body2" gutterBottom>
      <strong>Due Date: {formattedDate}</strong>
      </Typography>
      <Grid container spacing={1} justifyContent="flex-end">
        {photo && (
          <Grid item>
            <Button
              onClick={handlePhotoClick}
              variant="outlined"
              size="small"
              sx={{
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.main,
                  color: theme => theme.palette.secondary.contrastText,
                },
              }}
            >
              View Photo
            </Button>
          </Grid>
        )}
        {link && (
          <Grid item>
            <Button
              component={Link}
              href={link}
              target="_blank"
              rel="noopener"
              variant="contained"
              size="small"
              sx={{
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.main,
                  color: theme => theme.palette.secondary.contrastText,
                },
              }}
            >
              Visit Link
            </Button>
          </Grid>
        )}
      </Grid>
    </FundingCardContainer>
  );
};

const App = () => {
  // Funding details
  const fundingDetails = [
    {
      title: 'Project X Funding',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitvvvvvLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitvvvvvvLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
      dueDate: '2023-07-31',
      link: 'https://example.com/project-x',
      photo: 'https://example.com/photo.jpg',
    },
    {
      title: 'Project Y Funding',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dueDate: '2023-08-15',
      link: 'https://example.com/project-y',
      photo: null,
    },
    {
      title: 'Project Z Funding',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      dueDate: '2023-09-30',
      link: null,
      photo: 'https://example.com/photo-z.jpg',
    },
    {
      title: 'Project W Funding',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      dueDate: '2023-10-15',
      link: null,
      photo: null,
    },
  ];


  return (
    <Box sx={{ width: "83%", pt: 2, pl: 2 }}>
    <Box sx={{ alignItems: "center", display: "flex" }}>
    <Avatar sx={{ m: 1, bgcolor: "#47a4f2" }}>
        <CalendarMonthRoundedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" style={{ marginLeft: "8px", display: "inline-block", verticalAlign: "middle" }}>
        Funding Details
      </Typography>
    </Box>
    <hr />
    <Box sx={{ pt: 2, pl: 1}}>
        {fundingDetails.map((funding, index) => (
        <FundingDetailsPage key={index} {...funding} />
      ))}
    </Box>
  </Box>
  );
};

export default App;
