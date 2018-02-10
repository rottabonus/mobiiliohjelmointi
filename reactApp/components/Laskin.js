import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';


export default class Laskinhistoria extends React.Component {
    static navigationOptions = {title: 'Laskin'};
    constructor(props){
        super(props);
        this.state = {numero1: '', numero2: '', vastaus: '', historia: []};
    }
    
    laskeMinus = () => {
        const summa = parseInt(this.state.numero1) - parseInt(this.state.numero2)
        const historiaString = this.state.numero1 + ' - ' + this.state.numero2 + ' = ' + summa
        this.setState({vastaus: summa, historia: [...this.state.historia, {key: historiaString}]});
    }
    
    laskePlus = () => {
        const summa = parseInt(this.state.numero1) + parseInt(this.state.numero2)
        const historiaString = this.state.numero1 + ' + ' + this.state.numero2 + ' = ' + summa
        this.setState({vastaus: summa, historia: [...this.state.historia, {key: historiaString}]});
    }
    
  render() {
   return(
       <View style={styles.container}>
       <View>
       <Text>Vastaus: {this.state.vastaus}</Text>
       </View>
       <View style={styles.inputs}>
        <TextInput keyboardType='numeric' onChangeText={(numero1) => this.setState({numero1})} value={this.state.numero1} />
       <TextInput keyboardType='numeric' onChangeText={(numero2) => this.setState({numero2})} value={this.state.numero2} />
       </View>
       <View style={styles.buttons}>
        <Button onPress={this.laskeMinus} title="-"/>
         <Button onPress={this.laskePlus} title="+"/>
             <Button onPress={(historia) => this.props.navigation.navigate('LaskinHistory', {historia: this.state.historia})} title="Laskin History"/>
        </View>
       </View>
   );
  }
   
}

 const styles = StyleSheet.create({
     
        container: {
            flex: 1,
            backgroundColor: 'rgba(196, 214, 213, 0.74)',
            alignItems: 'center',
            paddingTop: 40
        },
     
        inputs: {
            width: 50,
            height: 50,
            borderColor: 'gray', 
            borderWidth: 1
    },
     
        buttons: {
            flexDirection: 'row',
            padding: 10,
        }
    })

AppRegistry.registerComponent('Laskinhistoria', () => Laskinhistoria);
