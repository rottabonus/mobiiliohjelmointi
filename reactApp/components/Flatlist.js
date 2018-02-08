import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, FlatList } from 'react-native';

export default class Flatlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {text: '', data: []};
    }
    
    buttonPressed = () => {
        this.setState({data: [...this.state.data, {key: this.state.text}], text: ''});
}


  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data}
        renderItem={({item}) => 
        <Text>{item.key}</Text>} />
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
      paddingTop: 100,
      paddingBottom: 100
  },
    
});
