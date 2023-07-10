import React from 'react';

const FileDownload = ({ file }) => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = `../src/components/document/${props.file}`;
    downloadLink.download = file;
    downloadLink.click();
  };

  return (
    <>
        <IconButton
                        rel="noopener noreferrer"
                        
                      ></IconButton>
    </>
  );
};

export default FileDownload;