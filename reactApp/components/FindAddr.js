import React from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';
import {MapView, Location, Permissions, Marker} from 'expo';


export default class FindAddr extends React.Component {
      static navigationOptions = {title: 'Find Address'};
    constructor(props){
        super(props);
        this.state = {address: '', locationRs: null, markerLat: 0, markerLon: 0};
    }
    
    componentDidMount(){
        this.getLocation();
    }
    
    getLocation = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            Alert.alert('No permission!')
        } else {
            let location = await Location.getCurrentPositionAsync({});
            this.setState({locationRs: JSON.stringify(location),
                          markerLat: location.coords.latitude,
                          markerLon: location.coords.longitude});
        }
    };

    getAddress = () => {
        let address = this.state.address
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + ',' + '&key=AIzaSyBsTkgetCQ2X97WgOKy702YH8hrgRcA3fY';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
             markerLat: responseJson.results[0].geometry.location.lat,
             markerLon: responseJson.results[0].geometry.location.lng
            });
        }) .catch((error) => {
                  Alert.alert(error);
                });  
    }
    
  render() {
    return (
        <View style={styles.container}>
        
         <TextInput style={styles.input} placeholder='Type Address' onChangeText={(address) => this.setState({address})} value={this.state.address} />
        <Button onPress={this.getAddress} title="Show" />
        
        
     <MapView 
        style={{flex: 1}}
        initialRegion={{
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
        }} >
        <MapView.Marker
        coordinate={{latitude: this.state.markerLat,
                    longitude: this.state.markerLon}}
                    />
      </MapView>
       <Text>{this.state.locationRs}</Text>
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
    
    input: {
      borderColor: 'blue',
      borderWidth: 1,
     padding: 10
       
    }
    
    });
