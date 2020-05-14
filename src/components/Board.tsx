import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import GuessRow from './GuessRow';
import Code, { CodeComparisonResult } from '../models/code';
import ResultsContainer from './ResultsContainer';
import MasterMindGame from '../models/mastermindGame';

type Props = {
  game: MasterMindGame;
  codes: Code[];
  results: CodeComparisonResult[][];
  handleColorSelected: (color: string, index: number) => void;
};

export default class Board extends Component<Props> {
  render() {
    console.log(`render Board`);
    const rows = (this.props.codes.map((code: Code, index: number) => {
      const i = this.props.results.length;
      const isActiveRow = i === index;

      const codeView = (
        <GuessRow
          key={index}
          handleColorSelected={this.props.handleColorSelected}
          game={this.props.game}
          code={code}
          isSuspended={!isActiveRow}>
        </GuessRow>
      );

      const resultsView = (isActiveRow ?
        <TouchableOpacity
          style={{
            height: 75,
            width: 75,
            backgroundColor: '#DDDDDD',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 8
          }}
          onPress={() => {
            const g = this.props.codes[index];
            const update = this.props.game.submitGuess(g);
            if (!!update) {
              this.setState({ results: update.results, codes: update.codes });
            }
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
        :
        (this.props.results[index] &&
          <ResultsContainer
            results={this.props.results[index]} >
          </ResultsContainer>
        )
      );

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
            borderColor: isActiveRow ? '#004d39' : 'transparent',
            borderWidth: 5,
            borderRadius: 10
          }}>
          {codeView}
          {resultsView}
        </View>
      );
    }));

    return (
      <View style={{
        flexDirection: 'column-reverse',
        flex: 1,
        width: '70%',
        height: '100%',
      }}>
        {rows}
      </View>
    );
  }
};