import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorButton from './ColorButton';
import ResultsContainer from './ResultsContainer';
import Guess from '../models/guess';
import GuessResult from '../models/guessResult';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'brown',
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
    backgroundColor: 'white'
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
      const button = (
        <ColorButton
          key={index}
          colorName={color}
          mutable={this.props.active}
          colorManager={this.props.game.colorManager}
          callback={(buttonKey) => {
            this.setState({
              selectedIndex: index
            })
          }} />
      );
      if (this.props.active) {
        if (index === this.state.selectedIndex) {
          return (
            <View
              key={index}
              style={style.selected}>
              {button}
            </View>
          );
        }
      }
      return button;
    });

    const row = (
      <View style={style.row}>
        {buttons}
        <ResultsContainer
          results={this.props.results}>
        </ResultsContainer>
      </View>
    );

    return (
      <View style={style.container}>
        {row}
      </View>
    );
  }
};