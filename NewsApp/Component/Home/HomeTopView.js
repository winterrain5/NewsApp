import React, { Component } from 'react';
import HomeTopListView from './HomeTopListView'
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

// json 数据
var TopMenuData = require('../LocalData/TopMenu.json');

export default class HomeTopView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: 0
    };
  }


  render() {
    return (
      <View style={styles.container}>
        {/* 列表 */}
        <ScrollView
          // 水平滚动
          horizontal={true}
          // 分页
          pagingEnabled={true}
          // 隐藏水平滚动条
          showsHorizontalScrollIndicator={false}
          // 弹簧效果
          // bounces={false}
          style={styles.scrollViewStyle}
          onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
          >
          {this.renderScrollItem()}
        </ScrollView>
        {/* 页码 */}
        <View style={styles.indicatorViewStyle}>
          {this.renderIndicator()}
        </View>
      </View>
    );
  }

  // 一帧滚动结束
  onAnimationEnd(e) {
    // 水平方向的偏移量
    var offsetX = e.nativeEvent.contentOffset.x;
    // 当前页数
    var currentPage = Math.floor(offsetX / width);
    // 改变状态机就会调用render方法刷新页面
    this.setState({
      activePage: currentPage,
    });
  }

  // scrollView 子控件
  renderScrollItem() {
    // 组件数组
    var itemArr = [];
    // 颜色数组
    var  dataArr = TopMenuData.data;
    for (var i = 0; i < dataArr.length; i++) {
      itemArr.push(
        <HomeTopListView
          key={i}
          dataArr={dataArr[i]}
        />
      );
    }
    return itemArr;
  }
  // 页码部分
  renderIndicator() {
    // 组件数组
    var indicatorArr = [],pageStyle;
    for (var i = 0; i < 2; i++) {
      // 设置圆点样式
      pageStyle = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'};
      indicatorArr.push(
        <Text key={i} style={[{fontSize: 20},pageStyle]}>
          &bull;
        </Text>
      );
    }
    return indicatorArr;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'white'
  },
  scrollViewStyle: {
  },
  indicatorViewStyle: {
    flexDirection: 'row',
    // 侧轴对齐方式
    alignItems: 'center',
    // 主轴对齐方式
    justifyContent: 'center'
  }

});
