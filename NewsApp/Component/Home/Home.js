import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';



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
      <View style={{flexDirection: 'row',alignItems: 'center',flex: 1}}>
        <Text>home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
