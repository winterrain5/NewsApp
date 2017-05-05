import React, { Component } from 'react';
import HomeMiddleCommonView from './HomeMiddleCommonView';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  TextInput,
  AlertIOS,
  ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var TopMiddlData = require('../LocalData/HomeTopMiddleLeft.json');

export default class HomeMiddleView extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* 左边 */}
        {this.renderLeftView()}
        {/* 右边 */}
        <View>
          {this.renderRightView()}
        </View>
      </View>
    );
  }

  // 左边
  renderLeftView() {
    var leftData = TopMiddlData.dataLeft[0];
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={() => AlertIOS.alert(leftData.title)}>
        <View style={styles.leftViewStyle}>
          <Image source={{uri: leftData.img1}} style={{width: 80,height: 25}}></Image>
          <Image source={{uri: leftData.img2}} style={{width: 80,height: 25,marginTop: 4,marginBottom: 4}}></Image>
          <Text style={{fontSize: 13,color: 'gray',marginBottom: 4}}>{leftData.title}</Text>
          <View style={{flexDirection: 'row',marginTop: 2}}>
            <Text style={{fontSize: 11,color: 'green'}}>{leftData.price}</Text>
            <Text style={{fontSize: 11,color: 'orange',backgroundColor: 'yellow'}}>{leftData.sale}</Text>
          </View>
        </View>
      </TouchableOpacity>

    );
  }

  // 右边
  renderRightView() {
    var itemArr = [];
    var rightData = TopMiddlData.dataRight;
    for (var i = 0; i < rightData.length; i++) {
      itemArr.push(
        <HomeMiddleCommonView
          key={i}
          data={rightData[i]}
          callBackFunction={() => {}}
        />
      );
    }
    return itemArr;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftViewStyle: {
    width: width * 0.5 - 1,
    height: 120,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderRightColor: '#e8e8e8'
  }
});
