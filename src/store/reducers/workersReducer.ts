import { createSlice } from '@reduxjs/toolkit';

import { getWorkers } from '../actions/workersActions';
import { IWorker } from '../../utils/interfaces/workersInterfaces';
import {
  getIdsArray,
  getMapById
} from '../../utils/helpers/arrayHelper';

type IWorkersById = { [key: string]: IWorker } | {};

interface IWorkersReducer {
  byId: IWorkersById;
  list: number[] | [];
  loading: boolean;
  error: boolean;
}

const initialState: IWorkersReducer = {
  byId: {},
  list: [],
  loading: false,
  error: false
};

const workersReducer = createSlice({
  name: 'workers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorkers.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getWorkers.fulfilled, (state, { payload }) => {
      state.byId = getMapById({ array: payload });
      state.list = getIdsArray({ array: payload });
      state.loading = false;
      state.error = false;
    })
    builder.addCase(getWorkers.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
});

export default workersReducer.reducer