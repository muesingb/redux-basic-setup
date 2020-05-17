import React from 'react';
import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={configureStore} >
      <ApplicationComponents />
    </Provider>
  );
};

export default App;
