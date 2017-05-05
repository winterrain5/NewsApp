import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  TextInput,
  AlertIOS
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export default class MyHeadTopView extends Component {
  render() {
    return(
      <View style={styles.container}>
        {/* 上部分 */}
        {this.renderTopView()}
        {/* 下部分 */}
        {this.renderBotomView()}
      </View>
    );
  }
  renderTopView(){
    return(
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.topViewStyle}>
          {/* 头像 */}
          <Image source={{uri: 'see'}}  style={styles.leftIconStyle}/>
          {/* 昵称 */}
          <View style={styles.centerViewStyle}>
            <Text style={styles.leftTitleStyle}>那时风景似流年</Text>
            <Image source={{uri: 'avatar_vip'}} style={{width: 13, height: 13}}></Image>
          </View>
          {/* 箭头 */}
          <Image source={{uri: 'icon_cell_rightArrow'}} style={styles.arrowStyle}/>
        </View>
      </TouchableOpacity>

    );
  }
  renderBotomView() {
    return(
      <View style={styles.bottomViewStyle}>
        {this.renderBottomItem()}
      </View>
    );
  }
  renderBottomItem() {
    var itemArr = [];
    var dataArr = [{'number': 100,'title': '抵用券'},{'number': 12,'title': '评价'},{'number': 50,'title': '收藏'}];
    // 遍历创建组件
    for (var i = 0; i < dataArr.length; i++) {
      var item = dataArr[i];
      itemArr.push(
        <TouchableOpacity key={i} activeOpacity={0.4}>
          <View  style={styles.bottomItmViewStyle}>
            <Text style={styles.bottomItemTitleStyle}>{item.number}</Text>
            <Text style={styles.bottomItemTitleStyle}>{item.title}</Text>
          </View>
        </TouchableOpacity>

      );
    }
    return itemArr;
  }

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,96,0,1)',
    height: 320,
    justifyContent: 'center'
  },
  topViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 160
  },
  leftIconStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 12,
    borderWidth: 5,
    borderColor: 'white'
  },
  leftTitleStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 8
  },
  centerViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowStyle: {
    width: 8,
    height: 13,
    marginRight: 8,
    position: 'absolute',
    right: 8
  },
  bottomViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // 定位
    position: 'absolute',
    bottom: 0
  },
  bottomItmViewStyle: {
    width:  width / 3 + 1,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRightWidth: 0.5,
    borderRightColor: 'white'
  },
  bottomItemTitleStyle: {
    fontSize: 12,
    marginTop: 2,
    color: 'white'
  }

});
