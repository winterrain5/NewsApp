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

export default class HomeMiddleCommonView extends Component {

  static defaultProps = {
    data: {},
    callBackFunction: null
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this.props.callBackFunction(this.props.data)}
      >
        <View style={styles.container}>
          {/* 左边 */}
          <View style={styles.leftViewStyle}>
            <Text style={[styles.titleStyle,{color: this.props.data.typeface_color}]}>{this.props.data.maintitle}</Text>
            <Text style={styles.subTitleStyle}>{this.props.data.deputytitle}</Text>
          </View>
          {/* 右边 */}
          <Image source={{uri: this.props.data.imageurl}} style={{width: 64, height: 40,resizeMode: 'contain'}}/>
        </View>
      </TouchableOpacity>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: width * 0.5,
    backgroundColor: 'white',
    height: 59,
    marginBottom: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRightWidth: 0.5,
    borderRightColor: '#e8e8e8'
  },
  leftViewStyle: {

  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subTitleStyle: {
    color: 'gray',
    fontSize: 12
  }
});
