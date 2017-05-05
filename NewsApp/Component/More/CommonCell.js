import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AlertIOS,
  Switch
} from 'react-native';

export default class CommonCell extends Component {
  constructor(props){
    super(props);
    this.state ={
      isOn: false
    };
  }
  static defaultProps = {
      title: '',
      isSwitch: false,
      rightTitle: ''
  };  // 注意这里有分号
  static propTypes = {
      title: React.PropTypes.string.isRequired,
      isSwitch: React.PropTypes.bool.isRequired,
      rightTitle: React.PropTypes.string.isRequired,
  };  // 注意这里有分号

  render() {
    return (
      <TouchableOpacity onPress={() => AlertIOS.alert(this.props.title)}>
        <View style={styles.container}>
          <Text style={{marginLeft: 8}}>{this.props.title}</Text>
          {this.renderRightView()}
        </View>
      </TouchableOpacity>

    );
  }
  // cell 右边显示的组件
  renderRightView() {
    if (this.props.isSwitch) {
      return(
        <Switch
          value={this.state.isOn === true}
          style={{marginRight: 8}}
          onValueChange={() => {this.setState({isOn: !this.state.isOn})}}
        />
      );
    } else {
      return(
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          {this.renderRightTitle()}
          <Image source={require('../Assets/CommonImage/icon_cell_rightArrow@2x.png')} style={{width: 8,height: 13,marginRight: 8}}/>
        </View>

      );
    }
  }
  renderRightTitle() {
    if (this.props.rightTitle.length > 0) {
      return(
        <Text style={{color: 'gray',marginRight: 8}}>
          {this.props.rightTitle}
        </Text>
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
    flexDirection: 'row', // 主轴方向
    justifyContent: 'space-between',// 主轴对齐方式
    alignItems: 'center', // 侧轴方向
  }
});
