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

export default class HomeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url
    };
  }



  render() {
    return (
      <View style={styles.container}>
        {/* 导航栏 */}
        <CommonNaBar
          title='详情'
          leftImage='icon_camera_back_highlighted'
          rightImage='icon_shop_search'
          popToUp={() => this.props.navigator.pop()}
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
