import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

export default class CommonMyCell extends Component {

  static defaultProps = {
    leftIconName: '',
    leftTitle: '',
    rightIconName: '',
    rightTitle: ''
  };
  static propTypes = {
    leftIconName: React.PropTypes.string.isRequired,
    leftTitle: React.PropTypes.string.isRequired,
    rightIconName: React.PropTypes.string.isRequired,
    rightTitle: React.PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.container}>
          {/* 左边的 */}
          <View style={styles.leftViewStyle}>
            <Image source={{uri: this.props.leftIconName}} style={styles.leftImageStyle}></Image>
            <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
          </View>
          {/* 右边的 */}
          <View style={styles.RightViewStyle}>
            {this.renderRightSubView()}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  // 右边的组件
  renderRightSubView() {
    return(
      <View style={{flexDirection: 'row',alignItems: 'center'}}>
        {this.renderRightContentView()}
        {/* 箭头 */}
        <Image source={require('../Assets/CommonImage/icon_cell_rightArrow@2x.png')} style={{width: 8,height: 13,marginRight: 8}}/>
      </View>
    );
  }
  // 右边具体显示什么组件
  renderRightContentView() {
    if (this.props.rightIconName.length == 0) { // 没有图片
      return(
        <Text style={styles.rightTitleStyle}>
          {this.props.rightTitle}
        </Text>
      );
    } else {
      return(
        <Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13,marginRight: 8}}/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 44,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.5,
    height: 44,
    // 主轴方向
    flexDirection: 'row',
    // 主轴对齐方式
    justifyContent: 'space-between'
  },
  leftViewStyle: {
    marginLeft: 8,
    // 主轴方向
    flexDirection: 'row',
    // 侧轴居中
    alignItems: 'center'
  },
  RightViewStyle: {
    // 主轴方向
    flexDirection: 'row',
    // 侧轴居中
    alignItems: 'center'
  },
  rightTitleStyle:{
    marginRight: 8,
    color: 'gray',
    fontSize: 12
  },
  leftImageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  leftTitleStyle: {
    marginLeft: 8,

  }
});
