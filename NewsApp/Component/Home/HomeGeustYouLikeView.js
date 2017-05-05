import React, { Component } from 'react';
import CommonMyCell from '../Mine/CommonMyCell'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

// 猜你喜欢接口地址
const REQUSET_URL = 'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
const HomeGeustYouLikeData = require('../LocalData/HomeGeustYouLike.json');

export default class HomeGeustYouLikeView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds
    };
  }

  componentDidMount() {
    // 请求数据
    this.loadData();
  }

  loadData() {
    fetch(REQUSET_URL)
      .then((response) => response.json()) // 接受到数据转成json
      .then((responseData) => { // 拿到转换的数据继续操作
        // 更新数据源
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data)
        });
      })
      .catch((err) => {
        // 网络异常加载本地数据
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(HomeGeustYouLikeData.data)
        });
      })
  }

  render() {
    return (
      <View  style={styles.container}>
        {/* section */}
        <CommonMyCell
          leftTitle='猜你喜欢'
          leftIconName='cnxh'
          callBackFunction={(title) => AlertIOS.alert(title)}
        />
        {/* 列表 */}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} // 一开始忘记bind(this),二次平方懵逼
        />
      </View>
    );
  }
  // 返回cell
  renderRow(rowData) {
    var imageUrl = this.dealWithImageUrl(rowData.imageUrl);
    return(
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.listViewStyle}>
          {/* 左边图片 */}
          <Image source={{uri: imageUrl}} style={styles.leftImageStyle}></Image>
          {/* 右边详情 */}
          <View style={styles.rightViewStyle}>
            <View style={styles.ritghtTopViewStyle}>
              <Text style={{fontSize: 16}}>{rowData.title}</Text>
              <Text style={{fontSize: 12,color: 'gray',position: 'absolute', right: 8}}>{rowData.topRightInfo}</Text>
            </View>
            <Text style={{fontSize: 12,color: 'gray'}}>{rowData.subTitle}</Text>
            <View style={styles.ritghtBottomViewStyle}>
              <Text style={{fontSize: 16,color: 'rgba(255,96,0,1)'}}>{rowData.subMessage}</Text>
              <Text style={{fontSize: 12,color: 'gray',position: 'absolute', right: 8}}>{rowData.bottomRightInfo}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // 处理图像的尺寸 返回后台你需要的图片的尺寸
  dealWithImageUrl(url) {
    if (url.search('w.h') == -1) { // 没有找到 正常返回
      return url;
    }else {
      return url.replace(/w.h/,'120.90');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10
  },
  leftImageStyle: {
    width: 90,
    height: 75,
    borderRadius: 3
  },
  listViewStyle: {
    padding: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e8e8e8',
    flexDirection: 'row'
  },
  rightViewStyle: {
    marginLeft: 8,
    width: width - 90 - 24
  },
  ritghtTopViewStyle: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center'
  },
  ritghtBottomViewStyle: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center'
  }
});
