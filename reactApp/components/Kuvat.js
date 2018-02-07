import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Kuvat extends React.Component {
  render() {
   return(
       <View>
   <Text>Tämä on kuvalista componentti</Text>
       </View>
   );
  }
}
AppRegistry.registerComponent('Kuvat', () => Kuvat);


