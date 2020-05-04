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
  }
});

type MyProps = {
  game: any;
  guess: Guess;
  results: GuessResult[];
  active: boolean;
};

type MyState = {
  isMutable: boolean;
  selectedIndex: number;
};

export default class GuessRow extends Component<MyProps, MyState> {
  state: MyState = {
    isMutable: false,
    selectedIndex: 0,
  };

  nextIndex() {
    return this.state.selectedIndex + 1
  }

  render() {
    const buttons = this.props.guess.map((color: any, index: number) => {
      return (
        <ColorButton
          key={index}
          colorName={color}
          mutable={this.props.active}
          colorManager={this.props.game.colorManager}
          callback={(buttonKey) => {
            console.log(`Guess Row Clicked ${buttonKey} color manager: ${this.props.game.colorManager.selectedColor}`)
            this.setState({
              selectedIndex: this.nextIndex()
            })
          }} />
      );
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