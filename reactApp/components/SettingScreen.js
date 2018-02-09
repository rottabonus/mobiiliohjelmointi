import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class SettingScreen extends React.Component {
   static navigationOptions = {title: 'Settings'};
    
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Yello my friend, this is Settings
        </Text>
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
