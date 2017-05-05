import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
export default class HomeHotChannelBottomView extends Component {
  static defaultProps = {
    data: ''
  };
  render() {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => AlertIOS.alert(this.props.data.mainTitle)}>
        <View style={styles.container}>
          <Text style={{color: '#rgb(110,110,110)',marginTop: 4}}>{this.props.data.mainTitle}</Text>
          <Text style={{color: 'gray',fontSize: 12}}>{this.props.data.deputyTitle}</Text>
          <Image source={{uri: this.props.data.entranceImgUrl}} style={{width: 60,height: 60}}></Image>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    marginLeft: 4,
    marginTop: 4,
    marginBottom: 4,
    width: width/4 - 4
  }
});
