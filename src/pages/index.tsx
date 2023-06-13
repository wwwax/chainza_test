'use client';

import styled from 'styled-components';

import TokenSelector from '../components/TokenSelector';
import Modal from '../components/Modal';

import { useAppSelector } from '@/redux/store';

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff5fb;
`;

const StyledContainerInner = styled.div`
  width: 40%;
  min-height: 300px;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid lightgrey;
  border-radius: 16px;
`;

const StyledTitle = styled.div`
  padding: 0 8px 16px;
  font-weight: bold;
`;

const Home: React.FC = () => {
  const isModalOpen = useAppSelector(
    (state) => state.modalReducer.value.isOpen
  );

  return (
    <StyledContainer>
      <StyledContainerInner>
        <StyledTitle>Swap</StyledTitle>
        <TokenSelector />
        <TokenSelector />
        {isModalOpen && <Modal />}
      </StyledContainerInner>
    </StyledContainer>
  );
};

export default Home;
