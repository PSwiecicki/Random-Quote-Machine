import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  height: 300px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 20px;
  background-color: #333333;
  padding: 20px;
  flex-direction: column;
`;

export const Quote = styled.p`
  text-align: justify;
  color: #ff8519;
  font-size: 1.2rem;
`;

export const Author = styled.p`
  color: #de7c26;
  align-self: flex-end;
`;

export const ButtonsSection = styled.p`
  justify-self: flex-end;
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  .new {
    grid-column: -3 / -1;
  }
`;

export const StyledButton = styled.button`
  border: 3px solid #ff8519;
  color: #ff8519;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  background-color: #444444;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    background-color: #ff8519;
    color: #333333;
  }
`;
