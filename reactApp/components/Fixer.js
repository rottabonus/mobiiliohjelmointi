import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Picker, FlatList, ActivityIndicator} from 'react-native';

export default class Fixer extends React.Component {
   static navigationOptions = {title: 'Euro Converter'};
    constructor(props){
    super(props);
        this.state = {isLoading: true, sum: '', currency: '', data: '', converted: 0}; 
        }
    
    componentDidMount(){
        this.getRates()
    }
    
    getRates(){
        const url = 'https://api.fixer.io/latest';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) =>  {
        this.setState({
        data: responseJson.rates, isLoading: false});
            })
            .catch((error) => {
            Alert.alert(error);
            });
    }
        
    
    convertMoney = () => {
        let data = this.state.currency;
        let toConvert = this.state.sum;
        let convertedSum = data * toConvert;
        this.setState({converted : convertedSum});
        
        
    }
    
  render() {
      
      if(this.state.isLoading){
          return(
          <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
              <Text> Loading.... </Text>
              </View>
          );
      }
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
        <Text style={styles.text}>
       Input amount of euros to convert: 
        </Text>
        <TextInput keyboardType='numeric' onChangeText={(sum) => this.setState({sum})} value={this.state.sum} /></View>
    <View style={styles.buttons}>
    <Picker style={{width: 100}}
        selectedValue={this.state.currency}
        onValueChange={(itemValue, itemIndex)=> this.setState({currency: itemValue})}>
        <Picker.Item label ="Choose a currency" value='0' />
         <Picker.Item label ="AUD" value={this.state.data.AUD} />
       <Picker.Item label ="BGN" value={this.state.data.BGN} />
       <Picker.Item label ="BRL" value={this.state.data.BRL} />
        <Picker.Item label ="CAD" value={this.state.data.CAD} />
       <Picker.Item label ="CHF" value={this.state.data.CHF} />
       <Picker.Item label ="CNY" value={this.state.data.CNY} />
        <Picker.Item label ="CZK" value={this.state.data.CZK} />
       <Picker.Item label ="DKK" value={this.state.data.DKK} />
       <Picker.Item label ="GBP" value={this.state.data.GBP} />
        <Picker.Item label ="HKD" value={this.state.data.HKD} />
       <Picker.Item label ="HRK" value={this.state.data.HRK} />
       <Picker.Item label ="HUF" value={this.state.data.HUF} />
        <Picker.Item label ="IDR" value={this.state.data.IDR} />
       <Picker.Item label ="ILS" value={this.state.data.ILS} />
       <Picker.Item label ="INR" value={this.state.data.INR} />
        <Picker.Item label ="ISK" value={this.state.data.ISK} />
       <Picker.Item label ="JPY" value={this.state.data.JPY} />
       <Picker.Item label ="KRW" value={this.state.data.KRW} />
       <Picker.Item label ="MXN" value={this.state.data.MXN} />
        <Picker.Item label ="MYR" value={this.state.data.MYR} />
       <Picker.Item label ="NOK" value={this.state.data.NOK} />
       <Picker.Item label ="NZD" value={this.state.data.NZD} />
        <Picker.Item label ="PHP" value={this.state.data.PHP} />
       <Picker.Item label ="PLN" value={this.state.data.PLN} />
       <Picker.Item label ="RON" value={this.state.data.RON} />
        <Picker.Item label ="RUB" value={this.state.data.RUB} />
       <Picker.Item label ="SEK" value={this.state.data.SEK} />
       <Picker.Item label ="SGD" value={this.state.data.SGD} />
        <Picker.Item label ="THB" value={this.state.data.THB} />
       <Picker.Item label ="TRY" value={this.state.data.TRY} />
       <Picker.Item label ="USD" value={this.state.data.USD} />
        <Picker.Item label ="ZAR" value={this.state.data.ZAR} />
            </Picker>
       <Button onPress={this.convertMoney} title="Convert"/>
       </View>
       <View><Text>Converted sum is : {this.state.converted} </Text></View>
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
    buttons: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    
    
});


// {this.state.dataSource.map((item, key) =>( 
//         <Picker.Item label={item.base} value={item.rates} key={key} />)
   //     )}

    //const url = 'https://api.fixer.io/latest';
      //  const response = await fetch(url);
       //const data = await response.json();
       //this.setState({data, isLoading: false});
    //   Alert.alert(this.state.data.toString());
    //}

//{Object.entries(api).map((item, i) =>( 
  //       <Picker.Item label={item} value={item.rates} key={i} />)
    //    )}   