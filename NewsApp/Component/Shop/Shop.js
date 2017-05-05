import React, { Component } from 'react';
import CommonNaBar from '../Main/CommonNaBar'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  AlertIOS
} from 'react-native';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://www.baidu.com'
    };
    AlertIOS.alert('抓不到接口😢😢😢');
  }



  render() {
    return (
      <View style={styles.container}>
        {/* 导航栏 */}
        <CommonNaBar
          title='商家'
          popToUp={() => {}}
        />

        <WebView
          automaticallyAdjustContentInsets={true}
          source={{uri: this.state.url,method: 'GET'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
