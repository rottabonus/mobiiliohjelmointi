import React from 'react';
import { StyleSheet, View, Alert, Button, TextInput} from 'react-native';
import {MapView} from 'expo';


export default class FindRestaurants extends React.Component {
      static navigationOptions = {title: 'Find Restaurants'};
    constructor(props){
        super(props);
        this.state = {markers: [], address: '', region: null
        };
    }

    componentDidMount(){
      this.getInitialState();
    }

    getInitialState() {
  this.setState({
    region: {
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
    }
  });
}

    getAddress = () => {
        let address = this.state.address
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + ',' + '&key=AIzaSyBsTkgetCQ2X97WgOKy702YH8hrgRcA3fY';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
             markerLat: responseJson.results[0].geometry.location.lat,
             markerLon: responseJson.results[0].geometry.location.lng,
             region: {latitude: responseJson.results[0].geometry.viewport.northeast.lat,
                      longitude: responseJson.results[0].geometry.viewport.northeast.lng,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0221}
            });
            this.getRestaurants();
        }) .catch((error) => {
                  Alert.alert(error);
                });  
    }

    getRestaurants = () => {
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.state.markerLat+','+this.state.markerLon+'&radius=500&type=restaurant&key=AIzaSyBsTkgetCQ2X97WgOKy702YH8hrgRcA3fY';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
             markers: responseJson.results
            });
        }) .catch((error) => {
                  Alert.alert(error);
                });  
    }
    
  render() {
    return (
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Type address' onChangeText={(address) => this.setState({address})} value={this.state.address} />
        <Button onPress={this.getAddress} title="Find Nearby Restaurants" />
        
        
     <MapView 
        style={{flex: 1}}
        region={this.state.region} >
        {this.state.markers.map((marker, index) => (
    <MapView.Marker
        key={index}
      coordinate={{latitude: marker.geometry.location.lat,
                  longitude: marker.geometry.location.lng}}
                  image={marker.icon}
                  title={marker.name}

    />
  ))}
</MapView>
       
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
      paddingTop: 30,
      paddingBottom: 20
  },
    });
