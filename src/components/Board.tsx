import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import GuessRow from './GuessRow';
import ColorPicker from './ColorPicker';
import Guess from '../models/guess';

type MyProps = {
  game: any;
};

type MyState = {
  isActive: boolean;
};

export default class Board extends Component<MyProps, MyState> {
  state: MyState = {
    isActive: false,
  };

  private guessRows: GuessRow[];

  constructor(props: MyProps) {
    super(props);
    const guessRows = this.props.game.guesses.map((guess: Guess, index: number) => {
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
      <View style={style.container}>
        <View style={style.board}>
          {this.guessRows}
        </View>
        <View style={style.right}>
          <View style={style.picker}>
            <ColorPicker
              colorManager={this.props.game.colorManager} />
          </View>
          <TouchableOpacity
            style={style.submit}
            onPress={() => {
              this.props.game.submitGuess(this.props.game.guesses[0]);
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
    backgroundColor: '#8e2525',
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 8,
  },
  board: {
    flexDirection: 'column-reverse',
    flex: 1,
    width: '70%',
    height: '100%',
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: '30%',
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