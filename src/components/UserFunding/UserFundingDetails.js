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
      teacherPicture: 'https://example.com/teacher1.jpg',
      fundingTitle: 'Project Funding 1',
      fundingDescription: 'This is the description of funding project 1.',
      fundingDueDate: '2023-07-31',
      fundingLink: 'https://example.com/funding1',
      fundingDocuments: [
        { name: 'Document 1', url: 'https://example.com/document1.pdf' },
        { name: 'Document 2', url: 'https://example.com/document2.pdf' },
      ],
    },
    {
      teacherName: 'Jane Smith',
      teacherPicture: 'https://example.com/teacher2.jpg',
      fundingTitle: 'Project Funding 2',
      fundingDescription: 'This is the description of funding project 2.This is the description of funding project This is the description of funding project This is the description of funding project This is the description of funding project This is the description of funding project This is the description of funding project',
      fundingDueDate: '2023-08-15',
      fundingLink: '',
      fundingDocuments: [],
    },
    {
      teacherName: 'Robert Johnson',
      teacherPicture: 'https://example.com/teacher3.jpg',
      fundingTitle: 'Project Funding 3',
      fundingDescription: 'This is the description of funding project 3.',
      fundingDueDate: '2023-09-01',
      fundingLink: 'https://example.com/funding3',
      fundingDocuments: [
        { name: 'Document 1', url: 'https://example.com/document1.pdf' },
      ],
    },
    {
      teacherName: 'Emily Wilson',
      teacherPicture: 'https://example.com/teacher4.jpg',
      fundingTitle: 'Project Funding 4',
      fundingDescription: 'This is the description of funding project 4.',
      fundingDueDate: '2023-09-15',
      fundingLink: '',
      fundingDocuments: [
        { name: 'Document 1', url: 'https://example.com/document1.pdf' },
        { name: 'Document 2', url: 'https://example.com/document2.pdf' },
        { name: 'Document 3', url: 'https://example.com/document3.pdf' },
      ],
    },
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

