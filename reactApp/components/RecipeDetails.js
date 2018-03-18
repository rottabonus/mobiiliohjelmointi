import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class RecipeDetails extends React.Component {
      static navigationOptions = {title: 'Recipe Details'};
 
  render() {
      const { title, ingredients } = this.props.navigation.state.params;
    return (
      <View>
        <Text>
       Yello, this is RecipeDetails and you pushed {title}
        , which has following ingredients: {ingredients}
        </Text>
      </View>
    );
  }
}

