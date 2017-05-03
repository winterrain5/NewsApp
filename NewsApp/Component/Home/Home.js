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


const REQUSET_URL = '';
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // banner数据源
      headerDataArr: [],
      //cell数据源
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1,r2) => r1 !== r2
      })
    };
  }

  // 请求数据
  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        {/* 首页导航栏 */}
        {this.renerNavbar()}
        <Text>home</Text>
      </View>
    );
  }

  renerNavbar() {
    return(
      <View style={styles.navBarStyle}>
        {/* 左边 */}
        <TouchableOpacity onPress={() => AlertIOS.alert('点击了')}>
          <Text style={styles.leftTextStyle}>
            广州
          </Text>
        </TouchableOpacity>
        {/* 中间 */}
          <TextInput
            placeholder="    输入商家、品类、商圈"
            style={styles.topInputStyle}
          />
        {/* 右边 */}
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity onPress={() => AlertIOS.alert('点击了')}>
            <Image source={require('../Assets/Nav/icon_homepage_message.png')} style={styles.navRightImageStyle}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => AlertIOS.alert('点击了')}>
            <Image source={require('../Assets/Nav/icon_homepage_scan@2x.png')} style={styles.navRightImageStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topInputStyle: { // 输入框样式
    width: width * 0.68,
    height: 30,
    backgroundColor: 'white',
    marginTop: 17,
    borderRadius: 15
  },
  navBarStyle: { // 导航栏样式
    height: 64,
    backgroundColor: 'rgba(255,96,0,1)',
    width: width,
    flexDirection: 'row', // 主轴方向改为横向
    alignItems: 'center', // 侧轴方向居中
    justifyContent: 'space-around' // 主轴对齐方式为平分
  },
  navRightImageStyle: {
    width: 25,
    height: 25,
    marginRight: 5
  },
  rightNavViewStyle: {
    flexDirection: 'row',
  },
  leftTextStyle: {
    color: 'white',
    fontSize: 18,
  }

});
