import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';

export default class Arvauspeli extends React.Component {
     static navigationOptions = {title: 'GuessingGame'};
    constructor(props){
        super(props);
        this.state = {arvaus: '', vastaus: Math.floor(Math.random() * 100) + 1, text: 'Arvaa numeroa väliltä 1-100', arvausKerroin: 1, voitot: 0};
    }
    
    buttonPressed = () => {
        if (parseInt(this.state.arvaus) == parseInt(this.state.vastaus)) {
            Alert.alert('Arvasit oikein ' + this.state.arvausKerroin + ' yrityksellä');
            this.setState({arvausKerroin: 1, vastaus: Math.floor(Math.random() * 100) + 1, text: 'Pelaa uudestaan!' });
            this.setState((prevState) => {
                return {voitot: prevState.voitot +1}});
        } else if (parseInt(this.state.arvaus) > parseInt(this.state.vastaus) && parseInt(this.state.arvaus) < 101) {
            Alert.alert('Arvauksesi ' + this.state.arvaus + ' on liian suuri');
            this.setState((prevState) => {
                return {arvausKerroin: prevState.arvausKerroin + 1}});
        } else if (parseInt(this.state.arvaus) < parseInt(this.state.vastaus) && parseInt(this.state.arvaus) > 0) {
            Alert.alert('Arvauksesi ' + this.state.arvaus + ' on liian pieni');
            this.setState((prevState) => {
                return {arvausKerroin: prevState.arvausKerroin + 1}});
        } else {
            Alert.alert('Arvaa lukua 1-100 väliltä!');
        }
   
}


  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:250, height: 300}}
        source={require('../PinguLokoEka.png')} />
        <Text>{this.state.text}</Text>
        <Text> Arvaukset: {this.state.arvausKerroin -1} Voitot: {this.state.voitot}</Text>
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}} keyboardType='numeric' onChangeText={(arvaus) => this.setState({arvaus})} value={this.state.arvaus} />
        <Button onPress={this.buttonPressed} title="Arvaa numeroa"/>
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
  },
    
});



