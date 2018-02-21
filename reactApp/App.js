import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Laskin from './components/Laskin';
import Arvauspeli from './components/Arvauspeli';
import LaskinHistory from './components/LaskinHistory';
import GuessingHistory from './components/GuessingHistory';
import Recipe from './components/Recipe';
import RecipeDetails from './components/RecipeDetails';


export default class App extends React.Component {


  render() {
    return (
        <TabNavigaattori/>
        );
  }
}
        
const StackRecipe = StackNavigator({
        Recipe: {screen: Recipe},
        RecipeDetails: {screen: RecipeDetails}
        })
        

const StackLaskin = StackNavigator({
        Laskin: {screen: Laskin},
        LaskinHistory: {screen: LaskinHistory}
        })  

const StackArvaus = StackNavigator({
        GuessingGame: {screen: Arvauspeli},
        GuessingHistory: {screen: GuessingHistory}
})

const TabNavigaattori = TabNavigator({
    Recipe: {screen: StackRecipe},
    Laskin: {screen: StackLaskin},
    GuessingGame: {screen: StackArvaus}
   
}, {
    tabBarPosition: 'bottom',

})


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
