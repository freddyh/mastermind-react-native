import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: 15 * 5,
    width: 15 * 5,
    height: '80%',
  },
  row: {
    width: '100%',
    maxHeight: '50%',
    height: '50%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',

  },
  result: {
    borderRadius: 25,
    width: 15,
    height: 15,
    backgroundColor: 'black'
  }
});

type Props = {
  results: string[]
};

class ResultsContainer extends Component<Props> {
  private results: string[];

  constructor(props: Props) {
    super(props);
    this.results = props.results;
  }

  render() {
    let first = this.results.slice(0, 2).map((result, index) => {
      return (
        <View
          key={index}
          style={style.result}
          backgroundColor={result === 'match' ? 'black' : 'white'}>
        </View>);
    });
    let second = this.results.slice(2, 4).map((result, index) => {
      return (
        <View
          key={index}
          style={style.result}
          backgroundColor={result === 'match' ? 'black' : 'white'}>
        </View>);
    });
    return (
      <View style={style.container}>
        <View style={style.row}>
          {first}
        </View>
        <View style={style.row}>
          {second}
        </View>
      </View>
    )
  }
};

export default ResultsContainer;