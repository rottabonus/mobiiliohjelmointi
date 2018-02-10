import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default class LaskinHistory extends React.Component {
   static navigationOptions = {title: 'LaskinHistory'};
    
  render() {
      const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>
        Yello my friend, this is LaskinHistory
        Olet laskenut seuraavat laskut: </Text>
       <View>
             <FlatList data={params.historia}
        renderItem={({item}) => 
        <Text>{item.key}</Text>} />
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
    
    
});