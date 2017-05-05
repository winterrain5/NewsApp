import React, { Component } from 'react';
import HomeMiddleCommonView from './HomeMiddleCommonView';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var Home_D4 = require('../LocalData/XMG_Home_D4.json');

export default class HomeMiddleBottomView extends Component {
  static defaultProps = {
    popToHome: null
  };
  render() {
    return (
      <View style={styles.container}>
        {/* 上部分 */}
        <View style={styles.topViewStyle}>
          {this.renderTopView()}
        </View>
        {/* 下部分 */}
        <View style={styles.bottomViewStyle}>
          {this.renderBottomView()}
        </View>
      </View>
    );
  }

  renderTopView() {

  }

  renderBottomView() {
    var itemArr = [];
    var dataArr = Home_D4.data;
    for (var i = 0; i < dataArr.length; i++) {
      var itemData = dataArr[i];
      itemArr.push(
        <HomeMiddleCommonView
          key={i}
          data={itemData}
          callBackFunction={(itemData) => this.popDataToTopView(itemData)}
        />
      );
    }
    return itemArr;
  }

  // 继续往父级页面传递数据
  popDataToTopView(itemData) {
    // 这一步是itemData有值的
    this.props.popToHome(itemData);
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  topViewStyle: {

  },
  bottomViewStyle: {
    flexDirection: 'row',
    width: width,
    // 换行
    flexWrap: 'wrap'
  }
});
