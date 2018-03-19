import React from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { Header } from 'react-native-elements';


export default class Laskinhistoria extends React.Component {
    static navigationOptions = {title: 'Calculator',  header: null };
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
       <View>
        
       <Header
  placement="left"
  leftComponent={{ icon: 'menu',
        color: '#fff',
        onPress: () => this.props.navigation.navigate('DrawerOpen')}}
  centerComponent={{ text: 'Calculator', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home',
                  color: '#fff',
                 onPress: () => this.props.navigation.navigate('Shoppinglist')}}
/>
       
       <View>
       <Text style={{alignSelf: 'center'}}>Vastaus: {this.state.vastaus}</Text>
       </View>
       <View style={styles.inputs}>
        <TextInput keyboardType='numeric' onChangeText={(numero1) => this.setState({numero1})} value={this.state.numero1} />
   </View><View style={styles.inputs}>
       <TextInput keyboardType='numeric' onChangeText={(numero2) => this.setState({numero2})} value={this.state.numero2} />
       </View>
       <View style={styles.buttons}>
        <Button onPress={this.laskeMinus} title="-"/>
         <Button onPress={this.laskePlus} title="+"/>
             <Button onPress={(historia) => this.props.navigation.navigate('LaskinHistory', {historia: this.state.historia})} title="Lasketut"/>
        </View>
     </View>
   );
  }
   
}

 const styles = StyleSheet.create({
     
        
     
        inputs: {
            width: 35,
            height: 25,
            borderColor: 'blue', 
            borderWidth: 1,
            alignSelf: 'center'
            
    },
     
        buttons: {
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-around'
        }
    })

AppRegistry.registerComponent('Laskinhistoria', () => Laskinhistoria);
