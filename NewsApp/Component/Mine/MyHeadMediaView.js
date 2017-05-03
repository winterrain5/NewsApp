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

export default class MyHeadMediaView extends Component {

  render() {
    return(
      <View style={styles.container}>
        <InnerView
          iconName='order1'
          title='待付款'
        />
        <InnerView
          iconName='order2'
          title='待使用'
        />
        <InnerView
          iconName='order3'
          title='待评价'
        />
        <InnerView
          iconName='order4'
          title='退款/售后'
        />
      </View>
    );
  }

}

class InnerView extends Component {
  static defaultProps = {
    iconName: '',
    title: ''
  };
  static propTypes = {
    iconName: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  };
  render() {
    return(
      <TouchableOpacity>
        <View style={styles.innerViewStyle}>
           <Image source={{uri: this.props.iconName}} style={{width: 35, height: 26}}/>
           <Text style={{color: 'gray',fontSize: 11,marginTop: 2}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 64,
    justifyContent: 'space-around'
  },
  innerViewStyle: {
    height: 64,
    width: width*0.25,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
