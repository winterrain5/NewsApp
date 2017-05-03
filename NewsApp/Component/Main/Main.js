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
      selectedTab: "mine" // 默认首页选中
    };
  }
  render() {
    return (
      <TabNavigator>
        {/* 首页 */}
        {this.renderTabbarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','Home',Home)}

        {/* 商家 */}
        {this.renderTabbarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','merchant',Shop)}

        {/* 我的 */}
        {this.renderTabbarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine',Mine,'2')}

        {/* 更多 */}
        {this.renderTabbarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','misc',More)}
      </TabNavigator>
    );
  }

  // 每一个tabbarItem
  renderTabbarItem(title,iconName,selectedIconName,selectedTab,component,badge) {
    return(
      <TabNavigator.Item
        title={title}
        renderIcon={() => <Image source={{uri: iconName}} style={styles.tabIconStyle} />}
        renderSelectedIcon={() => <Image source={{uri: selectedIconName}} style={styles.tabIconStyle} />}
        selected={this.state.selectedTab === selectedTab}
        selectedTitleStyle={styles.selectedTitleStyle}
        onPress={() => this.setState({selectedTab: selectedTab})}
        badgeText={badge}
        >
          <Navigator
            initialRoute={{name: title,component: component}}
            configureScene={() => {
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route,navigator) => {
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />
            }}
          />
      </TabNavigator.Item>
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
  },
  selectedTitleStyle: {
    color: 'orange',
  }
});
