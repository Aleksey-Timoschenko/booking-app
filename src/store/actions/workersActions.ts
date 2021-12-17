import { createAsyncThunk } from '@reduxjs/toolkit'

import { get } from '../../utils/services/apiService'
import { RESOURCE_URL } from '../../utils/constants/apiConstants';
import { IWorker } from '../../utils/interfaces/workersInterfaces';

export const getWorkers = createAsyncThunk<IWorker[]>(
  'workers/getWorkers',
  async (_params, thunkAPI) => {
    try {
      const res = await get<IWorker[]>(RESOURCE_URL.WORKERS);

      return res
    } catch (error) {
      // Here we can pass particular error and handle it in the reducer as we want
      return thunkAPI.rejectWithValue(error)
    }
  })