import React from 'react';
import { Search } from './pages';
import { Wrapper } from './components';

const App = () => {
  console.log(process.env.NODE_ENV);

  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
};

export default App;
