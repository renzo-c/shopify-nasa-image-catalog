import React from 'react';
import { Grid } from '@mui/material';

const App = () => {
  console.log(process.env.NODE_ENV);

  return (
    // <Wrapper>
      <Grid container>
        This is a test
      </Grid>
    // </Wrapper>
  );
};

export default App;
