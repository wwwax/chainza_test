'use client';

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
  background: #f31d92;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
`;

const TokenSelector: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledWrapper>
      <StyledInput type="number" placeholder="0" />
      <StyledTokenSelect onClick={openModal}>Select Token</StyledTokenSelect>
    </StyledWrapper>
  );
};

export default TokenSelector;
