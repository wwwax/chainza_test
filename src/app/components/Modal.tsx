import styled from 'styled-components';

const StyledModalBackdrop = styled.div`
  min-height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: pink;
`;

const StyledModalContent = styled.div`
  padding: 32px;
  border: 2px solid blue;
`;

interface Props {
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ closeModal }) => {
  return (
    <StyledModalBackdrop>
      <StyledModalContent>
        <h1>Modal</h1>
        <button onClick={closeModal}>Close</button>
      </StyledModalContent>
    </StyledModalBackdrop>
  );
};

export default Modal;
