import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const PostFunding = () => {
  // const [title, setTitle] = useState('');
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("");
  const [link, setLink] = useState("");
  const [selectedFile, setselectedFile] = useState(null);

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setselectedFile(event.target.files[0]);
  };

  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    // formData.append('title', title);
    formData.append("description", description);
    formData.append("visibility", visibility);
    formData.append("link", link);

    const response = await fetch("http://localhost:8080/api/Funding/post", {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
      body: formData,
    });
    const json = await response.json();
    alert(json.message);
    setDescription("");
    setLink("");
    setVisibility("");
    setselectedFile("");
    document.getElementById('fileInput').value = '';
  };

  return (
    <div>
      <form>
        <TextField
          label="Description"
          multiline
          maxRows={4}
          value={description}
          onChange={handleDescriptionChange}
          name="description"
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
            name="visibility"
            value={visibility}
            onChange={handleVisibilityChange}
            required
          >
            <MenuItem value="connections">Connections</MenuItem>
            <MenuItem value="everyone">Everyone</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Link"
          value={link}
          name="link"
          onChange={handleLinkChange}
          fullWidth
          margin="normal"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          name="file"
          id="fileInput"
          style={{ marginTop: "16px", marginBottom: "16px" }}
        />
        <Button
          type="submit"
          style={{
            marginTop: "16px",
            marginBottom: "16px",
            marginLeft: "500px",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PostFunding;
