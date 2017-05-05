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
      url: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594&utm_term=6.6&utm_source=AppStore&latlng=23.134643%2C113.373951&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&userid=160495643&utm_medium=iphone&movieBundleVersion=100&version_name=6.6&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.429482&utm_campaign=AgroupBgroupD100H0&__skno=7486F945-8EC1-41B1-9EDC-C9562F04B760&__skcy=NR8eXbF1J1yURHvLvYJrgy3Wnhk%3D&ci=20&__vhost=api.mobile.meituan.com&client=iphone'
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
