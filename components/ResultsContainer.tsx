import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: 60,
    width: '50%',
    height: '50%',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 2
    // backgroundColor: 'blue'
  },
  row: {
    width: '100%',
    maxHeight: '50%',
    height: '50%',
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red'
  },
  result: {
    borderRadius: 25,
    width: '50%',
    height: '100%',
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
    let first = this.results.slice(0, 2);
    let second = this.results.slice(2, 4);
    return (
      <View style={style.container}>
        <View style={style.row}>
          {first.map((result, index) => {
            return (<View key={index} style={style.result} backgroundColor={result === 'match' ? 'black' : 'white'}>
            </View>);
          })}
        </View>
        <View style={style.row}>
          {second.map((result, index) => {
            return (<View key={index} style={style.result} backgroundColor={result === 'match' ? 'black' : 'white'}>
            </View>);
          })}
        </View>
      </View>
    )
  }
};

export default ResultsContainer;