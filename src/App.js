import React from 'react';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import ClassComponent from './components/UserClassComponent'
import FunctionalComponent from './components/EventFunctionalComponent'

const App = () => {

  return (
    <Provider store={configureStore} >
        <ClassComponent />
        <FunctionalComponent />
    </Provider>
  );
};

export default App;