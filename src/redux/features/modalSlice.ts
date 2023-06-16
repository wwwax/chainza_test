import { createSlice } from '@reduxjs/toolkit';

import { TokenData } from '@/model';

type InitialState = {
  value: ModalState;
};

type ModalState = {
  isModalOpen: boolean;
  tokenDirection: string;
  tokenFrom: TokenData;
  tokenTo: TokenData;
};

const initialState = {
  value: {
    isModalOpen: false,
    tokenDirection: '',
    tokenFrom: {},
    tokenTo: {},
  } as ModalState,
} as InitialState;

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      return {
        value: {
          ...state.value,
          isModalOpen: true,
          tokenDirection: payload,
        },
      };
    },
    closeModal: (state) => {
      return {
        value: {
          ...state.value,
          isModalOpen: false,
          tokenDirection: '',
        },
      };
    },
    selectTokenFrom: (state, { payload }) => {
      return {
        value: {
          ...state.value,
          isModalOpen: false,
          tokenFrom: payload,
        },
      };
    },
    selectTokenTo: (state, { payload }) => {
      return {
        value: {
          ...state.value,
          isModalOpen: false,
          tokenTo: payload,
        },
      };
    },
  },
});

export const { openModal, closeModal, selectTokenFrom, selectTokenTo } =
  modal.actions;

export default modal.reducer;
