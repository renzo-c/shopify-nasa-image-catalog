import React from 'react';
import { Box, Grid } from '@mui/material';
import useStyles from './heroImage-styles';

const HeroImage = ({ imageUrl = '', altDescription = '' }) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid item xs={12}>
        <Box className={classes.imgContainer}>
          <img alt={altDescription} src={imageUrl} className={classes.img} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroImage;
