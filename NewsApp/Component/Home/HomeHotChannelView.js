import React, { Component } from 'react';
import CommonMyCell from '../Mine/CommonMyCell'
import HotChannerTopView from './HomeHotChannelTopView'
import HotChannelBottomView from './HomeHotChannelBottomView'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS
} from 'react-native';

const Home_D6 = require('../LocalData/XMG_Home_D6.json');

export default class HomeHotChannelView extends Component {
  render() {
    return (
      <View  style={styles.container}>
        {/* section */}
        <CommonMyCell
          leftTitle='热门频道'
          leftIconName='rm'
          rightTitle='查看全部'
          callBackFunction={(title) => AlertIOS.alert(title)}
        />
        {/* 上部分 */}
        <View style={styles.hotTopViewStyle}>
          <HotChannerTopView
            data={Home_D6.cateArea[0]}
          />
          <HotChannerTopView
            data={Home_D6.cateArea[1]}
          />
        </View>
        {/* 下部分 */}
        <View style={styles.hotTopViewStyle}>
          <HotChannelBottomView
            data={Home_D6.cateArea[2]}
          />
          <HotChannelBottomView
            data={Home_D6.cateArea[3]}
          />
          <HotChannelBottomView
            data={Home_D6.cateArea[4]}
          />
          <HotChannelBottomView
            data={Home_D6.cateArea[5]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10
  },
  hotTopViewStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around'
  }
});
