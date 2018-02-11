import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class LaskinHistory extends React.Component {
   static navigationOptions = {title: 'Arvaukset'};
    
  render() {
      const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        Olet voittanut {params.voitot} kertaa
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
    text: {
        textAlign: 'center'
        
    }
    
    
});