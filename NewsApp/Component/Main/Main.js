import React, { Component } from 'react';
// 首页
import Home from '../Home/Home'
// 商店
import Shop from '../Shop/Shop'
// 更多
import More from '../More/More'
// 我的
import Mine from '../Mine/Mine'

import TabNavigator from 'react-native-tab-navigator'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  Image,
  Navigator
} from 'react-native';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 设置tabbar选中标识
      selectedTab: "home" // 默认首页选中
    };
  }
  render() {
    return (
      <TabNavigator>
        {/* 首页 */}
        <TabNavigator.Item
            title="首页"
            // normal状态
            renderIcon={() => <Image source={require('../Assets/TabBar/icon_tabbar_homepage@2x.png')} style={styles.tabIconStyle} />}
            // 选中状态
            renderSelectedIcon={() => <Image source={require('../Assets/TabBar/icon_tabbar_homepage_selected@2x.png')} style={styles.tabIconStyle} />}
            selected={this.state.selectedTab === 'home'}
            onPress={() => this.setState({selectedTab: 'home'})}
          >
            <Navigator
              initialRoute={{name: '首页',component: Home}}
              configureScene={() => {
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route,navigator) => {
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />
              }}
            />
        </TabNavigator.Item>
        {/* 商家 */}
        <TabNavigator.Item
          title="商家"
          renderIcon={() => <Image source={require('../Assets/TabBar/icon_tabbar_merchant_normal@2x.png')} style={styles.tabIconStyle} />}
          renderSelectedIcon={() => <Image source={require('../Assets/TabBar/icon_tabbar_merchant_selected@2x.png')} style={styles.tabIconStyle} />}
          selected={this.state.selectedTab === 'merchant'}
          onPress={() => this.setState({selectedTab: 'merchant'})}
          >
            <Navigator
              initialRoute={{name: '商家',component: Shop}}
              configureScene={() => {
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route,navigator) => {
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />
              }}
            />
        </TabNavigator.Item>
        {/* 我的 */}
        <TabNavigator.Item
          title="我的"
          renderIcon={() => <Image source={require('../Assets/TabBar/icon_tabbar_mine@2x.png')} style={styles.tabIconStyle} />}
          renderSelectedIcon={() => <Image source={require('../Assets/TabBar/icon_tabbar_mine_selected@2x.png')} style={styles.tabIconStyle} />}
          selected={this.state.selectedTab === 'mine'}
          onPress={() => this.setState({selectedTab: 'mine'})}
          >
            <Navigator
              initialRoute={{name: '我的',component: Mine}}
              configureScene={() => {
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route,navigator) => {
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />
              }}
            />
        </TabNavigator.Item>
        {/* 更多 */}
        <TabNavigator.Item
          title="更多"
          renderIcon={() => <Image source={require('../Assets/TabBar/icon_tabbar_misc@2x.png')} style={styles.tabIconStyle} />}
          renderSelectedIcon={() => <Image source={require('../Assets/TabBar/icon_tabbar_misc_selected@2x.png')} style={styles.tabIconStyle} />}
          selected={this.state.selectedTab === 'misc'}
          onPress={() => this.setState({selectedTab: 'misc'})}
          >
            <Navigator
              initialRoute={{name: '更多',component: More}}
              configureScene={() => {
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route,navigator) => {
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />
              }}
            />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  navigatorStyle: {
    flex: 1,
  },
  tabIconStyle: {
      width: 30,
      height: 30,
  }
});
