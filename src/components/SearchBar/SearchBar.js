import React, { useState, useEffect } from 'react';
import useStyles from './searchBar-styles';
import { TextField, Grid, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import nasaAPI from '../../api';
import { Card } from '../';

const SearchBar = () => {
  const classes = useStyles();
  const [term, setTerm] = useState('apollo');
  const [results, setResults] = useState([]);
console.log({results})
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

    if (term) {
      callSearchAPI();
    }
  }, [term]);

  const onChangeValue = (e) => {
    const { value } = e.target;
    setTerm(value);
  };

  const renderResults = () =>
    results.map((item, idx) => {
      const imageURL = item.links[0].href;
      const imageData = item.data[0];
      return <Card key={idx} imageData={imageData} imageURL={imageURL} />;
    });

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
      {renderResults()}
    </Grid>
  );
};

export default SearchBar;
