import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GuessRow from './GuessRow';
import ColorPicker from './ColorPicker';
import Guess from '../models/guess';
import GuessResult from '../models/guessResult';

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
    const guessRows = this.props.game.guesses.map((guess: Guess) => {
      return (
        <GuessRow
          game={this.props.game}
          guess={guess}
          results={[GuessResult.COLOR_POSITION_MATCH, GuessResult.COLOR_POSITION_MATCH, GuessResult.COLOR_MATCH, GuessResult.NO_MATCH]}>
        </GuessRow>
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
              colorManager={this.props.game.colorManager}
              didSelectColor={(color: string) => {
                console.log(`color selected ${color}`);
              }} />
          </View>
          <Button title="Submit" onPress={() => {
            console.log("hello submit button");
          }} />
        </View>
      </View>
    );
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'brown',
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 8,
  },
  board: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'brown',
    width: '70%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 8,
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
    backgroundColor: 'blue',
  },
  row: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  }
});