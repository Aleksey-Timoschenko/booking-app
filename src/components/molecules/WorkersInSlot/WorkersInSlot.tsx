import React, { FC } from 'react';
import {
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import List from '../List/List';

import { usePrepareWorkersInSlot } from '../../../hooks/slotsHooks';
import { useBasketActions } from '../../../hooks/basketHooks';

import './WorkersInSlot.scss';

interface IWorkersInSlotProps {
  slotId: number;
}

const WorkersInSlot: FC<IWorkersInSlotProps> = props => {
  const { slotId } = props;

  const { workersInSlot, prepared } = usePrepareWorkersInSlot(slotId);
  const {
    addItem,
    removeItem,
  } = useBasketActions();

  return (
    <List>
      {
        prepared
          ? (
            <div className={'workers-in-slot'}>
              {
                workersInSlot.map(worker => (
                  <FormControlLabel
                    key={worker.id}
                    label="Worker"
                    control={
                      <Checkbox
                        key={worker.id}
                        value={worker.id}
                        checked={false}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          const isWorkerSelected = event.target.checked;

                          isWorkerSelected
                            ? addItem({ slot_id: slotId, worker_id: worker.id })
                            : removeItem({ slot_id: slotId, worker_id: worker.id })
                        }}
                      />
                    }
                  />
                ))
              }
            </div>
          )
          : 'LOADING'
      }
    </List>
  )
};

export default WorkersInSlot;