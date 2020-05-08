import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import GuessRow from './GuessRow';
import Code from '../models/code';

type MyProps = {
  game: any;
};

export default class Board extends Component<MyProps> {
  private guessRows: GuessRow[];

  constructor(props: MyProps) {
    super(props);
    const guessRows = this.props.game.guesses.map((guess: Code, index: number) => {
      return (
        <GuessRow
          key={index}
          game={this.props.game}
          guess={guess}
          results={[]}
          active={0 === index} >
        </GuessRow >
      );
    });
    this.guessRows = guessRows;
  }

  render() {
    return (
      <View style={style.board}>
        {this.guessRows}
      </View>
    );
  }
};

const style = StyleSheet.create({
  board: {
    flexDirection: 'column-reverse',
    flex: 1,
    width: '70%',
    height: '100%',
  },
});