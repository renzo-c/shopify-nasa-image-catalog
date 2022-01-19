import React, { useState, useEffect } from 'react';
import { Card, GhostyCard } from '../';
import { Box, ImageList, ImageListItem, Grid } from '@mui/material';
import { BREAKPOINTS } from '../../assets/constants';

const Results = ({ results }) => {
  const [columns, setColumns] = useState(null);

  useEffect(() => {
    window.addEventListener('resize', updateGalleryGrid);
    window.addEventListener('load', updateGalleryGrid);
    return () => {
      window.removeEventListener('resize', updateGalleryGrid);
      window.removeEventListener('load', updateGalleryGrid);
    };
  }, []);

  const updateGalleryGrid = () => {
    setColumns(calcCols(window.innerWidth));
  };

  const renderResults = () =>
    results.map((item, idx) => {
      const imageURL = item.links[0].href;
      const imageData = item.data[0];
      return (
        <ImageListItem variant="masonry" key={idx} sx={{ width: '100%' }}>
          <Card imageData={imageData} imageURL={imageURL} />;
        </ImageListItem>
      );
    });

  const renderLoader = () => {
    return (
      <Grid container justifyContent="space-around" mt={4} spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <GhostyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <GhostyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <GhostyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <GhostyCard />
        </Grid>
      </Grid>
    );
  };

  const calcCols = (width) => {
    if (width <= BREAKPOINTS.mobile) {
      return 1;
    } else if (width <= BREAKPOINTS.tablet) {
      return 2;
    } else if (width <= BREAKPOINTS.laptop) {
      return 4;
    } else {
      return 5;
    }
  };

  if (!columns) {
    return renderLoader();
  }

  return (
    <Box>
      <ImageList variant="masonry" cols={columns} gap={8} sx={{ padding: '1em' }}>
        {renderResults()}
      </ImageList>
    </Box>
  );
};

export default Results;
