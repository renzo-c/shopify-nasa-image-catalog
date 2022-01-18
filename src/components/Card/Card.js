import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Card as CardMUI,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Link
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import useStyles, { styles } from './card-styles';

const Card = ({ imageURL, imageData }) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);

  const { date_created, description, description_508, keywords, title, nasa_id } = imageData;
  const descriptionStd = description || description_508;

  const formatDate = (date) => new Date(date).toUTCString();

  return (
    <CardMUI sx={styles}>
      <CardHeader title={title} subheader={<Typography variant="caption" color="gray">{formatDate(date_created)}</Typography>} />
      <CardMedia component="img" image={imageURL} alt={descriptionStd} width="200" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {descriptionStd.length > 150 ? (
            <>
              {descriptionStd.substring(0, 150) + '...'}
              <Link href="#">Read More</Link>
            </>
          ) : (
            descriptionStd
          )}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {keywords && keywords.length ? keywords.map((keyword) => keyword) : ''}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon color="info" />
        </IconButton>
        <Box mx={1} />
        <Typography>{counter}</Typography>
      </CardActions>
    </CardMUI>
  );
};

export default Card;
