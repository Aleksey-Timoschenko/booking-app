import { useDispatch, batch } from 'react-redux';
import { useEffect } from 'react';

import { getSlots } from '../store/actions/slotsActions';
import { getWorkers } from '../store/actions/workersActions';
import { getAvailableWorkers } from '../store/actions/availableWorkersActions';

export const useLoadInitialAppData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(getSlots());
      dispatch(getWorkers());
      dispatch(getAvailableWorkers());
    })
  }, [ dispatch ]);
}