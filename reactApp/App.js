import React from 'react';
import { StackNavigator, DrawerNavigator} from 'react-navigation';

import Laskin from './components/Laskin';
import Arvauspeli from './components/Arvauspeli';
import LaskinHistory from './components/LaskinHistory';
import GuessingHistory from './components/GuessingHistory';
import Recipe from './components/Recipe';
import RecipeDetails from './components/RecipeDetails';
import Fixer from './components/Fixer';
import FindAddr from './components/FindAddr';
import Shoppinglist from './components/Shoppinglist';
import FindRestaurants from './components/FindRestaurants';


export default class App extends React.Component{
    render() {
        return (
        <DrawerNavigation/>
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
 
 const DrawerNavigation = DrawerNavigator({
    FindAddress: {screen: FindAddr},
     FindRestaurants: {screen: FindRestaurants},
     Fixer: {screen: Fixer,
           path: '/converter'},
    Recipe: {screen: StackRecipe,
            path: '/recipes'},
    Laskin: {screen: StackLaskin,
            path: '/calculator'},
    GuessingGame: {screen: StackArvaus,
                  path: '/guessing'},
     Shoppinglist: {screen: Shoppinglist}
}, {
    drawerPosition: 'left'

})


