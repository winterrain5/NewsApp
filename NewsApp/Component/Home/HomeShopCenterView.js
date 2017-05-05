import React, { Component } from 'react';
import CommonMyCell from '../Mine/CommonMyCell'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  AlertIOS
} from 'react-native';

const Home_D5 = require('../LocalData/XMG_Home_D5.json');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export default class HomeShopCenterView extends Component {
  static defaultProps = {
    popToHome: null
  };
  render() {
    return (
      <View style={styles.container}>
        {/* section */}
        <CommonMyCell
          rightTitle={Home_D5.tips}
          leftTitle='购物中心'
          leftIconName='gw'
        />
        {/* 商场列表 */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewStyle}
          >
            {this.renderBottomItemView()}
        </ScrollView>
      </View>
    );
  }
  renderBottomItemView() {
    var itemArr = [];
    var data = Home_D5.data;
    for (var i = 0; i < data.length; i++) {
      var itemData = data[i];
      itemArr.push(
        <HomeShopCenterBottomItemView
          key={i}
          image={itemData.img}
          sale={itemData.showtext.text}
          name={itemData.name}
          detailurl={itemData.detailurl}
          // 回调函数触发后继续执行箭头函数
          callBackFunction={(detailurl) => this.props.popToHome(detailurl)}
        />
      );
    }
    return itemArr;
  }

}


class HomeShopCenterBottomItemView extends Component {
  static defaultProps = {
    image: '',
    sale: '',
    name: '',
    detailurl: '',
    // 回调函数
    callBackFunction: null
  };
  render() {
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={() => this.clickItem(this.props.detailurl)}>
        <View style={styles.bottomItemStyle}>
          <Image source={{uri: this.props.image}} style={styles.itemImageStyle}></Image>
          <Text style={styles.itemTitleStyle}>{this.props.sale}</Text>
          <Text style={{marginTop: 8,fontSize: 14,textAlign: 'center'}}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  clickItem(detailurl) {
    if (detailurl == null) return;
    // 执行回调函数
    this.props.callBackFunction(detailurl);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop :10
  },
  scrollViewStyle: {
    flexDirection: 'row',
  },
  itemImageStyle: {
    borderRadius: 2,
    width: 90,
    height: 65,

  },
  itemTitleStyle: {
    position: 'absolute',
    bottom: 28,
    color: 'white',
    backgroundColor: 'orange',
    fontSize: 10,
  },
  bottomItemStyle: {
    margin: 8,
  }

});
