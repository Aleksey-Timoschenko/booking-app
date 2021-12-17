import { createSelector } from 'reselect';

import { IWorker } from '../../utils/interfaces/workersInterfaces';
import { ISlot } from '../../utils/interfaces/slotsInterfaces';

import { RootState } from '../index';

export const selectSlots = createSelector(
  (state: RootState) => state.slots.list,
  (state: RootState) => state.slots.byId,
  (state: RootState) => !state.slots.loading && !state.slots.error,
  (slotsIdsList, slotsByIds, slotsPrepared): {
    slots: ISlot[] | [],
    prepared: boolean,
  } => {
    if (slotsPrepared) {
      return ({
        // @ts-ignore
        slots: slotsIdsList.map(slotId => slotsByIds[slotId]),
        prepared: slotsPrepared
      })
    }

    return ({
      slots: [],
      prepared: slotsPrepared
    })
  }
);

export const selectWorkersInSlot = createSelector(
  (state: RootState, slotId: number) => slotId,
  (state: RootState) => state.workers.byId,
  (state: RootState) => !state.workers.loading && !state.workers.error,
  (state: RootState) => state.availableWorkers.byId,
  (state: RootState) => !state.availableWorkers.loading && !state.availableWorkers.error,
  (slotId, workersByIds, workersPrepared, availableWorkersByIds, availableWorkersPrepared): {
    workersInSlot: IWorker[] | [],
    prepared: boolean,
  } => {
    const dataPrepared = workersPrepared && availableWorkersPrepared;

    if (dataPrepared) {
      return ({
        // @ts-ignore
        workersInSlot: availableWorkersByIds[slotId].availableWorker_ids.map(aWorkerId => workersByIds[aWorkerId]),
        prepared: dataPrepared
      })
    }

    return ({
      workersInSlot: [],
      prepared: dataPrepared,
    })
  }
)