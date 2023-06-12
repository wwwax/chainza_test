import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: ModalState;
};

type ModalState = {
  isOpen: boolean;
  background: string;
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
    openModal: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isOpen: true,
          background: action.payload,
        },
      };
    },
    closeModal: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isOpen: false,
          background: action.payload,
        },
      };
    },
  },
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;
