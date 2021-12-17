import { useTypedSelector } from '../store/hooks';
import {
  selectSlots,
  selectWorkersInSlot
} from '../store/selectors/slotsSelectors';
import { ISlot } from '../utils/interfaces/slotsInterfaces';
import { IWorker } from '../utils/interfaces/workersInterfaces';

export const usePrepareSlots = (): {
  slots: ISlot[] | [],
  prepared: boolean,
} => {
  const { slots, prepared } = useTypedSelector(selectSlots);

  return ({
    slots,
    prepared,
  })
};

export const usePrepareWorkersInSlot = (slotId: number): {
  workersInSlot: IWorker[] | [],
  prepared: boolean,
} => {
  const { workersInSlot, prepared } = useTypedSelector(state => selectWorkersInSlot(state, slotId));

  return ({
    workersInSlot,
    prepared,
  })
}