import { FC } from 'react';

import Slots from '../../organisms/Slots/Slots';

import './AppMain.scss';

interface IAppMain {

}

const AppMain: FC<IAppMain> = props => {
  const {} = props;

  return (
    <main className={'app-main'}>
      <div className={'app-main__slots'}>
        <Slots />
      </div>
    </main>
  )
};

export default AppMain;

