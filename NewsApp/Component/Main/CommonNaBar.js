import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  AlertIOS
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export default class CommonNaBar extends Component {
  static defaultProps = {
    title: '',
    leftImage: '',
    rightImage: '',
    popToUp: null
  };
  render() {
    return (
      <View style={styles.commonNavBarStyle}>
        <TouchableOpacity style={{marginLeft: 15,marginTop: 8}} onPress={() => this.props.popToUp()}>
          {this.renderLeftImage()}
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 8}}>
          <Text style={styles.textStyle}>{this.props.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 15,marginTop: 8}} onPress={() => AlertIOS.alert('点击了')}>
          {this.renderRightImage()}
        </TouchableOpacity>
      </View>
    );
  }
  renderRightImage() {
    if (this.props.rightImage.length > 0) {
      return(
        <Image source={{uri: this.props.rightImage}} style={styles.navImageStyle}></Image>
      );
    }
  }
  renderLeftImage() {
    if (this.props.leftImage.length > 0) {
      return(
        <Image source={{uri: this.props.leftImage}} style={styles.navImageStyle}></Image>
      );
    }
  }
}

const styles = StyleSheet.create({
  commonNavBarStyle: {
    height: 64,
    backgroundColor: 'rgba(255,96,0,1)',
    width: width,
    flexDirection: 'row', // 主轴方向改为横向
    justifyContent: 'space-between', // 主轴方向居中
    alignItems: 'center', // 侧轴方向居中

  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    alignItems:  'center'
  },

  NavViewStyle: {
    // 定位

  },
  navImageStyle: {
    width: 22,
    height: 22,
    marginRight: 5,
  }
});
