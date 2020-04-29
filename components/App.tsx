import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Board from './Board';
import MasterMindGame from '../mastermindGame';
import GameDifficulty from '../gameDifficulty';

export default function App() {
  const difficulty = GameDifficulty.EASY;
  const game = new MasterMindGame(difficulty);
  return (
    <View style={style.container}>
      <View style={style.board}>
        <Board game={game}></Board>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  },
  board: {
    width: '80%',
    height: '80%'
  }
});