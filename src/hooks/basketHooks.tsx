import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { actions } from '../store/reducers/basketReducer';

export const useBasketActions = () => {
  const dispatch = useDispatch();

  return ({
    addItem: bindActionCreators(actions.addItem, dispatch),
    removeItem: bindActionCreators(actions.removeItem, dispatch),
  })
}