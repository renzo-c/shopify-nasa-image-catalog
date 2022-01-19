import React, { useState, useEffect } from 'react';
import { Card } from '../';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { BREAKPOINTS } from '../../assets/constants';

const Results = ({ results }) => {
  const [columns, setColumns] = useState(null);

  useEffect(() => {
    window.addEventListener('resize', updateGalleryGrid);
    window.addEventListener('load', updateGalleryGrid);
    return () => {
      window.removeEventListener('resize', updateGalleryGrid)
      window.removeEventListener('load', updateGalleryGrid)
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
        <ImageListItem variant="masonry" key={idx} cols={3} gap={8} sx={{ width: '100%' }}>
          <Card imageData={imageData} imageURL={imageURL} />;
        </ImageListItem>
      );
    });

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
    return <div>...Loading</div>;
  }

  return (
    <Box>
      <ImageList variant="masonry" cols={columns} gap={8} sx={{padding: "1em"}}>
        {renderResults()}
      </ImageList>
    </Box>
  );
};

export default Results;
