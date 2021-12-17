import React from 'react';

import AppHeader from '../../templates/AppHeader/AppHeader';
import AppMain from '../../templates/AppMain/AppMain';
import AppFooter from '../../templates/AppFooter/AppFooter';

import { useLoadInitialAppData } from '../../../hooks/appHooks';

import './App.scss';

function App() {
  useLoadInitialAppData();

  return (
    <div className='application'>
      <div className='application__header'>
        <AppHeader />
      </div>
      <div className='application__main-content'>
        <AppMain />
      </div>
      <div className='application__footer'>
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
