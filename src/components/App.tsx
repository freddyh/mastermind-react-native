import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Board from './Board';
import MasterMindGame from '../models/mastermindGame';
import GameDifficulty from '../models/gameDifficulty';

export default function App() {
  const game = new MasterMindGame(GameDifficulty.EASY);
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
    width: '90%',
    height: '90%'
  }
});