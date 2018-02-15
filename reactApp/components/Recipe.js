import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default class Recipe extends React.Component {
   static navigationOptions = {title: 'Reseptihaku'};
    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        Yello, this is component "Recipe" </Text>  
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
    text: {
        textAlign: 'center'
    }
    
    
});