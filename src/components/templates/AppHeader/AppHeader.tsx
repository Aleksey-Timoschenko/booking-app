import React, { FC } from 'react';

import OrderBasket from '../../organisms/OrderBasket/OrderBasket';

import './AppHeader.scss';

interface IAppHeader {

}

const AppHeader: FC<IAppHeader> = props => {
  const {} = props;

  return (
    <header className={'app-header'}>
      <OrderBasket />
    </header>
  )
};

export default AppHeader;

