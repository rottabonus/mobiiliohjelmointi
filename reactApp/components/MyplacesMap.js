import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { MapView, Marker } from 'expo';



export default class MyplacesMap extends React.Component {
      static navigationOptions = {title: 'Map'};
    constructor(props){
        super(props);
        this.state = {markerLat: 0, markerLon: 0, isLoading: true
        };
    }
    
componentDidMount(){
      this.getAddress();
    }    
    
    
    
getAddress = () => {
        const { address } = this.props.navigation.state.params;
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
                    longitudeDelta: 0.0221},
                isLoading: false
            });
        }) .catch((error) => {
                  Alert.alert(error);
                });  
    }    
    
   render() {
       if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
          <Text> Loading.... Ba dim ba dimb duu! </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        
        <MapView 
        style={{flex: 1}}
        region={this.state.region}>
        <MapView.Marker
        coordinate={{latitude: this.state.markerLat,
                    longitude: this.state.markerLon}}
                    />
      </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      paddingTop: 20,
      paddingBottom: 20}
  });