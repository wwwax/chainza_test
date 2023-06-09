import { createSlice } from '@reduxjs/toolkit';

import { TokenData } from '@/redux/model';

type InitialState = {
  value: ModalState;
};

type ModalState = {
  isModalOpen: boolean;
  tokenDirection: string;
  tokenFrom: TokenData;
  tokenTo: TokenData;
  tokenFromValue: number;
  tokenToValue: number;
};

const initialState = {
  value: {
    isModalOpen: false,
    tokenDirection: '',
    tokenFrom: {},
    tokenTo: {},
    tokenFromValue: 0,
    tokenToValue: 0,
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
    changeInputFromValue: (state, { payload }) => {
      return {
        value: {
          ...state.value,
          tokenFromValue: payload,
        },
      };
    },
  },
});

export const {
  openModal,
  closeModal,
  selectTokenFrom,
  selectTokenTo,
  changeInputFromValue,
} = modal.actions;

export default modal.reducer;
