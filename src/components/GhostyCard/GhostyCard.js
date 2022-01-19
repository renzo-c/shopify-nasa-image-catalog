import React from 'react';
import { Card, CardHeader, CardContent, IconButton, Skeleton } from '@mui/material';

const GhostyCard = () => {
  return (
    <Card style={{height: "300px"}}>
      <CardHeader
        title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

      <CardContent>
        <>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </>
      </CardContent>
    </Card>
  );
};

export default GhostyCard;
