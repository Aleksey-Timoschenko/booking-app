import { createSlice } from '@reduxjs/toolkit';

import { getAvailableWorkers } from '../actions/availableWorkersActions';
import {
  AVAILABLE_WORKER_ID_KEY,
  IAvailableWorker,
} from '../../utils/interfaces/availableWorkers';
import { getMapById } from '../../utils/helpers/arrayHelper';

type IAvailableWorkersById = { [key: string]: IAvailableWorker } | {};

interface IAvailableWorkersReducer {
  byId: IAvailableWorkersById;
  loading: boolean;
  error: boolean;
}

const initialState: IAvailableWorkersReducer = {
  byId: {},
  loading: false,
  error: false
};

const availableWorkersReducer = createSlice({
  name: 'availableWorkers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAvailableWorkers.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getAvailableWorkers.fulfilled, (state, { payload }) => {
      state.byId = getMapById({ array: payload, idTemplate: AVAILABLE_WORKER_ID_KEY });
      state.loading = false;
      state.error = false;
    })
    builder.addCase(getAvailableWorkers.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
});

export default availableWorkersReducer.reducer