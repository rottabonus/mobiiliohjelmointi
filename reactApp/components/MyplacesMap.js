import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class MyplacesMap extends React.Component {
      static navigationOptions = {title: 'Myplaces Map'};
    
   render() {
      const { address } = this.props.navigation.state.params;
    return (
      <View>
        <Text>
       Yello, this is MyPlaces Map and you pushed {address}
        </Text>
      </View>
    );
  }
}

