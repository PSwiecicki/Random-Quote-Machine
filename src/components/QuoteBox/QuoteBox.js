import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Quote,
  Author,
  ButtonsSection,
  StyledButton,
} from './QuoteBox.styles';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getTweetLink = () => {
    const quoteAsLink = quote.replace(' ', '%20');
    const authorAsLink = author.replace(' ', '$20');
    return `https://twitter.com/intent/tweet?text="${quoteAsLink}"%20-%20${authorAsLink}&hashtags=GoodQuoteForDay`;
  };

  const getQuote = () => {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then((response) => response.json())
      .then(({ data }) => {
        setQuote(data[0].quoteText);
        setAuthor(data[0].quoteAuthor);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
      <ButtonsSection>
        <StyledButton as="a" class="twitter-share-button" href={getTweetLink()}>
          Tweet
        </StyledButton>
        <StyledButton className="new" onClick={() => getQuote()}>
          Get New
        </StyledButton>
      </ButtonsSection>
    </Wrapper>
  );
};

export default QuoteBox;
