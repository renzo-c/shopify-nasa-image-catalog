import React from 'react';
import { Card } from '../';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Results = ({ results }) => {
  const renderResults = () =>
    results.map((item, idx) => {
      const imageURL = item.links[0].href;
      const imageData = item.data[0];
      return (
        <ImageListItem variant="masonry" cols={3} gap={8}>
          <Card key={idx} imageData={imageData} imageURL={imageURL} />;
        </ImageListItem>
      );
    });

  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        {renderResults()}
      </ImageList>
    </Box>
  );
};

export default Results;
