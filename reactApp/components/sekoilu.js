import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';

export default class sekoilu extends React.Component {
    constructor(props){
        super(props);
        this.state = {text: '', easter: 'Rottabonus'};
    }
    
    buttonPressed = () => {
        if (this.state.text == this.state.easter) {
            Alert.alert('Easter Egg');
        } else {
            Alert.alert('Kirjoitit ' + this.state.text);
        }
   
}


  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:250, height: 300}}
        source={require('./PinguLokoEka.png')} />
        <Text>Ma olen rotta</Text>
        <Text>Sipulikoira</Text>
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
        <Button onPress={this.buttonPressed} title="Paina"/>
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
