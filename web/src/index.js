import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from './store'
import App from './App';

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
