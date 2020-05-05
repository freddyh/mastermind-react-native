import React from 'react';
import { StyleSheet, View } from 'react-native';
import Board from './Board';
import MasterMindGame from '../models/mastermindGame';
import GameDifficulty from '../models/gameDifficulty';

export default function App() {
  const game = MasterMindGame.init(GameDifficulty.HARD);
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