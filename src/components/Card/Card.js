import React from 'react';
import {
  Card as CardMUI,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Link
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles, { styles } from './card-styles';

const Card = ({ imageURL, imageData }) => {
  const classes = useStyles();
  const { date_created, description, description_508, keywords, title, nasa_id } = imageData;
  const descriptionStd = description || description_508;
  return (
    <CardMUI sx={styles.cardMUI}>
      <CardHeader title={title} subheader={date_created} />
      <CardMedia component="img" image={imageURL} alt={descriptionStd} width="200" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {descriptionStd.length > 150 ? (
            <>
              {descriptionStd.substring(0, 150) + '...'}
              <Link>Read More</Link>
            </>
          ) : (
            descriptionStd
          )}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {keywords.map((keyword) => keyword)}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </CardMUI>
  );
};

export default Card;
