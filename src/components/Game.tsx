import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import Board from './Board';
import ColorPicker from './ColorPicker';
import Code, { CodeComparisonResult } from '../models/code';
import MasterMindGame from '../models/mastermindGame';

type Props = {
  game: MasterMindGame;
};

type State = {
  codes: Code[];
  results: CodeComparisonResult[][];
}

export default class Game extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      codes: this.props.game.codes,
      results: this.props.game.results
    }
  }

  alert(title: string, message: string) {
    Alert.alert(
      title,
      message,
      [
        {
          text: "Cancel",
          onPress: () => { },
          style: "cancel"
        },
        {
          text: "Start New Game",
          onPress: () => {
            const update = this.props.game.restart();
            this.setState({ results: update.results, codes: update.codes });
          }
        }
      ],
      { cancelable: false }
    )
  }

  render() {
    console.log(`render Game`);
    return (
      <View style={style.container}>
        <Board
          handleColorSelected={(color: string, index: number) => {
            const game = this.props.game;
            let code = this.props.game.codes[game.currentGuessCount];
            code.values[index] = color;
            game.codes[game.currentGuessCount] = code;
            this.setState({
              codes: game.codes
            });
          }}
          game={this.props.game}
          codes={this.state.codes}
          results={this.state.results}>
        </Board>
        <View style={style.right}>
          <View style={style.picker}>
            <ColorPicker
              colorManager={this.props.game.colorManager}>
            </ColorPicker>
          </View>
          <TouchableOpacity
            style={style.newGame}
            onPress={() => {
              this.alert(`Start a New Game`, `Are you sure?`);
            }}>
            <Text>
              New Game
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
    padding: 8
  },
  picker: {
    width: '100%',
    height: '90%',
  },
  newGame: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  row: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  }
});