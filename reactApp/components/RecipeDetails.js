import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class RecipeDetails extends React.Component {
      static navigationOptions = {title: 'Lasketut laskut'};

    
  render() {
      const { title, ingredients, thumbnail } = this.props.navigation.state.params;
    return (
      <View>
        <Text>
       Yello, this is RecipeDetails and you pushed {title}
        , which has following ingredients: {ingredients}
        </Text>
        <View>
        <Image source={{uri: thumbnail}} />
        </View>
      </View>
    );
  }
}

