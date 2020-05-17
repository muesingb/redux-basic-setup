import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/*functional component*/
import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={configureStore} >
      <Navigator />
      {/* <TabNavigator /> */}
    </Provider>
  );
};

export default App;
