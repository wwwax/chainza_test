import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  value: ModalState;
};

type ModalState = {
  isOpen: boolean;
};

const initialState = {
  value: {
    isOpen: false,
    background: 'orange',
  } as ModalState,
} as InitialState;

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: () => {
      return {
        value: {
          isOpen: true,
        },
      };
    },
    closeModal: () => {
      return {
        value: {
          isOpen: false,
        },
      };
    },
  },
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;
