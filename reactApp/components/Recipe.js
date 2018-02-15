import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Alert, Button} from 'react-native';

export default class Recipe extends React.Component {
   static navigationOptions = {title: 'Reseptihaku'};
    constructor(props){
      super(props);
      this.state = {reseptit: [], aine: ''}
    }

    haeResepti = () => {
      const url= 'http://www.recipepuppy.com/api/?i='+this.state.aine;
                fetch(url)
                .then((response) => response.json())
                .then((responseJson) =>  {
                this.setState({
                  reseptit: responseJson.results});
                })
                .catch((error) => {
                  Alert.alert(error);
                });
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        Hae reseptiä raaka-aineella! </Text>
        <View style={styles.inputs}>
        <TextInput value={this.state.aine} onChangeText={(aine) => this.setState({aine})} />
        </View>
        <View>
        <Button onPress={this.haeResepti} title="Hae reseptiä"/>
        </View>
        <View>
        <Text> Löydetyt reseptit: </Text>
        <FlatList style={styles.recipes} keyExtractor={item => item.title}
        renderItem={({item}) => <Text>{item.title}</Text>}
        data={this.state.reseptit} />
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
    text: {
        textAlign: 'center'
    },
    inputs: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'blue',
      borderWidth: 1,
      width: 150
    },
    recipes: {
      marginRight: '5%'
    }
    
    
});