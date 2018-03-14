import React from 'react';
import { StyleSheet, View, Alert, Button} from 'react-native';
import {MapView} from 'expo';


export default class FindRestaurants extends React.Component {
      static navigationOptions = {title: 'Find Restaurants'};
    constructor(props){
        super(props);
        this.state = {markers: []
        };
    }

    getRestaurants = () => {
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=60.200692,24.934302&radius=500&type=restaurant&key=AIzaSyBsTkgetCQ2X97WgOKy702YH8hrgRcA3fY';
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
        
        <Button onPress={this.getRestaurants} title="Show Nearby Restaurants" />
        
        
     <MapView 
        style={{flex: 1}}
        initialRegion={{
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
        }} >
        {this.state.markers.map((marker, index) => (
    <MapView.Marker
        key={index}
      coordinate={{latitude: marker.geometry.location.lat,
                  longitude: marker.geometry.location.lng}}
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
      paddingTop: 20,
      paddingBottom: 20
  },
    });
// input: {
//      borderColor: 'blue',
//      borderWidth: 1,
//     padding: 10
//    }