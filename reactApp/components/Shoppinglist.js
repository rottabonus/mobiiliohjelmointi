import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import  { SQLite } from 'expo';

const db = SQLite.openDatabase('shoppinglist.db');

export default class Shoppinglist extends React.Component {
    constructor(props){
        super(props);
        this.state = {product: '', data: []};
    }
    
    
    componentDidMount() {
    db.transaction(tx => {
      tx.executeSql('create table if not exists shoppinglist (id integer primary key not null, product text);');
    });
    this.updateList();
  }
    
    
    addProduct = () => {
        db.transaction(tx => {
            tx.executeSql('insert into shoppinglist (product) values (?)', [this.state.product]);
        }, null, this.updateList)
    }
    
    updateList = () => {
        db.transaction(tx => {
            tx.executeSql('select * from shoppinglist', [], (_, { rows }) =>
                         this.setState({data: rows._array})
                         );
        });
    }
    
    deleteProduct = (id) => {
        db.transaction(
        tx => { tx.executeSql('delete from shoppinglist where id = ?;', [id]);}, null,
        this.updateList)
    }


  render() {
    return (
      <View style={styles.container}>
        
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}} onChangeText={(product) => this.setState({product})} value={this.state.product} />
        <View style={styles.buttons}>
        <Button onPress={this.addProduct} title="Add"/>
            </View>
        
        <Text style={{fontWeight: 'bold'}}>Shopping list</Text>
        <FlatList
        data={this.state.data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <View style={styles.listcontainer}>
        <Text>{item.product}</Text>
            <Text style={{color: 'red'}} onPress={() => this.deleteProduct(item.id)}> remove</Text></View>}
         />
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
    },
  listcontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
  }  
});
