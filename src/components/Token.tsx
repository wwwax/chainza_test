import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { closeModal } from '@/redux/features/modalSlice';
import { AppDispatch } from '@/redux/store';

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

const StyledImg = styled.img`
  width: 32px;
  height: auto;
`;

type Props = {
  name: string;
  symbol: string;
  logoURI: string;
};

const Token = ({ name, symbol, logoURI }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleTokenSelect = () => {
    dispatch(closeModal());
  };

  return (
    <StyledWrapper onClick={handleTokenSelect}>
      <StyledImageContainer>
        <StyledImg src={logoURI} alt={name} />
      </StyledImageContainer>
      <div>
        <div>{name}</div>
        <StyledSymbol>{symbol}</StyledSymbol>
      </div>
    </StyledWrapper>
  );
};

export default Token;
