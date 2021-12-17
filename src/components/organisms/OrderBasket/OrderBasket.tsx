import React, { FC, useState } from 'react';

import IconButton from '../../molecules/IconButton/IconButton';
import SlidePanel from '../../molecules/SlidePanel/SlidePanel';

import { ICONS_NAMES } from '../../../utils/constants/commonConstants';

interface IOrderBasketProps {

}

const OrderBasket: FC<IOrderBasketProps> = props => {
  const { } = props;

  const [ isBasketOpened, toggleBasketPanel ] = useState<boolean>(false);

  const onToggleBasket = () => { toggleBasketPanel(prevValue => !prevValue) };

  return (
    <section>
      <IconButton
        iconName={ICONS_NAMES.SHOPPING_CART}
        onClick={onToggleBasket}
      />

      <SlidePanel
        isOpened={isBasketOpened}
        onOpen={onToggleBasket}
        onClose={onToggleBasket}
      >
        BASKET CONTENT
      </SlidePanel>
    </section>
  )
};

export default OrderBasket;