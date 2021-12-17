import React, {
  FC,
  useState,
} from 'react';
import {
  Collapse,
  ListItemButton,
} from '@mui/material';

import Icon from '../../atoms/Icon/Icon';
import WorkersInSlot from '../WorkersInSlot/WorkersInSlot';

import { ICONS_NAMES } from '../../../utils/constants/commonConstants';

interface ISlotItemProps {
  slotId: number,
  time: string,
  price: string,
}

const SlotItem: FC<ISlotItemProps> = props => {
  const { time, price, slotId } = props;

  const [isSlotOpened, toggleSlotItem] = useState<boolean>(false);

  const onSlotItemClick = () => {
    toggleSlotItem(prevValue => !prevValue);
  };

  const toggleIconName = isSlotOpened
    ? ICONS_NAMES.EXPAND_LESS
    : ICONS_NAMES.EXPAND_MORE

  return (
    <React.Fragment>
      <ListItemButton onClick={onSlotItemClick}>
        <div>
          <span>{ time }</span>
          <span>{ price }</span>
        </div>
        <Icon iconName={toggleIconName} />
      </ListItemButton>
      <Collapse
        in={isSlotOpened}
        timeout="auto"
        unmountOnExit
      >
        <WorkersInSlot slotId={slotId} />
      </Collapse>
    </React.Fragment>
  )
};

export default React.memo(SlotItem);