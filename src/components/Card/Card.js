import React, { useState, useEffect } from 'react';
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
import { wasImageLiked } from '../../assets/helperFunctions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ imageURL, imageData }) => {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);

  const { date_created, description, description_508, keywords, title, nasa_id } = imageData;
  const descriptionStd = description || description_508;

  useEffect(() => {
    if (wasImageLiked(nasa_id)) {
      setLiked(true);
    }
  });

  const formatDate = (date) => new Date(date).toUTCString();

  const onClickLike = () => {
    const isItemInLocalStorage = wasImageLiked(nasa_id);
    if (isItemInLocalStorage) {
      localStorage.removeItem(nasa_id);
      setLiked(false);
    } else {
      localStorage.setItem(nasa_id, true);
      setLiked(true);
    }
  };

  return (
    <CardMUI sx={styles} raised className={classes.root}>
      <CardHeader
        title={<Typography variant="h6">{title}</Typography>}
        subheader={
          <Typography variant="caption" color="gray">
            {formatDate(date_created)}
          </Typography>
        }
      />
      <div style={{ width: '100%' }}>
        <LazyLoadImage alt={descriptionStd} src={imageURL} width="100%" effect="blur" />
      </div>
      {/* <CardMedia component="img" image={imageURL} alt={descriptionStd} width="200" /> */}
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
        <Box mt={4}>
          <Typography variant="caption" color="text.secondary">
            {keywords && keywords.length ? keywords.map((keyword) => keyword) : ''}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" onClick={onClickLike}>
          <ThumbUpIcon color={liked ? 'info' : 'gray'} />
        </IconButton>
      </CardActions>
    </CardMUI>
  );
};

export default Card;
