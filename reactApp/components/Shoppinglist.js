import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, FlatList } from 'react-native';

export default class Shoppinglist extends React.Component {
    constructor(props){
        super(props);
        this.state = {text: '', data: []};
    }
    
    buttonPressed = () => {
        this.setState({data: [...this.state.data, {key: this.state.text}], text: ''});
}

    clearList = () => {
        this.setState({data: []});
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Shopping list</Text>
        <FlatList data={this.state.data}
        renderItem={({item}) => 
        <Text>{item.key}</Text>} />
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
        <View style={styles.buttons}>
        <Button onPress={this.buttonPressed} title="Add"/>
        <Button onPress={this.clearList} title="Clear"/>
            </View>
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
      paddingTop: 100,
      paddingBottom: 100
  },
    buttons: {
        flexDirection: 'row'
    }
    
});
