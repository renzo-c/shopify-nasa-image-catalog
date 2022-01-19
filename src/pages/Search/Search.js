import React, { useState } from 'react';
import { SearchBar, Results, HeroImage } from '../../components';
import spacestagramHero from '../../assets/images/spacetagram.jpg';

const Search = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <HeroImage altDescription="spacestagram-hero" imageUrl={spacestagramHero} />
      <SearchBar results={results} setResults={setResults} />
      <Results results={results}/>
    </div>
  );
};

export default Search;
