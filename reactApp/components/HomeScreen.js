import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class HomeScreen extends React.Component {
   static navigationOptions = {title: 'Home'};
    
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Yello my friend, this is HomeScreen
        </Text>
        <View style={styles.buttons}>
        <Button onPress={() => this.props.navigation.navigate('Setting')} title="Settings"/>
        <Button onPress={() => this.props.navigation.navigate('GuessingGame')} title="GuessingGame"/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
    buttons: {
        flexDirection: 'row',
        margin: 20
    }
    
});
