/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './Component/Main/Main';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewsApp extends Component {
  render() {
    return (
      <Main />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('NewsApp', () => NewsApp);
