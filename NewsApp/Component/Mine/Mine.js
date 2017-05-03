import React, { Component } from 'react';
import CommonMyCell from './CommonMyCell'
import MyHeadMediaView from './MyHeadMediaView'
import MyHeadTopView from './MyHeadTopView';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Mine extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#e8e8e8'}}>
        {/* 头视图 */}
        <MyHeadTopView/>
        <View style={{marginTop: 10}}>
          <CommonMyCell
            rightTitle='查看全部订单'
            leftTitle='我的订单'
            leftIconName='collect'
          />
        </View>
        <MyHeadMediaView/>
        {/* 列表项 */}
        <View style={{marginTop: 10}}>
          <CommonMyCell
            rightTitle='账户余额：¥100'
            leftTitle='我的钱包'
            leftIconName='draft'
          />
          <CommonMyCell
            leftTitle='抵用券'
            leftIconName='like'
            rightTitle='10张'
          />
        </View>
        <View style={{marginTop: 10}}>
          <CommonMyCell
            leftTitle='积分商城'
            leftIconName='card'
          />
        </View>
        <View style={{marginTop: 10}}>
          <CommonMyCell
            leftTitle='今日推荐'
            leftIconName='new_friend'
            rightIconName='me_new'
          />
        </View>
        <View style={{marginTop: 10}}>
          <CommonMyCell
            leftTitle='我要合作'
            leftIconName='pay'
            rightTitle='轻松开店,招财进宝'
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
