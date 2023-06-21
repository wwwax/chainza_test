import { styled } from '@mui/material/styles';

export const CustomWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  margin: '0 0 0.5rem 0',
  cursor: 'pointer',
}));

export const CustomImageContainer = styled('div')(() => ({
  marginRight: '1rem',
}));

export const CustomSymbol = styled('div')(() => ({
  color: 'lightgray',
}));

export const CustomImg = styled('img')(() => ({
  width: '32px',
  height: 'auto',
}));
