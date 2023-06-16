import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  closeModal,
  selectTokenFrom,
  selectTokenTo,
} from '@/redux/features/modalSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { TokenData } from '@/model';

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
  token: TokenData;
};

const Token = ({ token }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const currentTokenDirection = useAppSelector(
    (state) => state.modalReducer.value.tokenDirection
  );

  const handleTokenSelect = () => {
    if (currentTokenDirection === 'from') {
      dispatch(selectTokenFrom(token));
      dispatch(closeModal());
    } else {
      dispatch(selectTokenTo(token));
      dispatch(closeModal());
    }
  };

  return (
    <StyledWrapper onClick={handleTokenSelect}>
      <StyledImageContainer>
        <StyledImg src={token.logoURI} alt={token.name} />
      </StyledImageContainer>
      <div>
        <div>{token.name}</div>
        <StyledSymbol>{token.symbol}</StyledSymbol>
      </div>
    </StyledWrapper>
  );
};

export default Token;
