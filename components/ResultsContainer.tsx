import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { CodeComparisonResult } from '../models/code';
import { Colors } from '../styles';

const style = StyleSheet.create({
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
  results: CodeComparisonResult[]
};

class ResultsContainer extends Component<Props> {
  resultView(color: string, key: number) {
    return (
      <View
        key={key}
        style={{
          borderColor: Colors.secondary,
          borderWidth: 2,
          borderRadius: 25,
          width: 15,
          height: 15,
          backgroundColor: color,
        }}>
      </View>
    );
  }

  render() {
    console.log(`render ResultsContainer`);
    const results = (this.props.results ?? []).map(result => result.toString());
    results.sort();
    const emptyResults = 4 - results.length;
    for (let i = 0; i < emptyResults; i++) {
      results.push(Colors.transparent);
    }
    const first = results.slice(0, 2).map((color, index) => {
      return this.resultView(color, index);
    });
    const second = results.slice(2, 4).map((color, index) => {
      return this.resultView(color, index);
    });
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        maxWidth: 15 * 5,
        width: 15 * 5,
        height: '80%'
      }}>
        <View key={1} style={style.row}>
          {first}
        </View>
        <View key={2} style={style.row}>
          {second}
        </View>
      </View>
    );
  }
};

export default ResultsContainer;