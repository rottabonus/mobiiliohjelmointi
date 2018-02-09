import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import SettingScreen from './components/SettingScreen';
import Arvauspeli from './components/Arvauspeli';

export default class App extends React.Component {


  render() {
    return (
        <Navigaattori/>
        );
  }
}

const Navigaattori = StackNavigator({
    Home: {screen: HomeScreen},
    Setting: {screen: SettingScreen},
    GuessingGame: {screen: Arvauspeli}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      paddingTop: 100,
      paddingBottom: 100
  },
    
    
});
