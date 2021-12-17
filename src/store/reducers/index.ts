import { combineReducers } from '@reduxjs/toolkit'

import slotsReducer from './slotsReducer';
import workersReducer from './workersReducer';
import availableWorkersReducer from './availableWorkersReducer';
import basketReducer from './basketReducer';

const rootReducer = combineReducers({
  slots: slotsReducer,
  workers: workersReducer,
  availableWorkers: availableWorkersReducer,
  basket: basketReducer,
} );

export default rootReducer;