import styled from 'styled-components';

const StyledButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: #ebeefb;
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 50%;
  transform: translate(0, -50%);
  border: 4px solid #fff;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const SwapButton = () => {
  return (
    <StyledButton type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0D111C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </StyledButton>
  );
};

export default SwapButton;
