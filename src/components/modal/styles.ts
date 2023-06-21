import { styled } from '@mui/material/styles';

export const CustomModalBackdrop = styled('div')(() => ({
  minHeight: '100vh',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(128, 128, 128, 0.5)',
}));

export const CustomModalContent = styled('div')(() => ({
  padding: '32px',
  backgroundColor: '#ffffff',
  width: '30%',
  height: '80%',
  overflowX: 'hidden',
  overflowY: 'scroll',
}));

export const CustomModalHeader = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  background: '#fff',
  width: '30%',
  padding: '2rem',
}));

export const CustomCloseButton = styled('button')(() => ({
  border: 'none',
  padding: 0,
  background: 'none',
  cursor: 'pointer',
}));

export const CustomCloseImage = styled('img')(() => ({
  width: '2rem',
}));
