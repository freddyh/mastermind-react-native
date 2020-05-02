import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: 15 * 5,
    width: 15 * 5,
    height: '80%'
  },
  row: {
    width: '100%',
    maxHeight: '50%',
    height: '50%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly'
  },
});

type Props = {
  results: string[]
};

class ResultsContainer extends Component<Props> {
  private resultsColors: string[];

  constructor(props: Props) {
    super(props);
    this.resultsColors = props.results.map((result: string) => {
      return result === 'match' ? 'black' : 'white'
    });
  }

  resultView(color: string, key: number) {
    const style = StyleSheet.create({
      main: {
        borderRadius: 25,
        width: 15,
        height: 15,
        backgroundColor: color
      }
    });
    return (
      <View
        key={key}
        style={style.main}>
      </View>
    );
  }

  render() {
    let first = this.resultsColors.slice(0, 2).map((color, index) => {
      return this.resultView(color, index);
    });
    let second = this.resultsColors.slice(2, 4).map((color, index) => {
      return this.resultView(color, index);
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
    );
  }
};

export default ResultsContainer;