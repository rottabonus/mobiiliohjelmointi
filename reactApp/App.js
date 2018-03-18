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
import Myplaces from './components/Myplaces';
import MyplacesMap from './components/MyplacesMap';


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
 
const StackMyPlaces = StackNavigator({
        Myplaces: {screen: Myplaces},
        MyplacesMap: {screen: MyplacesMap}
})
 
 const DrawerNavigation = DrawerNavigator({
     
     Myplaces: {screen: Myplaces},
      Shoppinglist: {screen: Shoppinglist},
      Recipe: {screen: StackRecipe,
            path: '/recipes'},
     FindRestaurants: {screen: FindRestaurants},
    FindAddress: {screen: FindAddr},
     Fixer: {screen: Fixer,
           path: '/converter'},
    Laskin: {screen: StackLaskin,
            path: '/calculator'},
    GuessingGame: {screen: StackArvaus,
                  path: '/guessing'}
     
}, {
    drawerPosition: 'left'

})


