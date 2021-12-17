import { createAsyncThunk } from '@reduxjs/toolkit'

import { get } from '../../utils/services/apiService'
import { RESOURCE_URL } from '../../utils/constants/apiConstants';
import { IAvailableWorker } from '../../utils/interfaces/availableWorkers';

export const getAvailableWorkers = createAsyncThunk<IAvailableWorker[]>(
  'availableWorkers/getAvailableWorkers',
  async (_params, thunkAPI) => {
    try {
      const res = await get<IAvailableWorker[]>(RESOURCE_URL.AVAILABLE_WORKERS);

      return res
    } catch (error) {
      // Here we can pass particular error and handle it in the reducer as we want
      return thunkAPI.rejectWithValue(error)
    }
  })