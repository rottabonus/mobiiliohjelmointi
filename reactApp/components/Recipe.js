import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Alert, Button} from 'react-native';
import { List, ListItem } from "react-native-elements";

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
    
    getDetails = (item) => {
        this.props.navigation.navigate('RecipeDetails', {...item});
    }

  render() {
    return (
      <View style={styles.container}>
         <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
           title="Open Drawnavigator" />
        <Text style={styles.text}>
        Hae reseptiä raaka-aineella! </Text>
        <View style={styles.inputs}>
        <TextInput value={this.state.aine} onChangeText={(aine) => this.setState({aine})} />
        </View>
        <View>
        <Button onPress={this.haeResepti} title="Hae reseptiä"/>
        </View>
        <View>
        </View>
        <Text> Löydetyt reseptit: </Text>
        <List>
        <FlatList 
        data={this.state.reseptit}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ListItem roundAvatar
        title={item.title}
        subtitle={item.ingredients}
        avatar={{ uri: item.thumbnail }}
        onPress={() => this.getDetails(item)}/>}/>
        </List>  
        </View>  
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      paddingTop: 20,
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
      width: 150,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    recipes: {
      marginRight: '5%'
    }
    
    
});