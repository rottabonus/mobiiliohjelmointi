import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class HomeScreen extends React.Component {
   static navigationOptions = {title: 'Home'};
    
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Yello my friend
        </Text>
        <Button onPress={() => navigate('Settings')} title="Settings"/>
      </View>
    );
  }
}

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
