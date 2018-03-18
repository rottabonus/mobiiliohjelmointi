import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Picker,
  ActivityIndicator,
} from 'react-native';

export default class Fixer extends React.Component {
  static navigationOptions = { title: 'Euro Converter' };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      sum: '',
      currency: 0,
      data: null,
      converted: 0,
    };
  }

  componentWillMount() {
    this.getRates();
  }

  getRates() {
    const url = 'https://api.fixer.io/latest';
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson.rates,
          isLoading: false,
        });
      })
      .catch(error => {
        Alert.alert(error);
      });
  }

  convertMoney = () => {
    let data = this.state.currency;
    let toConvert = this.state.sum;
    let convertedSum = data * toConvert;
    this.setState({ converted: convertedSum });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
          <Text> Loading.... Ba dim ba dimb duu! </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Text style={styles.text}>
            Input amount of euros to convert:
          </Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={sum => this.setState({ sum })}
            value={this.state.sum}
          />
        </View>
        <View style={styles.buttons}>
          <Picker
            style={{ width: 100 }}
            selectedValue={this.state.currency}
            onValueChange={(itemValue) => this.setState({currency: itemValue}, ()=>{ Alert.alert(this.state.currency.toString())})}>
            {Object.keys(this.state.data).map((key, i) => {
              return <Picker.Item label={key} value={this.state.data[key]} key={i} />;
            })}
          </Picker>
          <Button onPress={this.convertMoney} title="Convert" />
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
    paddingBottom: 100,
  },
  text: {
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});


