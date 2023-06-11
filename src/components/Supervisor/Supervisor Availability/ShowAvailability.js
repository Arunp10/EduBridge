import React from 'react';
import Availability from './Availability'
import { Box, Grid} from '@material-ui/core';
import ShowAvailability from './Availability';

const App = () => {
  return (
    <Grid item xs={9}>
          <Box sx={{ width: '100%',maxWidth:'800px' ,pt: 0, pl: 0 }}>
            <ShowAvailability />
          </Box>
    </Grid>
  );
};

export default App;
