import { createSlice } from '@reduxjs/toolkit';

type IOrderListItem = { slot_id: number, worker_id: number };

interface IBasketReducer {
  orderList: IOrderListItem[] | [];
  loading: boolean;
  error: boolean;
}

const initialState: IBasketReducer = {
  orderList: [],
  loading: false,
  error: false,
}

const basketReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.orderList = [ ...state.orderList, payload ]
    },
    removeItem: (
      state,
      { payload: { slot_id: removedSlotId, worker_id: removedWorkerId } }
    ) => {
      state.orderList = state.orderList.filter(
        ({ slot_id, worker_id }) => slot_id === removedSlotId && worker_id === removedWorkerId
      )
    },
  },
});

export const actions = {
  addItem: basketReducer.actions.addItem,
  removeItem: basketReducer.actions.removeItem,
}

export default basketReducer.reducer;