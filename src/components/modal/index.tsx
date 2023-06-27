import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import TokenList from '../tokenList';

import { AppDispatch } from '@/redux/store';
import { closeModal } from '@/redux/features/modalSlice';

import {
  CustomModalBackdrop,
  CustomModalContent,
  CustomModalHeader,
  CustomCloseButton,
  CustomCloseImage,
} from './styles';

const Modal: React.FC = () => {
  return (
    <CustomModalBackdrop>
      <ModalHeader />
      <CustomModalContent>
        <TokenList />
      </CustomModalContent>
    </CustomModalBackdrop>
  );
};

const ModalHeader = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <CustomModalHeader>
      <h1>Select a token</h1>
      <CustomCloseButton onClick={handleCloseModal}>
        <CustomCloseImage src="/close.svg" alt="close" />
      </CustomCloseButton>
    </CustomModalHeader>
  );
};

export default Modal;
