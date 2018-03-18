import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import  { SQLite } from 'expo';
import { Header, Button, List, ListItem } from 'react-native-elements';

const db = SQLite.openDatabase('shopping.db');

export default class ShoppinglistTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {product: '', amount: '', data: []};
    }
    
    
    componentDidMount() {
    db.transaction(tx => {
      tx.executeSql('create table if not exists shopping (id integer primary key not null, product text, amount text);');
    });
    this.updateList();
  }
    
    
    addProduct = () => {
        db.transaction(tx => {
            tx.executeSql('insert into shopping (product, amount) values (?, ?)', [this.state.product, this.state.amount]);
        }, null, this.updateList)
    }
    
    updateList = () => {
        db.transaction(tx => {
            tx.executeSql('select * from shopping', [], (_, { rows }) =>
                         this.setState({data: rows._array})
                         );
                    });
                }
    
    deleteProduct = (id) => {
        db.transaction(tx => {
        tx.executeSql('delete from shopping where id = ?;', [id]);}, null,
        this.updateList)
    }


  render() {
    return (
        
        <View style={styles.container}>
        
        <Header
  placement="left"
  leftComponent={{ icon: 'menu',
        color: '#fff',
        onPress: () => this.props.navigation.navigate('DrawerOpen')}}
  centerComponent={{ text: 'Shoppinglist', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home',
                  color: '#fff',
                 onPress: () => this.props.navigation.navigate('Shoppinglist')}}
/> 
      
        <View style={styles.inputs}>
        <TextInput  placeholder='Product' onChangeText={(product) => this.setState({product})} value={this.state.product} />
        <TextInput  placeholder='Amount' onChangeText={(amount) => this.setState({amount})} value={this.state.amount} />
        </View>
        
        <View>
        <Button onPress={this.addProduct} title="Add"/>
            </View>
        
         <List>
        <FlatList
        data={this.state.data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem
        title={item.product} 
        subtitle={item.amount}
        rightTitle='bought'
        rightIcon={{name:'remove'}}
        onPressPress={() => this.deleteProduct(item.id)}/>}/>
        </List>  
        
      </View>
         
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      paddingBottom: 20,
      
  },
    buttons: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
  listcontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
    inputs:{
        width: 330,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center'
    }
});

//<Text style={{color: 'red'}} onPress={() => this.deleteProduct(item.id)}> //remove</Text></View