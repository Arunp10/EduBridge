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
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            fullWidth
            variant="outlined"
            margin="normal"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="visibility-label">Visibility</InputLabel>
          <Select
            label="Select Visibility"
            labelId="visibility-label"
            id="visibility-select"
            value={visibility}
            onChange={handleVisibilityChange}
            required
          >
            <MenuItem value="" disabled>Select visibility</MenuItem>
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







// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   CardActions,
//   IconButton,
//   Grid,
// } from '@mui/material';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import EmojiPicker from 'emoji-picker-react';

// const FundingUploadPage = () => {
//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState(null);
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [selectedEmoji, setSelectedEmoji] = useState('');

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setImage(URL.createObjectURL(file));
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleDueDateChange = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleToggleEmojiPicker = () => {
//     setShowEmojiPicker(!showEmojiPicker);
//   };

//   const handleEmojiSelect = (emoji) => {
//     setSelectedEmoji(emoji.native);
//   };

//   const handleUploadFunding = () => {
//     // Handle funding upload logic here
//     console.log({
//       title,
//       image,
//       description,
//       dueDate,
//       selectedEmoji,
//     });
//     setTitle("");
//     setImage(null);
//     setDescription("");
//     setDueDate("");
//     setShowEmojiPicker("");
//     setSelectedEmoji("");
//   };

//   return (
//     <Container maxWidth="sm">
//       <Card>
//         <CardContent>
//           <TextField
//             label="Title"
//             value={title}
//             onChange={handleTitleChange}
//             fullWidth
//             variant="outlined"
//             margin="normal"
//           />
        
//           <TextField
//             label="Description"
//             value={description}
//             onChange={handleDescriptionChange}
//             fullWidth
//             multiline
//             rows={4}
//             variant="outlined"
//             margin="normal"
//             InputProps={{
//               endAdornment: (
//                 <>
//                   <IconButton
//                     color="primary"
//                     onClick={handleToggleEmojiPicker}
//                   >
//                     😄
//                   </IconButton>
//                   {showEmojiPicker && (
//                     <EmojiPicker onEmojiClick={handleEmojiSelect} />
//                   )}
//                 </>
//               ),
//             }}
//           />
//           <TextField
//             label="Due Date"
//             type="date"
//             value={dueDate}
//             onChange={handleDueDateChange}
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//           <input
//             accept="image/*"
//             style={{ display: 'none' }}
//             id="upload-image"
//             type="file"
//             onChange={handleImageChange}
//           />
//           <label htmlFor="upload-image">
//             <IconButton color="primary" component="span">
//               <AddPhotoAlternateIcon />
//             </IconButton>
//           </label>
//           {image && (
//             <img src={image} alt="Uploaded" style={{ width: '100%' }} />
//           )}
//         </CardContent>
//         <CardActions>
//           <Grid container justifyContent="flex-end">
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleUploadFunding}
//               disabled={!title || !description || !dueDate}
//             >
//               Upload
//             </Button>
//           </Grid>
//         </CardActions>
//       </Card>
//     </Container>
//   );
// };

// export default FundingUploadPage;