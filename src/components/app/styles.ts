import { styled } from '@mui/material/styles';

export const CustomContainer = styled('div')(() => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff5fb',
}));

export const CustomContainerInner = styled('div')(() => ({
  width: '40%',
  minHeight: '300px',
  padding: '16px',
  backgroundColor: '#ffffff',
  border: '1px solid lightgrey',
  borderRadius: '16px',
}));

export const CustomTitle = styled('div')(() => ({
  padding: '0 8px 16px',
  fontWeight: 'bold',
}));

export const CustomTokenSelectorWrapper = styled('div')(() => ({
  position: 'relative',
}));
