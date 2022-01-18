import React, { useState, useEffect } from 'react';
import useStyles from './searchBar-styles';
import { TextField, Grid, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import nasaAPI from '../../api';

const SearchBar = ({results, setResults}) => {
  const classes = useStyles();
  const [term, setTerm] = useState('');

  useEffect(() => {
    const callSearchAPI = async () => {
      const { data } = await nasaAPI.get('search', {
        params: {
          q: term,
          media_type: 'image'
        }
      });
      setResults(data.collection.items);
    };

    if (term && !results.length) {
      callSearchAPI;
    }

    const timeoutId = setTimeout(() => {
      if (term) {
        callSearchAPI();
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const onChangeValue = (e) => {
    const { value } = e.target;
    setTerm(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="searchInput"
          placeholder="Search Images"
          onChange={onChangeValue}
          value={term}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
