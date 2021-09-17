import React from 'react';
import { Wrapper, StyledHeader } from './App.styles';
import QuoteBox from 'components/QuoteBox/QuoteBox';

function App() {
  return (
    <Wrapper>
      <StyledHeader>
        <h1>Random Quote Machine</h1>
      </StyledHeader>
      <QuoteBox />
    </Wrapper>
  );
}

export default App;
