import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Board from './Board';
import ColorPicker from './ColorPicker';
import Code, { CodeComparisonResult } from '../models/code';
import MasterMindGame from '../models/mastermindGame';

type Props = {
  game: MasterMindGame;
};

type State = {
  guesses: Code[];
  results: CodeComparisonResult[][];
}

export default class Game extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      guesses: this.props.game.guesses,
      results: this.props.game.results
    }
  }
  render() {
    console.log(`render Game`);
    return (
      <View style={style.container}>
        <Board
          handleColorSelected={(color: string, index: number) => {
            const game = this.props.game;
            let guess = this.props.game.guesses[game.currentGuessCount];
            guess.values[index] = color;
            game.guesses[game.currentGuessCount] = guess;
            this.setState({
              guesses: game.guesses
            });
          }}
          game={this.props.game}
          guesses={this.state.guesses}
          results={this.state.results}>
        </Board>
        <View style={style.right}>
          <View style={style.picker}>
            <ColorPicker
              colorManager={this.props.game.colorManager}>
            </ColorPicker>
          </View>
          <TouchableOpacity
            style={style.submit}
            onPress={() => {
              const i = this.props.game.results.length;
              const g = this.props.game.guesses[i];
              const update = this.props.game.submitGuess(g);
              this.setState({ results: update.results, guesses: update.codes });
            }}>
            <Text>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#007558', // board color
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 8,
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: '20%',
  },
  picker: {
    width: '100%',
    height: '90%',
  },
  submit: {
    height: '10%',
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  row: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  }
});