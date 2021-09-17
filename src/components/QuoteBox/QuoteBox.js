import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Quote,
  Author,
  ButtonsSection,
  StyledButton,
} from './QuoteBox.styles';

const QuoteBox = () => {
  return (
    <Wrapper>
      <Quote>
        ksdljdflksdj dslkfjsdljlk sdlkfjsldkj sdlfkjsdlkfjsld lsdkjf lskdjfls
        lsdkjfls ljkdflkjs dljsdfls ljklsfdklj
      </Quote>
      <Author>kjdhjhdsa</Author>
      <ButtonsSection>
        <StyledButton className="new">Get New</StyledButton>
      </ButtonsSection>
    </Wrapper>
  );
};

export default QuoteBox;
