import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button } from 'react-native';


export default class Laskin extends React.Component {
    constructor(props){
        super(props);
        this.state = {numero1: '', numero2: '', vastaus: ''};
    }
    
    laskeMinus = () => {
        this.setState({
            vastaus: parseInt(this.state.numero1) - parseInt(this.state.numero2)});
    }
    
    laskePlus = () => {
        this.setState({
            vastaus: parseInt(this.state.numero1) + parseInt(this.state.numero2)});
    }
    
  render() {
   return(
       <View style={styles.container}>
       <View>
       <Text>{this.state.vastaus}</Text>
       </View>
       <View style={styles.inputs}>
        <TextInput keyboardType='numeric' onChangeText={(numero1) => this.setState({numero1})} value={this.state.numero1} />
       <TextInput keyboardType='numeric' onChangeText={(numero2) => this.setState({numero2})} value={this.state.numero2} />
       </View>
       <View style={styles.buttons}>
        <Button onPress={this.laskeMinus} title="-"/>
         <Button onPress={this.laskePlus} title="+"/>    
        </View>
       </View>
   );
  }
   
}

 const styles = StyleSheet.create({
     
        container: {
            backgroundColor: 'rgba(184, 244, 239, 0.74)',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
     
        inputs: {
            width: 100,
            height: 50,
            borderColor: 'gray', 
            borderWidth: 1
    },
     
        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
    })

AppRegistry.registerComponent('Laskin', () => Laskin);
