import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Game from './Game';
import Home from './Home';
import MasterMindGame from '../models/mastermindGame';
import GameDifficulty from '../models/gameDifficulty';
import { Colors } from '../styles';

export default class App extends Component {
  render() {
    console.log(`render App`);
    const game = MasterMindGame.init(GameDifficulty.MEDIUM);
    return (
      <SafeAreaView style={style.container}>
        {/* <Home>
        </Home> */}

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
    backgroundColor: Colors.background
  },
  game: {
    width: '100%',
    height: '100%'
  }
});