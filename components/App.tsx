import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Board from './Board';

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.board}>
        <Board></Board>
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
    flexWrap: 'wrap'
  },
  board: {
    width: '80%',
    height: '80%'
  }
});