import React, { useState, useEffect } from 'react';
import {
  Alert,
  Box,
  Card as CardMUI,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Snackbar,
  Typography,
  Link
} from '@mui/material';
import Dialog from '../Dialog';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import useStyles, { styles } from './card-styles';
import { wasImageLiked, textClamp } from '../../assets/helperFunctions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Skeleton } from '@mui/material';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

const Card = ({ imageURL, imageData }) => {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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

  const onClickShare = () => {
    navigator.clipboard.writeText(imageURL);
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <CardMUI sx={styles} raised className={classes.root}>
      <CardHeader
        title={<Typography variant="h6">{textClamp(title, 19)}</Typography>}
        subheader={
          <Typography variant="caption" color="gray">
            {formatDate(date_created)}
          </Typography>
        }
      />
      <div style={{ width: '100%' }}>
        {imageLoaded ? null : <PlaceHolder />}
        <LazyLoadImage
          alt={descriptionStd}
          src={imageURL}
          afterLoad={() => setImageLoaded(true)}
          width="100%"
          effect="blur"
        />
      </div>
      {/* <CardMedia component="img" image={imageURL} alt={descriptionStd} width="200" /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {descriptionStd.length > 150 ? (
            <Typography>
              {descriptionStd.substring(0, 150) + '... '}
              <Dialog title={title} description={descriptionStd}>
                {(props) => {
                  return (
                    <Link onClick={props.cb} style={{ cursor: 'pointer' }}>
                      More
                    </Link>
                  );
                }}
              </Dialog>
            </Typography>
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
      <CardActions style={{ display: 'flex', justifyContent: 'space-between', width: 'inherit' }}>
        <Box>
          <IconButton aria-label="add to favorites" onClick={onClickLike}>
            <ThumbUpIcon color={liked ? 'info' : 'gray'} />
          </IconButton>
          <IconButton aria-label="add to favorites" onClick={onClickShare}>
            <ShareIcon />
          </IconButton>
        </Box>
        <Dialog dialogLabel="Read More" title={title} description={descriptionStd} />
      </CardActions>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert elevetion={6} variant="filled" severity="success">
          Image link copied!
        </Alert>
      </Snackbar>
    </CardMUI>
  );
};

export default Card;
