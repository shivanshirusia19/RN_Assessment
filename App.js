import React, {Component} from 'react';
import {} from 'react-native';
import {Provider} from 'react-redux';
import BottomNavig from './src/Components/navigation/Index';
import store from './src/Components/services/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BottomNavig />
      </Provider>
    );
  }
}
