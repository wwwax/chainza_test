import { styled } from '@mui/material/styles';

export const CustomButton = styled('button')(() => ({
  width: '2rem',
  height: '2rem',
  backgroundColor: '#ebeefb',
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  right: '50%',
  transform: 'translate(0, -50%)',
  border: '4px solid #fff',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.5rem',
  cursor: 'pointer',
}));

export const CustomImage = styled('img')(() => ({
  width: '2rem',
}));
