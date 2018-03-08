import React from 'react';
import { StyleSheet, TextInput, View, Alert, Button} from 'react-native';
import {MapView} from 'expo';
import {Card} from 'react-native-card-view';

export default class RecipeDetails extends React.Component {
      static navigationOptions = {title: 'Find Address'};
    constructor(props){
        super(props);
        this.state = {address: 'Type address', marker: ''};
    }

    getAddress = () => {
        let address = this.state.address
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + ',' + '&key=AIzaSyBsTkgetCQ2X97WgOKy702YH8hrgRcA3fY';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
               marker: responseJson.formatted_address});
            Alert.alert(JSON.stringify(responseJson.formatted_address));
        }) .catch((error) => {
                  Alert.alert(error);
                });  
    }
    
  render() {
    return (
        <View style={styles.container}>
        
         <TextInput style={styles.input} onChangeText={(address) => this.setState({address})} value={this.state.address} />
        <Button onPress={this.getAddress} title="Show" />
        
        
     <MapView 
        style={{flex: 1}}
        initialRegion={{
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
        }} />
       
        <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawnavigator" />
       
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      paddingTop: 20,
      paddingBottom: 20
  },
    text: {
        textAlign: 'center'
    },
    input: {
      borderColor: 'blue',
      borderWidth: 1,
     padding: 10
       
    }
    
    });

//  width: Dimensions.get('window').width,
//        height: Dimensions.get('window').height

// <View><Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
//           title="Open Drawnavigator" /></View>