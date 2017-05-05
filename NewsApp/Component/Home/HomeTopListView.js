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
  AlertIOS,
  ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export default class HomeTopListView extends Component {
  static defaultProps = {
    dataArr: []
  };
  static propsTypes = {
    dataArr: React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    // 创建数据源
    var ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataArr)
    };
  }
  render() {
    return (
      <ListView
        contentContainerStyle={styles.listViewStyle}
        dataSource={this.state.dataSource}
        renderRow={this.renderListCell}
        // 禁止listView的滚动 只允许父控件scrolView滚动
        scrollEnabled={false}
      />
    );
  }

  // 返回cell
  renderListCell(rowData) {
    return(
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => AlertIOS.alert(rowData.title)}
      >
        <View style={styles.cellStyle}>
          <Image source={{uri: rowData.image}} style={{width: 42,height: 42}}></Image>
          <Text style={{color: 'gray'}}>{rowData.title}</Text>
        </View>
      </TouchableOpacity>

    );
  }

}

const styles = StyleSheet.create({
  listViewStyle: {
    // 主轴为横向
    flexDirection: 'row',
    // 多个cell 在同行显示
    flexWrap: 'wrap',
    width: width
  },
  cellStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width/5,
    height: 70,
  }
});
