import React from "react";
import { Box, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import FundingsPosts from "./FundingsPosts"
import FundingDetailsView from "./FundingsPosts";

const App = () => {
  // Example funding data
  const fundingDetails = [
    {
      teacherName: 'John Doe',
      teacherOccupation: 'Professional',
      teacherPicture: 'https://example.com/teacher1.jpg',
      fundingTitle: 'Project Funding',
      fundingDescription: "🎉 Exciting news! Our school is launching a new coding club for students interested in learning programming and building awesome projects. 🚀 Join us and explore the world of coding through fun and interactive activities. No prior coding experience is required. All students from grades 5 to 8 are welcome to participate. Don't miss this incredible opportunity to unleash your creativity and develop valuable skills for the future. Register now and embark on an amazing coding journey with us! 💻🌟",
      fundingDueDate: '2023-07-31',
      fundingLink: 'https://example.com/funding1',
      fundingDocuments: [
        { name: 'Document 1', url: 'https://example.com/document1.pdf' },
        { name: 'Document 2', url: 'https://example.com/document2.pdf' },
      ],
    },
    {
      teacherName: 'Emily Smith',
      teacherOccupation: 'Professional',
      teacherPicture: 'https://example.com/teacher2.jpg',
      fundingTitle: 'Science Fair Funding',
      fundingDescription: '🔬 Calling all science enthusiasts! Our school is hosting a Science Fair to showcase the creativity and scientific knowledge of our students. 🌟 We are seeking funding support to provide necessary resources, equipment, and materials for their innovative projects. Your contributions will help create a memorable experience and inspire young minds. Join us in nurturing the next generation of scientists and inventors. Together, let\'s make the world a better place through the wonders of science! 🌍✨',
      fundingDueDate: '2023-08-15',
      fundingLink: 'https://example.com/funding2',
      fundingDocuments: [
        { name: 'Project Guidelines', url: 'https://example.com/guidelines.pdf' },
        { name: 'Event Schedule', url: 'https://example.com/schedule.pdf' },
      ],
    }
  ];

  return (
    <Box sx={{ width: "83%", pt: 2, pl: 2 }}>
      <Box sx={{ alignItems: "center", display: "flex" }}>
        <Avatar sx={{ m: 1, bgcolor: "#47a4f2" }}>
          <CalendarMonthRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ marginLeft: "8px", display: "inline-block", verticalAlign: "middle" }}>
          Fundings Posts
        </Typography>
      </Box>
      <hr />
      <Box sx={{ pt: 2, pl: 1}}>
        {fundingDetails.map((funding, index) => (
          <FundingDetailsView key={index} funding={funding}></FundingDetailsView>
        ))}
      </Box>
    </Box>
  );
};

export default App;

