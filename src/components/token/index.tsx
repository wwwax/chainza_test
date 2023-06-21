import React from 'react';
import { useDispatch } from 'react-redux';

import {
  closeModal,
  selectTokenFrom,
  selectTokenTo,
} from '@/redux/features/modalSlice';

import { AppDispatch, useAppSelector } from '@/redux/store';
import { TokenData } from '@/redux/model';

import {
  CustomWrapper,
  CustomImageContainer,
  CustomImg,
  CustomSymbol,
} from './styles';

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
    <CustomWrapper onClick={handleTokenSelect}>
      <CustomImageContainer>
        <CustomImg src={token.logoURI} alt={token.name} />
      </CustomImageContainer>
      <div>
        <div>{token.name}</div>
        <CustomSymbol>{token.symbol}</CustomSymbol>
      </div>
    </CustomWrapper>
  );
};

export default Token;
