export const AVAILABLE_WORKER_ID_KEY = 'slot_id';

export interface IAvailableWorker {
  [AVAILABLE_WORKER_ID_KEY]: number;
  availableWorker_ids: number[];
}