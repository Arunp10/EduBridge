import React, { useState } from 'react';
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const PostFunding = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [file, setFile] = useState(null);
  const [visibility, setVisibility] = useState('connections');
  const [selectedConnections, setSelectedConnections] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value);
    setSelectedConnections([]);
  };

  const handleConnectionChange = (event) => {
    setSelectedConnections(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or API call to save the scholarship details
    // You can access the title, description, dueDate, file, visibility, and selectedConnections values here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Due Date:', dueDate);
    console.log('File:', file);
    console.log('Visibility:', visibility);
    console.log('Selected Connections:', selectedConnections);
    setTitle("");
    setDescription("");
    setDueDate("");
    setFile("");
    setSelectedConnections([""]);
    setVisibility("");
    alert("Thankyou for posting Details")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={handleTitleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          fullWidth
          margin="normal"
          required
        />
       <TextField
          label="Due Date"
          value={dueDate}
          onChange={handleDueDateChange}
          fullWidth
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="visibility-label">Visibility</InputLabel>
          <Select
            label="Select Visibility"
            labelId="visibility-label"
            id="visibility-select"
            value={visibility}
            onChange={handleVisibilityChange}
          >
            <MenuItem value="connections">Connections</MenuItem>
            <MenuItem value="only_share_with">Only Share With</MenuItem>
          </Select>
        </FormControl>
        {visibility === 'only_share_with' && (
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="connections-label">Select Connections</InputLabel>
            <Select
              labelId="connections-label"
              id="connections-select"
              multiple
              value={selectedConnections}
              onChange={handleConnectionChange}
            >
              <MenuItem value="connection1">Connection 1</MenuItem>
              <MenuItem value="connection2">Connection 2</MenuItem>
              <MenuItem value="connection3">Connection 3</MenuItem>
              {/* Add more connections as needed */}
            </Select>
          </FormControl>
        )}
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          style={{ marginTop: '16px', marginBottom: '16px' }}
        />
        <Button type="submit" style={{ marginTop: '16px', marginBottom: '16px' , marginLeft: '500px', paddingLeft: '40px', paddingRight: '40px'}} variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PostFunding;
