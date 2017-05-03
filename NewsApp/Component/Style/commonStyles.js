import React, { Component } from 'react';
import {
  StyleSheet,

} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

let commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
  homeNavBarStyle: { // 导航栏样式
    height: 64,
    backgroundColor: 'rgba(255,96,0,1)',
    width: width,
    flexDirection: 'row', // 主轴方向改为横向
    alignItems: 'center', // 侧轴方向居中
    justifyContent: 'space-around' // 主轴对齐方式为平分
  },
  navRightImageStyle: {
    width: 22,
    height: 22,
    marginRight: 5,

  },
  commonNavBarStyle: {
    height: 64,
    backgroundColor: 'rgba(255,96,0,1)',
    width: width,
    flexDirection: 'row', // 主轴方向改为横向
    justifyContent: 'center', // 主轴方向居中
    alignItems: 'center' // 侧轴方向居中
  }
});

export { commonStyles as default }
