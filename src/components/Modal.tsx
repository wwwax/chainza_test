import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import TokenList from './TokenList';

import { AppDispatch } from '@/redux/store';
import { closeModal } from '@/redux/features/modalSlice';

const StyledModalBackdrop = styled.div`
  min-height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.5);
`;

const StyledModalContent = styled.div`
  padding: 32px;
  background-color: #ffffff;
  width: 25%;
  height: 80%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledCloseButton = styled.button`
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
`;

const Modal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <StyledModalBackdrop>
      <StyledModalContent>
        <StyledModalHeader>
          <h1>Select a token</h1>
          <StyledCloseButton onClick={handleCloseModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </StyledCloseButton>
        </StyledModalHeader>
        <hr />
        <TokenList />
      </StyledModalContent>
    </StyledModalBackdrop>
  );
};

export default Modal;
