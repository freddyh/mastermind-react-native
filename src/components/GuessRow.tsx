import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ColorButton from './ColorButton';
import ResultsContainer from './ResultsContainer';
import Guess from '../models/guess';
import GuessResult from '../models/guessResult';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  row: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  },
  selected: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '100%',
    width: '100%',
    flex: 1

  }
});

type Props = {
  game: any;
  guess: Guess;
  results: GuessResult[];
  active: boolean;
};

type State = {
  isMutable: boolean;
  selectedIndex: number;
};

export default class GuessRow extends Component<Props, State> {
  state: State = {
    isMutable: false,
    selectedIndex: 0,
  };

  public guess: Guess;

  constructor(props: Props) {
    super(props);
    this.guess = props.guess;
    this.state = {
      isMutable: props.active,
      selectedIndex: 0
    };
  }

  nextIndex(): number {
    let next = this.state.selectedIndex + 1;

    if (next === this.props.game.codeLength) {
      next = 0;
    }

    if (this.guess.values[next] === 'transparent') {
      return next;
    } else {
      return this.nextIndex();
    }
  }

  render() {
    const buttons = this.props.guess.values.map((color: any, index: number) => {
      return (
        <ColorButton
          key={index}
          colorName={color}
          mutable={this.props.active}
          callback={(buttonKey) => {
            console.log(`selected index ${index}`)
            this.setState({
              selectedIndex: index
            })
          }} />
      );
    });

    const results = this.props.results.length > 0 ? (
      <ResultsContainer
        results={this.props.results}>
      </ResultsContainer>
    ) : null;

    const row = (
      <View style={style.row}>
        {buttons}
        {results}
      </View>
    );

    return (
      <View style={style.container}>
        {row}
      </View>
    );
  }
};