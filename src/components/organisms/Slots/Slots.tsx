import { FC } from 'react';

import List from '../../molecules/List/List';
import SlotItem from '../../molecules/SlotItem/SlotItem';

import { usePrepareSlots } from '../../../hooks/slotsHooks';

import './Slots.scss';

interface ISlotsProps {

}

const Slots: FC<ISlotsProps> = () => {
  const { slots, prepared } = usePrepareSlots();

  return (
    <section className={'slots'}>
      <List>
        {
          prepared
            ? slots.map(slot => (
              <SlotItem
                key={slot.id}
                slotId={slot.id}
                time={slot.localisedTime}
                price={slot.price}
              />
            ))
            : 'LOADING'
        }
      </List>
    </section>
  )
};

export default Slots;

