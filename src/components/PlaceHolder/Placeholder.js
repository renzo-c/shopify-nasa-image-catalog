import React from 'react';
import { Skeleton } from '@mui/material';

const PlaceHolder = () => {
  return (
    <div style={{ padding: '1em', position: 'relative' }}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height="300px"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};
export default PlaceHolder;