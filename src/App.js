import React, { useEffect } from 'react';
import { Wrapper, SearchBar, HeroImage } from './components';
import spacestagramHero from './assets/images/page-search-hero.jpg';

const App = () => {
  console.log(process.env.NODE_ENV);

  return (
    <Wrapper>
      <HeroImage altDescription="spacestagram-hero" imageUrl={spacestagramHero} />
      <SearchBar />
    </Wrapper>
  );
};

export default App;
