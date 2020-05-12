import React, { Component } from 'react';
import { View } from 'react-native';
import GuessRow from './GuessRow';
import Code from '../models/code';
import ResultsContainer from './ResultsContainer';

type MyProps = {
  game: any;
};

export default class Board extends Component<MyProps> {
  private guessRows: GuessRow[];

  constructor(props: MyProps) {
    super(props);

    const guessRows = this.props.game.guesses.map((guess: Code, index: number) => {
      return (
        <View
          key={index}
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            width: '100%',
            height: '100%',
            borderColor: this.props.game.currentGuessCount === index ? 'green' : 'transparent',
            borderWidth: 2,
            borderRadius: 10
          }}>
          <GuessRow
            key={index}
            game={this.props.game}
            guess={guess}>
          </GuessRow >
          <ResultsContainer results={this.props.game.results[index]}>
          </ResultsContainer>
        </View>
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