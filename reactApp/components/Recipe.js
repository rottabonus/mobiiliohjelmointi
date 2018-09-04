import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TextInput} from 'react-native';
import { List, ListItem, Button, Header } from 'react-native-elements';

export default class Recipe extends React.Component {
   static navigationOptions = { header: null }
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
                  reseptit: responseJson.results,
                aine: ''});
                })
                .catch((error) => {
                  Alert.alert(error);
                });
    }
    
    getDetails = (item) => {
        this.props.navigation.navigate('RecipeDetails', {...item});
    }
    
    renderHeader = () => {
        return <Text style={{fontSize: 20}}> Found Recipes </Text>;
    };

  render() {
    return (
        
      <View style={styles.container}>
        
        <Header
  placement="left"
  leftComponent={{ icon: 'menu',
        color: '#fff',
        onPress: () => this.props.navigation.navigate('DrawerOpen')}}
  centerComponent={{ text: 'Recipefinder', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home',
                  color: '#fff',
                 onPress: () => this.props.navigation.navigate('Shoppinglist')}}
/>
        
        <View>
        <TextInput style={styles.inputs} value={this.state.aine} placeholder='Ingredient' onChangeText={(aine) => this.setState({aine})} />
        </View>
        <View>
        <Button onPress={this.haeResepti} title="Find recipe by ingredient"/>
        </View>
        <View>
        </View>

        <List>
        <FlatList 
        ListHeaderComponent={this.renderHeader}
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
      borderColor: 'gray',
      borderWidth: 1,
      padding: 5
    },
    recipes: {
      marginRight: '5%'
    }
    
    
});
