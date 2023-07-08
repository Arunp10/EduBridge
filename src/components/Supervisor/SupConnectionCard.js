import { Button, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material';
import { Avatar, Box } from '@mui/material';
import {Cancel } from '@mui/icons-material';
import { Chat as ChatIcon } from '@mui/icons-material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export default function ConnectionCard(props) {
  
  const { recipientFirstName,recipientLastName, avatarSrc} = props;
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        title={`${recipientFirstName} ${recipientLastName}`}
        subheader={"Student"}
        action={
          <IconButton aria-label="Cancel">
            <PersonRemoveIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        </Typography>
        <Divider sx={{ my: 2}} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button 
          variant="contained"
          endIcon={<ChatIcon />}
          size="small"
        >
          Chat
        </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
