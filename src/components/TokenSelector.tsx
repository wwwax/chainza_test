'use client';

import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { openModal, changeInputFromValue } from '@/redux/features/modalSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';

const StyledWrapper = styled.div`
  padding: 24px 8px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fc;
  border-radius: 16px;

  &:nth-child(1) {
    margin-bottom: 4px;
  }
`;

const StyledInput = styled.input`
  padding: 4px;
  border: none;
  background: transparent;
  font-size: 24px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledTokenSelect = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  background: #f31d92;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;

  & svg {
    margin-left: 4px;
    fill: #fff;
  }
`;

const StyledTokenInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }
`;

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
    <StyledWrapper>
      <StyledInput
        type="number"
        placeholder="0"
        onChange={handleInputChange}
        value={direction === 'from' ? tokenFromValue : tokenToValue}
      />
      <StyledTokenSelect onClick={handleOpenModal}>
        <StyledTokenInfo>
          {currentToken.logoURI && (
            <img src={currentToken.logoURI} alt={currentToken.name} />
          )}
          <span>{currentToken.name ? currentToken.name : 'Select token'}</span>
        </StyledTokenInfo>
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path>
        </svg>
      </StyledTokenSelect>
    </StyledWrapper>
  );
};

export default TokenSelector;
