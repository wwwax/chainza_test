'use client';

import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { openModal } from '@/redux/features/modalSlice';
import { AppDispatch } from '@/redux/store';

const StyledWrapper = styled.div`
  padding: 24px 8px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fc;
  border-radius: 16px;

  &:nth-child(2) {
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

const TokenSelector: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenModal = useCallback(() => {
    dispatch(openModal());
  }, [dispatch]);

  return (
    <StyledWrapper>
      <StyledInput type="number" placeholder="0" />
      <StyledTokenSelect onClick={handleOpenModal}>
        <div>Select Token</div>
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
