import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
export default class HomeHotChannelTopView extends Component {
  static defaultProps = {
    data: ''
  };
  render() {
    return (
        <View style={styles.container}>
          {/* 左边 */}
          <View>
            <Text style={{color: '#rgb(110,110,110)',marginTop: 4}}>{this.props.data.mainTitle}</Text>
            <Text style={{color: 'gray',fontSize: 12}}>{this.props.data.deputyTitle}</Text>
            <Image source={{uri: 'icon_hot'}} style={{width: 40,height: 18,marginTop: 4}}></Image>
          </View>
          {/* 右边 */}
          <View style={{alignItems: 'center'}}>
            <Image source={{uri: this.props.data.entranceImgUrl}} style={{width: 60,height: 60}}></Image>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    marginLeft: 4,
    marginTop: 4,
    marginBottom: 4,
    flexDirection: 'row',
    width: width* 0.5 - 4,
    justifyContent: 'space-around'
  }
});
