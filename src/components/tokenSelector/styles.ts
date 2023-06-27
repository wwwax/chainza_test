import { styled } from '@mui/material/styles';

export const CustomWrapper = styled('div')(() => ({
  padding: '24px 8px',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#f5f6fc',
  borderRadius: '16px',

  '&:nth-child(1)': {
    marginBottom: '4px',
  },
}));

export const CustomInput = styled('input')(() => ({
  padding: '4px',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '24px',
  outline: 'none',

  '&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },

  '&::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
}));

export const CustomTokenSelect = styled('div')(() => ({
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f31d92',
  color: '#ffffff',
  borderRadius: '8px',
  cursor: 'pointer',
}));

export const CustomTokenInfo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const CustomDropdownImg = styled('img')(() => ({
  width: '2rem',
}));

export const CustomTokenImage = styled('img')(() => ({
  marginRight: '1rem',
}));
