
import React, { Component } from 'react';
import commonStyles from '../Style/commonStyles'
import CommonCell from './CommonCell'
import CommonNaBar from '../Main/CommonNaBar'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AlertIOS,
  ScrollView
} from 'react-native';

export default class More extends Component {
  render() {
    return (
      <View style={commonStyles.container}>
        {/* 导航栏 */}
        <CommonNaBar
          title='更多'
          rightImage='icon_mine_setting'
          popToUp={() => {}}
        />
        <ScrollView >
          <View style={{marginTop: 10}}>
            <CommonCell
              title='扫一扫'
            />
          </View>
          <View style={{marginTop: 10}}>
            <CommonCell
              title='省流量模式'
              isSwitch={true}
            />
            <CommonCell
              title='消息提醒'
            />
            <CommonCell
              title='邀请好友'
            />
            <CommonCell
              title='清空缓存'
              rightTitle='1.98M'
            />
          </View>
          <View style={{marginTop: 10}}>
            <CommonCell
              title='问卷调查'
            />
            <CommonCell
              title='支付帮助'
            />
            <CommonCell
              title='网络诊断'
            />
            <CommonCell
              title='关于'
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
