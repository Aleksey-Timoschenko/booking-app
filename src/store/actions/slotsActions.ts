import { createAsyncThunk } from '@reduxjs/toolkit'

import { get } from '../../utils/services/apiService'
import { RESOURCE_URL } from '../../utils/constants/apiConstants';
import { ISlot } from '../../utils/interfaces/slotsInterfaces';

export const getSlots = createAsyncThunk<ISlot[]>(
  'slots/getSlots',
  async (_params, thunkAPI) => {
    try {
      const res = await get<ISlot[]>(RESOURCE_URL.SLOTS);

      return res
    } catch (error) {
      // Here we can pass particular error and handle it in the reducer as we want
      return thunkAPI.rejectWithValue(error)
    }
  })