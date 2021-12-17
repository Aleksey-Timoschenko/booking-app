import { createSlice } from '@reduxjs/toolkit';

import { getSlots } from '../actions/slotsActions';
import { ISlot } from '../../utils/interfaces/slotsInterfaces';
import {
  getIdsArray,
  getMapById
} from '../../utils/helpers/arrayHelper';

type ISlotsById = { [key: string]: ISlot } | {};

interface ISlotsReducer {
  byId: ISlotsById;
  list: number[] | [];
  loading: boolean;
  error: boolean;
}

const initialState: ISlotsReducer = {
  byId: {},
  list: [],
  loading: false,
  error: false
};

const slotsReducer = createSlice({
  name: 'slots',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSlots.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getSlots.fulfilled, (state, { payload }) => {
      state.byId = getMapById({ array: payload });
      state.list = getIdsArray({ array: payload });
      state.loading = false;
      state.error = false;
    })
    builder.addCase(getSlots.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
});

export default slotsReducer.reducer