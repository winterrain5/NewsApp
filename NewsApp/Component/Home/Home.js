import React, { Component } from 'react';
import HomeTopView from './HomeTopView';
import HomeMiddleView from './HomeMiddleView'
import HomeMiddleBottomView from './HomeMiddleBottomView'
import HomeDetail from './HomeDetail'
import HomeShopCenterView from './HomeShopCenterView'
import HomeGeustYouLikeView from './HomeGeustYouLikeView'
import HomeHotChannelView from './HomeHotChannelView'

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

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <View style={styles.container}>
        {/* 首页导航栏 */}
        {this.renerNavbar()}
        {/*  */}
        <ScrollView
          contentContainerStyle={styles.scrollViewStyle}
        >
          {/* 头部视图 */}
          <HomeTopView/>
          {/* 中间视图 */}
          <HomeMiddleView/>
          {/* 中下视图 */}
          <HomeMiddleBottomView
            popToHome={(itemData) => this.pushToDetail(itemData.tplurl)}
          />
          {/* 购物中心 */}
          <HomeShopCenterView
            popToHome={(detailurl) => this.pushToDetail(detailurl)}
          />
          {/* 热门频道 */}
          <HomeHotChannelView/>
          {/* 猜你喜欢 */}
          <HomeGeustYouLikeView/>
          {/* 最后的 */}
          {this.renderBottomView()}
        </ScrollView>
      </View>
    );
  }
  renderBottomView() {
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={() => AlertIOS.alert('😁😁😁😁😁😁😁')}>
        <View style={styles.bottomViewStyle}>
          <Text style={{color: 'red'}}>查看全部商品</Text>
        </View>
      </TouchableOpacity>

    );
  }
  // 跳转下级界面
  pushToDetail(detailurl) {
      this.props.navigator.push({
        component: HomeDetail, // 要跳转的模块
        title: '详情页',
        // 给下级页面的参数
        passProps: {'url': this.dealWithDetailUrl(detailurl)}
      });
  }

  dealWithDetailUrl(detailurl) {
  	var str = detailurl.replace(/imeituan/,'');
  	var str = str.replace(/\:\/\/www.meituan.com\/web\/\?url\=/,'');
    return str;
  }

  // 导航栏
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
    flex: 1,
    backgroundColor: '#e8e8e8'
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
  },
  bottomViewStyle: {
    backgroundColor: 'white',
    margin: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3
  }

});
