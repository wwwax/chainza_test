'use client';

import React from 'react';

import TokenSelector from '../tokenSelector';
import Modal from '../modal';
import SwapButton from '../swapButton';

import { useAppSelector } from '@/redux/store';

import {
  CustomContainer,
  CustomContainerInner,
  CustomTitle,
  CustomTokenSelectorWrapper,
} from './styles';

const App: React.FC = () => {
  const isModalOpen = useAppSelector(
    (state) => state.modalReducer.value.isModalOpen
  );

  return (
    <CustomContainer>
      <CustomContainerInner>
        <CustomTitle>Swap</CustomTitle>
        <CustomTokenSelectorWrapper>
          <TokenSelector direction="from" />
          <TokenSelector direction="to" />
          <SwapButton />
        </CustomTokenSelectorWrapper>
        {isModalOpen && <Modal />}
      </CustomContainerInner>
    </CustomContainer>
  );
};

export default App;
