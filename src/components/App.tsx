import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Game from './Game';
import MasterMindGame from '../models/mastermindGame';
import GameDifficulty from '../models/gameDifficulty';

export default class App extends Component {
  render() {
    console.log(`render App`);
    const game = MasterMindGame.init(GameDifficulty.HARD);
    return (
      <View style={style.container}>
        <View style={style.game}>
          <Game game={game}></Game>
        </View>
      </View>
    );  
  }  
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  },
  game: {
    width: '90%',
    height: '90%'
  }
});