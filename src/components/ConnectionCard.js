import { Button, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material';
import { Avatar, Box } from '@mui/material';
import {Cancel } from '@mui/icons-material';
import { Chat as ChatIcon } from '@mui/icons-material';
import { useState } from 'react';

export default function ConnectionCard(props) {
  const { recipientName, sentDate, status, avatarSrc} = props;
  const isAccepted = status === 'Accepted';
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        title={recipientName}
        subheader={`Sent on ${sentDate}`}
        action={
          <IconButton aria-label="Cancel">
            <Cancel />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Status: {status}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button 
          variant="contained"
          endIcon={<ChatIcon />}
          size="small"
          disabled={!isAccepted}
        >
          Chat
        </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
