import React, { Component } from 'react';
import { View } from 'react-native';
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
          results={this.props.game.results[index]}
          active={0 === index} >
        </GuessRow >
      );
    });
    this.guessRows = guessRows;
  }

  render() {
    console.log(`render Board`);
    return (
      <View style={{
        flexDirection: 'column-reverse',
        flex: 1,
        width: '70%',
        height: '100%',
      }}>
        {this.guessRows}
      </View>
    );
  }
};