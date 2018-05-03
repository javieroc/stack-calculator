import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './Main';
import reducers from './reducers';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
