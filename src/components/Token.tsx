import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  cursor: pointer;
`;

const StyledImageContainer = styled.div`
  margin-right: 1rem;
`;

const StyledSymbol = styled.div`
  color: lightgray;
`;

type Props = {
  name: string;
  symbol: string;
  logoURI: string;
};

const Token = ({ name, symbol, logoURI }: Props) => {
  return (
    <StyledWrapper>
      <StyledImageContainer>
        <img src={logoURI} alt={name} />
      </StyledImageContainer>
      <div>
        <div>{name}</div>
        <StyledSymbol>{symbol}</StyledSymbol>
      </div>
    </StyledWrapper>
  );
};

export default Token;
