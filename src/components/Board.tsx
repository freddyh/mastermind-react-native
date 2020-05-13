import React, { Component } from 'react';
import { View } from 'react-native';
import GuessRow from './GuessRow';
import Code, { CodeComparisonResult } from '../models/code';
import ResultsContainer from './ResultsContainer';
import Game from './Game';

type Props = {
  game: Game;
  guesses: Code[];
  results: CodeComparisonResult[][];
};

export default class Board extends Component<Props> {
  render() {
    console.log(`render Board`);
    return (
      <View style={{
        flexDirection: 'column-reverse',
        flex: 1,
        width: '70%',
        height: '100%',
      }}>
        {this.props.guesses.map((guess: Code, index: number) => {
          const i = this.props.results.length;
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
                borderColor: i === index ? '#004d39' : 'transparent',
                borderWidth: 5,
                borderRadius: 10
              }}>
              <GuessRow
                key={index}
                game={this.props.game}
                guess={guess}
                isSuspended={i !== index}>
              </GuessRow >
              <ResultsContainer
                results={this.props.results[index]}>
              </ResultsContainer>
            </View>
          );
        })}
      </View>
    );
  }
};