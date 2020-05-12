import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Game from './Game';
import MasterMindGame from '../models/mastermindGame';
import GameDifficulty from '../models/gameDifficulty';

export default class App extends Component {
  render() {
    console.log(`render App`);
    const game = MasterMindGame.init(GameDifficulty.HARD);
    return (
      <SafeAreaView style={style.container}>
        <View style={style.game}>
          <Game game={game}></Game>
        </View>
      </SafeAreaView>
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
    width: '100%',
    height: '100%'
  }
});