
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store'; //Import the store
import News from './src/Containers/News/News' //Import the component file
import Navigation from './src/navigators/rootStack';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Navigation />
        </Provider>
    );
  }
}
