'use client';

import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { openModal, changeInputFromValue } from '@/redux/features/modalSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';

import {
  CustomWrapper,
  CustomInput,
  CustomTokenSelect,
  CustomTokenInfo,
  CustomDropdownImg,
  CustomTokenImage,
} from './styles';

interface Props {
  direction: string;
}

const TokenSelector: React.FC<Props> = ({ direction }) => {
  const dispatch = useDispatch<AppDispatch>();

  const tokenFrom = useAppSelector(
    (state) => state.modalReducer.value.tokenFrom
  );

  const tokenTo = useAppSelector((state) => state.modalReducer.value.tokenTo);

  const currentToken = direction === 'from' ? tokenFrom : tokenTo;

  const tokenFromValue = useAppSelector(
    (state) => state.modalReducer.value.tokenFromValue
  );

  const tokenToValue = useAppSelector(
    (state) => state.modalReducer.value.tokenToValue
  );

  const handleOpenModal = useCallback(() => {
    dispatch(openModal(direction));
  }, [dispatch, direction]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (direction === 'from') {
        dispatch(changeInputFromValue(e.target.value));
      }
    },
    [dispatch, direction]
  );

  return (
    <CustomWrapper>
      <CustomInput
        type="number"
        placeholder="0"
        onChange={handleInputChange}
        value={direction === 'from' ? tokenFromValue : tokenToValue}
      />
      <CustomTokenSelect onClick={handleOpenModal}>
        <CustomTokenInfo>
          {currentToken.logoURI && (
            <CustomTokenImage
              src={currentToken.logoURI}
              alt={currentToken.name}
            />
          )}
          <span>{currentToken.name ? currentToken.name : 'Select token'}</span>
        </CustomTokenInfo>
        <CustomDropdownImg src="/dropdown.svg" alt="dropdown-arrow" />
      </CustomTokenSelect>
    </CustomWrapper>
  );
};

export default TokenSelector;
