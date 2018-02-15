import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, AsyncStorage } from 'react-native';

export default class Arvauspeli extends React.Component {
     static navigationOptions = {title: 'Arvauspeli'};
    constructor(props){
        super(props);
        this.state = {arvaus: '', text: 'Arvaa numeroa väliltä 1-100'};
    }
    
    
    componentWillMount(){
    this.check();
 }
    
    check(){

    AsyncStorage.getItem('highScore').then((highScore) => {
        if(highScore) {
        this.setState({highScore: highScore})
        } else {
            this.setState({highScore: '0'})
        }
    })
    
    AsyncStorage.getItem('voitotSync').then((voitot) => {
        if (voitot) {
            this.setState({voitotSync: voitot})
        } else {
            this.setState({voitotSync: '0'});
        }
    })
  }

  componentDidMount(){
       this.resetGame()
     }
    
    resetGame(){
        this.setState({arvaukset: 1, vastaus: Math.floor(Math.random() * 100) + 1, arvaus: ''})
    }
    
    clearData(){
    AsyncStorage.clear();
 }    
    
async setHighScore(){
    let highScore = this.state.arvaukset
    let scoreString = highScore.toString() 
    try {
   await AsyncStorage.setItem('highScore', scoreString);
    } catch (error) {
        Alert.alert('HighScoreFail')
    }
    this.setState({highScore: scoreString})
    this.resetGame()
}
    
    compareHighScore(){
        let runScore = this.state.arvaukset
        let currentHighScore = parseInt(this.state.highScore)
        if (runScore < currentHighScore || currentHighScore == 0) {
            this.setHighScore()
        } else {
            this.resetGame()
        }
    } 
    
    
    async addWin(){
                let voitotNum = parseInt(this.state.voitotSync)
                let voitotUpdatet = voitotNum + 1
                let voitot = voitotUpdatet.toString()
                 try {     
                await AsyncStorage.setItem('voitotSync', voitot);
                 } catch (error) {
                     Alert.alert('WinningFail');
                 }
                    this.setState({voitotSync: voitot})
                }
    
    buttonPressed = () => {
        if (parseInt(this.state.arvaus) == parseInt(this.state.vastaus)) {
            Alert.alert('Arvasit oikein ' + this.state.arvaukset + ' yrityksellä');
                        this.addWin()
                            this.compareHighScore()
                                
                            
            
        } else if (parseInt(this.state.arvaus) > parseInt(this.state.vastaus) && parseInt(this.state.arvaus) < 101) {
            Alert.alert('Arvauksesi ' + this.state.arvaus + ' on liian suuri');
                this.setState((prevState) => {
                    return {arvaukset: prevState.arvaukset + 1}});
            
        } else if (parseInt(this.state.arvaus) < parseInt(this.state.vastaus) && parseInt(this.state.arvaus) > 0) {
            Alert.alert('Arvauksesi ' + this.state.arvaus + ' on liian pieni');
                this.setState((prevState) => {
                    return {arvaukset: prevState.arvaukset + 1}});
            
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
        <Text> Arvaukset: {this.state.arvaukset -1} Voitot: {this.state.voitotSync} Ennätys: {this.state.highScore} Vastaus: {this.state.vastaus}</Text>
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}} keyboardType='numeric' onChangeText={(arvaus) => this.setState({arvaus})} value={this.state.arvaus} />
        <Button onPress={this.buttonPressed} title="Arvaa numeroa"/>
             <Button onPress={() => this.props.navigation.navigate('GuessingHistory', {voitotSync: this.state.voitotSync, highScore: this.state.highScore})} title="Voitot"/>
               <Button onPress={this.clearData} title="ClearScore"/>
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
  },
    
});



