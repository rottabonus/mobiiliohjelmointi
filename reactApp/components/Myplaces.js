import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, FlatList} from 'react-native';
import  { SQLite } from 'expo';
import {List, ListItem, Button, Header} from 'react-native-elements';

const db = SQLite.openDatabase('myplaces.db');

export default class Myplaces extends React.Component {
    static navigationOptions = { header: null }
    constructor(props){
        super(props);
        this.state = {newaddress: '', saved: []};
    }
    
componentDidMount() {
    db.transaction(tx => {
        tx.executeSql('create table if not exists places (id integer primary key not null, address text);');
    });
     this.updateList();
}    

updateList = () => {
    db.transaction(tx => {
        tx.executeSql('select * from places', [], (_, { rows }) =>
                     this.setState({saved: rows._array})
                     );
                });
            }

saveAdd = () => {
    db.transaction(tx => {
        tx.executeSql('insert into places (address) values (?)', [this.state.newaddress]);
    }, null, this.updateList)
}

deleteAdd = (id) => {
    db.transaction(tx => {
        tx.executeSql('delete from places where id = ?;', [id]);}, null,
        this.updateList)
    }

 getAddress = (item) => {
        this.props.navigation.navigate('MyplacesMap', {...item});
    }


  render() {
    return (
      <View style={styles.container}>
        
        <Header
  placement="left"
  leftComponent={{ icon: 'menu',
        color: '#fff',
        onPress: () => this.props.navigation.navigate('DrawerOpen')}}
  centerComponent={{ text: 'My places', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home',
                  color: '#fff',
                 onPress: () => this.props.navigation.navigate('Shoppinglist')}}/>
        
        <View style={styles.inputs}>
        <TextInput placeholder='Type address' onChangeText={(newaddress) => this.setState({newaddress})} value={this.state.newaddress}/>
        </View><View style={{width: 330, alignSelf: 'center'}}>
        <Button onPress={this.saveAdd} title='Save' />
        </View>
       
         <List>
        <FlatList
        data={this.state.saved}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem
        title={item.address}
        rightTitle='show on map'
        rightIcon={{name:'room'}}
        onLongPress={() => this.deleteAdd(item.id)}
       onPress={() => this.getAddress(item)}/>}/>
        </List>  
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
    inputs: {
      borderColor: 'gray',
      borderWidth: 1,
        width: 300,
        alignSelf: 'center'
    }
});
