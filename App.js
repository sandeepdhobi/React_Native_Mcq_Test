import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { StackNavigator, TabNavigator, createBottomTabNavigator } from 'react-navigation';

import reducer from './src/reducer';
import QuestionScreen from './src/screen/QuestionScreen';
import ResultScreen from './src/screen/ResultScreen'
const store = createStore(reducer);

const Tabs = createBottomTabNavigator({
  Home: {
    screen: QuestionScreen,
    navigationOptions: (options) => {
      return {
        tabBarAccessibilityLabel: 'HomeTab',
        tabBarIcon: <Image source={require('./src/assets/icons8-home-128.png')} style={{ width: 20, height: 20 }} resizeMode="contain" />,
        tabBarOnPress: () => (options.navigation.navigate('Home')),
      };
    }
  },
  Dashboard: {
    screen: ResultScreen,
    navigationOptions: (options) => {
      return {
        tabBarAccessibilityLabel: 'HomeTab',
        tabBarIcon: <Image source={require('./src/assets/icons8-dashboard-layout-96.png')} style={{ width: 20, height: 20 }} resizeMode="contain" />,
        tabBarOnPress: () => (options.navigation.navigate('Dashboard')),
      };
    }
  },
  Cart: {
    screen: ResultScreen,
    navigationOptions: (options) => {
      return {
        tabBarAccessibilityLabel: 'HomeTab',
        tabBarIcon: <Image source={require('./src/assets/icons8-buying-96.png')} style={{ width: 20, height: 20 }} resizeMode="contain" />,
        tabBarOnPress: () => (options.navigation.navigate('Dashboard')),
      };
    }
  },
});

const Stack = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: <View style={{height:50,paddingLeft:10,backgroundColor:'#fff',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#f0f4f7'}}><Image source={require('./src/assets/icons8-menu-96.png')} style={{ width: 20, height: 20 }} resizeMode="contain" /></View>,
    },
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
