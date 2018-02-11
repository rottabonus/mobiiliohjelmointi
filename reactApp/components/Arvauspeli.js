import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, AsyncStorage } from 'react-native';

export default class Arvauspeli extends React.Component {
     static navigationOptions = {title: 'Arvauspeli'};
    constructor(props){
        super(props);
        this.state = {arvaus: '', text: 'Arvaa numeroa väliltä 1-100', voitot: 0};
    }
    
    check(){

    AsyncStorage.getItem('highScore').then((highScore) => {
        this.setState({highScore: highScore})
    })
  }

  componentWillMount(){
    this.check();
  }
    
//clearData(){
//    AsyncStorage.clear();
//}    
    
setHighScore(){
    let highScore = this.state.arvausKerroin
    let scoreString = highScore.toString()
    AsyncStorage.setItem('highScore', scoreString)
    this.setState({highScore: scoreString})
}
    
    
seeHighScore = async () => {
    try {
        let highScore = await AsyncStorage.getItem('highScore');
        let highScoreInt = parseInt(highScore)
        if (highScoreInt < this.state.arvausKerroin) {
            this.setHighScore()
        }
    } catch(error){
        Alert.alert('error')
    }
}
   componentDidMount(){
       this.resetGame()
       this.seeHighScore()
   }
    
    resetGame(){
        this.setState({arvausKerroin: 1, vastaus: Math.floor(Math.random() * 100) + 1, arvaus: ''})
    }
    
    buttonPressed = () => {
        if (parseInt(this.state.arvaus) == parseInt(this.state.vastaus)) {
            Alert.alert('Arvasit oikein ' + this.state.arvausKerroin + ' yrityksellä');
            this.setState((prevState) => {
                return {voitot: prevState.voitot +1}});
                    this.seeHighScore()
                        this.resetGame()
            
        } else if (parseInt(this.state.arvaus) > parseInt(this.state.vastaus) && parseInt(this.state.arvaus) < 101) {
            Alert.alert('Arvauksesi ' + this.state.arvaus + ' on liian suuri');
                this.setState((prevState) => {
                    return {arvausKerroin: prevState.arvausKerroin + 1}});
            
        } else if (parseInt(this.state.arvaus) < parseInt(this.state.vastaus) && parseInt(this.state.arvaus) > 0) {
            Alert.alert('Arvauksesi ' + this.state.arvaus + ' on liian pieni');
                this.setState((prevState) => {
                    return {arvausKerroin: prevState.arvausKerroin + 1}});
            
        } else {
            Alert.alert('Arvaa lukua 1-100 väliltä!');
        }
   
}


  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:250, height: 300}}
        source={require('../PinguLokoEka.png')} />
        <Text>{this.state.text}</Text>
        <Text> Arvaukset: {this.state.arvausKerroin -1} Voitot: {this.state.voitot} Ennätys: {this.state.highScore}</Text>
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}} keyboardType='numeric' onChangeText={(arvaus) => this.setState({arvaus})} value={this.state.arvaus} />
        <Button onPress={this.buttonPressed} title="Arvaa numeroa"/>
             <Button onPress={() => this.props.navigation.navigate('GuessingHistory', {voitot: this.state.voitot})} title="Voitot"/>
              
      </View>
        
    );
  }
}

 //  <Button onPress={this.clearData} title="ClearScore"/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
});



