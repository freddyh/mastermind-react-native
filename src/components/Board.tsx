import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import GuessRow from './GuessRow';
import Code, { CodeComparisonResult } from '../models/code';
import ResultsContainer from './ResultsContainer';
import MasterMindGame from '../models/mastermindGame';
import { GameConfiguration } from '../models/gameDifficulty';
import { Buttons, Colors } from '../styles';

type Props = {
  game: MasterMindGame;
  configuration: GameConfiguration;
  codes: Code[];
  results: CodeComparisonResult[][];
  handleColorSelected: (color: string, index: number) => void;
};

export default class Board extends Component<Props> {
  render() {
    console.log(`render Board`);
    const codes = this.props.codes ?? [];
    const emptyRowCount: number = this.props.configuration.guessCount() - codes.length;
    for (let i = 0; i < emptyRowCount; i++) {
      codes.push(new Code(Array(this.props.configuration.codeLength()).fill(Colors.transparent)));
    }
    const rows = (this.props.codes.map((code: Code, index: number) => {
      const i = this.props.results.length;
      const isActiveIndex = i === index;
      const isActiveRow = isActiveIndex && this.props.game.isActive;
      const isCompleted = index < i;

      const codeView = (
        <GuessRow
          key={index}
          handleColorSelected={this.props.handleColorSelected}
          game={this.props.game}
          code={code}
          isActive={isActiveRow}
          isCompleted={isCompleted}>
        </GuessRow>
      );

      const resultsView = (
        <View
          style={{
            height: 75,
            width: 75,
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 8
          }}>
          {
            (isActiveRow && this.props.game.isActive ?
              <TouchableOpacity
                style={styles.button}
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
            )
          }
        </View>
      );

      return (
        <View
          key={index}
          style={{
            margin: 3,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            width: '100%',
            height: '100%',
            borderColor: Colors.secondary,
            borderWidth: 2,
            borderRadius: 8
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

const styles = StyleSheet.create({
  button: {
    ...Buttons.primary
  }
});